// Получаем от юзера три числа через prompt
var number1 = parseFloat(prompt("Введите первое число:"));
var number2 = parseFloat(prompt("Введите второе число:"));
var number3 = parseFloat(prompt("Введите третье число:"));

// Проверяем, являются ли введенные значения числами
if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    alert("Пожалуйста, введите корректные числа.");
} else {
    // Вычисляем среднее арифметическое
    var average = (number1 + number2 + number3) / 3;

    // Выводим результат среднего арифметического через alert
    alert("Среднее арифметическое введенных чисел: " + average);
}
