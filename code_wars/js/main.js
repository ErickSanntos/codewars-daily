//// code wars ///
https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript


//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//solution// 
function  countSheep (num){
    let sheepCount = ""
    for(let i = 1;i <= num ; i++ ){
      sheepCount  += `${i} sheep...`;
      
     
    } 
    return sheepCount;
  }
  console.log(countSheep(3))
  // i have a integer 
  // i need a for loop 
  //no negative intergers
  
//   What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.
function addLength(str) {
  let splitArr = str.split(" ")
   return splitArr.map(word => word +" "+ word.length);
   console.log(splitArr)
  
 }
 addLength('apple ban')
 // we need to get length of a word
 //seperate word by space 
 //return as an array 
 

 https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript]

//  Code as fast as you can! You need to double the integer and return it.

 function doubleInteger(i) {
  let number = 2
  let double = number * 2
  return double;
}


// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

function noSpace(x){
  let removeSpace = x.split(' ').join('')
  return removeSpace;
  }


  //Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."
function animal(obj){
  const dog = {
      name: 'dog',
      legs: 4,
      color: 'white'
    }; 
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.` /// simple mistakes get you 
 

}

//reverse a string 
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
////////
function solution(str){
  return str.split('').reverse('').join('')
 
}
// first split the string 
// than i reverse the string 
// than i join the strin back together

// filter arrays
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


///

function filter_list(l) {
 
  return l.filter((ele)=> typeof ele === 'number')
}
// number 
////////////
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
///
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript


//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a,b) {
  let result = parseInt(a) + parseInt(b)
 let str_result = result.toString()
 return str_result
  
}

//We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
const stringToNumber = function(str){
  let result = parseInt(str)
  return result
  return null;
}


//Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  return  ((h*60*60+m*60+s)*1000)
    console.log(past)
  }
  // shows hours minutes and seconds
  // need a function 
  // returns time in milliseconds
  // 1 hour = 3600 second 
  // 3600 * 1000 = milliseconds 


  //Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
  
function litres(time) {
    let drinks = Math.floor(time * 0.5)
    return drinks;
  }

  // This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


  function simpleMultiplication(number) {
    if(number % 2 === 0){
      return number * 8
    }else if(number % 2 != 0 ){
       return number * 9
    }
 }
 // if even multiply by 1/8 
 // if otherwise divide by 9
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

 function smash (words) {
  let arr = words.join(' ')
 
   return arr
  
};

// Your task is to write a function that takes a string and return a new string with all vowels removed.
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

//Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

function maps(x){
  return x.map((el) => el * 2)
}
// iterrate thru each arrays index for each array 
// multiply by 2
//try map()
// mutate 
//imitible 
//mutible 

js

function factorial(n){
// 5
  // base cases 
  
  if (n < 0 || n > 12) {
    return RangeError;
  }
  
  if (n === 0) {
    return 1; 
  }
  
  return n * factorial(n-1);
  
  // factorial(5) * factorial(4)... // 5 * 24 = 120
  
    // facotrial(4) * factorial(3) // 4 * 6 = 24
  
        // factorial(3) * factorial(2) // 3 * 2 = 6
          
          // factorial(2) * factorial(1) // 2 * 1

            // factorial(1) * factorial(0) // 1

              // factorial(0) return 1 
                
    // n! === n * (n-1)
  
}
///// 
// mplement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
function booleanToString(b){
  if(b){
    return b.toString()
  }else if(!b){
    return b.toString()
  }

}
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15
function move (position, roll) {
  return position + 2 * roll
 }
 //player rolls a dice 
 // plauer moves 2 times the amount on the dice 
 // takes the position 
 // takes the roll 1 to 6 
 // return sum 
 
 // use math.floor for whole numbers 
 // use math.random to get random number 

 // Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
 function between(a, b) {
  if (a >= b) {
    return []; // If a is greater than or equal to b, return an empty array.
  }

  const result = [];
  for (let i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
}
//if a is less than or equal to b return an empty string 
// than we do a for loop 


//Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.



function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
  ];

  // Calculate the index of the last phrase based on the number of petals
  const lastIndex = (nbPetals - 1) % phrases.length;

  // Return the corresponding phrase
  return phrases[lastIndex];
}

// This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.
const solve = (x, y) => x / y

//Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]
// ALGORITHMSFUNDAMENTALSARRAYS

function fizzbuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.
function updateLight(current) {
  
  if(current === 'green'){
    return 'yellow'
  }else if(current === 'yellow'){
    return 'red'
  }else if(current === 'red'){
    return'green'
  }
    
}
// need a function for changing lights 
// ima use a if else statement 

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest' 
function greet (name, owner) {
  if(name === owner){
    return 'Hello boss'
  }else {
    return 'Hello guest'
  }
}
//other way 
function greet (name, owner) {
  return name === owner ? 'Hello boss' : 	'Hello guest';
}

//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
// we are removing every ! mark from each string 
// check if it has a ! mark 
// if it does remove it 
// im going to try pop 
function removeExclamationMarks(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '!') {
      result += s[i];
    }
  }
  return result;
}

// check if n can be divided by x and y 
// positive numbers non zero numbers 
// check if it can be divied with a remainder of zero 

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
function isDivisible(n, x, y) {
  if(n % x === 0 && n % y === 0){
    return true
  }else{
    return false
  }
}