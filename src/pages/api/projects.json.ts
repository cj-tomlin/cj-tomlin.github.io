import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
    const searchParams = new URLSearchParams(url.search);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "8");

    // Get all projects
    const allProjects = await getCollection("projects");

    // Sort projects by date
    const projects = allProjects.sort((a, b) => {
        const dateA = a.data.date?.valueOf() ?? 0;
        const dateB = b.data.date?.valueOf() ?? 0;
        return dateB - dateA;
    });

    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProjects = projects.slice(startIndex, endIndex);

    // Transform projects for JSON response
    const formattedProjects = paginatedProjects.map((project) => ({
        slug: project.slug,
        title: project.data.title,
        description: project.data.description,
        tags: project.data.tags || [],
        link: project.data.link || null,
    }));

    return new Response(
        JSON.stringify({
            projects: formattedProjects,
            hasMore: endIndex < projects.length,
            totalProjects: projects.length,
            currentPage: page,
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};
