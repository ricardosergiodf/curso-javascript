const idade1 = 17
const idade2 = 18
const idade3 = 19

verificaIdade(idade1)
verificaIdade(idade2)
verificaIdade(idade3)

function verificaIdade(idade) {
    if (idade >= 18) {
        console.log('Idade: ' + idade + ' -> Pode entrar');
    } else {
        console.log('Idade: ' + idade + ' -> Não pode entrar');
    }
}
