const config = require('../config.json');
const request = require('request-promise');
const gitlabKey = config.gitlabKey || process.env.SLACK_KEY

function gitlabApi(endpoint) {
    return new Promise(function (fulfill, reject) {
        const url = `${config.gitlabBaseUrl}/api/v4${endpoint}`;
        console.log(url);
        const options = {
            uri: url,
            headers: {
                'User-Agent': 'Request-Promise',
                'PRIVATE-TOKEN': gitlabKey
            },
            json: true
        };
        request(options)
            .then(function (res) {
                fulfill(res);
            })
            .catch(function (err) {
                console.log(err.statusCode);
                reject(err);
            });
    });
}

module.exports = gitlabApi;