/*
function that returns the sum of two numbers passed in from the argument

*/

/*
function that takes an array of strings and returns an string of all the strings concatenated

CAUSAL: 
init result to empty string
iterate through the strings 
  concate the current string to result
once iteration is done return the result 

FORMAL: 
START
Given a array of strings
SET result = ''
FOR loop through strings
  result += current string 
RETURN result
END
*/

/*
function that takes an array of integers and return a new array with every other element from the passed in array starting with the first element

CASUAL:
init result as an empty array 
iterate through integers and increment every 2 indexes
  push the current integer to result 
return the result 

FORMAL: 
START 
SET result = []; 
FOR loop through every 2 indexes
  PUSH current integer to result
RETURN result
END
*/

/*
function that takes a char and a string and returns the index where it occurs the third time if there is not third occurance return null

CASUAL: 
init a count at 0; 
iterate through the string
  if char the same as current char
    increment count by 1 
    if count is equal to three 
      return the index 
return null

FORMAL: 
START
SET count = 0
FOR SET index to 0; index < string.length; index += 2
  IF char === current char
    count++
    IF count === 3
      RETURN index
RETURN null
END
*/

/*
a function that takes two arrays of numbers and returns the a new array where the numbers in the first array are in the even indexes and the other array numbers are in odd indexes

CASUAL: 
init a result as an empty array
iterate through the arrays 
  push the current number in the first then the current number in the second array to result 
return the result 

FORMAL: 
START 
SET result = []
FOR loop through both arrays 
  PUSH current number in array1 and current number in array2 
RETURN result
END 
*/