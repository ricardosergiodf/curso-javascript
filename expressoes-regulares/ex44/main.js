const validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(validaIP.test("192.168.0.1"));
console.log(validaIP.test("abc.161.0.7"));
console.log(validaIP.test("1.1.0.1"));
console.log(validaIP.test("1.0.0.0"));
console.log(validaIP.test("1..."));
console.log(validaIP.test("1000"));
