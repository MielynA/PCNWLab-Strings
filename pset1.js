/*
 *  README!!!
 *  For the problems below, use only string methods / conditionals, etc
 *  it may be tempting to use concepts like looping but do not attempt! 
 */
 
 
/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/

const makeEven = str => str.length % 2 === 0  ? str  : str + "#" ; 

console.log(makeEven("taq"));  // 'taq#'
console.log(makeEven("john")); // 'john'
console.log(makeEven("miely"))
console.log("--------------end of problem 1---------------------"); 
/* 2
    @func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/
const getLastChar = str => str.charAt(str.length-1);
console.log(getLastChar("taq"));
console.log(getLastChar("djsldjsld"));
console.log("--------------end of problem 2---------------------"); 

/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/
const get3rdChar = str => str.charAt(2);
console.log(get3rdChar("Mielyn"));
console.log(get3rdChar("taq"));

// or 
const get3rdChar1 = str => str.length < 3 ?  "not enough character" : str.charAt(2); 
console.log(get3rdChar1("taq"));
console.log(get3rdChar1("mo"));
console.log("--------------end of problem 3---------------------"); 
/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/
const get3rdCharFromEnd = str => str.charAt(str.length-3);
console.log(get3rdCharFromEnd("Mielyn"));
console.log(get3rdCharFromEnd("taq"));
console.log("--------------end of problem 4---------------------"); 
/* 5
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/
const startsWithVowel = str => {
    const vowel = str.charAt(0).toLowerCase()
    if("aeiou".indexOf(vowel) > -1 ){
         return true;

    } 
        return false; 
}
console.log(startsWithVowel('taq'));
console.log(startsWithVowel('Dfghjkl'));
console.log(startsWithVowel('andy'));
console.log(startsWithVowel('Andy'));
console.log("--------------end of problem 5---------------------"); 
/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/
const endsWithVowel = str => {
    const vowel = str.charAt(0).toLowerCase()
    if("aeiou".indexOf(vowel) < -1 ){
         return true;

    } 
        return false; 
}
console.log(startsWithVowel('taq'));
console.log(startsWithVowel('Dfghjkl'));
console.log(startsWithVowel('andi'));
console.log(startsWithVowel('AndI'));
console.log("--------------end of problem 6---------------------"); 
/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/
const hasVowels = str => {
   const loweredVowel = str.toLowerCase();
   if (loweredVowel.indexOf('a') > -1 ) return true;
   if (loweredVowel.indexOf('e') > -1 ) return true;
   if (loweredVowel.indexOf('i') > -1 ) return true;
   if (loweredVowel.indexOf('o') > -1 ) return true;
   if (loweredVowel.indexOf('u') > -1 ) return true;

return false; 
}
console.log(hasVowels('taq'));
console.log(hasVowels('TAQ'));
console.log(hasVowels('dfghjkl'));
console.log(hasVowels('taq karim'));
console.log("--------------end of problem 7---------------------");
/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/
const hasUpperCase = str => str !== str.toLowerCase() ? true : false ; 

console.log(hasUpperCase('tAq'));
console.log(hasUpperCase('TAQ'));
console.log(hasUpperCase('tag'));
console.log(hasUpperCase('taq karim'));
console.log("--------------end of problem 8---------------------");
/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/
/*const isPalindromic = str => {
     str = str.toLowerCase()
    if (str === str.reverse()) {
        return true;
    }
        return false; 
}
console.log(isPalindromic('racecar'));
*/ 
     




/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/
/*const getInitials = str => {
    const names = str.split(); 
    const initials = names[0].substring(0,1);

    if (names.length > -1 ){
        initials = names[names.length -1].substring(0,1)
    }
        return initials;
}

console.log(getInitials('taq karim')); */
/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/

/* 12
    @func strMasher
    @param {string} str1
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
    @example - capitalLast('hello', 'wrold'); // "helwroldlo"
*/

const strMasher = (str1,str2) => `${str1.substring(0,Math.ceil(str1.length / 2))}${str2}${str1.substring(Math.ceil(str1.length / 2))}`

console.log(strMasher('help', 'me')) // "hemelp"
console.log(strMasher('hello', 'wrold')) // "helwroldlo"
console.log("--------------end of problem 12---------------------");