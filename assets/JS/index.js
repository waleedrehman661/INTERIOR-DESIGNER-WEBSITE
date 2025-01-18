var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
// MODELS
fetch('assets/js/data.json')
  .then(response => response.json())
  .then(products => {
    console.log(products);
    var cardsContainer = document.getElementById('projects');
    products.forEach(product => {
      const card = `
        <div class="project-item">
          <img src="${product.image}" alt="${product.name}">
          <div class="overlay">
            <h3>${product.name}</h3>
          </div>
        </div>
      `;
      cardsContainer.innerHTML += card;
    });
  })
  .catch(error => {
    console.error('Error fetching the JSON data:', error);
  });




