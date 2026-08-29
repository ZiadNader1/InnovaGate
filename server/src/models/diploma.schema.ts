import mongoose, { Schema, Document } from 'mongoose';

export interface IDiplomaDoc extends Document {
  diplomaId: string;
  category: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  durationAr: string;
  durationEn: string;
  hoursCount: number;
  projectsCount: number;
  priceEgp: number;
  originalPriceEgp: number;
  videoUrl: string;
  badgeAr: string;
  badgeEn: string;
  tagsAr: string[];
  tagsEn: string[];
  modulesAr: string[];
  modulesEn: string[];
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const DiplomaSchema: Schema = new Schema(
  {
    diplomaId: { type: String, required: true, unique: true, trim: true },
    category: { type: String, required: true, trim: true },
    titleAr: { type: String, required: true },
    titleEn: { type: String, required: true },
    descriptionAr: { type: String, required: true },
    descriptionEn: { type: String, required: true },
    durationAr: { type: String, default: '16 أسبوعاً' },
    durationEn: { type: String, default: '16 Weeks' },
    hoursCount: { type: Number, default: 200 },
    projectsCount: { type: Number, default: 5 },
    priceEgp: { type: Number, default: 7000 },
    originalPriceEgp: { type: Number, default: 10000 },
    videoUrl: { type: String, default: '/AI.mp4' },
    badgeAr: { type: String, default: 'دبلومة معتمدة' },
    badgeEn: { type: String, default: 'Certified Diploma' },
    tagsAr: [{ type: String }],
    tagsEn: [{ type: String }],
    modulesAr: [{ type: String }],
    modulesEn: [{ type: String }],
    isFeatured: { type: Boolean, default: true }
  },
  {
    timestamps: true
  }
);

DiplomaSchema.virtual('id').get(function(this: IDiplomaDoc) {
  return this.diplomaId;
});

DiplomaSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  }
});

export const Diploma = mongoose.model<IDiplomaDoc>('Diploma', DiplomaSchema);
