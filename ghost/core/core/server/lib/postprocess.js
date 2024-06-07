const postprocessPromise = import('./postprocess-pipeline.mjs');

module.exports = {
    async postprocess(html) {
        const { postprocess: postprocessEsm } = await postprocessPromise;

        const highlightedHtml = await postprocessEsm(html);

        return highlightedHtml;
    }
};
