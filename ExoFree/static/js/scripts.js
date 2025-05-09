// script.js

// Exemple de code JavaScript pour la gestion de la navigation
document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.querySelector(".login-btn");

    // Ajouter une action au bouton "Se connecter"
    if (loginButton) {
        loginButton.addEventListener("click", function(event) {
            alert("Page de connexion à venir!");
            // Ici, tu peux ajouter la redirection vers une page de connexion
            // window.location.href = "/login";
        });
    }

    // Exemple de fonctionnalité pour un carousel (si tu en as besoin)
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item");

    if (slides.length > 0) {
        setInterval(function() {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }, 3000); // Change la slide toutes les 3 secondes
    }
});
