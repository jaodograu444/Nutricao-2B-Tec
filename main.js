var titulo = document.querySelector(".titulo");
titulo.textContent = "joao Nutrição";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent;
 
 var tdImc = paciente.querySelector(".info-imc");
 var imc = peso / (altura * altura);
 

tdImc.textContent = imc;

if (peso < 0 ) {
   tdPeso.textContent = "Peso inválido!";
 } 


