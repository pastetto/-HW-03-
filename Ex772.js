function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            alert(a + b);
        break;
        case "-":
            alert(a - b);
        break;
        case "*":
            alert(a * b);
        break;
        case "/":
            alert(a / b);
        break;
        default:
        alert('результат не определён, некорректное значение');
    }
}

let arr = [2, 3, "+"];

console.log(calculate.apply(null, arr));
