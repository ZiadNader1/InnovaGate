import mongoose from 'mongoose';
import { User } from '../models/user.schema';
import { AnnouncementService } from '../services/announcement.service';
import { DiplomaService } from '../services/diploma.service';

const seedDefaultAdmin = async (): Promise<void> => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'innovagatedamanhour@gmail.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    
    const existingAdmin = await User.findOne({ email: adminEmail.toLowerCase() });
    if (!existingAdmin) {
      const newAdmin = new User({
        fullName: 'مدير الأكاديمية',
        email: adminEmail.toLowerCase(),
        role: 'admin'
      });
      newAdmin.setPassword(adminPassword);
      await newAdmin.save();
      console.log(`[MongoDB Seed] Default Admin created in MongoDB Atlas: ${adminEmail}`);
    }
  } catch (err) {
    console.error('[MongoDB Seed Error]:', err);
  }
};

export const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/innovagate_academy';
    const conn = await mongoose.connect(mongoURI);
    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
    
    // Seed default admin, announcements & diplomas in MongoDB Atlas
    await seedDefaultAdmin();
    await AnnouncementService.seedInitial();
    await DiplomaService.seedInitial();
  } catch (error) {
    console.error(`[MongoDB Connection Error]:`, error);
  }
};
