import type { PageLoad } from './$types';
import type ProjectItem from '$lib/projectItem';

export const load: PageLoad = async ({ fetch, params }) => {
    // let projects: Array<ProjectItem> = platform.env.PROJECTS
    const res = await fetch(`/api/projects`);
    const item = await res.json()
    console.log(item);
    return { item };
}