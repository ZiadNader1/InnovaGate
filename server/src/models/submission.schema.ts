import mongoose, { Schema, Document } from 'mongoose';

export interface ISubmissionDoc extends Document {
  fullName: string;
  email: string;
  phone: string;
  diploma: string;
  message: string;
  status: 'new' | 'contacted' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}

const SubmissionSchema: Schema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true
    },
    diploma: {
      type: String,
      required: [true, 'Diploma selection is required'],
      trim: true
    },
    message: {
      type: String,
      required: [true, 'Message content is required'],
      trim: true
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'archived'],
      default: 'new'
    }
  },
  {
    timestamps: true
  }
);

// Virtual id field for client compatibility
SubmissionSchema.virtual('id').get(function(this: ISubmissionDoc) {
  return this._id.toHexString();
});

SubmissionSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret: Record<string, any>) => {
    delete ret['_id'];
    delete ret['__v'];
  }
});

export const Submission = mongoose.model<ISubmissionDoc>('Submission', SubmissionSchema);
