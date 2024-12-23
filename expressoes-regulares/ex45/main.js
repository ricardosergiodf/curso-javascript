const validaUsuario = /^(?=.{3,16}$)[a-z0-9-_]/

console.log(validaUsuario.test("minimuns"));
console.log(validaUsuario.test("tres"));
console.log(validaUsuario.test("-__-"));
console.log(validaUsuario.test("-----------__----"));
console.log(validaUsuario.test("xesque_1"));
