import { Prisma } from '@workspace/db';
import { DataAccessError } from './errors';

export function mapPrismaError(err: unknown): DataAccessError {
  if (err instanceof Prisma.PrismaClientInitializationError) {
    return new DataAccessError('DB_UNAVAILABLE', 'Database unavailable', err);
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return new DataAccessError(
      'DB_CONSTRAINT',
      'Database constraint error',
      err,
    );
  }

  if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    return new DataAccessError('DB_UNKNOWN', 'Unknown database error', err);
  }

  if (err instanceof Prisma.PrismaClientRustPanicError) {
    return new DataAccessError('DB_UNKNOWN', 'Database engine error', err);
  }

  if (err instanceof Prisma.PrismaClientValidationError) {
    return new DataAccessError('DB_CONSTRAINT', 'Invalid database input', err);
  }

  return new DataAccessError('DB_UNKNOWN', 'Unknown database error', err);
}
