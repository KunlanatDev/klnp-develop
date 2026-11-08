export type ProjectCategory = 'mobile' | 'web' | 'backend';

export interface Project {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  links?: { github?: string; live?: string };
  flutterDemo?: { path: string; height?: number };
  featured?: boolean;
  order: number;
  published: boolean;
}
