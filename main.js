var slideValue = 0;

function slideAdd() {
    if (slideValue < 100) {
        slideValue += 10;
    }
    slideShow();
}

function slideSub() {
    if (slideValue > 0) {
        slideValue -= 10;
    }
    slideShow();
}

function slideShow() {
    $('#slideShower').css('width', slideValue + '%');
}

