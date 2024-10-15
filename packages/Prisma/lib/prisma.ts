export * from "@prisma/client";

export { type PrismaClient } from "@prisma/client/extension";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;