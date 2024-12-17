import { prisma } from '@/prisma/prisma-client';

export const findOrCreateCart = async (tokenId: string) => {
  let userCart = await prisma.cart.findFirst({
    where: {
      tokenId,
    },
  });

  if (!userCart) {
    userCart = await prisma.cart.create({
      data: {
        tokenId,
      },
    });
  }

  return userCart;
};
