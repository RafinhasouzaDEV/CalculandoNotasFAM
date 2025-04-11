
let menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
  menuItem.forEach((item)=>
    item.classList.remove('ativo')
  );
  this.classList.add('ativo');
}

menuItem.forEach((item)=> 
  item.addEventListener('click', selectLink)
);

//EXPANDIR MENU

let expandir = document.querySelector('#expandirMenu');
let menuLateral = document.querySelector('.menu-lateral');

expandir.addEventListener('click', function(){
  menuLateral.classList.toggle('expandir')
});

//Função para calcular as notas

function calcularNotas() {
  let notaAO1 = parseFloat(document.getElementById("notaAO1").value);
  let notaAO2 = parseFloat(document.getElementById("notaAO2").value);
  let media = 6;
  
  let resultado = document.getElementById("resultado");
  let botao = document.getElementById("calcular");


  
  if (notaAO1 + notaAO2 >= media) {
      resultado.textContent = "Aprovado!";
      botao.className = "aprovado";
  } else {
      resultado.textContent = "Reprovado!";
      botao.className = "reprovado";
  } if (notaAO1 + notaAO2 > 10 || notaAO1 + notaAO2 < 0) {
      alert("Erro na execução, o valor somado não pode ser negativo ou maior que 10!");
      resultado.textContent = "";
      botao.className = "";
  }

  document.getElementById("notaAO1").value = "";
  document.getElementById("notaAO2").value = "";
    
}
  
document.getElementById("calcular").addEventListener("click", calcularNotas);
  
