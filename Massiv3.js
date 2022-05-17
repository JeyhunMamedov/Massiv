const cars = [
    {id:1, model: 'Ferrari'},
    {id:2, model: 'Lambo'},
    {id:3, model: 'Fantom'},
    {id:4, model: 'Mercedes'},
    {id:5, model: 'BMW'}

];

const Lambo = cars.find(item => item.model === 'Lambo');

console.log(Lambo);

const BMW = cars.find(item => item.model === 'BMW');

console.log(BMW);

// Метод find позволяет возвращать значение первого элемента,найденного в массиве.
// Как только метод находит первый элемент удовлетворяющий условию в callback-функции,работа метода прекращается.

//Метод findIndex работает так же, как и метод find, за исключением того,что
//возвращает не сам элемент,а его индекс.



const carss = [
    {id:1, model: 'Ferrari'},
    {id:2, model: 'Lambo'},
    {id:3, model: 'Fantom'},
    {id:4, model: 'Mercedes'},
    {id:5, model: 'BMW'}

];

const Tachka = carss.filter(item => item.id % 1.5 === 0);

console.log(Tachka);

// метод filter данный метод очень сильно похож на метод find
// за тем,исключением,что метод не завершает раюоту после первого найденного элемента
// а продолжает ее пока не пройдёт по всему массиву.
