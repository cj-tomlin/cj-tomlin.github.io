import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
    const searchParams = new URLSearchParams(url.search);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "6");

    // Get all blog posts
    const allPosts = await getCollection("blog");

    // Filter and sort blog posts
    const posts = allPosts
        .filter((post) => !post.data.draft)
        .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = posts.slice(startIndex, endIndex);

    // Format date function
    const formatDate = (date: Date): string => {
        return new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        }).format(date);
    };

    // Transform posts for JSON response
    const formattedPosts = paginatedPosts.map((post) => ({
        slug: post.slug,
        title: post.data.title,
        excerpt: post.data.excerpt,
        publishDate: formatDate(post.data.publishDate),
    }));

    return new Response(
        JSON.stringify({
            posts: formattedPosts,
            hasMore: endIndex < posts.length,
            totalPosts: posts.length,
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
