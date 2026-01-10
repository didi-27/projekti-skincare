document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".DJ-reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("DJ-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // fallback nese ska IntersectionObserver
    revealElements.forEach((el) => el.classList.add("DJ-reveal-visible"));
  }
});
