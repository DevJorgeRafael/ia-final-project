const fetch = require('node-fetch');

exports.handler = async (event) => {
    try {
        const apiUrl = process.env.API_URL; 
        if (!apiUrl) {
            throw new Error("API_URL environment variable is not defined");
        }
        console.log(apiUrl)

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: event.body,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.error('Error fetching data:', error);

        return {
            statusCode: 502,
            body: JSON.stringify({ error: 'Bad Gateway', message: error.message }),
        };
    }
};
