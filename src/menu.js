import imageOne from "/img/hero1.png";
import imageTwo from "/img/food1.jpg";
import imageThree from "/img/food2.jpg";
import imageFour from "/img/food3.jpg";
import imageFive from "/img/food4.png";
import imageSix from "/img/food5.jpg";
import imageSeven from "/img/food6.jpg";
import imageEight from "/img/food7.jpg";
import imageNine from "/img/food8.jpg";
import imageTen from "/img/food11.jpg";
import imageEleven from "/img/food9.jpg";
import imageTwelve from "/img/food10.jpg";

const firstRowName = ["Amok", "Kuy Teav", "Nom Banh Chok", "Sour Soup", "Yao Hon", "Lok Lak"];
const secondRowName = ["Chicken Curry", "Beef Ceviche", "Pepper Crab", "Prahok Ktis", "Samlar Kako", "Pork Rice"];

const firstRowImages = [imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix];
const secondRowImages = [imageSeven, imageEight, imageNine, imageTen, imageEleven, imageTwelve];

export function showMenu() {
    const content = document.querySelector("div#content");
    // Remove all children
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Menu";
    content.appendChild(title);

    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    
    const firstRow = document.createElement("div");
    firstRow.className = "row";
    menu.appendChild(firstRow);

    for (let i = 0; i < firstRowImages.length; i++) {
        const food = document.createElement("div");
        food.className = "food";
        const image = document.createElement("img");
        image.src = firstRowImages[i];
        image.style.width = "128px";
        image.style.height = "128px";
        food.appendChild(image);
        const name = document.createElement("h2");
        if (firstRowName[i] === "Nom Banh Chok") {
            name.className = "small-text";
        } 
        name.textContent = firstRowName[i];
        food.appendChild(name);
        firstRow.appendChild(food);
    }


    const secondRow = document.createElement("div");
    secondRow.className = "row";
    menu.appendChild(secondRow);

    for (let i = 0; i < secondRowImages.length; i++) {
        const food = document.createElement("div");
        food.className = "food";
        const image = document.createElement("img");
        image.src = secondRowImages[i];
        image.style.width = "128px";
        image.style.height = "128px";
        food.appendChild(image);
        const name = document.createElement("h2");
        if (secondRowName[i] === "Chicken Curry" || secondRowName[i] === "Beef Ceviche" || secondRowName[i] === "Samlar Kako") {
            name.className = "small-text";
        } 
        name.textContent = secondRowName[i];
        food.appendChild(name);
        secondRow.appendChild(food);
    }

    content.appendChild(menu);
}




