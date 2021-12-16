ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.75969205257127,37.63789463367895],
            zoom: 14,
        });

        myMap.geoObjects
        .add(new ymaps.Placemark([55.75878157378931,37.60170090523197], {
            balloonContent: 'Точка X'
        }, {
          iconLayout: 'default#image',
          iconImageHref: '../img/baloon.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [-10, -10]
        }))
    }
