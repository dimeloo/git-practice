//let i=0 -> initializes variable
// i<10 -> the condition to be checked
// i++ -> this adds 1 to i

for(let i=0; i<10; i+=1){
    console.log('loop is running')
}

for(let i=0; i<=100; i++){
    console.log('just testing ', i )
}

const cars = ['Chevy', 'Volvo', 'Saab', 'Ford', 'Nissan', 'Ferrari', 'Tesla', 'Lambo']
for (let i=0; i < cars.length; i++){

    if(i > 4){
        console.log('Here are the high end cars:', cars[i])
    }
}
    //console.log('Car:', cars[i])