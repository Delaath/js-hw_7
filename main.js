// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.

const arrayNum = [1, 2, 3];
arrayNum[1] = 10;
console.log(arrayNum);

// Створити масив із трьох рядків. Додати до масиву ще одну рядків.

const arraySrt = ['Ivan', 'Stepan', 'Roman']
arraySrt[3] = 'Petr';
console.log(arraySrt);

// Створити скрипт який поверне суму всіх чисел в масиві.

let sum = 0;
for (let i = 0; i < arrayNum.length; i += 1) {
    sum += arrayNum[i];
}
console.log(sum);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const arrayNum2 = [1, 2, 3, 4, 5];
for (let i = 0; i < arrayNum2.length; i++) {
    const element = arrayNum2[i];
    console.log(element);
}

// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.

const arraySrt2 = ['Ivan', 'Stepan', 'Roman', 'Anya', 'Ksenia'];
for (let i = 0; i < arraySrt2.length; i += 1) {
    const element = arraySrt2[i];
    if (element.length > 5) {
        console.log(`${element} - більше 5 символів`);
    }
}

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
let max = [0];
const arrayNum3 = [1, 22, 53, 32, 15, 6, 7, 8, 9, 10];
for (let i = 0; i < arrayNum3.length; i += 1) {
    if (arrayNum3[i] > max) {
        max = arrayNum3[i];
    }
}
console.log(max);

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

const arraysNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const array of arraysNum) {
    if (array % 2 === 0 ){
        console.log(`${array} - парне`);
    }
}