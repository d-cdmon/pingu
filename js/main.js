// main.js

document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('.article-preview');
    
    articles.forEach(article => {
        article.addEventListener('click', function() {
            alert('Cargando artículo...');
        });
    });
});
