//Henter html-elementer.
const WAREOVERVIEW = document.querySelector(".shop");
const CARTVIEW = document.querySelector(".cartbox");
const CARTVIEWLIST =document.querySelector(".cartboxlist");
const TOTALPRICEVIEW = document.querySelector(".totalprice");
const FILTEROPTIONS =document.querySelectorAll(".filteroption");
const SIDEBAR = document.querySelector(".sidebar");
const FILTERBTNS = document.querySelectorAll(".filterbutton");
const NULLRESULT = document.querySelector("#nullresult");
//De tilgjengelige varene.
const WARES = [
    {
        name: "Skjerm",
        price: 2099,
        category: "Datautstyr",
        picture: "./images/skjerm.png"
    },
    {
        name: "Vaskemaskin",
        price: 5199,
        category: "Hvitevarer",
        picture: "./images/vaskemaskin.png"
    },
    {
        name: "Mikrobølgeovn",
        price: 899,
        category: "Hvitevarer",
        picture: "./images/mikroovn.webp"
    },
    {
        name: "Smarttelefon",
        price: 6190,
        category: "Telefon og nettbrett",
        picture: "./images/smartphone.png"
    },
    {
        name: "TV",
        price: 8790,
        category: "Lyd og bilde",
        picture: "./images/tv.webp"
    },
    {
        name: "Høytaler",
        price: 1990,
        category: "Lyd og bilde",
        picture: "./images/speaker.webp"
    }
];

//Handlevognen og søkeord
let cart = [];
let searchTerm = "";

//Endrer på searchTerm hver gang søkefeltet endres i nettleser
document.getElementById("prodsearch").addEventListener("input",(e)=>{
    searchTerm=e.target.value;
    FilterWares();
});

//Funksjon for å standard varelisting uten filter. Kjører når siden blir lastet inn.
DefaultFill();
function DefaultFill() {
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
}

//Funksjon for å filtrere varer etter filter og søkeord. Kjører når noen trykker på filterboksene eller skriver i søkefeltet.
function FilterWares () {
    //Tømmer eksisterende varelisting. Legger til varer til array hvis kategori passer.
    WAREOVERVIEW.innerHTML="";
    var waresToAdd = [];
    NULLRESULT.style.display = "none";
    FILTEROPTIONS.forEach(filter=> {
        if (filter.checked==true) {
            waresToAdd.push(...WARES.filter(item=>item.category==filter.value));
        }
    });
    //Filtrer bare det som passer med søkeresultatet
    if (searchTerm!="") {
        if (waresToAdd.length>0) waresToAdd = waresToAdd.filter(ware=>MatchSearch(ware.name));
        else waresToAdd = WARES.filter(ware=>MatchSearch(ware.name));
    }
    //Legger til filtrerte varer til vareoversikt. Hvis det er ingen og det er ingen søkeord, kjører standard varelisting.
    waresToAdd.forEach(ware => {
        WAREOVERVIEW.innerHTML+= `
        <div class="wareitem">
            <img class="wareimage" src="${ware.picture}" alt="">
            <h2 class="warename">${ware.name}</h2>
            <h3 class="wareprice">${ware.price},-</h3>
            <button class="addtocart" onclick="AddToCart(${WARES.indexOf(ware)})">Kjøp</button>
        </div>
        `
    });
    if (waresToAdd.length===0) {
        if (searchTerm!="") NULLRESULT.style.display = "block";
        else DefaultFill();
    }
}
//Sjekker om navnet inneholder søkeordet
function MatchSearch (name) {
    name=name.toLowerCase();
    return name.includes(searchTerm.toLowerCase());
}
//Åpner/lukker handlekurv.
function OpenCloseCart() {
    if(CARTVIEW.style.display==='none') {
        CARTVIEW.style.display='block';
    } else {
        CARTVIEW.style.display='none';
    }
}
//Legger til vareoversikt. Foreløpig går det ikke an å legge til flere varer av samme type.
function AddToCart(id) {
    if (cart.includes(WARES[id])) {
        console.log("Already exist: "+cart);
    } else {
        cart.push(WARES[id]);
        let addedItem =`
        <div class="cartitem" id="cartItem${id}">
            <h2 class="cartitemname">${WARES[id].name}</h2>
            <img class="cartitemimage" src="${WARES[id].picture}">
            <h3 class="cartitemprice">${WARES[id].price},-</h3>
            <button class="removefromcart" onclick="RemoveFromCart(${id})">Fjern</button>
        </div>
        `;
        CARTVIEWLIST.innerHTML+= addedItem;
        if (CARTVIEW.style.display==='none') OpenCloseCart();
    }
    UpdateTotalPrice();
}
//Fjerner varer fra handlevogn.
function RemoveFromCart(toRemove) {
    cart.splice(cart.indexOf(WARES[toRemove]),1);
    CARTVIEWLIST.removeChild(document.getElementById("cartItem"+toRemove));
    UpdateTotalPrice();
}
//Oppdaterer totalpris. Hvis ingen varer er tilstede, vises standardtekst.
function UpdateTotalPrice () {
    if (cart.length===0) {
        TOTALPRICEVIEW.textContent="Her er det foreløpig ingenting.";
        OpenCloseCart();
    } else {
        let total=0;
        cart.forEach(item=> {
            total+=item.price;
        })
        TOTALPRICEVIEW.innerHTML=`Total pris: ${total},-`.bold();
    }
}
//Åpner og lukker filtermeny når den er i mobilmodus. Knapper for å kontrollere dette kan bare sees da.
var open=false;
function OpenCloseFilters() {
    if (open) {
        SIDEBAR.style.left='-100vw';
        FILTERBTNS.forEach(btn => {btn.innerHTML="Vis filter".bold()});
    }
    else {
        SIDEBAR.style.left='0vw';
        FILTERBTNS.forEach(btn => {btn.innerHTML="Skjul filter".bold()});
    }
    open=!open;
}