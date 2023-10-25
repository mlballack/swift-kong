import { mdsvex, escapeSvelte } from "mdsvex";
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from "rehype-code-titles";
import { getHighlighter } from "shiki";

const THEME = "dark-plus";

async function highlighter(code, lang = 'text', meta) {
    const shikiHighlighter = await getHighlighter({
        theme: THEME,
    });
    const html = shikiHighlighter.codeToHtml(code, {
        lang,
    });
    return escapeSvelte(html);
}

export default {
    extensions: ['.md', '.svx'],
    smartypants: {
        dashes: 'oldschool'
    },
    remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
    rehypePlugins: [rehypeSlug, rehypeCodeTitles],
    highlight: {
        highlighter,
    }
};
