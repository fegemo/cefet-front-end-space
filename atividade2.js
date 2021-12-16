// Faça o exercício DOS PARÁGRAFOS neste arquivo
// Este arquivo AINDA NÃO está incluído no arquivo HTML

let botoes = document.querySelectorAll('.botao-expandir-retrair');

for (let botaoEl of botoes) {
  botaoEl.addEventListener('click', function(e) {
    let colocou = e.currentTarget.parentNode.classList.toggle('expandido');
    e.currentTarget.innerHTML = colocou ? '-' : '+';
  });
}


