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