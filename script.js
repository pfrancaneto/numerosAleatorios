
function gerar() {
  const n1 = Number(document.querySelector('#num1').value);
  const n2 = Number(document.querySelector('#num2').value);
  const resultado = document.querySelector('.resultado');
  
  resultado.innerHTML = Math.floor(Math.random() * (n2 - n1 + 1) + n1);
}


function resetar() {
  document.querySelector('#num1').value = "";
  document.querySelector('#num2').value = "";
  document.querySelector('.resultado').innerHTML = "";
}

