import type { RequestHandler } from './$types';
import type ProjectItem from '$lib/projectItem';

const KEY = "projects";

export const get: RequestHandler = async ({ platform }) => {
    let projects: Array<ProjectItem> | null = await platform.env.projects_portfolio.get(KEY);
    if (projects == null) {
        await platform.env.projects_portfolio.put(KEY, `[]`);
        projects = await platform.env.projects_portfolio.get(KEY);
    }

    return new Response(`{ "projects": ${JSON.stringify(projects)} }`, { headers: { 'access-control-allow-origin': '*' } });
}