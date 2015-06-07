// //Traditional Declaration
// function plus(a, b) {
// 	var sum = a+b;
// 	return sum;
// }
// console.log(plus(2,10))



// //Definition Expression
// var plus = function(a,b) {
// 	return console.log(a+b);
// }(2,2);




// Function Invocation
// Four ways: Functions, Methods, Constructors, Call&Apply methods
// function plus(a,b) {
// 	return (
// 		console.log(a+b),
// 		console.log(this),
// 		console.log(arguments)
// 	)
// }

// plus(2,2)
// firebug does not show global parameter of "this".


// // Using Functions as objects
// var calc = {
// 	status: 'Awesome',
// 	plus: function (a, b) {
// 		return (
// 			console.log(this),
// 			console.log(a+b),
// 			console.log(arguments),
// 			console.log(this.status)
// 		)
// 	}
// }

// calc.plus(2,2);
// // This argument points to the object
// // invoked with dot notation, happens at invocation time

// // Invoking through the costructor
// var Dog = function() {
// 	var name, breed;
// 	return console.dir(this);
// }

// firstDog = new Dog;
// firstDog.name = "Rover";
// firstDog.breed = "Doberman";

// secondDog = new Dog;
// secondDog.name = "Killer";
// secondDog.breed = "Pit Bull";


var speak = function(saywhat) {
	console.log(saywhat);
}

var Dog = function() {
	var name, breed;
}
var Cat = function() {
	var name, breed;
}

Dog.prototype.speak = speak;
Cat.prototype.speak = speak;

firstDog = new Dog;
firstDog.name = "Assagi";
firstDog.breed = "African Hunting";
firstDog.speak('Roarf!');

firstCat = new Cat;
firstCat.name = "Bagheera";
firstCat.breed = "Leopard";
firstCat.speak('Rawown!');
