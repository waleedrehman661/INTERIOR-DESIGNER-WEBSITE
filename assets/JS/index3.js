fetch('assets/js/data.json')
  .then(response => response.json())
  .then(products => {
    console.log(products);  

    
    const displayProjects = (category) => {
      const cardsContainer = document.getElementById('projects2');
      cardsContainer.innerHTML = ''; 


      const filteredProjects = category === 'all'
        ? products  
        : products.filter(product => product.category === category); 


      console.log(filteredProjects);

  
      filteredProjects.forEach(product => {
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
    };

   
    const setActiveButton = (button) => {
    
      const buttons = document.querySelectorAll('button');
      buttons.forEach(btn => btn.classList.remove('active'));
      
     
      button.classList.add('active');
    };

    const allBtn = document.querySelector('.sidebtn');
    const commercialBtn = document.querySelector('.com-btn');
    const residentialBtn = document.getElementById('residential');

    allBtn.addEventListener('click', () => {
      displayProjects('all');
      setActiveButton(allBtn); 
    });
    
    commercialBtn.addEventListener('click', () => {
      displayProjects('commercial');
      setActiveButton(commercialBtn); 
    });

    residentialBtn.addEventListener('click', () => {
      displayProjects('residential');
      setActiveButton(residentialBtn); 
    });

    displayProjects('all');
    setActiveButton(allBtn); 
  })
  .catch(error => {
    console.error('Error fetching the JSON data:', error);
  });
