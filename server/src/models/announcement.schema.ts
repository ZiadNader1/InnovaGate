import mongoose, { Schema, Document } from 'mongoose';

export interface IAnnouncementDoc extends Document {
  badgeAr: string;
  badgeEn: string;
  titleAr: string;
  titleEn: string;
  subtextAr: string;
  subtextEn: string;
  ctaTextAr: string;
  ctaTextEn: string;
  ctaLink: string;
  endDate: Date;
  icon: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const AnnouncementSchema: Schema = new Schema(
  {
    badgeAr: { type: String, default: '🔥 ورشة عمل مباشرة مجانية' },
    badgeEn: { type: String, default: 'FREE LIVE WORKSHOP' },
    titleAr: { type: String, required: true },
    titleEn: { type: String, required: true },
    subtextAr: { type: String, default: '' },
    subtextEn: { type: String, default: '' },
    ctaTextAr: { type: String, default: 'احجز مقعدك الآن' },
    ctaTextEn: { type: String, default: 'Reserve Seat' },
    ctaLink: { type: String, default: '/contact' },
    endDate: { type: Date, required: true },
    icon: { type: String, default: 'fa-laptop-code' },
    isActive: { type: Boolean, default: true }
  },
  {
    timestamps: true
  }
);

AnnouncementSchema.virtual('id').get(function(this: IAnnouncementDoc) {
  return this._id.toHexString();
});

AnnouncementSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret: Record<string, any>) => {
    delete ret['_id'];
    delete ret['__v'];
  }
});

export const Announcement = mongoose.model<IAnnouncementDoc>('Announcement', AnnouncementSchema);
