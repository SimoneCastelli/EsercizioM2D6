// CAMBIOH1
// function changeh1 (){
//     let title = document.getElementsByTagName("h1");
//     let minititle = document.getElementsByTagName("h4");

//     title.innerText = "Aifonesss"
//     minititle.innertext = "Aifonesss"

//     console.log(title, minititle);
// }
// changeh1();

// CAMBIO BACKGROUND PAGINA
function background() {
    let bg = document.getElementsByTagName("body");
    bg.style.backGroundColor = "yellow";

    console.log(bg);
}
background();
// CAMBIO INDIRIZZO
function address () {
    let add = document.getElementById("indirizzo");
    add.innerText = "Via Don Bosco Roma"

    console.log(add);
}
address();

// AGGIUNTA CSS LINK AMAZON
function link() {
    let amazon = document.getElementsByTagName("a");
    amazon.style.color = "red";

    console.log(amazon);
}
link();

// FUNZIONE PER AGGIUNGERE E TOGLIERE CLASSE CSS ALLE IMMAGINI DELLA TABELLA
function addrem () {
    let img = document.getElementsByTagName("img");
    for (let i = 0; i < img.length; i++) {
        img[i].classList.toggle("visibility");

        console.log(img);
    }
}
addrem();

// FUNZIONE PER CAMBIARE COLORE PREZZO DI OGNI PRODOTTO
function changecolor () {
    let price = document.getElementsByClassName("price")
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    let random = "rgb (" + red + ',' + green + ',' + blue + ")";
    console.log(random);
    for (let i = 0; i < price.length; i++) {
        price[i].style.color = random;
        
    }
    changecolor();
    
}
