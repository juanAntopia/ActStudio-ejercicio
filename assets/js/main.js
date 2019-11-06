'use strict' //para respetar variables definidas o funciones

//Escuchar el evento de cargado
window.addEventListener('load', () => {

    /*---------------------------- */
    
    var nameToro = document.getElementById('nameToro');
    nameToro.style.cursor = "pointer";
    nameToro.addEventListener('click', function () {
        window.open("https://es.wikipedia.org/wiki/Guillermo_del_Toro", "", "width=500px, height=500");
    });
    /*---------------------------- */
    
    
    /*------------------------ */
    var content = document.getElementById('content');
    var title = document.getElementById('title-header');

    setInterval(() => {
        if (window.innerWidth < 768) {
            content.style.width = "90%";
            title.style.fontSize = "1.5em";
        }

    }, 1000);
    

    var divContent = document.getElementById('divContent');
    var divContent2 = document.getElementById('divContent2');
    var valor = divContent.innerHTML;
    var valor2 = divContent2.innerHTML;


    setInterval(() => {
        if (window.innerWidth < 768) {
            divContent.innerHTML = valor2;
            divContent2.innerHTML = valor;
        }
    }, 1000);
    
    
    /*------------------------ */

    let indice = 1;//Declarado como parámetro para inicializar el slider

    muestraSlide(indice);//función para mostrar slider y que posición

    //recoger el botón y su evento
    var atras = document.querySelector('#atras');
    atras.addEventListener('click', function () {
        //cada click retrocede 1 imagen
        avanzaSlide(-1);
    });

    //recoger el botón y su evento
    var siguiente = document.querySelector('#siguiente');
    siguiente.addEventListener('click', function () {
        //cada click hace que avance
        avanzaSlide(1);
    });

    //recoger el dot y su evento
    var dot_slide1 = document.querySelector('#dot1');
    dot_slide1.addEventListener('click', function () {
        posicionSlide(1);
    });

    //recoger el dot y su evento
    var dot_slide2 = document.querySelector('#dot2');
    dot_slide2.addEventListener('click', function () {
        posicionSlide(2);
    });
    //recoger el dot y su evento
    var dot_slide3 = document.querySelector('#dot3');
    dot_slide3.addEventListener('click', function () {
        posicionSlide(3);
    });
    //recoger el dot y su evento
    var dot_slide4 = document.querySelector('#dot4');
    dot_slide4.addEventListener('click', function () {
        posicionSlide(4);
    });

    //función para avanzar con el slider
    function avanzaSlide(n) {
        muestraSlide(indice += n);
    }

    //ca a la posición en donde está el slider
    function posicionSlide(n) {
        muestraSlide(indice = n);
    }

    setInterval(function () {
        muestraSlide(indice += 1);
    }, 5000);

    //función que muestra el slider
    function muestraSlide(n) {
        let i;//para el ciclo for
        let slides = document.getElementsByClassName('myslider');//recoger los eleentos con la clase myslider
        let dots = document.getElementsByClassName('dot');//recoger los elementos ocn la clase dot

        //validar que no sea más de 4 elementos y si es mayor regresarlo al primero
        if (n > slides.length) {
            indice = 1;
        }

        //validar que no busque elementos debajo de la longitud que existe
        if (n < 1) {
            indice = slides.length;
        }

        //recorrer cada elemento del array y desaparecer los demás
        for (i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }

        //recorrer cada elemetno y agregarle la clase activo
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" activo", "");
        }

        //Entrará a cada slide y lo mostrará
        slides[indice - 1].style.display = "block";
        //Agregará en cada dot a su índice y le agregará la clase activo
        dots[indice - 1].className += " activo";

    }
});