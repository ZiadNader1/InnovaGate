# 🚀 InnovaGate Coding Academy Platform

منصة كودينج أكاديمي متكاملة مبنية باستخدام **MEAN Stack** (MongoDB, Express.js, Angular, Node.js).

## 📁 الهيكلية المعمارية للمشروع (Architecture Overview)

```
innovaGate/
├── server/               # Node.js + Express + TypeScript + Mongoose Backend
│   ├── src/
│   │   ├── config/       # Database & env configs
│   │   ├── controllers/  # Request handlers
│   │   ├── services/     # Business logic layer
│   │   ├── models/       # Mongoose schemas & data models
│   │   ├── routes/       # API endpoints definitions
│   │   ├── middlewares/  # Error handlers, Auth, CORS, etc.
│   │   ├── app.ts        # Express app initialization
│   │   └── server.ts     # Application entry point
│   └── package.json
│
├── client/               # Angular Latest Frontend App
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/     # Services, Guards, Interceptors, Models
│   │   │   ├── shared/   # Reusable UI Components, Directives, Pipes
│   │   │   └── features/ # Core modules (Auth, Courses, Dashboard, Home)
│   │   └── styles.scss   # Global SCSS theme & styling system
│   └── package.json
│
├── package.json          # Root package for running client & server concurrently
└── README.md
```

## 🛠️ كيفية التشغيل (Getting Started)

### 1. إعداد ملفات البيئة (Environment Variables)
قم بتفقد ملف `.env` في مجلد `server/`:
```bash
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/innovagate_academy
```

### 2. تشغيل السيرفر والفرونت إند معاً (Run Development Mode)
```bash
npm run dev
```
- **Backend API:** `http://localhost:5000`
- **Frontend App:** `http://localhost:4200`
