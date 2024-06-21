$(function() {
    const llave_api = 'fcaf64cc744d4bcb8d615928241306';

    // posibles descripciones del clima asociados con una clase de css
    var posibles_climas = {
        "Soleado": "despejado",
        "Despejado": "despejado",
        "Parcialmente nublado": "nublado",
        "Parcialmente nublado": "nublado",
        "Nublado": "nublado",
        "Nublado": "nublado",
        "Cielo cubierto": "cubierto",
        "Cielo cubierto": "cubierto",
        "Neblina": "cubierto",
        "Neblina": "cubierto",
        "Lluvia  moderada a intervalos": "lluvia",
        "Lluvia  moderada a intervalos": "lluvia",
        "Nieve moderada a intervalos en las aproximaciones": "nieve",
        "Nieve moderada a intervalos en las aproximaciones": "nieve",
        "Aguanieve moderada a intervalos en las aproximaciones": "nieve",
        "Aguanieve moderada a intervalos en las aproximaciones": "nieve",
        "Llovizna helada a intervalos en las aproximaciones": "llovizna",
        "Llovizna helada a intervalos en las aproximaciones": "llovizna",
        "Cielos tormentosos en las aproximaciones": "tormenta_electrica",
        "Cielos tormentosos en las aproximaciones": "tormenta_electrica",
        "Chubascos de nieve": "nieve",
        "Chubascos de nieve": "nieve",
        "Ventisca": "nieve",
        "Ventisca": "nieve",
        "Niebla moderada": "cubierto",
        "Niebla moderada": "cubierto",
        "Niebla helada": "cubierto",
        "Niebla helada": "cubierto",
        "Llovizna a intervalos": "llovizna",
        "Llovizna a intervalos": "llovizna",
        "Llovizna": "llovizna",
        "Llovizna": "llovizna",
        "Llovizna helada": "llovizna",
        "Llovizna helada": "llovizna",
        "Fuerte llovizna helada": "llovizna",
        "Fuerte llovizna helada": "llovizna",
        "Lluvias ligeras a intervalos": "lluvia",
        "Lluvias ligeras a intervalos": "lluvia",
        "Ligeras lluvias": "lluvia",
        "Ligeras lluvias": "lluvia",
        "Periodos de lluvia moderada": "lluvia",
        "Periodos de lluvia moderada": "lluvia",
        "Lluvia moderada": "lluvia",
        "Lluvia moderada": "lluvia",
        "Periodos de fuertes lluvias": "lluvia",
        "Periodos de fuertes lluvias": "lluvia",
        "Fuertes lluvias": "lluvia",
        "Fuertes lluvias": "lluvia",
        "Ligeras lluvias heladas": "lluvia",
        "Ligeras lluvias heladas": "lluvia",
        "Lluvias heladas fuertes o moderadas": "lluvia",
        "Lluvias heladas fuertes o moderadas": "lluvia",
        "Ligeras precipitaciones de aguanieve": "nieve",
        "Ligeras precipitaciones de aguanieve": "nieve",
        "Aguanieve fuerte o moderada": "nieve",
        "Aguanieve fuerte o moderada": "nieve",
        "Nevadas ligeras a intervalos": "nieve",
        "Nevadas ligeras a intervalos": "nieve",
        "Nevadas ligeras": "nieve",
        "Nevadas ligeras": "nieve",
        "Nieve moderada a intervalos": "nieve",
        "Nieve moderada a intervalos": "nieve",
        "Nieve moderada": "nieve",
        "Nieve moderada": "nieve",
        "Nevadas intensas": "clima_extremo",
        "Nevadas intensas": "clima_extremo",
        "Fuertes nevadas": "clima_extremo",
        "Fuertes nevadas": "clima_extremo",
        "Granizo": "clima_extremo",
        "Granizo": "clima_extremo",
        "Ligeras precipitaciones": "lluvia",
        "Ligeras precipitaciones": "lluvia",
        "Lluvias fuertes o moderadas": "lluvia",
        "Lluvias fuertes o moderadas": "lluvia",
        "Lluvias torrenciales": "lluvia",
        "Lluvias torrenciales": "lluvia",
        "Ligeros chubascos de aguanieve": "nieve",
        "Ligeros chubascos de aguanieve": "nieve",
        "Chubascos de aguanieve fuertes o moderados": "nieve",
        "Chubascos de aguanieve fuertes o moderados": "nieve",
        "Ligeras precipitaciones de nieve": "nieve",
        "Ligeras precipitaciones de nieve": "nieve",
        "Chubascos de nieve fuertes o moderados": "nieve",
        "Chubascos de nieve fuertes o moderados": "nieve",
        "Ligeros chubascos acompañados de granizo": "clima_extremo",
        "Ligeros chubascos acompañados de granizo": "clima_extremo",
        "Chubascos fuertes o moderados acompañados de granizo": "clima_extremo",
        "Chubascos fuertes o moderados acompañados de granizo": "clima_extremo",
        "Intervalos de lluvias ligeras con tomenta en la región": "tormenta_electrica",
        "Intervalos de lluvias ligeras con tomenta en la región": "tormenta_electrica",
        "Lluvias con tormenta fuertes o moderadas en la región": "tormenta_electrica",
        "Lluvias con tormenta fuertes o moderadas en la región": "tormenta_electrica",
        "Nieve moderada con tormenta en la región": "tormenta_electrica",
        "Nieve moderada con tormenta en la región": "tormenta_electrica",
        "Nieve moderada o fuertes nevadas con tormenta en la región": "tormenta_electrica",
        "Nieve moderada o fuertes nevadas con tormenta en la región": "tormenta_electrica",
    }

    // Clima Aeropeurto
    $.ajax({
        url: `https://api.weatherapi.com/v1/current.json?key=${llave_api}&q=aeropuerto maiquetia&aqi=no&lang=es`,
        async: false,
        type: "GET",
        crossDomain: true,
        dataType: "json",
        success: function (respuesta) {
            console.log(respuesta)
            // Agregando clase al fondo del carousel
            $("#item1").addClass(posibles_climas[respuesta.current.condition.text])
            $("#item1").addClass(respuesta.current.is_day ? 'dia' : 'noche')
            // Agregando datos del clima
            $("#item1 .ubicacion").html(respuesta.location.name);
            $("#item1 .temperatura").html(respuesta.current.temp_c + "C");
            $("#item1 .condicion").html(respuesta.current.condition.text)
            $("#item1 .humedad_y_viento").html(`Humedad: ${respuesta.current.humidity}% | Viento: ${respuesta.current.wind_kph}Kph ${respuesta.current.wind_dir}`)
        },
        error: function () {
            alert("error al pedir clima del Aeropuerto Internacional Simón Bolívar, verifique su conexión");
        }
    });

    // Clima Charallave
    $.ajax({
        url: `https://api.weatherapi.com/v1/current.json?key=${llave_api}&q=Charallave&aqi=no&lang=es`,
        async: false,
        type: "GET",
        crossDomain: true,
        dataType: "json",
        success: function (respuesta) {
            console.log(respuesta)
            // Agregando clase al fondo del carousel
            $("#item2").addClass(posibles_climas[respuesta.current.condition.text])
            $("#item2").addClass(respuesta.current.is_day ? 'dia' : 'noche')
            // Agregando datos del clima
            $("#item2 .ubicacion").html(respuesta.location.name);
            $("#item2 .temperatura").html(respuesta.current.temp_c + "C");
            $("#item2 .condicion").html(respuesta.current.condition.text)
            $("#item2 .humedad_y_viento").html(`Humedad: ${respuesta.current.humidity}% | Viento: ${respuesta.current.wind_kph}Kph ${respuesta.current.wind_dir}`)
        },
        error: function () {
            alert("error al pedir clima de Charallave, verifique su conexión");
        }
    });

    // Clima Maracaibo
    $.ajax({
        url: `https://api.weatherapi.com/v1/current.json?key=${llave_api}&q=Maracaibo&aqi=no&lang=es`,
        async: false,
        type: "GET",
        crossDomain: true,
        dataType: "json",
        success: function (respuesta) {
            console.log(respuesta)
            // Agregando clase al fondo del carousel
            $("#item3").addClass(posibles_climas[respuesta.current.condition.text])
            $("#item3").addClass(respuesta.current.is_day ? 'dia' : 'noche')
            // Agregando datos del clima
            $("#item3 .ubicacion").html(respuesta.location.name);
            $("#item3 .temperatura").html(respuesta.current.temp_c + "C");
            $("#item3 .condicion").html(respuesta.current.condition.text)
            $("#item3 .humedad_y_viento").html(`Humedad: ${respuesta.current.humidity}% | Viento: ${respuesta.current.wind_kph}Kph ${respuesta.current.wind_dir}`)
        },
        error: function () {
            alert("error al pedir clima de Los Teques, verifique su conexión");
        }
    });

    // López de Micay -> una de las cudades mas lluviosas del mundo en Colombia
    $.ajax({
        url: `https://api.weatherapi.com/v1/current.json?key=${llave_api}&q=López%20de%20Micay&aqi=no&lang=es`,
        async: false,
        type: "GET",
        crossDomain: true,
        dataType: "json",
        success: function (respuesta) {
            console.log(respuesta)
            // Agregando clase al fondo del carousel
            $("#item4").addClass(posibles_climas[respuesta.current.condition.text])
            $("#item4").addClass(respuesta.current.is_day ? 'dia' : 'noche')
            // Agregando datos del clima
            $("#item4 .ubicacion").html(respuesta.location.name);
            $("#item4 .temperatura").html(respuesta.current.temp_c + "C");
            $("#item4 .condicion").html(respuesta.current.condition.text)
            $("#item4 .humedad_y_viento").html(`Humedad: ${respuesta.current.humidity}% | Viento: ${respuesta.current.wind_kph}Kph ${respuesta.current.wind_dir}`)
        },
        error: function () {
            alert("error al pedir clima de López de Micay, verifique su conexión");
        }
    });

    function lluvia() {
        animar_precipitacion(50, 'lluvia', '/img/particulas/lluvia.svg', 5, 2);
    }

    function llovizna() {
        animar_precipitacion(25, 'llovizna', '/img/particulas/lluvia.svg', 5, 20);
    }

    function nieve() {
        animar_precipitacion(15, 'nieve', '/img/particulas/nieve.svg', 5, 180);
    }

    function clima_extremo() {
        animar_precipitacion(25, 'clima_extremo', '/img/particulas/extremo.svg', 5, 20);
    }

    function nublado() {
        animar_nubes(45, 'nublado', '/img/particulas/nubes.svg',60,60);
    }

    function cubierto() {
        animar_nubes(45, 'cubierto', '/img/particulas/cubierto.svg',60,60);
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
        var carousel_clima = document.getElementsByClassName(clase);

        if(carousel_clima.length) {
            for (var c = 0; c < carousel_clima.length; c++) {
                for (var i = 0; i < cantidad; i++) {
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
                    carousel_clima[c].appendChild(particula);
                    
                }
            }
        }
    }

    function animar_nubes(cantidad, clase, archivo_particula, delay_animacion, duracion_animacion) {
        var carousel_clima = document.getElementsByClassName(clase);

        if (carousel_clima.length) {
            for (var c = 0; c < carousel_clima.length; c++) {
                for (var i = 0; i < cantidad; i++) {
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
                    carousel_clima[c].appendChild(particula);
                }
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
