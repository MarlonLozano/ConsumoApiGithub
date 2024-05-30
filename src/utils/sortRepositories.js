//ARCHIVO DE UTILIDADES GENERALES

/**
* Función encargada de ordenar los repositorios
* 
* @param {Object[]} repository - Array de los repositorios.
* @param {number} [counter=10] - Numero de repositorios a retornar.
* @returns {Object[]} Repositorios Ordenados.
*/
function getTopRepositories(repository, counter = 10) {
    return repository
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, counter);
}

/**
 * Función encargada de mostrar los repositorios ordenados
 * 
 * @param {Object[]} repositories - Array de los repositorios.
 * @param {string} username - Usuario de github.
 */
function showRepositories(repositories, username) {
    console.log(`Los ${repositories.length} repositorios más populares de ${username}:`);
    repositories.forEach(repository => {
        console.log(`${repository.name} - ${repository.stargazers_count} estrellas`);
    });
}

module.exports = {
    getTopRepositories,
    showRepositories,
};