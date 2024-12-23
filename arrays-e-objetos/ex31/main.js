const arr1 = [0,1,2,3,4]
const arr2 = [0,1,2,3]

function verificaQtdElementos(array) {
    if (array.length < 5) {
        console.log("Poucos elementos");
    } else {
        console.log("Muitos elementos");
    }
}

verificaQtdElementos(arr1)
verificaQtdElementos(arr2)