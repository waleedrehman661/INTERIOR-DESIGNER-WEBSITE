document.addEventListener("DOMContentLoaded", function () {
    const watsappLogoContainer = document.querySelector("#watsapp-logo");
    if (watsappLogoContainer) {
        watsappLogoContainer.innerHTML = `
             <a href="https://wa.me/03152210948" target="_blank" style="text-decoration: none;">
          <img width="60px" src="assets/images/whatsapp.png" alt="">
             </a>
        `;
    }
});
