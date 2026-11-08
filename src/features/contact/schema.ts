import { z } from 'zod';

export const contactSchema = z.object({
  type: z.enum(['job', 'freelance', 'other']),
  name: z.string().trim().min(2, 'Please enter your name'),
  email: z.string().trim().email('Enter a valid email address'),
  message: z.string().trim().min(10, 'Tell me a little more (at least 10 characters)'),
  website: z.string().optional(), // honeypot: real people leave it empty
});
export type ContactInput = z.infer<typeof contactSchema>;
