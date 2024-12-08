   // prisma/prisma-client.ts

   import { PrismaClient } from '@prisma/client';

   let prismaGlobal: PrismaClient | undefined;

   // Функция для возвращения синглтона PrismaClient
   const prismaClientSingleton = (): PrismaClient => {
     if (!prismaGlobal) {
       prismaGlobal = new PrismaClient();
     }
     return prismaGlobal;
   };

//    declare global {
//      var prismaGlobal: undefined | PrismaClient;
//    }

   // Экспортируем синглтон
   export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
