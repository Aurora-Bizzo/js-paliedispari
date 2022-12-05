let text = prompt ("Inserisci un palindromo");
let checked_word = palindrome(text);

function palindrome(word) 
{
    word = word.toLowerCase();
    let check_word = word.split("").reverse().join("");
    return check_word;
}  

if (text == checked_word){
    console.log('it\'s a palindrome!');
} else {
    console.log('it\'s not a palindrome')
}

