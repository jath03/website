// import type { Project } from '@playwright/test';
import type { RequestHandler } from './$types';
import type ProjectItem from '$lib/projectItem';

export const GET: RequestHandler = async ({ platform }) => {
    // await platform.env.projects_portfolio.delete("projects");
    let projects: Array<ProjectItem> = await platform.env.projects_portfolio.get("projects");
    if (!projects || projects.length < 1) {
        await platform.env.projects_portfolio.put("projects", `[{
            "name": "Uno",
            "short_description": "A terminal-based Uno game",
            "long_description": "This was my final project from my Introductory C programming course.  We were tasked with creating the game Uno in C.",
            "image": "uno-example.png"
        }]`);
        projects = await platform.env.projects_portfolio.get("projects");
    }

    return new Response(`{
        "message": "hi",
        "projects": ${JSON.stringify(projects)}
    }`);
}