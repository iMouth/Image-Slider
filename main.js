let curSlide = 1;
setImage(1);

function arrowClick(slide) {
  setImage(slide + curSlide);
}

function dotClick(slide) {
  setImage(slide);
}

function setImage(slide) {
  let prevSlide = curSlide;
  const pictures = document.getElementsByClassName("pic");
  const dots = document.getElementsByClassName("dot");
  if (slide < 1) {
    curSlide = pictures.length;
  } else if (slide > pictures.length) {
    curSlide = 1;
  } else {
    curSlide = slide;
  }
  dots[prevSlide - 1].style.backgroundColor = "";
  dots[curSlide - 1].style.backgroundColor = "gray";
  pictures[prevSlide - 1].style.display = "none";
  pictures[curSlide - 1].style.display = "block";
  setTimeout(setImage, 5000, curSlide + 1);
}
