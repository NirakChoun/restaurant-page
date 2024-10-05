export function showContact() {
    const content = document.querySelector("div#content");
    // Remove all children
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = "Contact";
    content.appendChild(title);

    const info = document.createElement("div");
    info.setAttribute("id", "info");

    const contact = document.createElement("div");
    contact.className = "contact";
    const contactList = document.createElement("contactList");
    for (let i = 0; i < 2; i++) {
        const li = document.createElement("li");
        if (i === 0) {
            li.textContent = "Phone: 999-999-999";
        } else {
            li.textContent = "Email: nhamnham@mail.com";
        }
        contactList.appendChild(li);
    }
    contact.appendChild(contactList);
    info.appendChild(contact);

    const hours = document.createElement("div");
    hours.className = "hours";
    const hoursTitle = document.createElement("h2");
    hours.appendChild(hoursTitle);
    const hoursList = document.createElement("ul");
    for (let i = 0; i < 2; i++) {
        const li = document.createElement("li");
        if (i === 0) {
            li.textContent = "8:00 AM - 8:00PM, Monday - Friday";
        } else {
            li.textContent = "8:00 AM - 6:00PM, Saturday - Sunday";
        }
        hoursList.appendChild(li);
    }
    hours.appendChild(hoursList);
    info.appendChild(hours);

    const location = document.createElement("div");
    location.className = "location";
    const locationTitle = document.createElement("h2");
    location.appendChild(locationTitle);
    const locationList = document.createElement("ul");
    const li = document.createElement("li");
    li.textContent = `Willow Creek | 123 Maple Street | Greenfield | California |
                      90210 | United States`;
    locationList.appendChild(li);
    location.appendChild(locationList);
    info.appendChild(location);

    content.appendChild(info);
}