import { error } from "@sveltejs/kit";
import { getEntries } from "../../../utils/entries";

export async function load({ params }) {
    const posts = getEntries("posts");
    const authors = getEntries("authors");
    const { slug } = params;
    const post = posts.find((p) => p.slug === slug);

    const author = authors.find((a) => a.name === post.author);

    if (!post) {
        throw error(404, 'No post found');
    }

    return {
        post: post,
        author: author
    };
}

// export async function load({ params }) {
//     try {
//         const post = await import(`/content/posts/${params.slug}.md`)
//         console.log("post: ", post.default.render)
//         return {
//             content: post.default.render,
//             meta: post.metadata
//         }
//     } catch (e) {
//         throw error(404, `Could not find ${params.slug}`)
//     }
// }