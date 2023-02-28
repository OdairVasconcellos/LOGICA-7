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

function dois() {

    var a = Number(document.getElementById("umn").value);
    var b = Number(document.getElementById("doisn").value);
var resultado = [a, b]

document.getElementById("resultado").innerHTML = resultado;

}


function tres() {

    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);

    let resultado = [a , b , c];
    resultado = resultado.sort((a,b) => a - b);



    document.getElementById("crescente").innerHTML = resultado;

}

function tr() {

    var d = Number(document.getElementById("d").value);
    var e = Number(document.getElementById("e").value);
    var f = Number(document.getElementById("f").value);

    let resultado = [f , d , e];
    resultado = resultado.sort((f,d) => d - f);



    document.getElementById("decrescente").innerHTML = resultado;

}
