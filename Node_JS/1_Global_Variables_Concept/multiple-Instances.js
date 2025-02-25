module.exports.fruits = ['Orange','banana','mango']; // I am exporting as a array
module.exports.singlePeron = 'Parkash Kumar'; // I am exporting as single instance
module.exports.message = function message(){console.log("Hello there, Parkash Kumar")}; // exporting as a function
module.exports.message1 = function message(){return "Hello there, Parkash Kumar"};

module.exports.setData = {
    name: 'Parkash Kumar',
    City: 'Karachi',
    field: 'Computer Science',
}
