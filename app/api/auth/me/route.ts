import { getUserSession } from '@/lib/get-user-session';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import NextAuth from "next-auth";



export const dynamic = 'force-dynamic'; // добавлено для деплоя
export async function GET() {
  try {
    const user = await getUserSession();

    if (!user) {
      return NextResponse.json({ message: '[USER_GET] Unauthorized' }, { status: 401 });
    }

    const data = await prisma.user.findUnique({
      where: {
        id: Number(user.id),
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: '[USER_GET] Server error' }, { status: 500 });
  }
}
