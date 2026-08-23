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
