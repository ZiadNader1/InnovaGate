import dotenv from 'dotenv';
dotenv.config();

import app from './app';
// Database connection initializer with Mongo Atlas
import { connectDB } from './config/db';

const PORT = process.env.PORT || 5000;

// Initialize Server & Database Connection
const startServer = async (): Promise<void> => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`🎓 InnovaGate Academy Backend Engine Ready!`);
    console.log(`📡 URL: http://localhost:${PORT}`);
    console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`====================================================`);
  });
};

startServer();
