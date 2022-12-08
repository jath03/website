import type { PageLoad } from './$types';
import type ProjectItem from '$lib/projectItem';

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch(`/api/projects`);
    const item = await res.json()
    const projects: Array<ProjectItem> = JSON.parse(item.projects);
    console.log(projects);
    return { projects: projects };
}