const highlightPromise = import('./postprocess-pipeline.mjs');

module.exports = {
    async postprocess(html) {
        const { pipeline } = await highlightPromise;

        const highlightedHtml = await pipeline(html);

        return highlightedHtml;
    }
};
