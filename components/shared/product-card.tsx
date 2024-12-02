import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className="bg-black rounded-lg w-[390px]">
    <div className={cn(className)}>
      <Link href={`/product/${id}`} className="">
        <div className="unity-black flex justify-center p-6 rounded-lg h-[260px]">
          <img
            className="w-[360px] h-[215px] rounded-xl object-cover"
            src={imageUrl}
            alt="Logo"
          />
        </div>

        <Title text={name} size="sm" className="margin-l mb-1 mt-3 font-bold" />

        <div className="margin-l flex justify-between items-center mt-4 w-[339px] h-[100px]">
          <span className="text-[20px] w-[100px]">
            от <b>{price} ₽</b>
          </span>

          <Button
            variant="secondary"
            className="bg-green-600 text-white text-base font-bold"
          >
            <Plus className="w-5 h-5 mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
    </div>
  );
};
