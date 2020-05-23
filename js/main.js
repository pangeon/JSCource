
document.addEventListener("DOMContentLoaded", 
    function() {
        var calcResult = 0;
        var firstArg = 0;
        var secondArg = 0;
        var clickOperationStatus = '';

        const buttonsIdNumber = 
        [
            'one', 'two', 'three', 'four', 'five', 
            'six', 'seven', 'eight', 'nine', 'zero', 'dot'
        ];
        buttonsIdNumber.forEach(element => { 
            clickNumberToDisplay(element);
        });
        
        const displayValue = document.getElementById('main-display');
        
        const resetBtn = document.getElementById('reset');
        resetBtn.addEventListener('click', 
            function() {
                displayValue.value = '';
                location.reload();
            }
        );

        if(clickOperationStatus === '') {
            const plusBtn = document.getElementById('plus');
            plusBtn.addEventListener('click', 
                function() {
                    firstArg = parseFloat(displayValue.value);
                    displayValue.value = '';
                    clickOperationStatus = 'sum';
                }
            );
            const minusBtn = document.getElementById('minus');
            minusBtn.addEventListener('click', 
                function() {
                    firstArg = parseFloat(displayValue.value);
                    displayValue.value = '';
                    clickOperationStatus = 'minus';
                }
            );
            const multiBtn = document.getElementById('multi');
            multiBtn.addEventListener('click', 
                function() {
                    firstArg = parseFloat(displayValue.value);
                    displayValue.value = '';
                    clickOperationStatus = 'multi';
                }
            );
            const divBtn = document.getElementById('divide');
            divBtn.addEventListener('click', 
                function() {
                    firstArg = parseFloat(displayValue.value);
                    displayValue.value = '';
                    clickOperationStatus = 'divide';
                }
            );
        }
        const resultBtn = document.getElementById('result');
        resultBtn.onclick = function() {
            switch(clickOperationStatus) {
                case 'sum':
                    secondArg = parseFloat(displayValue.value);
                    calcResult = firstArg + secondArg;
                    clickOperationStatus = '';
                    displayValue.value = calcResult;
                    break;
                case 'minus':
                    secondArg = parseFloat(displayValue.value);
                    calcResult = firstArg - secondArg;
                    clickOperationStatus = '';
                    displayValue.value = calcResult;
                    break;
                case 'multi':
                    secondArg = parseFloat(displayValue.value);
                    calcResult = firstArg * secondArg;
                    clickOperationStatus = '';
                    displayValue.value = calcResult;
                    break;
                case 'divide':
                    secondArg = parseFloat(displayValue.value);
                    calcResult = firstArg / secondArg;
                    clickOperationStatus = '';
                    displayValue.value = calcResult;
                    break;                         
                }
            }
        }
);
function clickNumberToDisplay(id) {
    const button = document.getElementById(id);
    button.addEventListener("click", 
        function() {
            const numberToDisplay = parseFloat(button.value);
            const display = document.getElementById('main-display');
            if(isNaN(numberToDisplay)) {
                display.value += '.';
            } else {
                display.value += numberToDisplay;
            }
        }
    );
} 

