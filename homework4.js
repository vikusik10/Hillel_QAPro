function checkProbabilityTheory (count) {
    var even = 0;
        var odd = 0;
    for (let i = 0; i < count; i++) {
        randomNumber = 0;
        do {
            randomNumber = Random()
        } while (randomNumber < 100 || randomNumber > 1000)   

        console.log(randomNumber)
        if (randomNumber%2 == 0) {
            even ++;
        } else {
            odd ++ ;
        }
    }
        let probabilityTheoryOdd = odd/count * 100
       let probabilityTheoryEven = even/count * 100
       console.log ("Кількість згенерованих чисел:" + count)
       console.log ("Парних чисел:" + even)
       console.log ("Непарних чисел:" + odd)
        console.log("Співвідношення "+Math.floor(probabilityTheoryEven) + "% до " + Math.floor(probabilityTheoryOdd) + "%")
}
function Random() {
    let random = Math.random()*10000;
    return Math.floor(random)
    
}
checkProbabilityTheory (4)