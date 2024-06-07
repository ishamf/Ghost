import { rehype } from 'rehype'
import rehypeShiki from '@shikijs/rehype'

const processor = rehype()
    .data('settings', { fragment: true })
    .use(rehypeShiki, {
        themes: {
            light: 'github-light',
            dark: 'dark-plus',
        }
    })

/**
 *
 * @param {string} html
 * @returns
 */
export async function pipeline(html) {
    const file = await processor.process(html)

    return String(file)
}

