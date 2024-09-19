document.addEventListener('DOMContentLoaded', () => {

    const main = document.getElementById('main');
    

    function mediaUrl(article) {  
        if (article.multimedia && article.multimedia.length > 0) {
            return article.multimedia[0].url;
        } else {
            return "";
        }
    }

    function getTopStories() {
        fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=o31G1KOG06lYvAiTP5ZG6vPACFMtOglA')
        .then(response => response.json())
        .then(data => {
            
            const articles = data.results; 
            
            articles.forEach((article, index) => {
                if (index <= 2) {

                    const imageUrl = mediaUrl(article);

                    main.innerHTML += `
                    <div class="news-list">
                        <div class="container">
                            <div class="news-block">

                                <div class="news" id="news">
                                    <div class="authors">
                                        <div class="auth-logo">
                                            <img src="./img/author.svg" alt="">
                                        </div>
                                        <p>${article.byline} 
                                            <a href="#">in</a> 
                                            Topics Name · 
                                            <a href="#">${new Date(article.created_date).toLocaleDateString()}</a>
                                        </p>
                                    </div>

                                    <div class="text">
                                        <h1 class="title">
                                            <a href="index2.html?post=${index}">
                                                ${article.title}
                                            </a>
                                        </h1>
                                        <p>
                                            ${article.abstract}
                                        </p>
                                    </div>

                                    <div class="button-actions">
                                        <div class="button-line">
                                            <button class="btn">
                                                <a href="#">Java Script</a>
                                            </button>
                                            <p>
                                                <a href="#">12 min read</a>
                                                ·
                                                <a href="#">Selected for you</a>
                                            </p>
                                        </div>
                                        <div class="actions">
                                            <img src="./img/actions.svg" alt="">
                                        </div>
                                        
                                    </div>
                                </div>

                                <div class="img-main">
                                    <img src="${imageUrl}" alt="">
                                </div>

                            </div>

                            <div class="divider">
                                <span class="divider"> </span>
                            </div>

                        </div>
                    </div>
                    `
                } 
               
            })
            const buttons = document.querySelectorAll('.btn');
            
            if (buttons) {

                buttons.forEach((button, index) => {
                
                    button.addEventListener('click', () => {
                        window.location.href = `index2.html?post=${index}`;
                    });
                });
            } else {
                const urlParams = new URLSearchParams(window.location.search);
                const postId = urlParams.get('post');
                if (postId) {
                    console.log("Post ID:", postId);
                }
            }
        })
        .catch(e=>console.log(e))
    }
    getTopStories();
});
