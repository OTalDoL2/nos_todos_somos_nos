var result = 0;
var resultAux = 0;
var x = 0;

function key(n){

    if( x > 9999999999 ){
        return "";
    }

    if(x == 0){
        x = n;
    } 
    
    else{
        x = (x * 10) + n;
    }

    document.getElementById("valor").innerHTML = x;
}

function reset(){
    document.getElementById("valor").innerHTML = 0;
    x = 0;
}

function defineOperacao(operacao){
    if(result == 0) 
    result = x;
    console.log(result)

    aux = x;
    x = 0
    console.log(aux)
    this.operacao = operacao; 
    document.getElementById("valor").innerHTML = 0;

    // if(operacao == "+")
    // else if(operacao == "-")
    // else if(operacao == "*")
    // else if(operacao == "/")
}

function resultado(){
    switch(operacao){
        case "+":
            result = Number(result) + Number(x)
            document.getElementById("valor").innerHTML = 0;
            document.getElementById("result").innerHTML = result;
            console.log(Number(aux) + Number(x))
            break;
        
        case "-":
            result = Number(result) + Number(x)
            document.getElementById("valor").innerHTML = 0;
            document.getElementById("result").innerHTML = result;
            console.log(Number(aux) + Number(x))
            break;
    }
}

function add(){
    result = result + x;
    x = 0;
    document.getElementById("valor").innerHTML = 0;
    document.getElementById("result").innerHTML = result;
}

function sub(){
    result = result - x;
    x = 0;
    document.getElementById("valor").innerHTML = 0;
    document.getElementById("result").innerHTML = result;
}

function mult(){
    result = result * x;
    x = 0;
    document.getElementById("valor").innerHTML = 0;
    document.getElementById("result").innerHTML = result;
}

function divid(){
    result = result / x;
    x = 0;
    document.getElementById("valor").innerHTML = 0;
    document.getElementById("result").innerHTML = result;
}
