import { rehype } from 'rehype'
import rehypeShiki from '@shikijs/rehype'

const pipeline = rehype()
    .data('settings', { fragment: true })
    .use(rehypeShiki, {
        themes: {
            light: 'github-light',
            dark: 'dark-plus',
        }
    })

export async function postprocess(html) {
    const file = await pipeline.process(html)

    return String(file)
}

