import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { User } from '../models/user.schema';

const DEFAULT_ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@innovagate.io';
const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export const loginAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        success: false,
        message: 'الرجاء إدخال البريد الإلكتروني وكلمة المرور'
      });
      return;
    }

    const cleanEmail = email.trim().toLowerCase();

    // 1. Check MongoDB Atlas Database
    if (mongoose.connection.readyState === 1) {
      let user = await User.findOne({ email: cleanEmail });

      // If user not found yet in MongoDB, create/seed if credentials match default
      if (!user && cleanEmail === DEFAULT_ADMIN_EMAIL.toLowerCase() && password === DEFAULT_ADMIN_PASSWORD) {
        user = new User({
          fullName: 'مدير الأكاديمية',
          email: cleanEmail,
          role: 'admin'
        });
        user.setPassword(password);
        await user.save();
      }

      if (user && user.validPassword(password)) {
        const token = 'innovagate_token_' + Buffer.from(`${user.email}:${Date.now()}`).toString('base64');
        
        res.status(200).json({
          success: true,
          message: 'تم تسجيل الدخول بنجاح كمسؤول الأكاديمية (MongoDB Atlas)',
          data: {
            token,
            user: {
              email: user.email,
              role: user.role,
              name: user.fullName
            }
          }
        });
        return;
      }
    } else {
      // Fallback for offline mode if DB is disconnected
      if (cleanEmail === DEFAULT_ADMIN_EMAIL.toLowerCase() && password === DEFAULT_ADMIN_PASSWORD) {
        const token = 'innovagate_token_' + Buffer.from(`${cleanEmail}:${Date.now()}`).toString('base64');
        res.status(200).json({
          success: true,
          message: 'تم تسجيل الدخول بنجاح كمسؤول الأكاديمية',
          data: {
            token,
            user: {
              email: cleanEmail,
              role: 'admin',
              name: 'مدير الأكاديمية'
            }
          }
        });
        return;
      }
    }

    res.status(401).json({
      success: false,
      message: 'بيانات الدخول غير صحيحة. يرجى التأكد من البريد وكلمة المرور'
    });
  } catch (error) {
    console.error('Error during admin login:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ أثناء معالجة تسجيل الدخول'
    });
  }
};

export const getAdminProfile = async (req: Request, res: Response): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({
      success: false,
      message: 'غير مصرح للوصول'
    });
    return;
  }

  res.status(200).json({
    success: true,
    data: {
      email: DEFAULT_ADMIN_EMAIL,
      role: 'admin',
      name: 'مدير الأكاديمية'
    }
  });
};
