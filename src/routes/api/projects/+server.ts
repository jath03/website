// import type { Project } from '@playwright/test';
import type { RequestHandler } from './$types';
import type ProjectItem from '$lib/projectItem';

const KEY = "projects";

export const GET: RequestHandler = async ({ platform }) => {
    let projects = await platform.env.projects_portfolio.get(KEY);
    if (projects == null) {
        await platform.env.projects_portfolio.put(KEY, `[]`);
        projects = await platform.env.projects_portfolio.get(KEY);
    }

    return new Response(`{
        "projects": ${JSON.stringify(projects)}
    }`);
}