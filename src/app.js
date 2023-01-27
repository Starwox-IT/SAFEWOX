const hamburger = document.querySelector(".ham-menu");
const navLink = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

//Form
document.getElementById('form').addEventListener('submit', function () {
  alert("THANK YOU!");
}, false);

//submit btn
function handleSubmit(event) {
  event.preventDefault(); // prevent the form from refreshing the page
  const form = event.target;
  const inputs = form.querySelectorAll("input");
  let isValid = true;

  // validate form inputs
  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      isValid = false;
    }
  });

  if (isValid) {
    // display success message
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
    form.reset();
  }
}