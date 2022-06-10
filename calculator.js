// Helpful link
// https://www.codecademy.com/article/getting-user-input-in-node-js

// Intro
// Ask for user name
// Ask what a operation they want to complete
// Ask user for first number
// Ask user for second number
// complete operation / display output
// ask user if they want to run again or exit
// exit statement

// Welcome to the best calculator on the planet


function add (firstNumber, secondNumber){
    return firstNumber + secondNumber
}

function subtract (firstNumber, secondNumber){
    return subtractResult = firstNumber - secondNumber
}

function multiply (firstNumber, secondNumber){
    return multiplyResult = firstNumber * secondNumber
}

function divide (firstNumber, secondNumber){
    return divideResult = firstNumber / secondNumber
}



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

//const startOver = userAnswer

//do{

readline.question('....Who are you? Please give me your name: ', (name) => {
  console.log(`Greetings ${name}! I hope you are ready for something special.`)

  readline.question('Which mathematical operation do you want to use? ', (operation) => {
      console.log(`This is your operator ${operation}`)
    
      readline.question('Give me your first number: ', (num1) => {
          readline.question ('Give me your second number: ', (num2) => {
              console.log(`Your first number is ${num1} and your second number is ${num2}...let's see what we can do with this`)
              readline.close();
        
              const firstNumber = Number(num1)
              const secondNumber = Number(num2)

               if (operation === '+'){
                  console.log('Result:', add(firstNumber, secondNumber))
              }else if(operation === '-'){
                  console.log('Result:', subtract(firstNumber, secondNumber))
              }else if(operation === '*'){
                  console.log('Result:', multiply(firstNumber, secondNumber))
              }else if(operation === '/'){
                  console.log('Result:', divide(firstNumber, secondNumber))
              }else {
                  console.log(`I'm not sure what you are trying to accomplish... I don't know how to use this: ${operation}`)
              }})})})})
            
              /*
            readline.question('Would you like to go again? Please enter Yes or No: ', (userAnswer) => {

                if (userAnswer === 'Yes'){
                    console.log('Awww snap here we go again')
                    return userAnswer
                }else if (userAnswer === 'No'){
                    console.log('Then we are done')
                    return userAnswer
                }else {
                    console.log(`I don't unerstand what you meant by ${userAnswer}`)
                }})})})})})} 
                
                while (startOver = 'Yes')
                */