document.querySelector('header').innerHTML += `
  <nav id="top">
          <div id="top-nav" class="top-nav col-lg-10">
              <ul class="top-ul-1">
                  <li>
                     <span class="text-color"><i class="ri-phone-fill"></i></span class="text-color">
                      <strong>PHONE : <span class="text-color">+92-3152210948</span class="text-color"></strong>
                       -
                      <strong><span class="text-color">+92-3152210948</span class="text-color"></strong>
                  </li>
                  <li>
                      <span class="text-color"><i class="ri-mail-line"></i></span>
                      <strong>Email us: <span class="text-color">waleedrehman2007@gmail.com</span class="text-color"></strong>
                  </li>
              </ul>
              <ul class="top-ul-2">
                  <li><i class="ri-facebook-fill"></i></li>
                  <li><i class="ri-youtube-line"></i></li>
                  <li><i class="ri-instagram-line"></i></li>
              </ul>
          </div>
          <div class="second-nav sticky-top">
          <a href="index.html">
          <img class="nav-logo" src="assets/images/3D VISION STUDIOS-logo.png" alt="">
          </a>
              <ul class="second-list">
                  <li class="navlink">HOME</li>
                  <span class="dot"></span>
                  <a href="#projects">
                    <li class="navlink">PROJECTS</li>
                  </a>
                  <span class="dot"></span>
                  <li class="navlink">SERVICES</li>
                  <span class="dot"></span>
                  <a href="about.html">
                  <li class="navlink">ABOUT</li>
                  </a>
                  <span class="dot"></span>
                  <a href="contact.html">
                  <li class="navlink">CONTACT</li>
                  </a>
              </ul>
              <span class="menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="ri-menu-3-line"></i></span>
          </div>
      </nav>
      <div class="menu-canvas offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <span data-bs-dismiss="offcanvas" aria-label="Close"><i class="ri-close-large-line"></i></span>
        </div>
        <div class="offcanvas-body">
          
        </div>
      </div>
`
document.querySelector('footer').innerHTML += `
<div class="footer">
        <div class="box-1">
          <img src="assets/images/3D VISION STUDIOS-logo.png" alt="">
          <p>For more than 20 years, interior design has been one of the supporting services provided by De Interiors. De interiors provide office furnishing solutions. The Company offers space planning, designing, furniture products, etc.</p>
        </div>
        <div class="box-2">
          <h4 class="footh">Quick Links</h4>
          <ul>
            <a href=""><li>Home</li></a>
            <a href="about.html"><li>About</li></a>
            <a href=""><li>Projects</li></a>
            <a href=""><li>Contact</li></a>
          </ul>
        </div>
        <div class="box-3">
          <h4 class="footh">Contact Us</h4>
          <p>Shop # U5, U6, Gulshan Urdu Bazaar, Moti Mehal Gulshan e Iqbal, Block 3 Karachi</p>
          <ul>
            <li><span class="foot-first">Phone:</span> +92-311-9329459</li>
            <li><span class="foot-first">Phone:</span> +92-305-2563414</li>
            <li><span class="foot-first">Email:</span> @waleedrehman.com</li>
          </ul>
        </div>
       </div>
       <div class="bottom-footer">
         <p class="text-center">© 2021 3D VISION STUDIOS. All Rights Reserved.</p>
       </div>
  `