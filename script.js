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

// Handling form input //

const form = document.querySelector("#subscribe-form");
const message = document.querySelector("#form-message");

form.addEventListener("submit", (element) => {
  element.preventDefault();
  message.textContent = "Thank you for joining the mission! 🌌";
  setTimeout(() => (message.textContent = ""), 4000);
});
