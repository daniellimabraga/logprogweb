function calculaArea2(){
    //recuperando entradas
    var base = document.getElementById("base").value;
    let altura =  document.getElementById("altura").value;

    //processamento
    var area = (base*altura)/2;

    //saida
    document.getElementById("area").value = area;
    }