// Portfolio JavaScript

document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio loaded successfully!");

    // Smooth scrolling
    document.querySelectorAll("a[href^='#']").forEach(link => {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});