
let a = check ('Введите первое число');
let operator = check ('Что нужно с ним с делать: +, -, *, / ?');
let b = check ('Введите второе число');
let result = null;

function check (arg) {
    let data = prompt(arg)
    if (data == null ) {
        alert('Вы отменили ввод');
    } else if (!data) {
        alert ('Вы ничего не ввели');
    }  else {
        return data;
    }
};


function isNumber(value) {
    return typeof value === 'number' && !isNaN(parseFloat(value)) && isFinite(parseFloat(value))
};


switch (operator) {
    case '+': {
        result = isNumber( +a) && isNumber (+b) ? +a + +b:
        alert ('Вы ввели не числовое значение!');
    }
    break;
    case '-': {
        result = isNumber( +a) && isNumber (+b) ? a - b:
        alert ('Вы ввели не числовое значение!')
    }
    break;
    case '*': {
        result = isNumber( +a) && isNumber (+b) ? a * b:
        alert ('Вы ввели не числовое значение!')
    }
    break;
    case '/': {
        result = isNumber( +a) && isNumber (+b) ? a / b:
        alert ('Вы ввели не числовое значение!')
    }
    break;
    default: {
        alert ('Не верная операция')
    }
};

alert (`Итого: ${result}`);