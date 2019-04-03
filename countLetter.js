function countLetter(str){
  var counter = {}
  for (var character = 0 ; character < str.length;character++ ){
    var char = str[character];
    if (char !== ' '){
      if (typeof counter[char] === "number") {
        counter[char] +=1;
      } else {
        counter[char] = 1;
      }

    }
  }
  return counter;

}

console.log(countLetter("Lighthouse in the house"));