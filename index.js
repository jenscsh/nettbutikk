const WAREOVERVIEW = document.querySelector(".shop");
const WARES = [
    {
        name: "Skjerm",
        price: 2099,
        category: "Datautstyr",
        picture: "./images/placeholder.png"
    },
    {
        name: "Vaskemaskin",
        price: 5199,
        category: "Hvitevarer",
        picture: "./images/placeholder.png"
    },
    {
        name: "Mikrobølgeovn",
        price: 899,
        category: "Hvitevarer",
        picture: "./images/placeholder.png"
    },
    {
        name: "Smarttelefon",
        price: 6190,
        category: "Telefon og nettbrett",
        picture: "./images/placeholder.png"
    },
    {
        name: "TV",
        price: 8790,
        category: "Lyd og bilde",
        picture: "./images/placeholder.png"
    },
    {
        name: "Høytaler",
        price: 1990,
        category: "Lyd og bilde",
        picture: "./images/placeholder.png"
    }
]
let cart = [];

WARES.forEach(item => {
    WAREOVERVIEW.innerHTML+= `
    <div class="wareitem">
        <img class="wareimage" src="${item.picture}" alt="">
        <h2 class="warename">${item.name}</h2>
        <h3 class="wareprice">${item.price},-</h3>
    </div>
    `
});