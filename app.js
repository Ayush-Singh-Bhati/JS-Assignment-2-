// Assignment 1

let number = prompt('Enter your number');
    console.log(number)
if (number > 0){
    console.log("It's a positive number.")
}
else if (number < 0){
    console.log("It's a negative number.")
}
else {
    console.log("It's zero.")
}




// Assignment 2

let num = prompt('Enter your number');
if (num<0 || num==0){
    console.log("It's not a positive intger.")
}
else  {
    let fact = 1;
    for(i=1; i<=num; i++){

        fact = fact*i
    }
    console.log (fact)
}



// Assignment 3

greaterOne =(a,b)=>{

    let c;
    if(a<b){
        c = b+" is Greater One"
    }
    else if(a>b){
        c = a +" is Greater One"
    }
    else{
        c = "Both numbers are Equel"
    }

    return c ;    
}
let result = greaterOne(9,7);
console.log(result);



// Assignment 4

PalindromeString = (word) => {
    // Remove spaces & convert to Lowercase
    let string = word.replace(/\s+/g, '').toLowerCase();

    // Reverse the string
    let reversedstr = string.split('').reverse().join('');

    if (string === reversedstr) {
        console.log('This string is a Palindrome')
    }
    else {
        console.log('This string is not a Palindrome')
    }
}
let result1 = PalindromeString("racecar");
console.log(result1);




// Assignment 5

primeNumber = (num) => {

    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
    return true
}

printresult =(n)=>{
    for(i=2; i<=n; i++){
        if(primeNumber(i)){
            console.log(i);
        }
    }
}

 printresult(21);



// Assignment 6

calculator=(num1,num2,Oprator)=>{

    if (Oprator === '+'){
        console.log(num1+num2);
    }
    else if (Oprator === '-'){
        console.log(num1-num2);
    }
    else if (Oprator === '*'){
        console.log(num1*num2);
    }
    else if (Oprator === '/'){
        console.log(num1/num2);
    }

}

calculator(5,8,'+');
calculator(14,8,'-');
calculator(5,12,'*');
calculator(225,5,'/');




// Assignment 7

countVowels = (str) => {
          const vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}

console.log(countVowels('codekaro with Ashish sir'));




// Assignment 8

PerfectNumber = (number) => {
    if (number <= 0) {
      return false; 
    }
  
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        sum += i;
    }
}

    console.log('Your number is Perfect')     
    return sum === number;
  }

  console.log(PerfectNumber(28));




// Assignment 9

fibonacciNembers =(n)=>{
    if (n <= 0) {
        console.log("Please provide a positive number.");
        return;
      }

      let fiboseries = [0,1];

      
      for (i=1; i<=n; i++){
          
          
          i = fiboseries[fiboseries.length - 1] + fiboseries[fiboseries.length - 2];
          
          fiboseries.push(i);
        }

      console.log("Fibonacci series of " + n + " : " + fiboseries.join(", "));
}

fibonacciNembers(20)




// Assignment 10

multiplcationTable =(int)=>{
    if (int <= 0) {
        console.log("Please provide a positive integer.");
        return;
      }

        for(i=1; i<=10; i++){
            let table = int * i;
            console.log(int + " * " + i + " = " + table);
        }
}
multiplcationTable(5);