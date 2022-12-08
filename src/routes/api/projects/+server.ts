// import type { Project } from '@playwright/test';
import type { RequestHandler } from './$types';
import type ProjectItem from '$lib/projectItem';

export const GET: RequestHandler = async ({ platform }) => {
    let projects: Array<ProjectItem> = await platform.env.projects_portfolio.get("projects");
    if (!projects) {
        await platform.env.projects_portfolio.put("projects", `[]`);
        projects = await platform.env.projects_portfolio.get("projects");
    }

    return new Response(`{
        "projects": ${JSON.stringify(projects)}
    }`);
}