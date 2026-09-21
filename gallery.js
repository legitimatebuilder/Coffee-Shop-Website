var fullImgBoxOne = document.getElementById("full-image-box-one");
var fullImgOne = document.getElementById("full-img-one");
//Gallery Contents Two //
var fullImgBoxTwo = document.getElementById("full-image-box-two");
var fullImgTwo = document.getElementById("full-img-two");


function openFullImgOne(pic) {
    fullImgBoxOne.style.display = "flex";
    fullImgOne.src = pic;
};

function closeFullImgOne() {
    fullImgBoxOne.style.display = "none";
};

// Gallery Contents Two //

function openFullImgTwo(pic) {
    fullImgBoxTwo.style.display = "flex";
    fullImgTwo.src = pic;
};

function closeFullImgTwo() {
    fullImgBoxTwo.style.display = "none";
};