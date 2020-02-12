// Smooth scroll on click target
document.querySelectorAll('.button').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (this.getAttribute('href') !== '#') {
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Modal
let modal = document.getElementById("modal-box"),
    btn = document.getElementById("modal-trigger"),
    closeBtn = document.getElementById("close-modal");

btn.onclick = function() {
    modal.classList.add("modal-open");
};

closeBtn.onclick = function() {
    modal.classList.remove("modal-open");
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("modal-open");
    }
};

// Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("blogSlides");
    var dots = document.getElementsByClassName("blogSlider__dots--dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFNtb290aCBzY3JvbGwgb24gY2xpY2sgdGFyZ2V0XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uJykuZm9yRWFjaChhbmNob3IgPT4ge1xuICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSAhPT0gJyMnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykpLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuLy8gTW9kYWxcbmxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtYm94XCIpLFxuICAgIGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtdHJpZ2dlclwiKSxcbiAgICBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtbW9kYWxcIik7XG5cbmJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsLW9wZW5cIik7XG59O1xuXG5jbG9zZUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLW9wZW5cIik7XG59O1xuXG53aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtb3BlblwiKTtcbiAgICB9XG59O1xuXG4vLyBTbGlkZXJcbnZhciBzbGlkZUluZGV4ID0gMTtcbnNob3dTbGlkZXMoc2xpZGVJbmRleCk7XG5cbmZ1bmN0aW9uIHBsdXNTbGlkZXMobikge1xuICAgIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSBuKTtcbn1cblxuZnVuY3Rpb24gY3VycmVudFNsaWRlKG4pIHtcbiAgICBzaG93U2xpZGVzKHNsaWRlSW5kZXggPSBuKTtcbn1cblxuZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XG4gICAgdmFyIGk7XG4gICAgdmFyIHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJibG9nU2xpZGVzXCIpO1xuICAgIHZhciBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2dTbGlkZXJfX2RvdHMtLWRvdFwiKTtcbiAgICBpZiAobiA+IHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IDFcbiAgICB9XG4gICAgaWYgKG4gPCAxKSB7XG4gICAgICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoXG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZG90c1tpXS5jbGFzc05hbWUgPSBkb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcbiAgICB9XG4gICAgc2xpZGVzW3NsaWRlSW5kZXggLSAxXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgZG90c1tzbGlkZUluZGV4IC0gMV0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xufSJdLCJmaWxlIjoibWFpbi5qcyJ9
