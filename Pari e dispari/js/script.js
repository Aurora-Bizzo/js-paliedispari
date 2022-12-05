let choose_even_or_odd = prompt ('Scrgli fra pari o dispari');
console.log(choose_even_or_odd);

let number = parseInt (prompt ('Inserisci un numero da 1 a 5'));
console.log(number);

let random_number = random (1, 5);
console.log(random_number);

let sum_result = sum (number, random_number);
console.log(sum_result);

let win_or_lose = even_or_odd (sum_result, choose_even_or_odd);
console.log(win_or_lose);

function random (min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sum (number, random_number)
{
    return number + random_number; 
}

function even_or_odd (sum_result, choose_even_or_odd)
{
    if (sum_result % 2 == 0 && choose_even_or_odd == "pari"){
        alert ('hai vinto')
    }
    else if (sum_result % 2 == 0 && choose_even_or_odd == "dispari"){
        alert ('hai perso')
    }
    else if (sum_result % 2 != 0 && choose_even_or_odd == "pari"){
        alert ('hai perso')
    }
    else if (sum_result % 2 != 0 && choose_even_or_odd == "dispari"){
        alert ('hai vinto')
    }
    else {
        alert ('error')
    }
}


