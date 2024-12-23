function podeDirigir(idade) {
    if (idade >= 18) {
        console.log(`${idade} -> Pode entrar na auto escola`);
    } else {
        console.log(`${idade} -> Não pode entrar na auto escola`);
    }
}

podeDirigir(18)
podeDirigir(17)