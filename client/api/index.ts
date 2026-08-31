import dotenv from 'dotenv';
dotenv.config();

import app from '../../server/src/app';
import { connectDB } from '../../server/src/config/db';

export default async function handler(req: any, res: any) {
  await connectDB();
  return app(req, res);
}
