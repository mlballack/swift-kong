import { error } from "@sveltejs/kit";
import { getEntries } from "../../utils/entries"

const authors = getEntries('authors');

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const paths = import.meta.glob('/src/posts/*.md', { eager: true })

    //console.log(authors)
    return {
        // eslint-disable-next-line no-unused-vars
        authors: authors
    };
}

// export const load: PageServerLoad = async ({ fetch, params }) => {
//     try {
//         const post = await import("../../../content/authors/author.md");

//     } catch (err) {
//         throw error(404, "error")
//     }
// }