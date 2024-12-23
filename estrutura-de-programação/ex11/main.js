const idade1 = 19;
const idade2 = 20;
const idade3 = 17;
const isCNH1 = false
const isCNH2 = true
const isCNH3 = false

verificaIdadeECNH(idade1, isCNH1)
verificaIdadeECNH(idade2, isCNH2)
verificaIdadeECNH(idade3, isCNH3)

function verificaIdadeECNH(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log(`Idade: ${idade}, CNH: ${cnh} -> LIBERADO!`);
    } else if (idade >= 18 && cnh == false) {
        console.log(`Idade: ${idade}, CNH: ${cnh} -> SEM CNH!`);
    } else if (idade < 18 && cnh == false) {
        console.log(`Idade: ${idade}, CNH: ${cnh} -> TA TODO ERRADO!`);
    }
}
