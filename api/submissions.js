const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://innovagatedamanhour_db_user:VACrOnBFLdsu7r9O@innovagatewebdata.tjad8of.mongodb.net/innovagate_academy?retryWrites=true&w=majority&appName=InnovaGateWebData';

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb && mongoose.connection.readyState === 1) {
    return cachedDb;
  }
  cachedDb = await mongoose.connect(MONGO_URI, {
    bufferCommands: false,
    serverSelectionTimeoutMS: 5000
  });
  return cachedDb;
}

const SubmissionSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  diploma: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, default: 'new' }
}, { timestamps: true });

const Submission = mongoose.models.Submission || mongoose.model('Submission', SubmissionSchema);

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await connectToDatabase();

    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
      const { fullName, email, phone, diploma, message } = body;

      if (!fullName || !email || !phone || !message) {
        return res.status(400).json({ success: false, message: 'Required fields missing' });
      }

      const newSubmission = await Submission.create({
        fullName: String(fullName).trim(),
        email: String(email).trim().toLowerCase(),
        phone: String(phone).trim(),
        diploma: String(diploma || 'General Inquiry').trim(),
        message: String(message).trim(),
        status: 'new'
      });

      return res.status(201).json({
        success: true,
        message: 'Submission created successfully',
        data: newSubmission
      });
    }

    if (req.method === 'GET') {
      const submissions = await Submission.find().sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        count: submissions.length,
        data: submissions
      });
    }

    return res.status(405).json({ success: false, message: 'Method not allowed' });
  } catch (error) {
    console.error('Serverless submission error:', error);
    return res.status(500).json({ success: false, message: error.message || 'Internal server error' });
  }
};
