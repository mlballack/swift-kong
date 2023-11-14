import { getEntries, getTags } from '../../utils/entries';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const contents: any[] = getEntries('rules');
    if (!contents) {
        throw error(404, 'No privacy policy found');
    }
    const content = contents.find((ele) => ele.slug == "privacy-policy");
    console.log("content: ", content);

    if (!content) {
        throw error(404, 'No privacy policy found');
    }

    return {
        // eslint-disable-next-line no-unused-vars
        content: content.content,
    };
}
