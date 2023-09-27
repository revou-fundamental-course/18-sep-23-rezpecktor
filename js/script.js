document.getElementById("button").addEventListener("click", function () {
  console.log("TEST");
  let name = document.forms["contact-form"]["your-name"].value;
  let email = document.forms["contact-form"]["email"].value;
  let interest = document.forms["contact-form"]["interest"].value;

  console.log(name);
  console.log(email);
  console.log(interest);

  if (!name) {
    document.getElementById("name-error").innerText = "Name cannot Blank!";
  } else {
    document.getElementById("name-error").innerText = "";
  }
  if (!email) {
    document.getElementById("email-error").innerText = "email cannot Blank!";
  } else {
    document.getElementById("email-error").innerText = "";
  }
  if (!interest) {
    document.getElementById("interest-error").innerText = "interest cannot Blank!";
  } else {
    document.getElementById("interest-error").innerText = "";
  }
});

const carouselSlides = document.querySelectorAll(".image");
console.log(carouselSlides);
let currentIndex = 0;
let interval = 3000;

function nextSlide() {
  carouselSlides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % carouselSlides.length;
  carouselSlides[currentIndex].classList.add("active");
}

(function () {
  setInterval(nextSlide, interval);
})();
