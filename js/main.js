var operator = document.getElementById('operation').value;

const a = parseInt(document.getElementById('firstArg').value);
const b = parseInt(document.getElementById('secondArg').value);
const button = document.getElementById('callData');
const output = document.getElementById('output');
const reset = document.getElementById('reset');

button.onclick = function() {
    switch(operator) {
        case 'sum':
            if(isNaN(a + b)) {
                output.value = "Incorect argument type";
            } else {
                output.value = a + b;
            }
            break;
        case 'subs':
            if(isNaN(a - b)) {
                output.value = "Incorect argument type";
            } else {
                output.value = a - b;
            }
            break;
        case 'mult':
            if(isNaN(a * b)) {
                output.value = "Incorect argument type";
            } else {
                output.value = a * b;
            }
            break;
        case 'div':
            if(a / b === Infinity) {
                output.value = "Error operation";
            } else if(isNaN(a * b)) {
                output.value = "Incorect argument type";
            } else {
                output.value = a / b;
            }
            break;
        default:
            output.value = "Unspported operation";
    }
}
reset.onclick = function() {
    location.reload();
    output.value = '';
}