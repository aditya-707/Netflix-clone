// Variables defined
const startedButton = document.querySelector(".started");
const footerButton = document.querySelector(".footer-started");
const floatingButton = document.createElement("div");

// Floating Button - Signup
floatingButton.textContent = "Get Started";
floatingButton.classList.add("floating-started");
document.body.appendChild(floatingButton);

function toggleFloatingButton() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 728) {
        const startedRect = startedButton.getBoundingClientRect();
        const footerRect = footerButton.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (
            (startedRect.bottom < 0 || startedRect.top > viewportHeight) &&
            footerRect.top > viewportHeight
        ) {
            floatingButton.style.display = "block";
        } else {
            floatingButton.style.display = "none";
        }
    } else {
        floatingButton.style.display = "none";
    }
}

// Movies list - Horizontal Scroll
window.addEventListener("scroll", toggleFloatingButton);
window.addEventListener("resize", toggleFloatingButton);

floatingButton.addEventListener("click", () => {
    startedButton.scrollIntoView({ behavior: "smooth" });
});

const rightArrow = document.querySelector(".angle");
const moviesLi = document.querySelector(".movies-li");

const scrollAmount = 230;

rightArrow.addEventListener("click", () => {
    moviesLi.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

// Movies List - Top Reveal
ScrollReveal().reveal(".movies-li", {
    origin: "top",
    distance: "50px",
    duration: 700,
    delay: 150,
    easing: "ease-in-out",
    reset: false,
});

// Card - Bottom Reveal (slightly faster)
ScrollReveal().reveal(".card", {
    origin: "bottom",
    distance: "60px",
    duration: 900,
    delay: 200,
    easing: "ease-in-out",
    reset: false,
});

// Que - Left Reveal
ScrollReveal().reveal(".que", {
    origin: "left",
    distance: "50px",
    duration: 800,
    delay: 200,
    easing: "ease-in-out",
    reset: false,
});

// Headings & Small Elements - Faster pop effect
ScrollReveal().reveal(".heading", {
    origin: "left",
    distance: "40px",
    duration: 700,
    delay: 80,
    easing: "ease-in-out",
    reset: false,
});

// Trending List Items - Staggered for better effect
ScrollReveal().reveal(".tr-li", {
    origin: "top",
    distance: "40px",
    duration: 800,
    delay: 200,
    easing: "ease-in-out",
    reset: false,
    interval: 250, // Each list item appears one after another
});

// Footer paragraph - Fade in from bottom
ScrollReveal().reveal(".footer .para", {
    origin: "bottom",
    distance: "40px",
    duration: 800,
    delay: 150,
    easing: "ease-in-out",
    reset: false,
});

// Email input + Get Started button - Appear together
ScrollReveal().reveal(".footer .add", {
    origin: "bottom",
    distance: "50px",
    duration: 900,
    delay: 250,
    easing: "ease-in-out",
    reset: false,
});

// Footer links - Staggered effect for better readability
ScrollReveal().reveal(".footer .ot-links .so a", {
    origin: "bottom",
    distance: "20px",
    duration: 700,
    delay: 200,
    easing: "ease-in-out",
    reset: false,
    interval: 100, // Links appear one after another
});

// Call section - Slightly faster fade-in
ScrollReveal().reveal(".footer .call", {
    origin: "bottom",
    distance: "40px",
    duration: 700,
    delay: 100,
    easing: "ease-in-out",
    reset: false,
});

// Language Selector - Pops in smoothly
ScrollReveal().reveal(".footer .lang", {
    origin: "bottom",
    distance: "40px",
    duration: 800,
    delay: 300,
    easing: "ease-in-out",
    reset: false,
});

// Netflix India Text - Subtle fade-in
ScrollReveal().reveal(".footer p:last-of-type", {
    origin: "bottom",
    distance: "20px",
    duration: 700,
    delay: 400,
    easing: "ease-in-out",
    reset: false,
});
