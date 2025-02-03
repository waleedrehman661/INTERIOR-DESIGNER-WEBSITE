document.addEventListener("DOMContentLoaded", function () {
    const watsappLogoContainer = document.querySelector("#watsapp-logo");
    if (watsappLogoContainer) {
        watsappLogoContainer.innerHTML = `
             <a class="text-center" href="https://wa.me/03152210948" target="_blank" style="text-decoration: none;">
            <img width="50px" src="assets/images/whatsapp.png" alt="">
             </a>
        `;
    }
});
