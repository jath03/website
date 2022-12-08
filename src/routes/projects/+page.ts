import type { PageLoad } from './$types';
import type ProjectItem from '$lib/projectItem';

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch(`/api/projects`);
    if (res.ok) {
        const item = await res.json();
        console.log(item);
        const projects: Array<ProjectItem> = JSON.parse(item.projects);
        console.log(projects);
        return { projects: projects };
    } else {
        console.error(res.statusText);
        console.error(await res.text());
        return { projects: [] };
    }
}