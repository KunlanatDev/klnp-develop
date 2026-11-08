import type { IconType } from 'react-icons';
import { SiFlutter, SiGo, SiReact, SiSpringboot, SiTypescript } from 'react-icons/si';

export interface Tech { name: string; icon: IconType; color: string; group: 'frontend' | 'backend' }

export const techStack: Tech[] = [
  { name: 'Flutter', icon: SiFlutter, color: '#54C5F8', group: 'frontend' },
  { name: 'React', icon: SiReact, color: '#61DAFB', group: 'frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', group: 'frontend' },
  { name: 'Go', icon: SiGo, color: '#00ADD8', group: 'backend' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', group: 'backend' },
];
