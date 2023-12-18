// $(".menu > ul > li").click(function (e) {
//     // remove active from already active
//     $(this).siblings().removeClass("active");
//     // add active to clicked
//     $(this).toggleClass("active");
//     // if has sub menu open it
//     $(this).find("ul").slideToggle();
//     // close other sub menu if any open
//     $(this).siblings().find("ul").slideUp();
//     // remove active class of sub menu items
//     $(this).siblings().find("ul").find("li").removeClass("active");
//   });
  
//   $(".menu-btn").click(function () {
//     $(".sidebar").toggleClass("active");
//   });
  
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

function loadContent(page) {
  const contentDiv = document.querySelector('.home-content');
  const xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      contentDiv.innerHTML = this.responseText;
    }
  };
  
  if (page === 'home') {
    window.location.href = 'index.html';
  } else {
    xhttp.open('GET', page + '.html', true);
    xhttp.send();
  }
}