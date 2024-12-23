function detectaTipo (dado) {
    if (typeof dado  === 'number') {
        console.log(typeof dado);
        console.log(`${dado} -> NUMBER`); 
    } else if (typeof dado === 'boolean') {
        console.log(typeof dado);
        console.log(`${dado} -> BOOLEAN`);
    } else if (typeof dado === 'string') {
        console.log(typeof dado);
        console.log(`${dado} -> STRING`);
    }
}

console.log(detectaTipo(1))
console.log(detectaTipo('String'))
console.log(detectaTipo(true))
console.log(detectaTipo(false))