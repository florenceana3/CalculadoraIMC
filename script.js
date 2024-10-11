var peso;
var altura;
var imc;
var resultado;

//1 recebendo o event
function calcular(event){
  //refresh dos inputs 
  event.preventDefault();
  // alert('teste');

  //recebendo os dados digitados pelo usúario
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;
  
  imc=peso/(altura*altura);
  //testando a recepção dos valores de peso e altura 
  //e tetando o cálculo do imc {
  console.log(peso);
  console.log(altura);
  console.log(imc);

  resultado = document.getElementById('resultado');
  if (imc < 17) {
    resultado.innerHTML = '</br> Seu resultado foi: '+imc.toFixed(2)+ " cuidado, você está muito abaixo do seu peso</br> ";
  }
   else if (imc>=17&&imc<18.5){
     resultado.innerHTML = '</br>Seu resultado foi: '+ imc.toFixed(2) + ' você está abaixo do seu peso</br>';
   }
   else if (imc>=18.5&&imc<25){
     resultado.innerHTML = '</br>Seu resultado foi: ' + imc.toFixed(2) + ' peso normal</br>';
   }
   else if (imc>=25&&imc<30){
    resultado.innerHTML = '</br>Seu resultado foi: ' + imc.toFixed(2) + ' você está acima do peso</br>';
   }
    else if (imc>=30){
      resultado.innerHTML = '</br>Seu resultado foi: ' + imc.toFixed(2) + ' obeso</br>';
}
}