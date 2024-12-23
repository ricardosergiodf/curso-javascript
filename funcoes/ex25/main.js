function imprimePar (num) {
    while(num >= 0) {
        if (num % 2 == 0) {
            console.log(num);
        }
        num--;
    }
}

imprimePar(20)
imprimePar(100)