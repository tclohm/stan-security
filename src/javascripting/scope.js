// The following comment disables lint errors for unused variables since your
// solution to this exercise should have unused variables in it :)

/* eslint-disable no-unused-vars */

// TODO: Replace this with your solution.
const a = 1; const b = 2; const c = 3;

(function firstFunction() {
	const b = 5; const c = 6;
	(function secondFunction() {
		const b = 8;
		(function thirdFunction() {
			const a = 7; const c = 9;
			(function fourthFunction() {
				const a = 1; const c = 8;
			})()
		})()
		console.log(`a: ${a}, b: ${b}, c: ${c}`)
	})()
})()