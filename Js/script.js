function maior() {

    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var numero3 = Number(document.getElementById("numero3").value);
    var resultado;

    if (numero1 > numero2)
        resultado = numero1
    else if (numero2 > numero3)
        resultado = numero2
    else if (numero3 > numero1)
        resultado = numero3
    alert(resultado)

}

function parimpar() {

var qual = Number(document.getElementById("qual").value);

if(qual % 2 === 0) 
    alert("O número é par")
    else
        alert("O número é impar")

}