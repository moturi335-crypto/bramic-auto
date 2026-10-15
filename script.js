
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navItems.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    });
});

// Close the menu when the Escape key is pressed.
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }
});

//BRAMIC MOTORS BOOKING FORM

// IMPORTANT: Replace this placeholder with your real
// WhatsApp business number in international format.


    
/* BRAMIC MOTORS BOOKING FORM */

const bookingForm = document.getElementById("booking-form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the customer's information
        const name = document.getElementById("customer-name").value.trim();
        const phone = document.getElementById("customer-phone").value.trim();
        const make = document.getElementById("vehicle-make").value.trim();
        const model = document.getElementById("vehicle-model").value.trim();
        const service = document.getElementById("booking-service").value;
        const location = document.getElementById("booking-location").value.trim();
        const date = document.getElementById("booking-date").value;
        const time = document.getElementById("booking-time").value;
        const problem = document.getElementById("vehicle-problem").value.trim();

        // BRAMIC MOTORS WhatsApp number
        const businessNumber = "254736001384";

        // Build the booking message
        const bookingMessage =
            "BRAMIC MOTORS - NEW BOOKING REQUEST\n\n" +
            "Customer Name: " + name + "\n" +
            "Customer Phone: " + phone + "\n" +
            "Vehicle Make: " + make + "\n" +
            "Vehicle Model: " + model + "\n" +
            "Service Required: " + service + "\n" +
            "Location: " + location + "\n" +
            "Preferred Date: " + date + "\n" +
            "Preferred Time: " + time + "\n" +
            "Vehicle Problem: " + (problem || "Not specified") + "\n\n" +
            "Please confirm availability for this appointment.";

        // Prepare the WhatsApp link
        const whatsappURL =
            "https://wa.me/" + businessNumber +
            "?text=" + encodeURIComponent(bookingMessage);

        // Open WhatsApp with the booking details
        window.open(whatsappURL, "_blank");
    });
}


