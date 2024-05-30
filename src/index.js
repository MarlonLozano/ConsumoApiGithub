const { getGitHubRepos } = require('./api');
const { getTopRepositories, showRepositories } = require('./utils/sortRepositories');

/**
* Función principal de la ejecución
*/
async function main() {
    const username = 'google';

    try {
        const repos = await getGitHubRepos(username);
        const topRepositories = getTopRepositories(repos);
        showRepositories(topRepositories, username);
    } catch (error) {
        console.error('Error al obtener los repositorios:', error.message);
    }
}

main();