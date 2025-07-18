/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

// function findCommonElements() {}

function findCommonElements(a, b) {

    let thirdArray = a.concat(b)
    let fourArray = []

    for (let i = 0; i < thirdArray.length; i++) {
        let x = thirdArray[i]
        delete thirdArray[i]

        if (thirdArray.includes(x)) {
            fourArray.push(x)
        }
    } return fourArray
}



// function findCommonElements(a, b) {

//     let thirdArray = []
//     for (let i = 0; i < b.length; i++) {
//         if (a.includes(b[i])) {
//             thirdArray.push(b[i])
//         }
//     } return thirdArray
// }

// const kek = findCommonElements(mainArray, secondArray)
// console.log(kek)