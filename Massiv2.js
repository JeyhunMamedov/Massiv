const languages = ['python','java','js'];

languages.splice(2,3,'php','c#','c++');// удаляет и добавляет элементы в массив

console.log(languages);

// метод splice удаляет из массива данные и добавляет на их место новые

const language = ['java','python','php','c++','js'];
const newMassiv = language.slice(-1);
console.log(newMassiv);

// метод slice копирует из первоначального массива элементы и создает из них новый массив



const Massiv2 = ['привет','как дела ?','всехорошо'];
const Massiv3 = ['prive','kak dela?', 'vse horosho'];

const summary = Massiv3.concat(Massiv2);
console.log(summary);

// метод concat  создает из нескольких массов/значений один массив(оъединяет их)
