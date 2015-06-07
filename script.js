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

// Invoking through the costructor
