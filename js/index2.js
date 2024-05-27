
const news = document.getElementById('news-block');

function mediaUrl(article) {  
    if (article.multimedia && article.multimedia.length > 0) {
        return article.multimedia[0].url;
    } else {
        return "";
    }
}

function newsPage() {
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=o31G1KOG06lYvAiTP5ZG6vPACFMtOglA')
    .then(response => response.json())
    .then(data => {
        console.log(data)

        const article = data.results[0];
        console.log(article)
        if(article) {
            const imageUrl = mediaUrl(article);
            news.innerHTML +=`
            <div class="news">
                <div class="authors">
                    <div class="authors-box">
                        <div class="auth-logo">
                            <img src="./img/author.svg" alt="">
                        </div>
                        <div class="info">
                            <p>${article.byline} </p>
                            <p>
                                <a href="#">${new Date(article.created_date).toLocaleDateString()} ·</a> 
                                <a href="#">12 min read ·</a>
                                <a href="#">Member only</a>
                            </p>
                        </div>
                    </div>
                                            
                    <div class="socials"> 
                        <img src="./img/icons.svg" alt="">
                    </div>
                </div>
                
                <div class="text">
                    <h1 class="title title-1">${article.title} </h1>
                    <p>
                        ${article.abstract}
                    </p>
                </div>
                
                <div class="img-main">
                    <img src="${imageUrl}" alt="">
                </div>
                
                <div class="post">
                    <h1 class="post-title">Subheader </h1>
                    <p>
                        ${article.abstract}
                    </p>
                </div>
                
                <div class="info-bottom">
    
                    <div class="comment">
                        <div class="icon">
                            <img src="./img/heart.svg" alt="">
                            <p>180</p>
                        </div>
                        
                        <div class="icon">
                            <img src="./img/speech-bubble.svg" alt="">
                            <p>12</p>
                        </div>
                        
                    </div>
                    <div class="icon">
                        <img src="./img/bookmark.svg" alt="">
                    </div>
                
                </div>
                
            </div>`
        }
        
    })
    .catch(e=>console.log(e))
}
    
newsPage();

