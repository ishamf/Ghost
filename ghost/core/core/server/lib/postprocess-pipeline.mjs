import { rehype } from 'rehype'
import rehypeStarryNight from './rehypeStarryNight.mjs'

/**
 *
 * @param {string} html
 * @returns
 */
export async function pipeline(html) {
    const file = await rehype()
        .data('settings', { fragment: true })
        .use(rehypeStarryNight)
        .process(html)

    return String(file)
}

