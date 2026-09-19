import "./styles.css"
import heroIMG from "./assets/hero.jpg"
import { createHomePage } from "./pages/home.js"
import { createMenuPage } from "./pages/menu.js"
import { createContactPage } from "./pages/contact.js"
import { createAboutPage } from "./pages/about.js"

 const heroImage= document.querySelector(".heroIMG img")
heroImage.src = heroIMG

export const webContent = document.getElementById("content")

const homePage = createHomePage(() => console.log("book a table clicked"))
webContent.appendChild(homePage)

export const homeBtn = document.querySelector(".home")
homeBtn.addEventListener("click", () => {
    webContent.innerHTML = "";
    const homePage = createHomePage(() => console.log("book a table clicked"))
    webContent.appendChild(homePage)
})

const menuBtn = document.querySelector(".menu")
menuBtn.addEventListener("click", () => {
    webContent.innerHTML = "";
    const mainContent = createMenuPage()
    webContent.appendChild(mainContent)
})

const contactBtn = document.querySelector(".contacts")
contactBtn.addEventListener("click", () => {
    webContent.innerHTML = ""
    const mainContent = createContactPage()
    webContent.appendChild(mainContent)
})

const aboutUsBtn = document.querySelector(".about-us");
aboutUsBtn.addEventListener("click", () => {
    webContent.innerHTML = ""
    const mainContent = createAboutPage()
    webContent.appendChild(mainContent)
})