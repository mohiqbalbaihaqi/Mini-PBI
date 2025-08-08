document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const top = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (form) {
    form.setAttribute("action", "https://formspree.io/f/xwpqwrdo");
    form.setAttribute("method", "POST");
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            alert("Pesan berhasil dikirim!");
            form.reset();
          } else {
            alert("Terjadi kesalahan. Silakan coba lagi.");
          }
        })
        .catch(() => {
          alert("Terjadi kesalahan. Silakan coba lagi.");
        });
    });
  }
});
