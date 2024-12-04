import { NextResponse } from 'next/server';

export const createAuthCookie = async () => {
  const response = NextResponse.next(); // Создаем новый ответ
  response.cookies.set("userAuth", "myToken", { secure: true }); // Установить куки
  return response;
};

export const deleteAuthCookie = async () => {
  const response = NextResponse.next();
  response.cookies.delete("userAuth"); // Удалить куки
  return response;
};
