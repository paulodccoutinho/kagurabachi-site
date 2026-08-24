// Seleciona o botão do menu mobile
const menuMobile = document.getElementById('menuMobile');

// Seleciona a área de navegação
const navegacao = document.querySelector('.navegacao');

// Detecta o clique no botão
menuMobile.addEventListener('click', function () {
  // Alterna a classe "ativo"
  navegacao.classList.toggle('ativo');

  // Verifica se o menu está aberto
  const menuAberto = navegacao.classList.contains('ativo');

  // Atualiza o símbolo do botão
  if (menuAberto) {
    menuMobile.textContent = '✕';
  } else {
    menuMobile.textContent = '☰';
  }

  // Atualiza a informação de acessibilidade
  menuMobile.setAttribute('aria-expanded', menuAberto);
});

// ==============================
// DETALHES DOS PERSONAGENS
// ==============================

// Seleciona todos os botões "Ver mais"
const botoesDetalhes = document.querySelectorAll('.botao-detalhes');

// Percorre todos os botões encontrados
botoesDetalhes.forEach(function (botao) {
  // Detecta o clique no botão atual
  botao.addEventListener('click', function () {
    // Encontra o card correspondente ao botão clicado
    const card = botao.closest('.personagem-card');

    // Alterna a classe "ativo"
    card.classList.toggle('ativo');

    // Verifica se o card está aberto
    const cardAberto = card.classList.contains('ativo');

    // Atualiza o texto do botão
    if (cardAberto) {
      botao.textContent = 'Ver menos';
    } else {
      botao.textContent = 'Ver mais';
    }
  });
});

// ==============================
// FILTRO DE PERSONAGENS
// ==============================

// Seleciona todos os botões de filtro
const filtros = document.querySelectorAll('.filtro');

// Seleciona todos os cards de personagens
const personagens = document.querySelectorAll('.personagem-card');

// Percorre todos os filtros
filtros.forEach(function (filtro) {
  // Detecta o clique no filtro
  filtro.addEventListener('click', function () {
    // Obtém a categoria do botão clicado
    const categoriaSelecionada = filtro.dataset.categoria;

    // Remove a classe "ativo" de todos os filtros
    filtros.forEach(function (botao) {
      botao.classList.remove('ativo');
    });

    // Adiciona a classe "ativo" ao botão clicado
    filtro.classList.add('ativo');

    // Percorre todos os personagens
    personagens.forEach(function (personagem) {
      // Obtém a categoria do personagem
      const categoriaPersonagem = personagem.dataset.categoria;

      // Mostra todos os personagens
      if (categoriaSelecionada === 'todos') {
        personagem.classList.remove('escondido');
      }

      // Mostra apenas os personagens da categoria selecionada
      else if (categoriaPersonagem === categoriaSelecionada) {
        personagem.classList.remove('escondido');
      }

      // Esconde os demais personagens
      else {
        personagem.classList.add('escondido');
      }
    });
  });
});
