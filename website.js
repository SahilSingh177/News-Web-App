console.log('Welcome to WHiH News');

// Initialize the news parameters
let source = 'bbc-news';
let apiKey = '668499f715734720b5224d4b0d41fda4';

// Get the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create a get request
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        let newsHtml = ''
        articles.forEach((element, index) => {
            console.log(element)
            let news =
                `<div class="accordion-item my-3">
                        <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"             aria-expanded="true" aria-controls="collapse${index}">
                        <strong>Breaking News ${index + 1}</strong>.) ${element.title}
                        </button> 
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                        <div class="accordion-body my-3">
                        ${element.content}. <a href='${element['url']}' target='_blank'>Click here to read more </a>
                        </div>
                        </div>
                    </div>`
            newsHtml += news;
            newsAccordion.innerHTML = newsHtml;

        });
    }
    else {
        console.error('ERROR OCCURED');
    }
}

xhr.send();