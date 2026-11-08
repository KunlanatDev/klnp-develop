import { baseApi } from '@/shared/api/baseApi';
import { env } from '@/config/env';
import type { ContactInput } from './schema';

const fail = { error: { code: 'CONTACT_FAILED' as const } };

// v1: Web3Forms. v2: swap for Firestore "leads" collection.
export const contactApi = baseApi.injectEndpoints({
  endpoints: (b) => ({
    sendContact: b.mutation<{ ok: true }, ContactInput>({
      queryFn: async (p) => {
        if (p.website) return { data: { ok: true as const } }; // bot: pretend success
        if (!env.web3formsKey) return fail;
        try {
          const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
              access_key: env.web3formsKey,
              subject: `[KLNP:${p.type}] ${p.name}`,
              name: p.name, email: p.email, message: p.message,
            }),
          });
          const json = await res.json();
          return json.success ? { data: { ok: true as const } } : fail;
        } catch {
          return { error: { code: 'NETWORK' as const } };
        }
      },
    }),
  }),
});
export const { useSendContactMutation } = contactApi;
