function palindrome(str) 
{
    str = str.toLowerCase();
    return str === str.split("").reverse().join("");
}  

let text = prompt ("Inserisci un palindromo");

if (text == palindrome){
    console.log('it\'s a palindrome!');
} else {
    console.log('it\'s not a palindrome')
}

