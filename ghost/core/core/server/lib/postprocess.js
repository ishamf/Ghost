const config = require('../../shared/config');

module.exports = {
    async postprocess(html) {
        const url = config.get('postProcessUrl');

        if (!url) {
            return html;
        }

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({html})
        });

        if (res.ok) {
            const data = await res.json();
            return data.html;
        }

        // eslint-disable-next-line ghost/ghost-custom/no-native-error
        throw new Error('Failed to postprocess HTML');
    }
};
