
let a = prompt('Введите первое число');
let operator = prompt ('Что нужно с ним с делать: +, -, *, / ?');
let b = prompt ('Введите второе число');
let result = null;

function isNumber(value) {
    return typeof value === 'number' && !isNaN(parseFloat(value)) && isFinite(parseFloat(value))
};

if (a == null || !isNumber(+a) || !a) {
    alert ('Error');
} else if (operator == null || !operator) {
    alert ('Error');
} else if ( b == null || !isNumber(+b) || !b) {
    alert ('Error');
} else {
    switch (operator) {
        case '+': {
            result = +a + +b;
        }
        break;
        case '-': {
            result = a - b;
        }
        break;
        case '*': {
            result = a * b;
        }
        break;
        case '/': {
            result = a / b;
        }
        break;
        default: {
            alert ('Не верная операция')
        }
    };
};

alert ( isNumber(result) ? `Итого: ${result}` : 'Error');