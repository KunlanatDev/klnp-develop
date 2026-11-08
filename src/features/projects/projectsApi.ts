import { baseApi } from '@/shared/api/baseApi';
import { projects } from '@/data/projects';
import type { Project } from './types';

const visible = () => projects.filter((p) => p.published).sort((a, b) => a.order - b.order);

// v1: static data. v2: replace queryFn bodies with Firestore reads — pages stay unchanged.
export const projectsApi = baseApi.injectEndpoints({
  endpoints: (b) => ({
    getProjects: b.query<Project[], void>({ queryFn: async () => ({ data: visible() }) }),
    getProject: b.query<Project, string>({
      queryFn: async (slug) => {
        const p = visible().find((x) => x.slug === slug);
        return p ? { data: p } : { error: { code: 'NOT_FOUND' as const } };
      },
    }),
  }),
});
export const { useGetProjectsQuery, useGetProjectQuery } = projectsApi;
