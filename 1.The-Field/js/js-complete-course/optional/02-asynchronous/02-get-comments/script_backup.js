/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const getComments2 = (article) => (error, comments) => {
        article.comments = comments;
        console.table(article);
    };

    function getComments(error, comments) {
        article.comments = comments;
        console.table(article);
    }

    window.lib.getPosts((error, articles) => {
        articles.forEach((article) => {
            window.lib.getComments(article.id, getComments2(article));
        });

    })
})();
