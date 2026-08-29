import mongoose, { Schema, Document } from 'mongoose';
import crypto from 'crypto';

export interface IUserDoc extends Document {
  fullName: string;
  email: string;
  passwordHash: string;
  salt: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
  validPassword(password: string): boolean;
  setPassword(password: string): void;
}

const UserSchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    salt: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'admin'
    }
  },
  {
    timestamps: true
  }
);

// Method to set hashed password
UserSchema.methods.setPassword = function(password: string): void {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

// Method to validate password
UserSchema.methods.validPassword = function(password: string): boolean {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.passwordHash === hash;
};

UserSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.passwordHash;
    delete ret.salt;
    delete ret.__v;
  }
});

export const User = mongoose.model<IUserDoc>('User', UserSchema);
