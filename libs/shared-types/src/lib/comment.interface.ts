export interface Comment {
  id?: number;
  userId: number;
  shopItemId: number;
  advantages: string;
  disadvantages: string;
  text: string;
  rating: number;
  createdAt?: Date;
}
