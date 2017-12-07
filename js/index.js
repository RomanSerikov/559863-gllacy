ymaps.ready(init);
var mapDiv = document.querySelector(".yandex-map");
var myMap, 
    myPlacemark;

function init() { 
  myMap = new ymaps.Map(mapDiv, {
    center: [59.938880, 30.328430],
    zoom: 16
  }); 
  
  myPlacemark = new ymaps.Placemark([59.938691, 30.323044], {}, {
    iconLayout: "default#image",
    iconImageHref: "img/pin.png",
    iconImageSize: [218, 142],
    iconImageOffset: [-45, -132]
  });
  
  myMap.geoObjects.add(myPlacemark);
}

var link = document.querySelector(".button.feedback-link");
  
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");

var form    = popup.querySelector("form");
var author  = popup.querySelector("[name=feedback-author]");
var email   = popup.querySelector("[name=feedback-email]");
var message = popup.querySelector("[name=feedback-text]");

var storage = localStorage.getItem("author");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  
  if (storage) {
    author.value = storage;
    email.focus();
  } else {
    author.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function (evt) {
  if (!author.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("author", author.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    }
  }
});
