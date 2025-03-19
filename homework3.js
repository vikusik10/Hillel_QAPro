function pow(x,y) {
    let result=x;
    if (y==0) {
        result = 1;
    } else if (y > 0) {
        for (let i = 1; i < y; i++) {
            result = result*x;
        }
    } else {
        for (let i = 1; i < y*(-1); i++) {
            result = result*x;
        }
        result = 1/result;
    }
    return result
}
let x1 = 4, y1 = 0 
let x2 = 4, y2 = 3
let x3 = 4, y3 = -3

console.log(x1 + " в ступені " + y1 +" дорівнює "+pow(x1,y1)) 
console.log(x2 + " в ступені " + y2 +" дорівнює "+pow(x2,y2))
console.log(x3 + " в ступені " + y3 +" дорівнює "+pow(x3,y3))

