import { PrismaClient } from '@prisma/client';


export const prisma = new PrismaClient({
  //Cada query que for realizada no banco de dados sera feito um log
  log: ['query'],
})