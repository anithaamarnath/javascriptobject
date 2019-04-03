function countLetters(string) {
 var counter = {};
 for (var index = 0; index < string.length; index ++) {
   var char = string[index];
   if (char !== ' ') {
     if (Array.isArray(counter[char])) { //if checks the array
       counter[char].push(index);
    } else {
       counter[char] = [index];
     }
    }
  }
 return counter;
}

console.log(countLetters('Lighthouse in the house'));