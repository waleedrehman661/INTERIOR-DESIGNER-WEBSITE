var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
 
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main-container'),
  smooth: true
});

// MODELS
$.getJSON("assets/js/data.json", function (products) {
  console.log(products);  
  var cardsContainer = $("#projects");
  products.forEach(product => {
    const card = `
      <div class="project-item">
        <img src="${product.image}" alt="${product.name}">
        <div class="overlay">
          <h3>${product.name}</h3>
        </div>
      </div>
    `;
    cardsContainer.append(card);
  });
});



