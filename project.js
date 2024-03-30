let darkButton = document.querySelector(".theme-button-dark");
let lightButton = document.querySelector(".theme-button-light");



darkButton.onclick = () => {
    document.body.classList.add('dark');
    darkButton.classList.add('active');
    lightButton.classList.remove('active');
};

lightButton.onclick = () => {
    document.body.classList.remove('dark');
    darkButton.classList.remove('active');
    lightButton.classList.add('active');
};

let serifFontButton = document.querySelector(".font-button-serif");
let sansSerifFontButton = document.querySelector(".font-button-sans-serif");


serifFontButton.onclick = () => {
    document.body.classList.add('serif');
    sansSerifFontButton.classList.remove('active');
    serifFontButton.classList.add('active');
};

sansSerifFontButton.onclick = () => {
    document.body.classList.remove('serif');
    serifFontButton.classList.remove('active');
    sansSerifFontButton.classList.add('active');
};

let articleSections = document.querySelectorAll('.blog-article.short');


for (let articleSection of articleSections) {
    let moreButton = articleSection.querySelector('.more');
    moreButton.onclick = () => {
      articleSection.classList.remove('short');
    };
  };

let gridButton = document.querySelector('.card-view-button-grid');
let listButton = document.querySelector('.card-view-button-list');
let cardsList = document.querySelector('.cards');
 
  listButton.onclick = () => {
    cardsList.classList.add('list');
    gridButton.classList.remove('active');
    listButton.classList.add('active');
  };

  gridButton.onclick = () => {
    cardsList.classList.remove('list');
    listButton.classList.remove('active');
    gridButton.classList.add('active');
  };
  
let activePhoto = document.querySelector('.active-photo');
let previewList = document.querySelectorAll('.preview-list li a');

for (let mainImage of previewList) {
  mainImage.onclick = function (evt) {
    evt.preventDefault();
    activePhoto.src = mainImage.href

    let currentActive = document.querySelector('.preview-list .active-item');
    if (currentActive) {
      currentActive.classList.remove('active-item');
    }
    mainImage.classList.add('active-item');
  };
};
