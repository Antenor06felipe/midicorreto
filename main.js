function tocasom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

constlistaDeTeclas = document.querySelectorAll('.tecla');

//para
for(let contador = 0; contador < listadeTeclas.length; contador++){

      const tecla = listadeTeclas[contador];
      const instrumento = tecla.classlist[1];
      const idAudio = '#som_4{intrumento}';
}

tecla.onclick = function () {
      tocasom(idAudio); 
}

tecla.onkeydon = function (evento) {

       console.log(evento.code == 'space')

       if (evento.code === 'space'){

       tecla.classlist.add('ativa');  
    }
}

tecla.onkeyup = function () {
    tecla.classlist.remove('ativa');
}

