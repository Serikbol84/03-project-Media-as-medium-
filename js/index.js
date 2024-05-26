document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('redirectButton');
    if (button) {
        button.addEventListener('click', () => {
            window.location.href = 'index2.html?post=1';
        });
    } else {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('post');
        if (postId) {
            console.log("Post ID:", postId);
        }
    }
});

getTopStories();

const title = document.getElementById('title-1');
    //   abstract = document.getElementById('p-1')

function getTopStories() {
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=o31G1KOG06lYvAiTP5ZG6vPACFMtOglA')
    .then(response => response.json())
    .then(data => {
        const articles = data.results.splice(0, 1);
        articles.forEach(article => {
            title.innerHTML += `
            <div class="text">
                            <h1 class="title" id="title-1">
                                <a href="index2.html">${article.title} </a>
                            </h1>
                            <p id="p-1">
                                ${article.abstract}
                            </p>
                        </div>`
            console.log(article)
        })
    })

}

