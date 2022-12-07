// import type { Project } from '@playwright/test';
import type { RequestHandler } from './$types';
import type ProjectItem from '$lib/projectItem';

export const GET: RequestHandler = ({ request, platform }) => {
    console.log("Request: ", request);
    console.log("Platform: ", platform);

    return new Response(`{
        "message": "hi",
        "platform": ${platform}
    }`);
}