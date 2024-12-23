velocidade1 = 50
velocidade2 = 100

verificaVelocidade(velocidade1)
verificaVelocidade(velocidade2)

function verificaVelocidade(velocidade) {
    if (velocidade > 80) {
        console.log(`${velocidade} -> Maior que 80. MULTADO!`);
    } else {
        console.log(`${velocidade} -> Menor que 80. LIBERADO!`);
    }
}