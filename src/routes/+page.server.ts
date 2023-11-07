import { getEntries } from "../utils/entries";
import { error } from "@sveltejs/kit";

const limitedCount = 2;

function getPosts() {
    let posts: any[] = []

    const paths = import.meta.glob('/content/posts/**/*.md', { eager: true })
    console.log("paths: ", paths)
    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as []
            const post = { ...metadata, slug }
            console.log("post: ", post)
        }
    }
}

export async function load() {
    let posts = getEntries("posts");
    if (!posts) {
        throw error(404, "No post found");
    }

    if (posts.length > limitedCount) {
        posts = posts.splice(0, limitedCount);
    }

    return {
        posts: posts
    };
}