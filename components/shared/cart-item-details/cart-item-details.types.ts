export interface CartItemProps {
  imageUrl: string;
  name: string;
  details?: string; // свойство details
  price: number;
  quantity: number;
  className?: string;
}
