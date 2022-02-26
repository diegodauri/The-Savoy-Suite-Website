const handleSubmit = (e) => {
  e.preventDefault();
  let contactForm = document.getElementById("contactForm");
  let formData = new FormData(contactForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      contactForm.reset();
      alert("Form successfully submitted");
    })
    .catch((error) => alert(error));
};

document
  .getElementById("contactForm")
  .addEventListener("submit", handleSubmit);

