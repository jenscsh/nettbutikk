const WAREOVERVIEW = document.querySelector(".shop");
const CARTVIEW = document.querySelector(".cartbox");
const CARTVIEWLIST =document.querySelector(".cartboxlist");
const TOTALPRICEVIEW = document.querySelector(".totalprice");
const FILTEROPTIONS =document.querySelectorAll(".filteroption");
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
function FilterWares () {
    WAREOVERVIEW.innerHTML="";
    let waresToAdd = [];
    FILTEROPTIONS.forEach(filter=> {
        if (filter.checked==true) {
            waresToAdd+=WARES.filter(category === filter.value);
        }
    })
}
function OpenCloseCart() {
    if(CARTVIEW.style.display==='none') {
        CARTVIEW.style.display='block';
    } else {
        CARTVIEW.style.display='none';
    }
}
function AddToCart(id) {
    if (cart.includes(WARES[id])) {
        console.log("Already exist");
    } else {
        cart.push(WARES[id]);
        let addedItem =`
        <div class="cartitem" id="cartItem${id}">
            <img class="cartitemimage" src="${WARES[id].picture}">
            <h2 class="cartitemname">${WARES[id].name}</h2>
            <h3 class="cartitemprice">${WARES[id].price},-</h3>
            <button class="removefromcart" onclick="RemoveFromCart(${id})">Fjern</button>
        </div>
        `;
    CARTVIEWLIST.innerHTML+= addedItem;
    }
    UpdateTotalPrice();
}
function RemoveFromCart(toRemove) {
    cart.pop(WARES[toRemove]);
    CARTVIEWLIST.removeChild(document.getElementById("cartItem"+toRemove));
    UpdateTotalPrice();
}
function UpdateTotalPrice () {
    if (cart.length===0) {
        TOTALPRICEVIEW.textContent="Her er det foreløpig ingenting.";
    } else {
        let total=0;
        cart.forEach(item=> {
            total+=item.price;
        })
        TOTALPRICEVIEW.textContent=`Total pris: ${total},-`;
    }
}