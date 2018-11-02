function trocaFraseAleatoria(data) {
    var frase = $(".frase");
    var numeroAlearorio = Math.floor(Math.random() * data.length);
    
    frase.text(data[numeroAlearorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAlearorio].tempo);
}

function fraseAleatoria() {
    $("#spinner").toggle();
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(() => {
            $("#erro").toggle();
        }, 1500);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function buscaFrase(){
    $("#spinner").toggle();
    var fraseId = $("#frase-id").val();

    var dados = { id: fraseId };

    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle()
        },2000);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function trocaFrase(data){
    console.log(data);

    let frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}

$("#botao-frase").click(fraseAleatoria);

$("#botao-frase-id").click(buscaFrase);