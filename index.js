// ==============================
// Digital Marketing Agency
// script.js
// ==============================

// Welcome Message
window.addEventListener("load", function () {
    console.log("Website Loaded Successfully!");
});

// ==============================
// Smooth Scrolling
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==============================
// Sticky Navbar Shadow
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";

    }

    else {

        header.style.boxShadow = "0 3px 10px rgba(0,0,0,.1)";

    }

});

// ==============================
// Active Navigation Link
// ==============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Contact Form Validation
// ==============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const service = document.getElementById("service").value;

    const message = document.getElementById("message").value.trim();

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        service === "" ||
        message === ""
    ) {

        alert("Please fill in all fields.");

        return;

    }

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});

// ==============================
// FAQ Animation
// ==============================

const details = document.querySelectorAll("details");

details.forEach(item => {

    item.addEventListener("toggle", () => {

        if (item.open) {

            details.forEach(other => {

                if (other !== item) {

                    other.removeAttribute("open");

                }

            });

        }

    });

});

// ==============================
// Hero Buttons Effect
// ==============================

const heroButtons = document.querySelectorAll("#home a");

heroButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// ==============================
// Scroll Animation
// ==============================

const allSections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

allSections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = "all .8s ease";

    observer.observe(section);

});

// ==============================
// Footer Year
// ==============================

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML = `&copy; ${year} Digital Marketing Agency. All Rights Reserved.`;

// ==============================
// End
// ==============================