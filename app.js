/* Variables y Constantes*/

    const inputNum = document.querySelector('.inputNumero');
    const botonEnviar = document.querySelector('.boton-enviar');
    const numeroRandom = Math.floor(Math.random()*100)+1;
    const body = document.querySelector('body');

    const masAlto = document.querySelector('.masParrafo');
    const masBajo = document.querySelector('.menosParrafo');
    const hasGanado = document.querySelector('.ganadoParrafo');
    const hasPerdido = document.querySelector('.perdidoParrafo');

    let fallos = document.querySelector('.intentosParrafo');

    let intentos = 1;
    let numerosIntroducidos = 'Intentos: ';

/* Eventos */

    botonEnviar.addEventListener('click', ()=>{
        numeroIntroducido = inputNum.value;
        console.log(numeroIntroducido);
        intentos ++;
        
        if (intentos === 10){
            perdidoParrafo();
        } else {
            if(numeroIntroducido < numeroRandom){
                console.log('Mas alto!')
                actualizarFallos();
                numeroMas();
            } else if (numeroIntroducido > numeroRandom) {
                console.log('Mas bajo!!!')
                actualizarFallos();
                numeroMenos();
            } else if (numeroIntroducido === numeroIntroducido){
                //alert('Has ganado!')
                ganadoParrafo();
            }
        }
    })


/* Funciones */

    function actualizarFallos(){
        numerosIntroducidos = numerosIntroducidos + ' '+ numeroIntroducido + ' - ';
        fallos.innerHTML = numerosIntroducidos;
    }

    function numeroMas(){
        masAlto.style.display = "block";
        masBajo.style.display = "none";
    }

    function numeroMenos(){
        masBajo.style.display = "block";
        masAlto.style.display = "none";
    }

    function perdidoParrafo(){
        hasPerdido.style.display = "block";
        hasPerdido.style.color = "black";
        hasPerdido.style.backgroundColor = "red";
        ocultarMasMenos()
        volverAJugar()
    }
    function ganadoParrafo(){
        hasGanado.style.display = "block";
        hasGanado.style.color = "white";
        hasGanado.style.backgroundColor = "green";
        ocultarMasMenos()
        volverAJugar()
    }

/* Funciones de apoyo */

    function volverAJugar(){
        var botonActualizar = document.createElement("button");
        botonActualizar.innerHTML = "Volver a Jugar";
        body.appendChild(botonActualizar);

        botonActualizar.addEventListener ("click", function() {
            window.location.reload();
        });
    }

    function ocultarMasMenos(){
        masBajo.style.display = "none";
        masAlto.style.display = "none";
    }

