/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

// function doubleEachCharacter() {}

function doubleEachCharacter(a){
  let newName
  let b = a.split("") 
  let c =[]

for (let i = 0; i < b.length; i++) {

    c.push(b[i]+b[i])
  newName = c.join("")

}return newName

}