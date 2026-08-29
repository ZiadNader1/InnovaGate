import mongoose from 'mongoose';
import { Announcement, IAnnouncementDoc } from '../models/announcement.schema';

export class AnnouncementService {
  private static isMongoConnected(): boolean {
    return mongoose.connection.readyState === 1;
  }

  public static async seedInitial(): Promise<void> {
    if (!this.isMongoConnected()) return;
    try {
      const count = await Announcement.countDocuments();
      if (count === 0) {
        const defaultEndDate = new Date();
        defaultEndDate.setDate(defaultEndDate.getDate() + 7);

        await Announcement.create({
          badgeAr: '🔥 ورشة عمل مباشرة مجانية',
          badgeEn: 'FREE LIVE WORKSHOP',
          titleAr: 'ماستركلاس معمارية Angular 18 الحديثة',
          titleEn: 'Live Angular 18 Architecture Masterclass',
          subtextAr: 'تعلم بناء تطبيقات واعدات احترافية مع كبار مهندسي البرمجيات.',
          subtextEn: 'Build production-ready apps with Senior Engineers.',
          ctaTextAr: 'احجز مقعدك الآن',
          ctaTextEn: 'Reserve Seat',
          ctaLink: '/contact',
          endDate: defaultEndDate,
          icon: 'fa-laptop-code',
          isActive: true
        });
        console.log('[MongoDB Seed] Default Announcement created in MongoDB Atlas');
      }
    } catch (err) {
      console.error('Error seeding announcements:', err);
    }
  }

  public static async getAll(onlyActive = false): Promise<any[]> {
    if (this.isMongoConnected()) {
      const query = onlyActive ? { isActive: true } : {};
      const docs = await Announcement.find(query).sort({ createdAt: -1 });
      return docs.map(doc => doc.toJSON());
    }
    return [];
  }

  public static async create(data: Partial<IAnnouncementDoc>): Promise<any> {
    if (this.isMongoConnected()) {
      const doc = await Announcement.create(data);
      return doc.toJSON();
    }
    throw new Error('MongoDB is not connected');
  }

  public static async update(id: string, data: Partial<IAnnouncementDoc>): Promise<any> {
    if (this.isMongoConnected()) {
      const doc = await Announcement.findByIdAndUpdate(id, data, { new: true });
      return doc ? doc.toJSON() : null;
    }
    throw new Error('MongoDB is not connected');
  }

  public static async delete(id: string): Promise<boolean> {
    if (this.isMongoConnected()) {
      const res = await Announcement.findByIdAndDelete(id);
      return !!res;
    }
    return false;
  }
}
