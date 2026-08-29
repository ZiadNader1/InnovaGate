export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: 'مبتدئ' | 'متوسط' | 'متقدم';
  duration: string;
  studentsCount: number;
  rating: number;
  icon: string;
  color: string;
}
