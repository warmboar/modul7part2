
let word = prompt("Введите слово");


word = word.toLowerCase();


function isPalindrome(word) {

  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
 
    reversed += word[i];
  }

  return word === reversed;
}


let result = isPalindrome(word);


if (result) {

  console.log(`Слово ${word} является палиндромом`);
} else {

  console.log(`Слово ${word} не является палиндромом`);
}
