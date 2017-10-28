/*var navPage = document.querySelector('.page-header__nav');*/
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
          navMain.classList.remove('main-nav--closed');
          navMain.classList.add('main-nav--opened');
          /*navPage.classList.remove('page-header__nav--closed');
          navPage.classList.add('page-header__nav--opened');*/
        } else {
            navMain.classList.add('main-nav--closed');
            navMain.classList.remove('main-nav--opened');
            /*navPage.classList.add('page-header__nav--closed');
            navPage.classList.remove('page-header__nav--opened');*/
          }
});

var myMap;
var myPlacemark;
ymaps.ready(init);
  function init () {
    myMap = new ymaps.Map('map-id', {
        center: [59.9386,30.32],
        zoom: 15,
        controls: ["zoomControl", "fullscreenControl"]
  });

    myPlacemark = new ymaps.Placemark([59.938631, 30.323055],{
      balloonContentBody: '',
    },{
            iconLayout: 'default#image',
            iconImageHref: 'img/icon-map-marker.svg',
            iconImageSize: [36, 36],
            iconImageOffset: [-18, -18]
          });

      myMap.geoObjects.add(myPlacemark);
}
