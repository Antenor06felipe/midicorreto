function TocaSomPom(idElementoAudio){
    document.querySelector('#som_tecla-pom').play();
}

const listadeTeclas = document.querySelectorAll('.tecla');

//para
for(let contador = 0; contador <listaDeTeclas.lenght; contador++) {

    const tecla = listaDeTeclas[contadpr];
    const instrumento = tecla.classlist[1]
    const idAudio = '#som_$'(evento) 

    tecla.onclick = function () {
       TocaSomPom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        console.log(evento.code == 'Space')
        if (evento.code === 'Space') {
            tecla.classlist.add('ativa');
        }
    }

    tecla.onkeyup = function () {
     tecla.classlist.remove('ativa')
    }
}








