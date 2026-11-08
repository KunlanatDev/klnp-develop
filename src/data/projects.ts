import type { Project } from '@/features/projects/types';

// ✏️ Replace with your real projects. published:false hides one.
export const projects: Project[] = [
  {
    id: 'p1', slug: 'sample-flutter-app', title: 'Sample Flutter App', category: 'mobile',
    summary: 'Cross-platform ordering app with a live Flutter Web demo.',
    problem: 'A small shop needed one app for iOS, Android and web on a tight budget.',
    solution: 'Built a single Flutter codebase with Riverpod state management and Firebase.',
    result: 'Shipped in 6 weeks and took real orders on all three platforms. (Replace with your real numbers.)',
    stack: ['Flutter', 'Riverpod', 'Firebase'],
    flutterDemo: { path: '/demos/sample/', height: 640 },
    links: { github: 'https://github.com/yourname/sample' },
    featured: true, order: 1, published: true,
  },
  {
    id: 'p2', slug: 'sales-dashboard', title: 'Sales Dashboard', category: 'web',
    summary: 'React + TypeScript dashboard for weekly sales reporting.',
    problem: 'The sales team built reports by hand in spreadsheets, and numbers drifted apart.',
    solution: 'Created a dashboard that reads from an API, with filters by period and region.',
    result: 'Weekly reporting dropped from 3 hours to 10 minutes. (Replace with your real numbers.)',
    stack: ['React', 'TypeScript', 'Vite'],
    links: { github: 'https://github.com/yourname/dashboard' },
    featured: true, order: 2, published: true,
  },
  {
    id: 'p3', slug: 'orders-api', title: 'Orders API', category: 'backend',
    summary: 'REST API in Go with Spring Boot reference implementation.',
    problem: 'Mobile and web clients needed one reliable source of order data.',
    solution: 'Designed a versioned REST API with auth, pagination and OpenAPI docs.',
    result: 'One API now serves both clients with consistent error handling. (Replace with your real numbers.)',
    stack: ['Go', 'Spring Boot', 'PostgreSQL'],
    links: { github: 'https://github.com/yourname/orders-api' },
    featured: true, order: 3, published: true,
  },
];
