export type ErrorCode = 'NETWORK' | 'NOT_FOUND' | 'CONTACT_FAILED' | 'UNKNOWN';

export const errorMessages: Record<ErrorCode, string> = {
  NETWORK: 'Network problem. Check your connection and try again.',
  NOT_FOUND: 'We could not find what you were looking for.',
  CONTACT_FAILED: 'Could not send your message. Please email me directly instead.',
  UNKNOWN: 'Something went wrong. Please try again.',
};

export class AppError extends Error {
  readonly userMessage: string;
  constructor(readonly code: ErrorCode, readonly detail?: unknown) {
    super(code);
    this.userMessage = errorMessages[code];
  }
}

// Turns anything (fetch error, RTK payload, thrown string) into an AppError.
export function normalizeError(e: unknown): AppError {
  if (e instanceof AppError) return e;
  if (e instanceof TypeError && /fetch|network/i.test(e.message)) return new AppError('NETWORK', e);
  const code = (e as { code?: unknown } | null)?.code;
  if (typeof code === 'string' && code in errorMessages) return new AppError(code as ErrorCode, e);
  return new AppError('UNKNOWN', e);
}
