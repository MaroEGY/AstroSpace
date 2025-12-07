// Globe Effect //
VANTA.GLOBE({
  el: "#hero",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x6c63ff,
  color2: 0x00fff5,
  backgroundColor: 0x0b0e16,
});

// APOD Logic //
const apodImg = document.querySelector("#apod-img");
const apodTitle = document.querySelector("#apod-title");
const apodDate = document.querySelector("#apod-date");
const apodDesc = document.querySelector("#apod-desc");

fetch(
  "https://api.nasa.gov/planetary/apod?api_key=5Ntg5LnyBOIN4wSv1xfmkAG6ZI0Z29PPeI4ivq81"
)
  .then((res) => res.json())
  .then((data) => {
    apodImg.src = data.url;
    apodTitle.textContent = data.title;
    apodDate.textContent = data.date;
    apodDesc.textContent = data.explanation;
  })
  .catch(() => {
    apodTitle.textContent = "Error loading image.";
  });

// Handling form input //
const form = document.querySelector("#subscribe-form");
const message = document.querySelector("#form-message");

(function () {
  emailjs.init("J06XjHoRjNs4yil-h");
})();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  message.textContent = "Sending...";

  emailjs
    .sendForm("Space-Updates", "template_xucdsqk", this)
    .then(() => {
      message.textContent = "You're subscribed! Check your email. ✅";
      this.reset();
    })
    .catch((error) => {
      message.textContent = "Signup failed, Try again later. ❌";
      console.error("EmailJS Error:", error);
    });
});
