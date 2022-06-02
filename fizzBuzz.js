for (i = 1; i <= 30; i++) {
  const multipleThree = i % 3
  const multipleFive = i % 5

  if (multipleFive === 0 && multipleThree === 0) {
    console.log(i, 'FizzBuzz')
  } else if (multipleThree === 0) {
    console.log(i, 'Fizz')
  } else if (multipleFive === 0) {
    console.log(i, 'Buzz')
  } else console.log(i, '----')
}