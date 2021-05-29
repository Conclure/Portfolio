var index = 0;
var slides = document.getElementsByClassName("slide");
var performInitialContainerLoad = function () {
    if (slides.length == 0) {
        throw new RangeError();
    }
    slides[0].style.display = "flex";
};
var setImage = function (indexTranformer) {
    var length = slides.length;
    index = indexTranformer(index);
    while (index >= length) {
        index = 0;
    }
    if (index < 0) {
        index = length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        if (i == index) {
            slides[i].style.display = "flex";
            continue;
        }
        slides[i].style.display = "none";
    }
};
var previousImage = function () {
    setImage(function (i) { return i - 1; });
};
var nextImage = function () {
    setImage(function (i) { return i + 1; });
};
var onLazyload = function () {
    if (slides.length != 0) {
        performInitialContainerLoad();
    }
};
onLazyload();
