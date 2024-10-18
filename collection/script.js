let person1 = {
    name: "John",
    age: 30,
    city: "New York"
}

let person2 = person1

console.log(person1)
console.log(person2)

person2.name = "Jane"
person2.age = 28

console.log(person1)
console.log(person2)

let person3 = {
    name: "John",
    age: 30,
    city: "New York"
}

let person4 = {...person3}
person4.age = 80

console.log(person3)
console.log(person4)
console.log("-------------------------")

let person5 = Object.assign({}, person3)
person5.name = "web-coder"
person5.age = 125

console.log(person3)
console.log(person5)

console.log("тоесть если использовать object.assign или {...[object]} то мы создаем 2 разные ячейки памяти для 2 разных обектов")

for (let property in person5) {
    console.log(property + " >>> " + person5[property])
}

for (let all of Object.entries(person5)) {
    console.log(all)
}

console.log("-------------------------")
console.log(Object.keys(person5))
console.log(Object.values(person5))

class Coder {
    constructor(options) {
        this.name = options.name
        this.age = options.age 
        this.lp = options.lp
    }

    hello() {
        console.log(`Hello, my name is ${this.name} me ${this.age} years and I am ${this.lp} coder!`)
    }
}

let lps = ["JavaScript", "TypeScript", "html/css"]
let ages = [19, 23, 24]
let names = ["web-coder", "typerOne", "htmler"]
let coders = []

for (let i = 0; i < lps.length; i++) {
    let newCoder = new Coder({
        name: names[i],
        age: ages[i],
        lp: lps[i]
    })
    coders.push(newCoder)
}

coders.forEach(men => men.hello())

console.log("-------------------------")

class WebCoder extends Coder {
    constructor(options) {
        super(options)
        this.end = options.end
    }
    hello2() {
        console.log(`i am ${this.end} coder on ${this.lp}`)
    }
}

let webCoders = []
let lps2 = [
    { "lp": "php", "end": "backend" },
    { "lp": "nodeJS", "end": "fullstack" },
    { "lp": "java", "end": "backend" },
    { "lp": "swift", "end": "ios" },
    { "lp": "kotlin", "end": "android" }
]

for (let i = 0; i < lps2.length; i++) {
    let newWebCoder = new WebCoder({
        lp: lps2[i].lp,
        end: lps2[i].end
    })
    webCoders.push(newWebCoder)
}

webCoders.forEach(assassa => assassa.hello2())