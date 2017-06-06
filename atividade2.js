// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

// caminho para onde as imagens estão hospedadas
const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  // array com o nome das 5 imagens da galeria
  nomesDasImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

// o índice da imagem sendo mostrada
// (inicialmente, é a imagem 0: 'philae-parts.jpg')
let indiceDaFotoCorrente = 0;

// ...
function mudaImagem(operacao) {
  let slideEl = document.querySelector('#slide');
  indiceDaFotoCorrente = (indiceDaFotoCorrente + operacao + nomesDasImagens.length) % nomesDasImagens.length;
  slideEl.src = servidorDasImagens + nomesDasImagens[indiceDaFotoCorrente];
}

let botoesGaleria = document.querySelectorAll('.controle');
for (let i = 0; i < botoesGaleria.length; i++) {
  botoesGaleria[i].addEventListener('click', function(e) {
    let operacao = e.currentTarget.id === 'proximo' ? 1 : -1;
    mudaImagem(operacao);
  });
}
