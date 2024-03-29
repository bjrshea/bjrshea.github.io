function stickyHeader() {
  const header = document.getElementsByTagName("HEADER")[0];
  const pagePosition = window.pageYOffset;
  if (pagePosition >= 100) {
    header.classList.remove("static-header");
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
    header.classList.add("static-header");
  }
}

function pushMountain() {
  const pageWidth = window.innerWidth;
  const pagePosition = window.pageYOffset;
  if (pageWidth > 500) {
    document.getElementById("mountain").style.marginBottom = `${pagePosition / 4}px`;
  }
}

function showImages() {
  const about = document.getElementById("about").offsetHeight;
  const abingdon = document.getElementById("abingdon").offsetHeight;
  const vetVal = document.getElementById("vet-val").offsetHeight;
  const benchmark = document.getElementById("benchmark").offsetHeight;
  const arrayOfIcons = document.getElementsByClassName("skills-icon");
  const pagePosition = window.pageYOffset;
  const pageWidth = window.innerWidth;
  if (about <= pagePosition) {
    for (let i = 0; i < arrayOfIcons.length; i++) {
      setTimeout( function timer(){
        arrayOfIcons[i].classList.add("fly-up");
      }, i*150 );
    }
  }
  if (pageWidth >= 600) {
    if ((abingdon + (abingdon / 2)) <= pagePosition) {
      document.getElementById("abingdon-splash").classList.add("animation");
      document.getElementById("abingdon-services").classList.add("animation-delay");
    }
    if (((vetVal + vetVal) + (vetVal / 2)) <= pagePosition) {
      document.getElementById("vet-val-splash").classList.add("animation");
    }
    if (((benchmark + benchmark + benchmark) + (benchmark / 2)) <= pagePosition) {
      document.getElementById("benchmark-results").classList.add("animation");
      document.getElementById("benchmark-splash").classList.add("animation-delay");
    }
  } else {
    if ((abingdon - 150) <= pagePosition) {
      document.getElementById("abingdon-splash").classList.add("animation");
      document.getElementById("abingdon-services").classList.add("animation-delay");
    }
    if ((vetVal + (vetVal - 150)) <= pagePosition) {
      document.getElementById("vet-val-splash").classList.add("animation");
    }
    if ((benchmark + benchmark + (benchmark / 2)) <= pagePosition) {
      document.getElementById("benchmark-results").classList.add("animation");
      document.getElementById("benchmark-splash").classList.add("animation-delay");
    }
  }
}

document.addEventListener("scroll", stickyHeader);

document.addEventListener("scroll", pushMountain);

document.addEventListener("scroll", showImages);
