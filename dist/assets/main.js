import Menu from "../../src/ts/Menu";
import Slider from "../../src/ts/Slider";
import product from "../../src/ts/Product";
import Slider2 from "../../src/ts/Slider2";
import Goods from "../../src/ts/Goods";
import Stuff from "../../src/ts/Stuff";
import Barnds from "../../src/ts/Brands";
import Article from "../../src/ts/Article";
Menu();
Slider();
product();
Slider2();
Goods();
Stuff();
Barnds();
Article();
document.getElementById("search-open")?.addEventListener("click", () => {
    document.getElementById("overlay")?.classList.remove("hidden");
    document.getElementById("search-box")?.classList.add("scale-105");
});
document.getElementById("search-close")?.addEventListener("click", () => {
    document.getElementById("overlay")?.classList.add("hidden");
    document.getElementById("search-box")?.classList.remove("scale-105");
});
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const burgerButton = document.getElementById("burgerButton");
    const closeMenu = document.getElementById("closeMenu");
    function openMenu() {
        menu.classList.remove("translate-x-full");
        overlay.classList.remove("hidden");
    }
    function closeMenuFunc() {
        menu.classList.add("translate-x-full");
        overlay.classList.add("hidden");
    }
    burgerButton.addEventListener("click", openMenu);
    closeMenu.addEventListener("click", closeMenuFunc);
    overlay.addEventListener("click", closeMenuFunc);
});
// Removed unused variables and commented-out code
function updateClock() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const clockElement = document.getElementById("clock");
    if (clockElement) {
        clockElement.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
}
setInterval(updateClock, 1000);
updateClock();
