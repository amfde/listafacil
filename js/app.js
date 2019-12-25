//Elementos DOM
//Lista elementos
var elLista = document.querySelector('#lista');


//Modal add lista elementos
var elBtSalvar = document.querySelector('#btSalvar');
var elInputLista = document.querySelector('#inputLista');


function loadListas(){
    var listas = [
        {
            nome: 'Lista de compras Carrefour',
            itensCheck: [],
            itensUncheck: []
        },
        {
            nome: 'Lista de compras Ferreira Costa',
            itensCheck: ['Parafusos', 'Ferraments'],
            itensUncheck: []
        },
        {
            nome: 'Lista de Medicamentos',
            itensCheck: [''],
            itensUncheck: []
        },
        {
            nome: 'Lista de Materiais para construção',
            itensCheck: [],
            itensUncheck: []
        },
        {
            nome: 'Lista de Presentes',
            itensCheck: [],
            itensUncheck: []
        }
    ];

    for (const lista in listas) {
        elLista.innerHTML += `<a href="#!" class="collection-item">${listas[lista].nome}<span class="new badge" data-badge-caption=" ${(listas[lista].itensCheck.length > 1)?'Itens restantes':'Item restante'}"><strong>${listas[lista].itensCheck.length}</strong></span></a>`;
    }
}

loadListas();


elBtSalvar.addEventListener('click', function(e){
    e.preventDefault();
    var text = elInputLista.value;
    console.log(text);
    text = '';
    elInputLista.value = '';
});


elItem.addEventListener('click', function(){
    console.log('teste')
})