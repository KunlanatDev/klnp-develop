export const env = {
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY as string | undefined,
  contactEmail: (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) || 'you@example.com',
};
