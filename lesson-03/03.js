// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.


function findLargest(a,b,c){
if ((a < b) && (b > c)) {
    hex = b
} else if (a < c) {
    hex = c
} else
    hex = a
    return hex
}