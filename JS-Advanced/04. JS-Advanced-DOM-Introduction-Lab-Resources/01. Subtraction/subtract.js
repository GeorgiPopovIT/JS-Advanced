function subtract() {
   
    const num1 = Number(document.getElementById('firstNumber').value);

    const num2 = Number(document.getElementById('secondNumber').value);


    let result = num1 - num2;

    document.getElementById('result').textContent = result;

}