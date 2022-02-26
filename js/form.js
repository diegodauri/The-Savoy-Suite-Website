document
  .querySelector("#contactForm")
  .addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault();
  let contactForm = document.getElementById("contactForm");
  let formData = new FormData(contactForm);
  fetch("/contact.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert("Success"))
    .catch((error) => alert(error));
};