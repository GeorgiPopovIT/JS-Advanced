function calc() {
    const number1 = document.getElementById('num1').value;

    const number2 = document.getElementById('num2').value;


    let result = Number(number1) + Number(number2);


    document.getElementById('sum').value = result;
}
