
//  1-misol

var N = 10000

for(let j=1; j <= N; j++){
    result = mukammal(j)
    if(result === true){
        console.log(j)
    }
}

function mukammal(number) {
    var summ = 0
    for (let i = 1; i < number; i++) {
        if ((number % i) == 0) {
            summ = summ + i
        }
    }

    if (summ == number)
        return true
    else
        return false
}
