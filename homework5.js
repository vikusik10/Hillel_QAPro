var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };
services['Розбити скло'] = "200 грн";

var serviceValues = Object.values(services)
var valuesArray = []

const price = function () {
    let total = 0;
    for (let i=0; i<serviceValues.length; i++) {
        let valuesNumber = +Number.parseFloat(serviceValues[i])
        valuesArray.push(+valuesNumber)
        total += valuesNumber;
    }
    console.log(total)
}
const minPrice = function () {
    let minValue = valuesArray[0]
    for (let i=0; i<valuesArray.length; i++) {
        if (valuesArray[i]<valuesArray[i-1]) {
            minValue = valuesArray[i]
        }
    }
    console.log(minValue)
}
const maxPrice = function () {
    let maxValue = valuesArray[0]
    for (let i=0; i<valuesArray.length; i++) {
        if (valuesArray[i]>valuesArray[i-1]) {
            maxValue = valuesArray[i]
        }
    }
    console.log(maxValue)
}

price()
minPrice()
maxPrice()
