import { PrismaClient } from '@prisma/client';

export const prismadb = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV === 'production') {
  global.prismadb = prismadb;
}
