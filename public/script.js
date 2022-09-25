const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const tracker = document.querySelector(".tracker");
const pledge = document.querySelectorAll(".pledge");
const project = document.querySelector(".hidden-section");
const close = document.querySelector(".fa-xmark");
const radio = document.querySelectorAll('[name="radio"]');
const modalBtn = document.querySelectorAll(".modal-btn");
const suppModal = document.querySelector(".supp-modal");
const suppModalBtn = document.querySelector(".supp-modal-btn");

const height = document.querySelector("body").offsetHeight;

overlay.style.height = height + "px";

menu.addEventListener("click", () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    nav.classList.add("hide");
    overlay.classList.add("hide");
  } else {
    menu.classList.add("open");
    nav.classList.remove("hide");
    overlay.classList.remove("hide");
  }
});

pledge.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.target;
    const matches = target.innerText.match(/(\d+)/)[0];
    const newTracker = tracker.innerText.replace(/[^A-Z0-9]+/gi, "");

    let sum = parseInt(newTracker) + parseInt(matches);
    let formatted = separator(sum);
    let total = (tracker.textContent = `$${formatted}`);
  });
});

modalBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target;
    const input = target.previousElementSibling.value;
    const newTracker = tracker.innerText.replace(/[^A-Z0-9]+/gi, "");

    let sum = parseInt(newTracker) + parseInt(input);
    let formatted = separator(sum);
    let total = (tracker.textContent = `$${formatted}`);

    project.classList.add("hide");
    overlay.classList.add("hide");

    if (suppModal.classList.contains("hide")) {
      suppModal.classList.remove("hide");
      overlay.classList.remove("hide");
    } else {
      suppModal.classList.add("hide");
      overlay.classList.add("hide");
    }
  });
});

suppModalBtn.addEventListener("click", () => {
  overlay.classList.add("hide");
  suppModal.classList.add("hide");
});

const reward = document.querySelectorAll(".reward-btn");
reward.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (project.classList.contains("hide")) {
      project.classList.remove("hide");
      overlay.classList.remove("hide");
    } else {
      project.classList.add("hide");
      overlay.classList.add("hide");
    }

    menu.style.zIndex = "10";
    logo.style.zIndex = "10";

    close.addEventListener("click", (e) => {
      project.classList.add("hide");
      overlay.classList.add("hide");

      menu.style.zIndex = "20";
      logo.style.zIndex = "20";
    });
  });
});

radio.forEach((item) => {
  item.addEventListener("click", (e) => {
    const target = e.target;
    const hiddenCard = target.closest(".card-h");
    const prevSibling = hiddenCard.previousElementSibling;

    const modalPledge =
      target.parentElement.nextElementSibling.nextElementSibling
        .nextElementSibling;

    if (modalPledge.classList.contains("hide")) {
      modalPledge.classList.remove("hide");
      hiddenCard.style.border = "2px solid hsl(176, 50%, 47%)";
    } else {
      modalPledge.classList.add("hide");
      hiddenCard.style.border = "2px solid hsla(0, 0%, 48%, 0.5)";
    }

    // prevSibling.style.border = "2px solid hsla(0, 0%, 48%, 0.5)";
  });
});

function separator(numb) {
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
}
