
//Ativar links do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLinks(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}
links.forEach(ativarLinks);

//Ativar itens do orcamentos

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }


}

parametros.forEach(ativarProduto);