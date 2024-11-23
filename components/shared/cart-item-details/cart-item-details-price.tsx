import { cn } from "@/lib/utils";

interface Props {
  value: number;
  className?: string;
}

export const CartItemDetailsPrice: React.FC<Props> = ({ value, className }) => {
  return (
    <h2 className={cn("font-bold text-gray-700", className)}>{value} ₽</h2>
  );
};
