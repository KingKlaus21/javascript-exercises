const reverseString = function(string) {

    let backwards = '';
    // let stringLength = string.length;

    for(let i = -1; i >= -1 * string.length; i--){
        backwards += string.at(i);
    }
    return backwards;

};

reverseString("");

/* loop through elemeents in a string
   for letter in string
   or
   while variable > -1 (the last index should be 0, the starting letter)

   select elements of string using at()

   append the value to a variable that is a string (v = "")


   code needs:
   variable for backwards output (outside)
   variable for looping through 



    H e l l o
   -5-4-3-2-1
   string length = 5

   start: -1
   check: x > -1 * 5
   do: remove 1


   Hello
   01234
   string length = 5

   start: 0
   check: x < 5
   do: add 1







*/

// Do not edit below this line
module.exports = reverseString;