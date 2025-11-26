// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {

  // Select the contact form
  const contactForm = document.querySelector(".contact-form");

  // Listen for form submission
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    // Create success message
    const message = document.createElement("div");
    message.className = "form-message";
    message.innerHTML = "✅ Thank you! Your message has been sent successfully.";

    // Append message below form
    contactForm.appendChild(message);

    // Reset form fields
    contactForm.reset();

    // Smooth fade-in effect
    message.style.opacity = "0";
    setTimeout(() => {
      message.style.transition = "opacity 0.5s ease";
      message.style.opacity = "1";
    }, 100);

    // Auto remove after 3 seconds
    setTimeout(() => {
      message.style.opacity = "0";
      setTimeout(() => message.remove(), 500);
    }, 3000);
  });
});
// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {

  /* -------------------------
     1️⃣ CONTACT FORM EFFECT
  -------------------------- */
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Create success message
      const message = document.createElement("div");
      message.className = "form-message";
      message.innerHTML = "✅ Thank you! Your message has been sent successfully.";

      // Append message below form
      contactForm.appendChild(message);
      contactForm.reset();

      // Fade-in animation
      message.style.opacity = "0";
      setTimeout(() => {
        message.style.transition = "opacity 0.5s ease";
        message.style.opacity = "1";
      }, 100);

      // Remove after 3 seconds
      setTimeout(() => {
        message.style.opacity = "0";
        setTimeout(() => message.remove(), 500);
      }, 3000);
    });
  }

  /* -------------------------
     2️⃣ SMOOTH SCROLL EFFECT
  -------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  });

  /* -------------------------
     3️⃣ NAVBAR ON SCROLL
  -------------------------- */
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  /* -------------------------
     4️⃣ REVEAL ANIMATION
  -------------------------- */
  const revealElements = document.querySelectorAll("section, .project-card, .service-card");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add("show");
      } else {
        el.classList.remove("show");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* -------------------------
     5️⃣ BUTTON GLOW EFFECT
  -------------------------- */
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty("--xPos", `${x}px`);
      btn.style.setProperty("--yPos", `${y}px`);
    });
  });

});
document.addEventListener("DOMContentLoaded", function () {

  // -------------------------
  // CONTACT FORM EFFECT
  // -------------------------
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const message = document.createElement("div");
      message.className = "form-message";
      message.innerHTML = "✅ Thank you! Your message has been sent successfully.";

      contactForm.appendChild(message);
      contactForm.reset();

      message.style.opacity = "0";
      setTimeout(() => {
        message.style.transition = "opacity 0.5s ease";
        message.style.opacity = "1";
      }, 100);

      setTimeout(() => {
        message.style.opacity = "0";
        setTimeout(() => message.remove(), 500);
      }, 3000);
    });
  }

  // -------------------------
  // SMOOTH SCROLL
  // -------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  });

  // -------------------------
  // NAVBAR SCROLL EFFECT
  // -------------------------
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // -------------------------
  // REVEAL ANIMATION
  // -------------------------
  const revealElements = document.querySelectorAll("section, .project-card, .service-card");
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add("show");
      } else {
        el.classList.remove("show");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // -------------------------
  // BUTTON GLOW EFFECT
  // -------------------------
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty("--xPos", `${x}px`);
      btn.style.setProperty("--yPos", `${y}px`);
    });
  });

  // -------------------------
  // SKILLS PROGRESS BAR ANIMATION
  // -------------------------
  const skillBars = document.querySelectorAll(".skills .progress-bar");
  const animateSkills = () => {
    const triggerPoint = window.innerHeight * 0.85;
    skillBars.forEach(bar => {
      const top = bar.getBoundingClientRect().top;
      if (top < triggerPoint) {
        bar.style.width = bar.getAttribute("aria-valuenow") + "%";
      }
    });
  };
  window.addEventListener("scroll", animateSkills);
  animateSkills();

});

