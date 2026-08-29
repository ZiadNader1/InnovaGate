import { Request, Response } from 'express';

export const getHealthStatus = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    message: 'InnovaGate Academy API is live & healthy! 🚀',
    system: 'MEAN Stack Architecture',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())}s`,
  });
};
