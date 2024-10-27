// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";
var prisma = new PrismaClient({
  //Cada query que for realizada no banco de dados sera feito um log
  log: ["query"]
});

export {
  prisma
};
