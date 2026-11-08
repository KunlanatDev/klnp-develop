import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ErrorCode } from '@/shared/errors/AppError';

// v1 reads static data / Web3Forms. v2: swap queryFn bodies for Firestore calls.
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fakeBaseQuery<{ code: ErrorCode }>(),
  endpoints: () => ({}),
});
