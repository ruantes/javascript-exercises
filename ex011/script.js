var numero = Number(prompt("Digite um valor em dólar"))
var taxaCambio = 5.68
var realConvertido = numero * taxaCambio

alert(`Esse valor de US$${numero} = R$${
    realConvertido.toFixed(2)}`)