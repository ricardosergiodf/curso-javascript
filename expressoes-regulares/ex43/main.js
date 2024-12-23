const verificaMarca = /Marca: (Nike|Adidas|Puma|Asics)/

console.log(verificaMarca.test("Marca: Nike"));
console.log(verificaMarca.test("M: Adidas"));
console.log(verificaMarca.test("teste"));
console.log(verificaMarca.test("Marca: Puma"));
console.log(verificaMarca.test("Marca:Asics"));
console.log(verificaMarca.test("Marca: Asics Nike"));
console.log(verificaMarca.test("Marca: teste"));
