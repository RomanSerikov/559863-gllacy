ymaps.ready(init);
var mapDiv = document.querySelector('.yandex-map');
var myMap, 
    myPlacemark;

function init(){ 
  myMap = new ymaps.Map(mapDiv, {
    center: [59.938880, 30.328430],
    zoom: 16
  }); 
  
  myPlacemark = new ymaps.Placemark([59.938691, 30.323044], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/pin.png',
    iconImageSize: [218, 142],
    iconImageOffset: [-45, -132]
  });
  
  myMap.geoObjects.add(myPlacemark);
}
