console.log("test app")

let citys = ["NY", "LA", "LV", "SF"]

function getCity(array) {
	array.forEach(city => {
		console.log("city >>> " + city)
	})
}

getCity(citys)

let personInfo = ["web-coder", 19, "JS", 50000]

function printInfo(...info) {
	info.forEach(item => {
		console.log(item + "")
	})
}

printInfo(personInfo)

let gipotenusa = (x, y) => Math.sqrt((x**2) + (y**2))

c1 = gipotenusa(3,4)
console.log(c1)

function factorial(number) {
	if (number === 1) {
		return 1
	} else {
		return number * factorial(number - 1)
	}
}


console.log(factorial(5))