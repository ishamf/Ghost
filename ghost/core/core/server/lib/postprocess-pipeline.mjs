import { rehype } from 'rehype'
import rehypeShiki from '@shikijs/rehype'

/**
 *
 * @param {string} html
 * @returns
 */
export async function pipeline(html) {
    const file = await rehype()
        .data('settings', { fragment: true })
        .use(rehypeShiki, {
            themes: {
                light: 'github-light',
                dark: 'dark-plus',
            }
        })
        .process(html)

    return String(file)
}

