# Exploração Espacial

Uma página espacial.

## Atividade 1: expandir/retrair parágrafos

Você deve criar um código em Javascript, no arquivo `exercicio1.js`, para
fazer os botões "+" expadirem ou retrairem o texto dos parágrafos,
**alternadamente**. Leia este enunciado e depois faça
os [exercícios 1.1](#exercício-1.1), [1.2](#exercício-1.2)
e [1.3](#exercício-1.3).

O arquivo `estilos.css` contém uma regra para uma classe chamada `.expandido`.
Ela contém as propriedades necessárias para que um parágrafo seja exibido
de forma completa, em vez de apenas a primeira linha:

```css
/* estilo inicial do parágrafo */
p {
  height: 1em;            /* parágrafo com altura de 1 linha apenas */
  overflow: hidden;         /* oculta o que não couber no parágrafo */
  text-overflow: ellipsis;  /* coloca reticências ao final od texto */
}

/* estilo quando <p class="expandido"> */
p.expandido {
  height: auto;             /* altura suficiente para mostrar tudo */
}
```

### Exercício 1.1

Neste exercício, atribua um evento de clique para cada botão
`.botao-expandir-retrair`, passando uma _callback_ que apenas mostra uma
mensagem de alerta (_i.e._, `alert('mensagem aqui');`.

### Exercício 1.2

Altere o código para que o botão expanda ou retraia **apenas o parágrafo
dentro do qual ele está**. Para isso, será necessário usar o
parâmetro `e` (ou `evt`, ou `evento`) da _callback_ de `click` para
detectar que parágrafo contém o botão que foi clicado.

Esse parâmetro possui informações sobre o evento, como **o elemento HTML
que foi clicado** (`e.currentTarget`), as coordenadas (x,y) do mouse
no momento do clique (`e.screenX` e `e.screenY`), qual botão do
mouse foi usado (`e.button`) e [algumas outras coisas][click-event]. Veja
mais no [FAQ](#faq).

Para expandir um parágrafo, basta colocar a classe `.expandido` nele e,
para retraí-lo, basta remover essa classe. Veja o [FAQ](#faq) se tiver
dúvidas sobre como colocar/remover uma classe em/de um elemento do DOM.
Pode ser mais fácil alternar a classe (em vez de removê-la ou adicioná-la),
como descrito [nos slides][alternando-uma-classe].

**[Importante]** Este exercício deve ser feito sem utilizar `id`s, para que,
ao acrescentar novos parágrafos na página, não seja necessário fazer
nenhuma alteração no código JavaScript.

### Exercício 1.3

Além de expandir/retrair o parágrafo, **o conteúdo do botão** deve alternar
entre `-` e `+`, indicando se o próximo clique vai retrair ou expandir.
O [FAQ](#faq) contém uma pergunta sobre como alterar o conteúdo de um elemento.

## Atividade 2: galeria de imagens

Nesta atividade, você vai criar uma galeria de imagens. Os botões `#anterior`
e `#proximo` devem permitir que o usuário alterne a imagem que está
sendo exibida e o código para isso deve ser feito no arquivo `exercicio2.js`.

Leia este enunciado e depois faça
o [exercício 2.1](#exercício-2.1) e, opcionalmente, os desafios
[2.2](#desafio-2.2) e [2.3](#desafio-2.3).

É possível fazer a galeria ao menos de **2 formas diferentes**:

1. Ter apenas um `<img>` no DOM e trocar o atributo `src` dela para o da
   imagem corrente
   - É necessário ter uma variável que indica o índice (no _array_) da
     imagem corrente
1. **[Mais difícil]** Ter um `<img>` para cada imagem
   exibida e mostrar apenas a imagem corrente.
   - A ideia é colocar as `<img>`s no HTML dentro de um _container_, como uma
     `<div>` ou uma `<figure>`, que tenha o tamanho suficiente para mostrar
     apenas 01 imagem
   - Aí, ao clicar em um botão, altera qual a imagem que está sendo mostrada,
     o que pode ser feito usando `display: inline` _vs_ `display: none`,
     ou `left: 0` + `position:absolute` ou outras formas de alteração
     de visibilidade

### Exercício 2.1

No arquivo `exercicio2.js` (que ainda não está incluído), crie um código que
pegue os botões `#anterior` e `#proximo` (ambos têm a classe `.controle`) e
atrele, a cada um, um evento `click`.

A função associada ao clique deve determinar o índice da próxima imagem a ser
mostrada. O caminho para essa imagem deve ser formado concatenando
(veja [FAQ](#faq)) a constante `servidorDasImagens` com o nome da
imagem atual.

### Desafio 2.2

Faça com que a galeria seja "circular": ao ultrapassar a última ou a
primeira imagem, ela deve voltar para a primeira ou a última,
respectivamente. Veja o [FAQ](#faq) se precisar de ideias sobre isso.

### Desafio 2.3

Organize o código de forma que a funcionalidade de alternar a imagem
esteja em apenas 01 função e o evento de clique nos botões
`#anterior` e `#proximo` apenas chamem essa função, passando `-1` ou
`1` como argumento.

Essa é uma **ótima prática para programar**: evitar código repetido, levando
o código que repete para dentro de uma nova função, que possui um parâmetro
(_e.g._, `incrementoNoIndice`) para indicar o que ela deve fazer.

## FAQ

1. O que é o DOM mesmo?
   - É a forma como o JavaScript enxerga a página HTML, em uma estrutura
     de árvore. Veja mais no [slide sobre o DOM][dom].
1. Como atribuir um evento de clique a um elemento?
   - Veja o slide sobre [clicando em um botão][clicando-botao].
1. Como pegar mais de um elemento de uma vez?
   - Usando o `document.querySelectorAll` (com `All` no final) e passando um
     seletor que retorne mais de um elemento. Veja o
     [slide sobre o `querySelectorAll`][query-selector-all].
1. Como itero em um _Array_ ou no resultado do `document.querySelectorAll`?
   - Há três formas (veja [slides sobre repetição][iteracao]), mas as duas
     melhores são:
     ```js
     // forma com 'for (let variavel of lista)'
     let itensDaListaOrdenada = document.querySelectorAll('ol > li');
     for (let itemEl of itensDaListaOrdenada) {
       // faz algo com itemEl
     }
     ```
     ```js
     // forma com forEach
     let itensDaListaOrdenada = document.querySelectorAll('ol > li');
     itensDaListaOrdenada.forEach(function(itemEl) {
       // faz algo com itemEl
     });
     ```
1. Como colocar uma classe em um elemento usando JavaScript?
   - Todo elemento do DOM tem uma propriedade `classList`, que possui os
     métodos `elemento.classList.add('nova-classe')`,
     `elemento.classList.remove('classe-a-tirar')` e
     `elemento.classList.toggle('classe-a-colocar-ou-tirar')`. Para mais
     informações, veja o [slide sobre colocando/tirando classes][classes].
1. Como pegar o elemento que foi clicado, dentro da _callback_?
   - Basta usar o `e.currentTarget`, como descrito no
     [slide sobre "argumento de click"][argumento-de-click].
1. Como alterar o conteúdo de um elemento?
   - Todo elemento possui a propriedade `elemento.innerHTML`, que pode ser
     alterada, conforme descrito no
     [slide sobre alteração de conteúdo][alterando-o-conteudo]
1. O que é `const`?
   - É o irmão mais conservador do `let`. Veja o [slide sobre `const`][const].
1. O que é concatenar Strings?
   - É juntar duas ou mais Strings para formar outra. Veja o
     [slide sobre Strings][tipo-string].
1. Como "chegar à última imagem e **dar a volta**"?
   - É possível fazer isso usando `if/else` e o tamanho do _array_
     (_i.e._, `variavelComArray.length`)
   - **[Desafio]** Há uma forma mais elegante do que essa primeira que
     usa `if/else`, que é usando o operador de resto da divisão (_i.e._, `%`)



[alternando-uma-classe]: https://fegemo.github.io/cefet-front-end/classes/js2/#alternando-uma-classe
[dom]: https://fegemo.github.io/cefet-front-end/classes/js1/#conhecendo-o-dom
[click-event]: https://developer.mozilla.org/en-US/docs/Web/Events/click
[clicando-botao]: https://fegemo.github.io/cefet-front-end/classes/js1/#evento-clique
[query-selector-all]: https://fegemo.github.io/cefet-front-end/classes/js2/#selecionando-varios-elementos
[iteracao]: https://fegemo.github.io/cefet-front-end/classes/js2/#for-formas-preferiveis
[classes]: https://fegemo.github.io/cefet-front-end/classes/js2/#colocando-removendo-classes
[argumento-de-click]: https://fegemo.github.io/cefet-front-end/classes/js2/#argumento-de-click
[alterando-o-conteudo]: https://fegemo.github.io/cefet-front-end/classes/js2/#alterando-o-conteudo
[tipo-string]: https://fegemo.github.io/cefet-front-end/classes/js1/#o-tipo-string
[const]: https://fegemo.github.io/cefet-front-end/classes/js2/#definindo-constantes
