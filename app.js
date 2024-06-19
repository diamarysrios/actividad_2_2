$(function() {
    // var llovizna_svg = '<svg width="28px" height="39px" viewBox="0 0 28 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>rain</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="rain" sketch:type="MSLayerGroup" transform="translate(-10.000000, -6.000000)" fill="#63A6CC"><g id="Page-1" sketch:type="MSShapeGroup"><path d="M33.5,33.5 C33.5,40.1273333 28.1266667,45.5 21.5,45.5 C14.8726667,45.5 9.5,40.1273333 9.5,33.5 C9.5,21.5 21.5,3.50000001 21.5,3.50000001 C21.5,3.50000001 33.5,21.5 33.5,33.5 L33.5,33.5 L33.5,33.5 Z" id="rain" transform="translate(21.500000, 24.500000) rotate(0.000000) translate(-21.500000, -24.500000) "></path></g></g></g></svg>';
    // var lluvia_svg = '<svg width="28px" height="39px" viewBox="0 0 28 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>rain</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="rain" sketch:type="MSLayerGroup" transform="translate(-10.000000, -6.000000)" fill="#63A6CC"><g id="Page-1" sketch:type="MSShapeGroup"><path d="M33.5,33.5 C33.5,40.1273333 28.1266667,45.5 21.5,45.5 C14.8726667,45.5 9.5,40.1273333 9.5,33.5 C9.5,21.5 21.5,3.50000001 21.5,3.50000001 C21.5,3.50000001 33.5,21.5 33.5,33.5 L33.5,33.5 L33.5,33.5 Z" id="rain" transform="translate(21.500000, 24.500000) rotate(-30.000000) translate(-21.500000, -24.500000) "></path></g></g></g></svg>';
    // var nubes_svg = '<svg width="100px" height="55px" viewBox="0 0 100 55" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>Group</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="cloud" sketch:type="MSLayerGroup" fill="#6AB7E3"><g id="Group" sketch:type="MSShapeGroup"><path d="M83.336,20.018 C81.412,13.644 75.501,9 68.5,9 C66.193,9 64.013,9.518 62.046,10.421 C57.008,4.074 49.232,0 40.5,0 C26.11,0 14.31,11.053 13.108,25.132 C5.719,26.064 0,32.358 0,40 C0,48.284 6.716,55 15,55 L83,55 C92.389,55 100,47.165 100,37.5 C100,27.952 92.568,20.204 83.336,20.018 L83.336,20.018 Z" id="Shape"></path><path d="M15,51 C8.935,51 4,46.065 4,40 C4,34.478 8.131,29.792 13.609,29.101 L16.819,28.696 L17.094,25.473 C18.122,13.432 28.403,4 40.5,4 C47.708,4 54.419,7.247 58.913,12.908 L60.864,15.366 L63.716,14.056 C65.241,13.355 66.851,13 68.5,13 C73.528,13 78.054,16.361 79.507,21.173 L80.347,23.958 L83.255,24.017 C90.283,24.158 96,30.207 96,37.5 C96,44.944 90.168,51 83,51 L15,51 L15,51 Z" id="Shape"></path></g></g></g></svg>';
    // var relampago_svg = '<svg width="165px" height="478px" viewBox="0 0 165 478" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>Shape</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><path d="M100.879903,-8.99765934 L90.162516,133.004374 L100.879903,133.004374 L64.9851657,491.002341 L79.4836165,214.81442 L63.3793211,214.814428 L85.7571545,-8.99765934 L100.879903,-8.99765934 Z" id="Shape" fill="#FFFFFF" sketch:type="MSShapeGroup" transform="translate(82.129612, 241.002341) rotate(15.000000) translate(-82.129612, -241.002341) "></path></g></svg>';
    // var nubes_grandes = '<svg width="96px" height="84px" viewBox="0 0 96 84" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>Shape</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="smoke" sketch:type="MSLayerGroup" transform="translate(-2.000000, 0.000000)" fill="#717F8E" fill-opacity=".5"><path d="M95.117,29.243 C97.344,27.148 97.949,23.727 96.388,20.943 C94.552,17.664 90.386,16.49 87.105,18.329 L86.942,18.42 C85.658,17.878 84.293,17.539 82.895,17.417 C83.716,14.407 83.501,11.099 82.026,8.082 C78.8,1.481 70.802,-1.263 64.202,1.962 C62.176,2.953 60.464,4.417 59.187,6.217 C54.886,2.788 48.852,2.013 43.736,4.512 C36.756,7.924 33.731,16.227 36.765,23.289 C34.461,24.777 32.927,27.152 32.445,29.772 C32.317,29.935 32.175,30.084 32.056,30.253 C27.755,26.823 21.72,26.048 16.604,28.548 C9.626,31.96 6.6,40.263 9.634,47.326 C6.615,49.274 4.907,52.743 5.171,56.297 C2.832,58.262 2.032,61.644 3.434,64.51 C3.82,65.301 4.343,65.976 4.955,66.534 C3.606,71.46 5.152,76.941 9.347,80.379 C15.031,85.035 23.446,84.196 28.1,78.515 C29.53,76.769 30.475,74.725 30.886,72.556 C34.082,73.35 37.446,73.011 40.408,71.671 C43.547,72.414 46.958,72.044 49.986,70.346 C51.954,69.244 53.58,67.687 54.753,65.816 C59.239,69 65.309,69.432 70.275,66.651 C73.293,64.956 75.467,62.338 76.655,59.349 C79.565,59.654 82.574,59.098 85.261,57.59 C91.673,53.996 94.297,46.234 91.66,39.58 C93.289,37.766 94.366,35.546 94.824,33.185 C95.184,31.921 95.293,30.579 95.117,29.243 L95.117,29.243 Z" id="Shape" sketch:type="MSShapeGroup"></path></g></g></svg>';
    // var nieve_svg = '<svg width="89px" height="100px" viewBox="0 0 89 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>Shape</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Artboard" sketch:type="MSArtboardGroup" fill="#B5B9BB"><path d="M36.786,50.287 L40.741,56.128 L48.106,56.128 L51.504,50.287 L47.924,44.067 L40.545,44.067 L36.786,50.287 L36.786,50.287 Z M39.819,97.261 L39.819,84.054 L32.44,88.204 L28.681,86.052 L28.681,81.399 L39.624,75.179 L39.624,66.499 L31.685,71.601 L31.685,62.405 L24.096,66.779 L24.096,79.247 L19.945,81.819 L16.437,79.498 L16.437,71.142 L4.919,77.64 L0,75.57 L0,70.3 L12.089,63.691 L4.528,59.89 L4.528,55.068 L8.819,52.719 L19.664,59.105 L27.197,54.759 L27.015,54.62 L19.314,50.203 L26.791,45.563 L19.286,41.217 L8.442,47.589 L4.374,45.563 L4.374,40.755 L11.713,36.632 L0,30.272 L0,25.003 L4.5,22.684 L16.044,29.35 L16.044,20.853 L19.524,18.505 L23.788,20.965 L23.76,33.683 L31.516,38.113 L31.489,29.127 L39.623,33.502 L39.623,24.822 L28.68,18.589 L28.68,13.977 L32.439,11.797 L39.818,15.948 L39.818,2.768 L44.04,0 L48.301,2.768 L48.301,15.948 L55.947,11.713 L59.792,14.257 L59.792,18.408 L48.47,24.822 L48.47,33.502 L56.214,28.778 L56.214,38.226 L64.193,33.878 L64.193,20.28 L68.037,18.491 L72.075,20.28 L72.075,28.974 L83.954,22.558 L88.107,25.088 L88.107,30.007 L76.506,36.604 L83.76,40.67 L83.76,45.367 L80,47.45 L68.862,40.867 L61.16,45.759 L68.609,50.401 L60.936,54.817 L68.862,58.967 L80,52.746 L83.578,55.276 L83.578,59.763 L76.59,63.69 L87.716,70.3 L87.716,75.488 L83.006,77.64 L72.075,71.419 L72.075,79.651 L68.148,81.845 L64.305,79.651 L64.305,67.155 L56.213,62.544 L56.213,71.224 L48.469,66.499 L48.469,75.179 L59.413,81.399 L59.413,86.319 L55.637,88.205 L48.3,84.055 L48.3,97.262 L44.04,100 L39.819,97.261 L39.819,97.261 Z" id="Shape" sketch:type="MSShapeGroup"></path></g></g></svg>';
    // var extremo_svg = '<svg width="80px" height="75px" viewBox="0 0 80 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>warning</title><desc>Created with Sketch.</desc><defs></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Artboard" sketch:type="MSArtboardGroup" fill="#D3746B"><g id="warning" sketch:type="MSLayerGroup"><path d="M35.59,2.789 L1.406,64.359 C-1.438,69.543 -0.23,74.5 7.457,74.5 L72.539,74.5 C80.244,74.5 81.435,69.543 78.59,64.359 L43.699,2.953 C42.992,1.57 41.965,0.042 39.785,0.062 C37.467,0.104 36.316,1.406 35.59,2.789 L35.59,2.789 Z M35.5,22.5 L43.5,22.5 L43.5,50.5 L35.5,50.5 L35.5,22.5 L35.5,22.5 Z M35.5,56.5 L43.5,56.5 L43.5,64.5 L35.5,64.5 L35.5,56.5 L35.5,56.5 Z" id="Shape" sketch:type="MSShapeGroup"></path></g></g></g></svg>';

    const llave_api = 'fcaf64cc744d4bcb8d615928241306';
    var clima_caracas = '';
    var clima_charallave = '';
    var clima_los_teques = '';

    // Clima Caracas
    // $.ajax({
    //     url: `http://api.weatherapi.com/v1/current.json?key=${llave_api}&q=Caracas&aqi=no&lang=es`,
    //     async: false,
    //     type: "GET",
    //     crossDomain: true,
    //     dataType: "json",
    //     success: function (response) {
    //         clima_caracas = response
    //     },
    //     error: function () {
    //         alert("error al pedir clima de Caracas, verifique su conexión");
    //     }
    // });

    // console.log(clima_caracas)

    function lluvia() {
        animar_precipitacion(50, '.lluvia', '/img/particulas/lluvia.svg', 5, 2);
    }

    function llovizna() {
        animar_precipitacion(25, '.llovizna', '/img/particulas/lluvia.svg', 5, 20);
    }

    function nieve() {
        animar_precipitacion(15, '.nieve', '/img/particulas/nieve.svg', 5, 180);
    }

    function clima_extremo() {
        animar_precipitacion(25, '.clima_extremo', '/img/particulas/extremo.svg', 5, 20);
    }

    function nublado() {
        animar_nubes(45, '.nublado', '/img/particulas/nubes.svg',60,60);
    }

    function cubierto() {
        animar_nubes(45, '.cubierto', '/img/particulas/cubierto.svg',60,60);
    }

    function tormenta_electrica() {
        var carousel_clima = document.querySelector('.tormenta_electrica');

        if(carousel_clima){
            var particula = document.createElement('img');
            particula.setAttribute('src','/img/particulas/relampago.svg');
            particula.setAttribute('style','width:auto; position:absolute')
            particula.setAttribute('class','particula')
            particula.style.left = '50vw';
            carousel_clima.appendChild(particula);
        }
        
    }

    function animar_precipitacion(cantidad, clase, archivo_particula, delay_animacion, duracion_animacion) {
        var carousel_clima = document.querySelector(clase);
        var i = 1;

        if(carousel_clima) {
            while(i < cantidad){
                var particula = document.createElement('img');
                particula.setAttribute('src',archivo_particula)
                particula.setAttribute('style','width:auto; position:absolute')
                particula.setAttribute('class','particula')
                var posX = Math.floor(Math.random() * window.innerWidth);
                var delay = Math.random() * - delay_animacion;
                var duracion = Math.random() * duracion_animacion;
                particula.style.left = posX + 'px';
                particula.style.animationDelay = delay+'s';
                particula.style.animationDuration = 1 + duracion + 's';
                carousel_clima.appendChild(particula);
                i++;
            }
        }
    }

    function animar_nubes(cantidad, clase, archivo_particula, delay_animacion, duracion_animacion) {
        let carousel_clima = document.querySelector(clase);
        let i = 1;

        if (carousel_clima) {
            while(i < cantidad){
                let particula = document.createElement('img');
                particula.setAttribute('src',archivo_particula)
                particula.setAttribute('style','width:auto; position:absolute')
                particula.setAttribute('class','particula')
                var posY = Math.floor(Math.random() * (window.innerHeight + 200) - 200);
                var posX = Math.floor(Math.random() * window.innerWidth);
                var delay = Math.random() * - delay_animacion;
                var duracion = Math.random() * duracion_animacion;
                particula.style.top = posY + 'px';
                particula.style.left = posX + 'px';
                particula.style.animationDelay = delay+'s';
                particula.style.animationDuration = 60 + duracion + 's';
                carousel_clima.appendChild(particula);
                i++;
            }
        }
    }

    lluvia();
    llovizna();
    nieve();
    tormenta_electrica();
    nublado();
    cubierto();
    clima_extremo();

});




// "day_text": "Soleado",
// "night_text": "Despejado"


// "day_text": "Parcialmente nublado",
// "night_text": "Parcialmente nublado"


// "day_text": "Nublado",
// "night_text": "Nublado"


// "day_text": "Cielo cubierto",
// "night_text": "Cielo cubierto"


// "day_text": "Neblina",
// "night_text": "Neblina"


// "day_text": "Lluvia  moderada a intervalos",
// "night_text": "Lluvia  moderada a intervalos"


// "day_text": "Nieve moderada a intervalos en las aproximaciones",
// "night_text": "Nieve moderada a intervalos en las aproximaciones"


// "day_text": "Aguanieve moderada a intervalos en las aproximaciones",
// "night_text": "Aguanieve moderada a intervalos en las aproximaciones"


// "day_text": "Llovizna helada a intervalos en las aproximaciones",
// "night_text": "Llovizna helada a intervalos en las aproximaciones"


// "day_text": "Cielos tormentosos en las aproximaciones",
// "night_text": "Cielos tormentosos en las aproximaciones"


// "day_text": "Chubascos de nieve",
// "night_text": "Chubascos de nieve"


// "day_text": "Ventisca",
// "night_text": "Ventisca"


// "day_text": "Niebla moderada",
// "night_text": "Niebla moderada"


// "day_text": "Niebla helada",
// "night_text": "Niebla helada"


// "day_text": "Llovizna a intervalos",
// "night_text": "Llovizna a intervalos"


// "day_text": "Llovizna",
// "night_text": "Llovizna"


// "day_text": "Llovizna helada",
// "night_text": "Llovizna helada"


// "day_text": "Fuerte llovizna helada",
// "night_text": "Fuerte llovizna helada"


// "day_text": "Lluvias ligeras a intervalos",
// "night_text": "Lluvias ligeras a intervalos"


// "day_text": "Ligeras lluvias",
// "night_text": "Ligeras lluvias"


// "day_text": "Periodos de lluvia moderada",
// "night_text": "Periodos de lluvia moderada"


// "day_text": "Lluvia moderada",
// "night_text": "Lluvia moderada"


// "day_text": "Periodos de fuertes lluvias",
// "night_text": "Periodos de fuertes lluvias"


// "day_text": "Fuertes lluvias",
// "night_text": "Fuertes lluvias"


// "day_text": "Ligeras lluvias heladas",
// "night_text": "Ligeras lluvias heladas"


// "day_text": "Lluvias heladas fuertes o moderadas",
// "night_text": "Lluvias heladas fuertes o moderadas"


// "day_text": "Ligeras precipitaciones de aguanieve",
// "night_text": "Ligeras precipitaciones de aguanieve"


// "day_text": "Aguanieve fuerte o moderada",
// "night_text": "Aguanieve fuerte o moderada"


// "day_text": "Nevadas ligeras a intervalos",
// "night_text": "Nevadas ligeras a intervalos"


// "day_text": "Nevadas ligeras",
// "night_text": "Nevadas ligeras"


// "day_text": "Nieve moderada a intervalos",
// "night_text": "Nieve moderada a intervalos"


// "day_text": "Nieve moderada",
// "night_text": "Nieve moderada"


// "day_text": "Nevadas intensas",
// "night_text": "Nevadas intensas"


// "day_text": "Fuertes nevadas",
// "night_text": "Fuertes nevadas"


// "day_text": "Granizo",
// "night_text": "Granizo"


// "day_text": "Ligeras precipitaciones",
// "night_text": "Ligeras precipitaciones"


// "day_text": "Lluvias fuertes o moderadas",
// "night_text": "Lluvias fuertes o moderadas"


// "day_text": "Lluvias torrenciales",
// "night_text": "Lluvias torrenciales"


// "day_text": "Ligeros chubascos de aguanieve",
// "night_text": "Ligeros chubascos de aguanieve"


// "day_text": "Chubascos de aguanieve fuertes o moderados",
// "night_text": "Chubascos de aguanieve fuertes o moderados"


// "day_text": "Ligeras precipitaciones de nieve",
// "night_text": "Ligeras precipitaciones de nieve"


// "day_text": "Chubascos de nieve fuertes o moderados",
// "night_text": "Chubascos de nieve fuertes o moderados"


// "day_text": "Ligeros chubascos acompañados de granizo",
// "night_text": "Ligeros chubascos acompañados de granizo"


// "day_text": "Chubascos fuertes o moderados acompañados de granizo",
// "night_text": "Chubascos fuertes o moderados acompañados de granizo"


// "day_text": "Intervalos de lluvias ligeras con tomenta en la región",
// "night_text": "Intervalos de lluvias ligeras con tomenta en la región"


// "day_text": "Lluvias con tormenta fuertes o moderadas en la región",
// "night_text": "Lluvias con tormenta fuertes o moderadas en la región"


// "day_text": "Nieve moderada con tormenta en la región",
// "night_text": "Nieve moderada con tormenta en la región"


// "day_text": "Nieve moderada o fuertes nevadas con tormenta en la región",
// "night_text": "Nieve moderada o fuertes nevadas con tormenta en la región"