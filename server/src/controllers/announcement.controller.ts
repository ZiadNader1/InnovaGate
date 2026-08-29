import { Request, Response } from 'express';
import { AnnouncementService } from '../services/announcement.service';

export const getAnnouncements = async (req: Request, res: Response): Promise<void> => {
  try {
    const onlyActive = req.query.all !== 'true';
    const list = await AnnouncementService.getAll(onlyActive);
    res.status(200).json({
      success: true,
      count: list.length,
      data: list
    });
  } catch (error) {
    console.error('Error fetching announcements:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ أثناء جلب الإعلانات والعروض'
    });
  }
};

export const createAnnouncement = async (req: Request, res: Response): Promise<void> => {
  try {
    const { titleAr, titleEn, endDate } = req.body;
    if (!titleAr || !titleEn || !endDate) {
      res.status(400).json({
        success: false,
        message: 'العناوين بالعربية والإنجليزية وتاريخ الانتهاء مطلوبة'
      });
      return;
    }

    const created = await AnnouncementService.create(req.body);
    res.status(201).json({
      success: true,
      message: 'تم إضافة الإعلان/العرض بنجاح في داتابيز MongoDB',
      data: created
    });
  } catch (error) {
    console.error('Error creating announcement:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ أثناء إضافة الإعلان'
    });
  }
};

export const updateAnnouncement = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updated = await AnnouncementService.update(id, req.body);
    if (!updated) {
      res.status(404).json({
        success: false,
        message: 'الإعلان غير موجود'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'تم تحديث الإعلان بنجاح',
      data: updated
    });
  } catch (error) {
    console.error('Error updating announcement:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ أثناء تحديث الإعلان'
    });
  }
};

export const deleteAnnouncement = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const success = await AnnouncementService.delete(id);
    if (!success) {
      res.status(404).json({
        success: false,
        message: 'الإعلان غير موجود'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'تم حذف الإعلان بنجاح'
    });
  } catch (error) {
    console.error('Error deleting announcement:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ أثناء حذف الإعلان'
    });
  }
};
