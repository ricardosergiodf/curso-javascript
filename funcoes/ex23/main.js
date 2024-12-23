function verificaTexto(texto) {
    if (texto.length > 10) {
        console.log("Texto muito longo");
    } else {
        console.log("Texto dentro do limite");
        
    }
}

verificaTexto('teste')
verificaTexto('teste com mais de 10 caracteres')
verificaTexto('textotexto')