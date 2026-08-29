export interface ISubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  diploma: string;
  message: string;
  status: 'new' | 'contacted' | 'archived';
  createdAt: string;
}

export interface CreateSubmissionDto {
  fullName: string;
  email: string;
  phone: string;
  diploma: string;
  message: string;
}
