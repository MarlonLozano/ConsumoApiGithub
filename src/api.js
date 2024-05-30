//ARCHIVO DE CONEXIÓN DE LA API
const axios = require('axios');
const { GITHUB_URL } = require('./config');

async function getGitHubRepos(username) {
    const url = `${GITHUB_URL}/users/${username}/repos`;

    console.log(url);

    const response = await axios.get(url);

    return response.data;
}

module.exports = {
    getGitHubRepos,
};