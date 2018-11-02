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

$("#botao-frase").click(fraseAleatoria);