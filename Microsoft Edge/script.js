// https://newsapi.org/v2/top-headlines?country=ph&apiKey=30c6b9b7ecb74691b20c4d6630ef8e50
const baseAPI = `https://newsapi.org/v2/top-headlines?country=ph&apiKey=30c6b9b7ecb74691b20c4d6630ef8e50`

const mainCarousel = document.querySelector('.main-carousel');
// console.log(mainCarousel);



function getNews(){
    fetch(baseAPI)
    .then(res => res.json())
    .then(data => {
        mainCarousel.innerHTML = '';
        data.articles.forEach(article => {

            if(article.urlToImage === null){
                delete article.urlToImage;
                delete article.title;

                if(article.url.title === null){
                    delete article.urlToImage;
                    delete article.title;
                }

            }else { 
                const carousel = document.createElement('div');
                carousel.classList.add('carousel');

               
                carousel.innerHTML = `
                    <img class = "news-img" src = "${article.urlToImage}">
                    <h1><a href="${article.url}">${article.title}</a></h1>

                `;
                const carouselButton = document.querySelectorAll('.carousel_button');
                const carouselLength = document.querySelectorAll('.carousel').length;
                let imageIndex = 1;
                let translateX = 0;

                carouselButton.forEach(button => { 
                button.addEventListener('click',  event =>{
                    if(event.target.id === 'previous'){
                    if(imageIndex !== 1){
                        imageIndex--;
                        translateX += 800;
                    }
                    }else{
                    if(imageIndex !== carouselLength){
                        imageIndex++;
                        translateX -= 800;
                    
                    }
                    }
                
                    mainCarousel.style.transform = `translateX(${translateX}px)`
                })
                
                })
                
                mainCarousel.appendChild(carousel);

            }
        })
    });
}
getNews();



const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const imageSection = document.getElementById('image-section');

imageSection.addEventListener('mouseenter', (e) => {
        previous.style.display = 'block';
        next.style.display = 'block';
});

imageSection.addEventListener('mouseleave', (e) => {
    previous.style.display = 'none';
    next.style.display = 'none';

});





const gridContainer = document.querySelector('.grid-container');

// function bbcNews(){

//     const bbcAPI = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=30c6b9b7ecb74691b20c4d6630ef8e50';
//     fetch(bbcAPI)
//     .then(res => res.json())
//     .then(bbcData => { 
//     bbcData.articles.forEach(bbc => { 
        
    
//     const gridNews2 = document.createElement('div');
//     gridNews2.classList.add('grid-news2');




//     gridNews2.innerHTML = `
//             <img src="${bbc.urlToImage}">
//             <h1>${bbc.title}<h1>
//     `;
   
//     gridContainer.appendChild(gridNews2);



//         })
//     });




// }
// bbcNews();

const bitcoinAPI = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=30c6b9b7ecb74691b20c4d6630ef8e50';
function BTC_API() { 
    fetch(bitcoinAPI)
    .then(res => res.json())
    .then(data => { 
        data.articles.forEach(btc => {
           console.log(btc);
            
            const gridNews = document.createElement('div');
            gridNews.classList.add('grid-news')
    
            if(btc.urlToImage === null){
                delete btc.urlToImage;
                delete btc.title;
    
                if(btc.url.title === null){
                    delete btc.urlToImage;
                    delete btc.title;
                }
            }else {
            
                gridNews.innerHTML = `
                <img src="${btc.urlToImage}" alt="${btc.title}">
                <h1><a href="${btc.url}">${btc.title}</a></h1>
                `;
       
       
            // gridContainer.appendChild(gridNews2);
            gridContainer.appendChild(gridNews);
    
            }
        });
    })
}
BTC_API();



