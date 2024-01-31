//Scenario: 1

//You are building a simple application to manage a list of your favorite fruits. Your fruit list is represented as an object where the keys are the fruit names, and the //values are their corresponding colors.


const favoriteFruits = {
  apple: 'red',
  banana: 'yellow',
  orange: 'orange',
  grape: 'purple',
};

const fruitPrefix = 'My favorite';



// Use the arrow function syntax for the printFavoriteFruits function.
// Inside the function, use the for-in loop to iterate through the keys of the favoriteFruits object.
// For each fruit, use the let keyword to declare a variable named message
//with the value of the ${fruitPrefix} ${fruit} is ${color}.
// Use the const keyword to declare a variable named fruit to represent the current fruit name in the iteration.
// Use another const keyword to declare a variable named color to represent the color of the current fruit in the iteration.
// Print each message to the console.


/*
           Output of the code 
           
 My favorite apple is red
My favorite banana is yellow
My favorite orange is orange
My favorite grape is purple
*/ 

let myfunc = () => {
  
for(const fruit in favoriteFruits) {
  const color = (favoriteFruits[fruit]);
  
  let message = `${fruitPrefix} ${fruit} is ${color}`
 
console.log(message);
}

  
}


myfunc();