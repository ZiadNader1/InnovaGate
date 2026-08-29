import { Request, Response } from 'express';
import { SubmissionService } from '../services/submission.service';

export const createSubmission = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fullName, email, phone, diploma, message } = req.body;

    if (!fullName || !email || !phone || !diploma || !message) {
      res.status(400).json({
        success: false,
        message: 'جميع الحقول مطلوبة (fullName, email, phone, diploma, message)'
      });
      return;
    }

    const submission = await SubmissionService.create({
      fullName,
      email,
      phone,
      diploma,
      message
    });

    res.status(201).json({
      success: true,
      message: 'تم استلام طلبك بنجاح!',
      data: submission
    });
  } catch (error) {
    console.error('Error creating submission:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ أثناء حفظ البيانات على السيرفر'
    });
  }
};

export const getAllSubmissions = async (req: Request, res: Response): Promise<void> => {
  try {
    const submissions = await SubmissionService.getAll();
    res.status(200).json({
      success: true,
      count: submissions.length,
      data: submissions
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ أثناء جلب البيانات من السيرفر'
    });
  }
};

export const getSubmissionById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const submission = await SubmissionService.getById(id);

    if (!submission) {
      res.status(404).json({
        success: false,
        message: 'الطلب غير موجود'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: submission
    });
  } catch (error) {
    console.error('Error fetching submission by ID:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ أثناء جلب تفاصيل الطلب'
    });
  }
};

export const updateSubmissionStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['new', 'contacted', 'archived'].includes(status)) {
      res.status(400).json({
        success: false,
        message: 'الحالة غير صالحة. اختر إما: new, contacted, archived'
      });
      return;
    }

    const updated = await SubmissionService.updateStatus(id, status);

    if (!updated) {
      res.status(404).json({
        success: false,
        message: 'الطلب غير موجود'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'تم تحديث حالة الطلب بنجاح',
      data: updated
    });
  } catch (error) {
    console.error('Error updating status:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ أثناء تحديث حالة الطلب'
    });
  }
};

export const deleteSubmission = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const success = await SubmissionService.delete(id);

    if (!success) {
      res.status(404).json({
        success: false,
        message: 'الطلب غير موجود'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'تم حذف الطلب بنجاح'
    });
  } catch (error) {
    console.error('Error deleting submission:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ أثناء حذف الطلب'
    });
  }
};
