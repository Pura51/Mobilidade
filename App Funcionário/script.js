
  function toggleMenu(element) {
    // Adicione a lógica para mostrar/ocultar o menu ou execute outras ações
    console.log("Ícone do menu clicado para", element.nextElementSibling.innerText);
}

const INPUT_PESQUISA = document.getElementById('celula');
const TABELA = document.getElementById('tabela');

INPUT_PESQUISA.addEventListener('keyup', () =>{
  let expressao = INPUT_PESQUISA.value.toLowerCase();
  
  if(expressao.length === 1){
    return;
  }

  let linhas = TABELA.getElementsByTagName('tr'); 

  console.log(linhas);

  for(let posicao in linhas){
    if(true == isNaN(posicao)){
      continue;
    }
    let conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase();

    if(true == conteudoDaLinha.includes(expressao)){
      linhas[posicao].style.display = '';
    } else{
      linhas[posicao].style.display = 'none';
    }
  }
});



function toggleDetail(detailId) {
  var detailElement = document.getElementById(detailId);
  if (detailElement.style.display === "none") {
      detailElement.style.display = "block";
  } else {
      detailElement.style.display = "none";
  }
}

function toggleMenu(menu) {
  // Se algum outro menu estiver aberto, feche-o
  document.querySelectorAll('.menu-content').forEach(function(otherMenu) {
      if (otherMenu !== menu) {
          otherMenu.style.display = 'none';
      }
  });
  // Mostra ou esconde o menu clicado
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}



