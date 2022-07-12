function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
};

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//Enquanto
while (contador < ListaDeTeclas.length) {

    ListaDeTeclas[contador].onclick = tocaSomPom;

    contador =contador + 1;

    console.log(contador);
}