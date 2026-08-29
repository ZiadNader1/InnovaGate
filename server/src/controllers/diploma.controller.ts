import { Request, Response } from 'express';
import { DiplomaService } from '../services/diploma.service';

export const getDiplomas = async (req: Request, res: Response): Promise<void> => {
  try {
    const list = await DiplomaService.getAll();
    res.status(200).json({
      success: true,
      count: list.length,
      data: list
    });
  } catch (error) {
    console.error('Error fetching diplomas:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ أثناء جلب الدبلومات من قواعد البيانات'
    });
  }
};

export const getDiplomaById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const diploma = await DiplomaService.getById(id);
    if (!diploma) {
      res.status(404).json({
        success: false,
        message: 'الدبلومة غير موجودة'
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: diploma
    });
  } catch (error) {
    console.error('Error fetching diploma by ID:', error);
    res.status(500).json({
      success: false,
      message: 'حدث خطأ أثناء جلب تفاصيل الدبلومة'
    });
  }
};
