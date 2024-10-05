import imageOne from "/img/hero1.png";
import imageTwo from "/img/hero2.jpg";
import imageThree from "/img/hero3.jpg";

export function showHome() {
    const content = document.querySelector("div#content");
    // Remove all children
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Taste Authentic Khmer Food";
    content.appendChild(title);

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = `Come and taste the unforgettable experience with Khmer cuisine, which
            is known for its rich flavors and fresh ingredients. Khmer food also
            features a variety of soups, stir-fries, and noodle dishes, often
            accompanied by fresh vegetables and rice, making it a delicious
            reflection of the country's cultural heritage.`;
    content.appendChild(description);

    const gallery = document.createElement("div");
    gallery.setAttribute("id", "gallery");

    const images = [imageOne, imageTwo, imageThree];
    for (let i = 0; i < images.length; i++) {
        const hero = document.createElement("img"); 
        hero.src = images[i]; 
        hero.style.width = "256px"; 
        hero.style.height = "256px"; 
        gallery.appendChild(hero); 
    }

    content.appendChild(gallery);
}