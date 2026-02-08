export type DataAccessErrorCode =
  | 'DB_UNAVAILABLE'
  | 'DB_TIMEOUT'
  | 'DB_CONSTRAINT'
  | 'DB_UNKNOWN';

export class DataAccessError extends Error {
  constructor(
    public code: DataAccessErrorCode,
    message: string,
    public cause?: unknown,
  ) {
    super(message);
    this.name = 'DataAccessError';
  }
}
