//Elementos DOM
//Lista elementos
var elLista = document.querySelector('#lista');

//Modal add lista elementos
var elBtSalvar = document.querySelector('#btSalvar');
var elInputLista = document.querySelector('#inputLista');

//Listas temporarias
var listas = []

function loadListas(){
    listas = []
    var dsListas = JSON.parse(localStorage.getItem('listas'));
    elLista.innerHTML = '';

    for (const iterator of dsListas) {
        listas.push(iterator);
    } 
    
    for (const lista in dsListas) {
        elLista.innerHTML += `<a href="#!" class="collection-item">${dsListas[lista].nome}<span class="new badge" data-badge-caption=""><strong>${dsListas[lista].itens.length}</strong></span></a>`;  
    }
}

function addLista(nome){
    let item = {
        nome : nome,
        itens : [],
        itensCheck : []
    }
    listas.push(item);
    localStorage.setItem('listas',JSON.stringify(listas))
    loadListas();
}

function deleteLista(pos){

}

elBtSalvar.addEventListener('click', function(e){
    e.preventDefault();
    var nome = elInputLista.value;
    addLista(nome);
    elInputLista.value = '';
});

loadListas();