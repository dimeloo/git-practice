/**  Loop on Objects or Arrays (For in loop)

const person = { fname: 'Mike', lname: 'Ortiz', age: 34 }

for (let x in person) {
  console.log(x)
}

const numbers = [45, 4, 9, 16, 25]
for (let x in numbers) {
  console.log(numbers[x])
}
**/

// For Of loops -> loop on Arrays

const numbers = [45, 4, 9, 16, 25]
for (let x of numbers) {
  //    console.log(x)
}

const language = 'Javascript'
for (let x of language) {
  //    console.log(x)
}

// Do While loop
/** let i = 0
do {
  i++
  console.log(i)
} while (i < 10)
**/

let i=0
while (i<10){
    i++
    console.log(i)
}