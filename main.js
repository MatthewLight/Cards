// Card-flip animation on click;
function flip(event) {
	var element = event.currentTarget;
	if (element.className === "card") {
    if (element.style.transform == "rotateY(-180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(-180deg)";
      element.style.pointerEvents = "none";
    }
  }
};

// Show cards on pack click;
function appear() {
    var cardList = document.getElementsByClassName("card");
    for (let i = 0; i < cardList.length; i++) {
        cardList[i].style.display = "flex";
    }
}

// Random cards
let imageArray = new Array();

for (let i = 0; i <= 134; i++) {
    imageArray[i] = i + ".png";
    console.log(imageArray[i]);
}

getRandomImage(imageArray, "")

function getRandomImage(imgAr, path) {
    path = path || "./images/cards/";
    let cardList = document.getElementsByClassName("back");

    for (let i = 0; i < cardList.length; i++) {
        let num = Math.floor(Math.random() * imgAr.length);
        let img = imgAr[num];
        let imgStr = path + img;
        cardList[i].style.backgroundImage = 'url(' + imgStr + ')';
    }
}