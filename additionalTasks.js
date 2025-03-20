function sumOfNumbers (a) {
    let sum = 0;
        for (let i = 1; i <= a; ++i) {
    sum = sum + i;
    // console.log(sum)
    }
  return sum;
}
 console.log(sumOfNumbers(1000))

function tringleMade(n) {
    let result = "";
        for (let j = 1; j <= n; ++j) {
    result = result + "*";
    console.log(result)
    }
  return "*";
}
console.log(tringleMade(4))