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
let congratulations = document.querySelector(".congratulations");
let fragrant = document.querySelector(".fragrant");
let branch = document.querySelector(".branch");
let safe = document.querySelector(".safe");
let bear = document.querySelector(".bear");
let survivor = document.querySelector(".survivor");
let password = document.querySelector(".password");
let submit = document.querySelector(".submit");
let hiddenScreen = document.querySelector(".hidden-screen");
let hiddenHeader = document.querySelector(".hidden-header");
let wrong = document.querySelector(".wrong");
let submitTwo = document.querySelector(".submit-two");
let acorns = 0;


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
congratulations.style.display = "none";
password.style.display = "none";
hiddenScreen.style.display = "none";
hiddenHeader.style.display = "none";
wrong.style.display = "none";

exploreForest.addEventListener('click', function(){
    exploreScreen.style.display = "block";
    exploreHeader.style.display = "block";
    exploreImg.style.display = "block";
    secondLayerButtonsOne.style.display = "block";
    storyOpening.style.display = "none";
    firstLayerButtons.style.display = "none";
    congratulations.style.display = "none";
});

figureOut.addEventListener('click', function() {
    whyScreen.style.display = "block";
    whyHeader.style.display = "block";
    whyImg.style.display = "block";
    storyOpening.style.display = "none";
    firstLayerButtons.style.display = "none";
    secondLayerButtonsTwo.style.display = "block";
    congratulations.style.display = "none";
});

shelterBtn.addEventListener('click', function(){
    shelterScreen.style.display = "block";
    shelterHeader.style.display = "block";
    shelterImg.style.display = "block";
    secondLayerButtonsOne.style.display = "none";
    exploreScreen.style.display = "none";
    exploreHeader.style.display = "none";
    exploreImg.style.display = "none";
    congratulations.style.display = "none";
});

darkBtn.addEventListener('click', function(){
    darkScreen.style.display = "block";
    darkHeader.style.display = "block";
    darkImg.style.display = "block";
    secondLayerButtonsOne.style.display = "none";
    exploreScreen.style.display = "none";
    exploreHeader.style.display = "none";
    exploreImg.style.display = "none";
    congratulations.style.display = "none";
});

attackBtn.addEventListener("click", function() {
    attackScreen.style.display = "block"
    attackHeader.style.display = "block";
    attackImg.style.display = "block";
    secondLayerButtonsTwo.style.display = "none";
    whyScreen.style.display = "none";
    whyHeader.style.display = "none";
    whyImg.style.display = "none";
    congratulations.style.display = "none";
});

runBtn.addEventListener("click", function() {
    runScreen.style.display = "block";
    runHeader.style.display = "block";
    runImg.style.display = "block";
    secondLayerButtonsTwo.style.display = "none";
    whyScreen.style.display = "none";
    whyHeader.style.display = "none";
    whyImg.style.display = "none";
    congratulations.style.display = "none";
});

fragrant.addEventListener("click", function() {
    congratulations.style.display = "block";
    acorns += 1;
});

branch.addEventListener("click", function() {
    congratulations.style.display = "block";
    acorns += 1;
});

safe.addEventListener("click", function() {
    congratulations.style.display = "block";
    acorns += 1;
    if (acorns === 3) {
    password.style.color = "white";
    password.style.display = "block";
    }
});

bear.addEventListener("click", function() {
    congratulations.style.display = "block";
    acorns += 1;
});

survivor.addEventListener("click", function() {
    congratulations.style.display = "block";
    acorns += 1;
    if (acorns === 3) {
    password.style.color = "white";
    password.style.display = "block";
    }
});

submit.addEventListener("click", function() {
    let passwordInput = (document.getElementById("secret-password")).value;
    if (passwordInput === "a-little-birdie-told-me") {
        hiddenScreen.style.display = "block";
        hiddenHeader.style.display = "block";
        congratulations.style.display = "none";
        shelterHeader.style.display = "none";
        shelterImg.style.display = "none";
        shelterScreen.style.display = "none";
        password.style.display = "none";
    } else {
        wrong.style.display = "block";
        wrong.style.color = "white";
    }
});

submitTwo.addEventListener("click", function() {
    let passwordInput = (document.getElementById("secret-password-two")).value;
    if (passwordInput === "a-little-birdie-told-me") {
        hiddenScreen.style.display = "block";
        hiddenHeader.style.display = "block";
        runScreen.style.display = "none";
        runHeader.style.display = "none";
        runImg.style.display = "none";
        congratulations.style.display = "none";
        password.style.display = "none";
    } else {
        wrong.style.display = "block";
        wrong.style.color = "white";
    }
});
