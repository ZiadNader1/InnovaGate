import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { Submission } from '../models/submission.schema';
import { ISubmission, CreateSubmissionDto } from '../models/submission.model';

const dataFilePath = path.join(__dirname, '../data/submissions.json');

const ensureStorageExists = (): void => {
  const dir = path.dirname(dataFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([], null, 2), 'utf-8');
  }
};

export class SubmissionService {
  private static isMongoConnected(): boolean {
    return mongoose.connection.readyState === 1;
  }

  public static async getAll(): Promise<ISubmission[]> {
    if (this.isMongoConnected()) {
      const docs = await Submission.find().sort({ createdAt: -1 });
      return docs.map(doc => doc.toJSON() as unknown as ISubmission);
    }

    ensureStorageExists();
    try {
      const content = fs.readFileSync(dataFilePath, 'utf-8');
      const list: ISubmission[] = JSON.parse(content || '[]');
      return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } catch {
      return [];
    }
  }

  public static async getById(id: string): Promise<ISubmission | null> {
    if (this.isMongoConnected()) {
      if (!mongoose.Types.ObjectId.isValid(id)) return null;
      const doc = await Submission.findById(id);
      return doc ? (doc.toJSON() as unknown as ISubmission) : null;
    }

    ensureStorageExists();
    const content = fs.readFileSync(dataFilePath, 'utf-8');
    const list: ISubmission[] = JSON.parse(content || '[]');
    return list.find(sub => sub.id === id) || null;
  }

  public static async create(dto: CreateSubmissionDto): Promise<ISubmission> {
    if (this.isMongoConnected()) {
      const doc = await Submission.create({
        fullName: dto.fullName.trim(),
        email: dto.email.trim().toLowerCase(),
        phone: dto.phone.trim(),
        diploma: dto.diploma.trim(),
        message: dto.message.trim(),
        status: 'new'
      });
      return doc.toJSON() as unknown as ISubmission;
    }

    ensureStorageExists();
    const content = fs.readFileSync(dataFilePath, 'utf-8');
    const list: ISubmission[] = JSON.parse(content || '[]');
    const newSubmission: ISubmission = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2, 7),
      fullName: dto.fullName.trim(),
      email: dto.email.trim().toLowerCase(),
      phone: dto.phone.trim(),
      diploma: dto.diploma.trim(),
      message: dto.message.trim(),
      status: 'new',
      createdAt: new Date().toISOString()
    };
    list.push(newSubmission);
    fs.writeFileSync(dataFilePath, JSON.stringify(list, null, 2), 'utf-8');
    return newSubmission;
  }

  public static async updateStatus(id: string, status: 'new' | 'contacted' | 'archived'): Promise<ISubmission | null> {
    if (this.isMongoConnected()) {
      if (!mongoose.Types.ObjectId.isValid(id)) return null;
      const doc = await Submission.findByIdAndUpdate(id, { status }, { new: true });
      return doc ? (doc.toJSON() as unknown as ISubmission) : null;
    }

    ensureStorageExists();
    const content = fs.readFileSync(dataFilePath, 'utf-8');
    const list: ISubmission[] = JSON.parse(content || '[]');
    const index = list.findIndex(sub => sub.id === id);
    if (index === -1) return null;
    list[index].status = status;
    fs.writeFileSync(dataFilePath, JSON.stringify(list, null, 2), 'utf-8');
    return list[index];
  }

  public static async delete(id: string): Promise<boolean> {
    if (this.isMongoConnected()) {
      if (!mongoose.Types.ObjectId.isValid(id)) return false;
      const res = await Submission.findByIdAndDelete(id);
      return !!res;
    }

    ensureStorageExists();
    const content = fs.readFileSync(dataFilePath, 'utf-8');
    const list: ISubmission[] = JSON.parse(content || '[]');
    const filtered = list.filter(sub => sub.id !== id);
    if (filtered.length === list.length) return false;
    fs.writeFileSync(dataFilePath, JSON.stringify(filtered, null, 2), 'utf-8');
    return true;
  }
}
