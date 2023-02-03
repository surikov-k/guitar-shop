export interface Comment {
  id?: number;
  userId: number;
  advantages: string;
  disadvantages: string;
  text: string;
  rating: number;
  createdAt: Date;
}
