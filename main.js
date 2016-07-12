console.log('Howdy');


//Define a function called sum that takes two numbers as arguments and returns their sum.

function sum(num1, num2) {
    return num1 + num2;
}

var resultSum = sum(1, 2);

console.log(resultSum === 3); // => true
console.log(resultSum === 2); // => false

//Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.

function isEqual(arg1, arg2) {
    if (arg1 === arg2) {
        return true;
    } else {
        return false;
    }
}

console.log(isEqual(1, 1)); // => ture
console.log(isEqual(1, 2)); // => false
console.log(isEqual(1, '1')); // => false
console.log(isEqual('one', 'one')); // => true

// Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.

function discountPercentage(origAmount, discPercent) {
    if (discPercent > 100) {
        return 'Warning: Discount amount is greater than 100%';
    } else if (discPercent < 0) {
        return 'Warning: Discount amount is less than 0%';
    } else {
        return origAmount * (discPercent / 100)
    }
}
var money = discountPercentage(100, 80);

console.log(money);

//Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual word is separated by only one space.

function stringCapitalize(string) {
    var splitWord = string.split(" ")
    for (var i = 0; i < splitWord.length; i++) {
        splitWord[i] = splitWord[i].charAt(0).toUpperCase() + splitWord[i].slice(1);
    }
    joined = splitWord.join(" ")
    console.log(joined);
}
stringCapitalize("hello world")

//Define a function called evenNumbers that takes an arbitrary integer as an argument, from 0 to 100, and outputs all the even integers from 0 to that arbitrary number.

function evenNumbers(integer) {
    if (integer > 100 && integer < 0) {
        console.log("Please use a number between 0-100");
    } else {
        for (var i = 1; i <= integer; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
    }
}
evenNumbers(40);

//Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.

function isDivisible(number1, number2) {
    if (number1 % number2 === 0) {
        return true;
    } else {
        return false;
    }

}

isDivisible(5, 2);

// Write a function called oddNumbers that takes an arbitrary integer as an argument, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the arbitrary number. If the number is less than 40, output all the odd integers from 0 to 40.

function oddNumbers(int1) {
    if (int1 > 100 && int1 < 0) {
        console.log("Please use a number between 0-100");
    } else if (int1 > 40 && int1 < 100) {
        for (var j = 40; j <= int1; j++) {
            if (j % 2 !== 0) {
                console.log(j)
            }
        }
    } else if (int1 <= 40) {
        for (var i = 0; i <= 40; i++) {
            if (i % 2 === 0) {
                console.log(i)
            }
        }

    }
}

oddNumbers(99)
