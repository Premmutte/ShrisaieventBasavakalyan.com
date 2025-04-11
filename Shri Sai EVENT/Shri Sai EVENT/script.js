document.addEventListener("DOMContentLoaded", () => {
  // === Image Zoom Modal ===
  const galleryImages = document.querySelectorAll(".gallery-grid img");

  galleryImages.forEach((img) => {
    img.style.cursor = "pointer"; // make clickable

    img.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.className = "image-modal";
      modal.innerHTML = `
        <div class="image-modal-content">
          <span class="close-btn">&times;</span>
          <img src="${img.src}" alt="${img.alt}">
        </div>
      `;
      document.body.appendChild(modal);

      // Close logic
      modal.querySelector(".close-btn").onclick = () => modal.remove();
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.remove();
      });
    });
  });

  // === Form Submission Logic ===
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !phone || !message) {
        alert("Please fill in all fields.");
        return;
      }

      const fullMessage = `Name: ${name}%0A\nPhone: ${phone}%0A\nMessage: ${message}`;

      // Open WhatsApp with message
      const whatsappLink = `https://wa.me/917026906353?text=${encodeURIComponent(fullMessage)}`;
      window.open(whatsappLink, "_blank");

      // Open email client
      const emailLink = `mailto:shrisaievent888@gmail.com?subject=New Inquiry&body=${encodeURIComponent(fullMessage)}`;
      window.open(emailLink, "_blank");

      // Reset form
      contactForm.reset();
      alert("Your inquiry has been sent to WhatsApp and Email.");
    });
  }
});
