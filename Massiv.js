const arr = ['ручка',"карандаш","ластик"];

console.log(arr.length); // показывает количество знач в массиве

console.log(arr[0]); // показывает нужный элемент

arr[0] = 'вафля'; // замена элемента из массива

console.log(arr);


const ar = [];

ar.push('Коляска');// добавление значений в массив
ar.push('Соска');

console.log(ar);

const Pup = [1,2,3,4,5];//удаление последнего элемента с конца

const delElement = Pup.pop();// вывод удаленного значения
console.log(delElement);

Pup.pop(4);

console.log(Pup);




const Assa = ['ручка','карандаш','ластик'];

for (let i=0; i < 3; i++) { // перебор элементов массива
    console.log(Assa[i]);
}