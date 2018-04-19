// Este arquivo contém o código para fazer as "abas" funcionarem.
// Quando o usuário clica em uma aba, o <article> que contém o id igual
// ao href da aba clicada será exibido. Por exemplo:
//
// 1. Usuário clica em <a href="#aliens">Sobre Aliens</a>
// 2. Este código:
//    a. torna todos os <article>...</article> invisíveis
//    b. torna visível o <article id="aliens">...</article>
//

function exibeArtigo(idDoArtigo) {
  // itera sobre todos os artigos (.aba-conteudo) e os desativa
  // itera sobre todos os itens do menu e os desativa
  document.querySelectorAll('.aba-conteudo, #menu-principal a')
    .forEach(function(el) {
      el.classList.remove('ativa');
    });

  // recupera o artigo que tem o id do link clicado
  const artigoParaExibirEl = document.querySelector(idDoArtigo);

  // coloca a classe '.ativa' nesse artigo, para que ele fique visível
  artigoParaExibirEl.classList.add('ativa');

  // ativa o item do menu que aponta para o artigo que está sendo exibido
  document.querySelector('#menu-principal a[href="' + idDoArtigo + '"]')
    .classList.add('ativa');
}

// busca e itera sobre todos os itens do menu ("sobre aliens" e
// "sobre philae") para tratar do evento de clique em cada um
const itensDoMenu = document.querySelectorAll('#menu-principal a');
itensDoMenu.forEach(function(el) {
  el.addEventListener('click', function(evento) {
    // descobre quem foi clicado e qual era o href do link e para que id
    // ele apontava
    const hrefDoLink = evento.target.href;
    const idApontadoPeloLink = hrefDoLink.substr(hrefDoLink.lastIndexOf('#'));

    exibeArtigo(idApontadoPeloLink);
  });
});

// verifica se, ao carregar a página, havia um #alguma-coisa na URL da
// página. Em caso afirmativo, se for #aliens ou #philae, ativa as suas
// respectivas abas
if (location.hash) {
  const hrefDosItensDeMenu = Array.from(itensDoMenu).map(function(el) {
    return el.href;
  });
  if (hrefDosItensDeMenu.indexOf(location.hash)) {
    // exibe o artigo que tem o id do link clicado
    exibeArtigo(location.hash);
  }
}
