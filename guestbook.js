document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("guestbook-form");
  const thankyou = document.getElementById("thankyou");

  form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.style.display = "none";
      thankyou.classList.add("show");

      // Fade out after 4 seconds
      setTimeout(() => {
        thankyou.classList.add("hide");
      }, 4000);

      // Fully remove after transition
      thankyou.addEventListener("transitionend", () => {
        if (thankyou.classList.contains("hide")) {
          thankyou.style.display = "none";
        }
      });

    } else {
      thankyou.textContent = "Oops! Something went wrong, please try again.";
      thankyou.classList.add("show");
    }
  });
});
