function scrollOver() {
  const slider = document.getElementById("images");
  slider.scrollLeft -= 150;
  slider.style.animation = "slide 2s linear";
}

function scrollRight() {
  const slider = document.getElementById("images");
  slider.scrollLeft += 150;
  slider.style.animation = "slide 2s linear";
}
let show = document.getElementById("show");
const imagesPic = document.getElementsByClassName("image");
for (i = 0; i < imagesPic.length; i++) {
  const picAttr = imagesPic[i].src;
  imagesPic[i].addEventListener("mouseenter", function () {
    show.src = picAttr;
  });
}
