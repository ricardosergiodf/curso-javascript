const regex = /\d+ID\b/

console.log(regex.test("123ID"));
console.log(regex.test("abcId"));
console.log(regex.test("abcID"));
console.log(regex.test("ID"));
