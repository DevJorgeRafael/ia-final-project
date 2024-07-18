const fetch = require('node-fetch');

exports.handler = async (event) => {
    const response = await fetch('http://3.140.247.31/spotify-ia', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: event.body,
    });

    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};
