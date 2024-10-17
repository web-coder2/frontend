console.log("test")

let coder = {
    name: "web-coder",
    age: 19,
    LP: "javascript",
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I'm a ${this.LP} coder!`);
    }
}

let new_coder = Object.create(coder)
console.log(new_coder)

let array = [12, 24, 36, 48, 60]

Array.prototype.devitedTree = function(arr) {
    return arr.map(num => num / 3);
}

console.log(array.devitedTree(array))

Array.prototype.devitedFour = function() {
    return this.map(num => num / 4);
}

console.log(array.devitedFour())
console.log("тоесть если в своем методе массива прописать передачу аргумента то вся логика с масивом идет класическим обращением")
console.log("а если не передать аргументы то к объекту или массиву можно обратится через this как контекст")

let new_array = [16, 32, 48, 60]
console.log(new_array.devitedFour())

function summNumbers(num) {
    return function() {
        return(10 + num)
    }
}

let summer = summNumbers(20)
// summer() >>> return 30

function setLinks(name) {
    return function(domen) {
        return `https://${name}.${domen}`
    }
}

let google = setLinks("google")
let domains_array = ['com', 'org', 'py']

domains_array.forEach(dom => {
    console.log(google(dom))
})