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

const firstTitle = document.getElementById('title-1');
const secondTitle = document.getElementById('title-2'); 
const thirdTitle = document.getElementById('title-3'); 

function getTopStories() {
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=o31G1KOG06lYvAiTP5ZG6vPACFMtOglA')
    .then(response => response.json())
    .then(data => {
        const articles = data.results; 
        articles.forEach((article, index) => {
            if (index === 0) {
                firstTitle.innerHTML += `
                <div class="text">
                    <h1 class="title" id="title-1">
                        <a href="index2.html">${article.title} </a>
                    </h1>
                    <p id="p-1">
                        ${article.abstract}
                    </p>
                </div>`
            } else if (index === 2) {
                secondTitle.innerHTML += `
                <div class="text">
                    <h1 class="title" id="title-2">
                        <a href="index2.html">${article.title} </a>
                    </h1>
                    <p id="p-2">
                        ${article.abstract}
                    </p>
                </div>`
            } else if (index === 10) {
                thirdTitle.innerHTML += `
                <div class="text">
                    <h1 class="title" id="title-3">
                        <a href="index2.html">${article.title} </a>
                    </h1>
                    <p id="p-3">
                        ${article.abstract}
                    </p>
                </div>`
            }

            console.log(article)
        })
    })
    .catch(e=>console.log(e))

    //======================================= Еще один вариант (вроде тоже рабочий) ================================================
    // .then(data => {
    //     console.log(data)
    //     const firstArticle = data.results[0]; 
    //     firstTitle.innerHTML += `
    //     <div class="text">
    //         <h1 class="title" id="title-1">
    //             <a href="index2.html">${firstArticle.title} </a>
    //         </h1>
    //         <p id="p-1">
    //             ${firstArticle.abstract}
    //         </p>
    //     </div>`

    //     const secondArticle = data.results[5];
    //     secondTitle.innerHTML += `
    //     <div class="text">
    //         <h1 class="title" id="title-2">
    //             <a href="index2.html">${secondArticle.title} </a>
    //         </h1>
    //         <p id="p-2">
    //             ${secondArticle.abstract}
    //         </p>
    //     </div>`

    //     const thirdArticle = data.results[7];
    //     thirdTitle.innerHTML += `
    //     <div class="text">
    //         <h1 class="title" id="title-3">
    //             <a href="index2.html">${thirdArticle.title} </a>
    //         </h1>
    //         <p id="p-3">
    //             ${thirdArticle.abstract}
    //         </p>
    //     </div>`
       
    // })
    // .catch(e=>console.log(e))
}

getTopStories();