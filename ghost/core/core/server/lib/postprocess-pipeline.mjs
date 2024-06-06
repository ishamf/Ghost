import { rehype } from 'rehype'
import rehypeHighlight from 'rehype-highlight'

/**
 *
 * @param {string} html
 * @returns
 */
export async function pipeline(html) {
    const file = await rehype()
        .data('settings', { fragment: true })
        .use(rehypeHighlight, {})
        .process(html)

    return String(file)
}

