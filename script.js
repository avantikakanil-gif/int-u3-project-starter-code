// Declare variables below to save the different divs of your story.
let storyOpening = document.querySelector(".story-opening");
let exploreForest = document.querySelector(".explore-forest");
let figureOut = document.querySelector(".find-out-why");
let firstLayerButtons = document.querySelector(".first-layer-buttons");
let exploreScreen = document.querySelector(".explore-screen");
let whyScreen = document.querySelector(".why-screen");
let exploreHeader = document.querySelector(".explore-header");
let exploreImg = document.querySelector(".explore-img");
let whyHeader = document.querySelector(".why-header");
let whyImg = document.querySelector(".why-img");
let secondLayerButtonsOne = document.querySelector(".second-layer-buttons-one");
let secondLayerButtonsTwo = document.querySelector(".second-layer-buttons-two");
let shelterBtn = document.querySelector(".shelter");
let darkBtn = document.querySelector(".explore-dark");
let shelterScreen = document.querySelector(".shelter-screen");
let shelterHeader = document.querySelector(".shelter-header");
let shelterImg = document.querySelector(".shelter-img");
let darkScreen = document.querySelector(".dark-screen");
let darkHeader = document.querySelector(".dark-header");
let darkImg = document.querySelector(".dark-img");
let attackBtn = document.querySelector(".attack");
let attackScreen = document.querySelector(".attack-screen");
let attackHeader = document.querySelector(".attack-header");
let attackImg = document.querySelector(".attack-img");
let runBtn = document.querySelector(".run-away");
let runScreen = document.querySelector(".run-screen");
let runHeader = document.querySelector(".run-header");
let runImg = document.querySelector(".run-img");


secondLayerButtonsOne.style.display = "none";
secondLayerButtonsTwo.style.display = "none";
shelterHeader.style.display = "none";
shelterImg.style.display = "none";
shelterScreen.style.display = "none";
darkScreen.style.display = "none";
darkHeader.style.display = "none";
darkImg.style.display = "none";
attackScreen.style.display = "none";
attackHeader.style.display = "none";
attackImg.style.display = "none";
runScreen.style.display = "none";
runHeader.style.display = "none";
runImg.style.display = "none";

exploreForest.addEventListener('click', function(){
    exploreScreen.style.display = "block";
    exploreHeader.style.display = "block";
    exploreImg.style.display = "block";
    secondLayerButtonsOne.style.display = "block";
    storyOpening.style.display = "none";
    firstLayerButtons.style.display = "none";
});

figureOut.addEventListener('click', function() {
    whyScreen.style.display = "block";
    whyHeader.style.display = "block";
    whyImg.style.display = "block";
    storyOpening.style.display = "none";
    firstLayerButtons.style.display = "none";
    secondLayerButtonsTwo.style.display = "block";
});

shelterBtn.addEventListener('click', function(){
    shelterScreen.style.display = "block";
    shelterHeader.style.display = "block";
    shelterImg.style.display = "block";
    secondLayerButtonsOne.style.display = "none";
    exploreScreen.style.display = "none";
    exploreHeader.style.display = "none";
    exploreImg.style.display = "none";
});

darkBtn.addEventListener('click', function(){
    darkScreen.style.display = "block";
    darkHeader.style.display = "block";
    darkImg.style.display = "block";
    secondLayerButtonsOne.style.display = "none";
    exploreScreen.style.display = "none";
    exploreHeader.style.display = "none";
    exploreImg.style.display = "none";
});

attackBtn.addEventListener("click", function() {
    attackScreen.style.display = "block";
    attackHeader.style.display = "block";
    attackImg.style.display = "block";
    secondLayerButtonsTwo.style.display = "none";
    whyScreen.style.display = "none";
    whyHeader.style.display = "none";
    whyImg.style.display = "none";
});

runBtn.addEventListener("click", function() {
    runScreen.style.display = "block";
    runHeader.style.display = "block";
    runImg.style.display = "block";
    secondLayerButtonsTwo.style.display = "none";
    whyScreen.style.display = "none";
    whyHeader.style.display = "none";
    whyImg.style.display = "none";
});

