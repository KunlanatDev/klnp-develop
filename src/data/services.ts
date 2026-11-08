import { Monitor, Server, Smartphone, type LucideIcon } from 'lucide-react';

export const services: { title: string; desc: string; time: string; icon: LucideIcon }[] = [
  { title: 'Mobile apps', desc: 'iOS and Android apps from one Flutter codebase, connected to your API or Firebase.', time: '4–10 weeks', icon: Smartphone },
  { title: 'Web apps & websites', desc: 'Fast, responsive React + TypeScript sites and dashboards, ready for SEO.', time: '1–6 weeks', icon: Monitor },
  { title: 'Backend & APIs', desc: 'Clean REST APIs and services in Go or Spring Boot, documented and tested.', time: 'Scoped per project', icon: Server },
];
