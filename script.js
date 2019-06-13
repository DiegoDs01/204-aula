const maisa = document.querySelector("img");
const lista = document.querySelector("ul");
const roleta = document.querySelector("main img");
const h1 = document.querySelector("h1");

function abrirMenu(){
    // if(lista.classList.contains("ativa")){
    //     lista.classList.remove("ativa");
    // }else{
    //     lista.classList.add("ativa");
    // }
    lista.classList.toggle("ativa");
}

function rodaRoda(){
    roleta.classList.toggle("roda-jequiti");
    h1.innerHTML = "É peruuuuuca";

}

h1.innerHTML = "Bom dia & Cia"

roleta.onclick = rodaRoda;
maisa.onclick = abrirMenu;

