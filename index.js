const WAREOVERVIEW = document.querySelector(".shop");
const CARTVIEW = document.querySelector(".cartbox");
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
        <button class="addtocart" onclick="AddToCart(${WARES.indexOf(item)})">Kjøp</button>
    </div>
    `
});

function AddToCart(id) {
    
    
    let addedItem =`
    <div class="cartitem" id="cartItem${id}">
        <img class="cartitemimage" src="${WARES[id].picture}">
        <h2 class="cartitemname">${WARES[id].name}</h2>
        <h3 class="cartitemprice">${WARES[id].price},-</h3>
        <p>Antall: 1</p>
        <button class="removefromcart" onclick="RemoveFromCart(${id})">Fjern</button>
    </div>
    `;
    CARTVIEW.innerHTML+= addedItem;
}
function RemoveFromCart(toRemove) {
    console.log(document.getElementById("cartItem"+toRemove));
    CARTVIEW.removeChild(document.getElementById("cartItem"+toRemove));
}
// function UpdateTotalPrice () {
//     CARTVIEW.
// }