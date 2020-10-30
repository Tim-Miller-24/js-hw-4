/* 
//  Задание: (Возраст)
    
var Human = {
    name: prompt('Введите имя.'),
    born: +prompt('Год рождения.'),
    yearNow: +prompt('Введите нынешний год.')
}

function Vivod() { 
    return alert(`Ваше имя: ${Human.name}, Ваш возраст: ${Human.yearNow - Human.born}.`);
 }

Vivod();

 */



/* 
    // Задание: (Рондомные примеры)

function randomNum(max = 40, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomChar(max = 4, min = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

let quant = +prompt('Введите количество желаемых примеров.');

for (let i = 0; i < quant; i++) {
    let num1 = randomNum();
    let num2 = randomNum();
    let char = randomChar();


    if (char == "1") {
        var userAnswer = +prompt(`Решите пример ${num1} + ${num2}`);
        if (userAnswer == num1 + num2) {
            alert(`${num1} + ${num2} = ${num1 + num2}. Ваш ответ ${userAnswer}. Верно.`);
        } else {
            alert(`${num1} + ${num2} = ${num1 + num2}. Ваш ответ ${userAnswer}. Неверно.`);
        }
    } else if (char == "2") {
        var userAnswer = +prompt(`Решите пример ${num1} - ${num2}`);
        if (userAnswer == num1 - num2) {
            alert(`${num1} - ${num2} = ${num1 - num2}. Ваш ответ ${userAnswer}. Верно.`);
        } else {
            alert(`${num1} - ${num2} = ${num1 - num2}. Ваш ответ ${userAnswer}. Неверно.`);
        }
    } else if (char == "3") {
        var userAnswer = +prompt(`Решите пример ${num1} * ${num2}`);
        if (userAnswer == num1 * num2) {
            alert(`${num1} * ${num2} = ${num1 * num2}. Ваш ответ ${userAnswer}. Верно.`);
        } else {
            alert(`${num1} * ${num2} = ${num1 * num2}. Ваш ответ ${userAnswer}. Неверно.`);
        }
    } else if (char == "4") {
        var userAnswer = +prompt(`Решите пример ${num1} / ${num2}`);
        if (userAnswer == round((num1 / num2),2)) {
            alert(`${num1} / ${num2} = ${round((num1 / num2),2)}. Ваш ответ ${userAnswer}. Верно.`);
        } else {
            alert(`${num1} / ${num2} = ${round((num1 / num2),2)}. Ваш ответ ${userAnswer}. Неверно.`);
        }
    }

}

*/



/* 
   // Создать кассовый аппарат.


*/

let prise = 0;

function addToBasket() {
    let productPrise = +prompt('Введите стоимость товара.');
    return prise += productPrise;
}

do {
    var askAdd = confirm('Добавить стоимость товара?');
    if (askAdd == true) {
        addToBasket();
    }
} while (askAdd == true);


alert(`Общая сумма покупки: ${prise}.`);


