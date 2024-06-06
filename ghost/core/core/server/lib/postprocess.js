const postprocessPromise = import('./postprocess-pipeline.mjs');

module.exports = {
    async postprocess(html) {
        const { pipeline } = await postprocessPromise;

        const highlightedHtml = await pipeline(html);

        return highlightedHtml;
    }
};
