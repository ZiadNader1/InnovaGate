import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
import { errorHandler } from './middlewares/error.middleware';

const app: Application = express();

// Security & Utility Middlewares
app.use(helmet());
app.use(cors({
  origin: '*',
  credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Welcome Endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'online',
    message: '🎓 InnovaGate Academy Backend Engine Ready!',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      announcements: '/api/announcements',
      submissions: '/api/submissions',
      diplomas: '/api/diplomas'
    }
  });
});

// API Base Routes
app.use('/api', routes);

// Global Error Handler
app.use(errorHandler);

export default app;
