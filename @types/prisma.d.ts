import type { Category, Product, ProductItem } from '@prisma/client';

type CategoryProducts = Category & {
  products: Array<Product & { items: ProductItem[] }>;
};

export type ProductWithRelations = Product & {
  id: number;
  imageUrl: string;
  items: ProductItem[];
  ingredients: Ingredient[]
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
  // Добавьте здесь любые дополнительные поля или связи
};

// id       Int    @id @default(autoincrement())
//   name     String
//   imageUrl String

//   items       ProductItem[]
//   ingredients Ingredient[]

//   categoryId Int
//   category   Category @relation(fields: [categoryId], references: [id])

//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt