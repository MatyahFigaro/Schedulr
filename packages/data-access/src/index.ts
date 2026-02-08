import { prisma, User } from '@workspace/db';
import { mapPrismaError } from './prisma-errors';

export async function getExistingEmailAdress(
  email: string,
): Promise<User | null> {
  try {
    const foundEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return foundEmail ?? null;
  } catch (err) {
    throw mapPrismaError(err);
  }
}
