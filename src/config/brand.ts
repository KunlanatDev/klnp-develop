import { env } from './env';

// ✏️ Single source of truth for name, links and availability.
export const brand = {
  name: 'KLNP Develop',
  owner: 'Your Name',
  available: true,
  availableText: 'Available for freelance & full-time',
  email: env.contactEmail,
  line: 'https://line.me/ti/p/~yourid',
  github: 'https://github.com/yourname',
  linkedin: 'https://www.linkedin.com/in/yourname',
  resumeUrl: '/resume/resume.pdf',
};
