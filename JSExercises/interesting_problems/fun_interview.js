(function() {
   var a = b = 5;
})();

console.log(b);

// What will be printed in the console?

// Answer: 5

/* Explanation: The point is, the varible a is declared with a 'var', which means a is a local varible.
 * However, b is declared without 'var' therefore b is a global variable.
 */
 


// If you want to use 'use strict'
 (function() {
   'use strict';
   var a = window.b = 5;
})();

console.log(b);