import { isElementIntoView } from "./utils/scroll";

const elements = document.querySelectorAll<HTMLElement>("[data-animate]");

function setOnScrollAnimation() {
  elements.forEach((box) =>
    box.classList[isElementIntoView(box) ? "add" : "remove"]("animate-init")
  );
}

setOnScrollAnimation();
window.addEventListener("scroll", setOnScrollAnimation);
