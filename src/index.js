import "./styles.css";
import logoImage from "/img/logo.png";
import backgroundImage from "/img/background.jpg";
import { showHome } from "./home.js";
import { showMenu } from "./menu.js";
import { showContact } from "./contact.js";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

const logoDiv = document.querySelector(".brand-logo");
const logo = document.createElement("img");
logo.src = logoImage;
logo.style.width = "256px";
logo.style.height = "256px";
logoDiv.appendChild(logo);

document.body.style.backgroundImage = `url('${backgroundImage}')`;

// Show home by default
showHome();
homeBtn.addEventListener("click", showHome);

menuBtn.addEventListener("click", showMenu);

contactBtn.addEventListener("click", showContact);
