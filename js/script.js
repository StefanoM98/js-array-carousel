// CREIAMO L'ARREY DI IMMAGINI DA POI INSERIRE TRAMITE JS

const imgArrey = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"]
console.log(imgArrey);
const itemsContainer = document.querySelector(".slider-items")

for (let i = 0; i < imgArrey.length; i++) {
    const currentImg = imgArrey[i]

    const sliderItems = `
        <div class="item">
            <img src="${currentImg}" alt="">
        </div>`

        itemsContainer.innerHTML += sliderItems;
}

// STAMPO LA PRIMA IMMAGINE
const itemsArrey = document.getElementsByClassName("item")
console.log(itemsArrey);

let showItemInIndex = 0;
itemsArrey[showItemInIndex].classList.add("active");

// ATTIVIAMO I BOTTONI IN MODO DA CAMBIARE IMG AL CLICK
const nextImg = document.querySelector(".next")
nextImg.addEventListener("click", function(){
    if (showItemInIndex < (itemsArrey.length - 1)){
        // FACCIAMO SCORRERE LE IMMAGINI
        itemsArrey[showItemInIndex].classList.remove("active");
        
        showItemInIndex++;

        itemsArrey[showItemInIndex].classList.add("active");

        // NASCONDIAMO IL BOTTONE UNA VOLTA ARRIVATI ALLA FINE DELLE IMMAGINI
        if (showItemInIndex === itemsArrey.length - 1) {
            nextImg.classList.add("none");
        }
    }
})