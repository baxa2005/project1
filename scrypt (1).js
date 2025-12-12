// Массив имён
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// Проходим по каждому имени
for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase(); // первая буква в нижнем регистре

    if (firstLetter === 'j') {
        console.log("Goodbye " + names[i]);
    } else {
        console.log("Hello " + names[i]);
    }
}
