//Elementos DOM
//Lista elementos
var elLista = document.querySelector('#lista');


//Modal add lista elementos
var elBtSalvar = document.querySelector('#btSalvar');
var elInputLista = document.querySelector('#inputLista');

var listas = [
    {
        nome: 'Lista de compras Carrefour',
        itens: [],
        itensCheck: []
    },
    {
        nome: 'Lista de compras Ferreira Costa',
        itens: ['Parafusos', 'Janela de Alumínio'],
        itensCheck: ['Pregos']
    },
    {
        nome: 'Lista de Medicamentos',
        itens: [],
        itensCheck: []
    },
    {
        nome: 'Lista de Materiais para construção',
        itens: [],
        itensCheck: []
    },
    {
        nome: 'Lista de Presentes',
        itens: [],
        itensCheck: []
    }
];

function loadListas(){
    elLista.innerHTML = '';
    for (const lista in listas) {
        elLista.innerHTML += `<a href="#!" class="collection-item">${listas[lista].nome}<span class="new badge" data-badge-caption=""><strong>${listas[lista].itens.length}</strong></span></a>`;
    }
}

function addLista(nome){
    let item = {
        nome : nome,
        itens : [],
        itensCheck : []
    }

    listas.push(item);
    loadListas();
}

loadListas();

elBtSalvar.addEventListener('click', function(e){
    e.preventDefault();
    addLista(elInputLista.value);
    // console.log(text);
    //text = '';
    elInputLista.value = '';
});