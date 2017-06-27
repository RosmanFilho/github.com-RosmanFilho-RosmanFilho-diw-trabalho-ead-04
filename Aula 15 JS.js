var Caracterminusculo  = 0;
var Caractermaiusculos = 0;
var Caractersimbolos   = 0;
var qtdNumeros         = 0; 
var TotalcriteriosAprovados = 0;


var spanSenhaInserida;                  
var spanCaracterTotal;      
var spanCaracterminusculo; 
var spanCaractermaiusculos; 
var spanCaractersimbolos;             
var spanqtdNumeros;              
var spancriteriosAprovados;             


var coraceitavel    = 'green';
var cornaoAceitavel = 'red';

window.onload = init;

function init() {

  spanSenhaInserida        = document.getElementById('spanSenhaInserida');  
  spanCaracterTotal      = document.getElementById('spanCaracterTotal');
  spanCaracterminusculo = document.getElementById('spanCaracterminusculo');
  spanCaractermaiusculos = document.getElementById('spanCaractermaiusculos');
  spanCaractersimbolos   = document.getElementById('spanCaractersimbolos');
  spanqtdNumeros    = document.getElementById('spanqtdNumeros'); 
  spancriteriosAprovados   = document.getElementById('spancriteriosAprovados'); 

  var pass     = document.getElementById('pass');
  pass.onkeyup = validarSenha;
}

function validarSenha() {

  var senhaInserida                = this.value;
  var quantidadeCaracteresTotal    = senhaInserida.length;
  var SenhaAceitavel               = document.getElementById('SenhaAceitavel');
  

  obterQuantidades(senhaInserida); 
  validarCriteriosAprovados();

  ValidacaoDeCor(spanSenhaInserida,TotalcriteriosAprovados,3);  
  ValidacaoDeCor(spanCaracterTotal,quantidadeCaracteresTotal,8);
  ValidacaoDeCor(spanCaracterminusculo,Caracterminusculo,1);
  ValidacaoDeCor(spanCaractermaiusculos,Caractermaiusculos,1);
  ValidacaoDeCor(spanCaractersimbolos,Caractersimbolos,1);
  ValidacaoDeCor(spanqtdNumeros,qtdNumeros,1);
  ValidacaoDeCor(spancriteriosAprovados,TotalcriteriosAprovados,3);
  
  spanSenhaInserida.innerHTML        = 'Senha digitada:                      ' + senhaInserida; 
  spanCaracterTotal.innerHTML      = 'Quantidade de caracteres total:      ' + quantidadeCaracteresTotal;  
  spanCaracterminusculo.innerHTML = 'Quantidade de caracteres minúsculos: ' + Caracterminusculo;
  spanCaractermaiusculos.innerHTML = 'Quantidade de caracteres maiúsculos: ' + Caractermaiusculos;
  spanCaractersimbolos.innerHTML   = 'Quantidade de símbolos:              ' + Caractersimbolos;
  spanqtdNumeros.innerHTML    = 'Quantidade de números:               ' + qtdNumeros;
  spancriteriosAprovados.innerHTML   = 'Quantidade de critérios aprovados:   ' + TotalcriteriosAprovados + ' de 4';  
  SenhaAceitavel.checked             = (TotalcriteriosAprovados >= 3) && (quantidadeCaracteresTotal >= 8);
  
  if (quantidadeCaracteresTotal == 0)
    limpar();
}

function ValidacaoDeCor(span, criterio, valor) {

  span.style.color = (criterio >= valor) 
                     ? coraceitavel 
                     : cornaoAceitavel;
}

function obterQuantidades(senhaInserida) {

  Caracterminusculo = 0;
  Caractermaiusculos = 0;  
  Caractersimbolos   = 0;  
  qtdNumeros    = 0;  

  for (var i = 0; i < senhaInserida.length; i++) {
  
    letraAtual = senhaInserida.charAt(i);
    
    if (letraAtual == ' ') {
      Caractersimbolos++;
    }
    else {	
      if (isLetra(letraAtual)) {

        if (isMaiusculo(letraAtual)) {
          Caractermaiusculos++;
        }
        else {
          Caracterminusculo++;
        }
      }
      else {
      
        if (isNumero(letraAtual)) {
          qtdNumeros++;
        }
        else {
          Caractersimbolos++;
        }
      }
    }  
  }
}

function validarCriteriosAprovados() {

  TotalcriteriosAprovados = 0;
  
  if (Caractermaiusculos > 0)
    TotalcriteriosAprovados++;
	
  if (Caracterminusculo > 0)
    TotalcriteriosAprovados++;
	
  if (Caractersimbolos > 0)
    TotalcriteriosAprovados++;
	
  if (qtdNumeros > 0)
    TotalcriteriosAprovados++;
}

function isMaiusculo(letra) {

  return (letra == letra.toUpperCase());
}

function isLetra(letra) {   

  var caractere = letra.charCodeAt(0);
  
  return ( ( (caractere >= 65) && (caractere <= 90))   || 
           ( (caractere >= 97) && (caractere <= 122) ) );
}

function isNumero(letra) {  
 
  return !isNaN(letra);
}

function limpar() {

  spanSenhaInserida.innerHTML        = '';
  spanCaracterTotal.innerHTML      = '';
  spanCaracterminusculo.innerHTML = '';
  spanCaractermaiusculos.innerHTML = '';
  spanCaractersimbolos.innerHTML   = '';
  spanqtdNumeros.innerHTML    = '';
  spancriteriosAprovados.innerHTML   = '';
}