// 1 >> undefind >> var is hoisted, declaration to the top

// 2 >> reference error >>  it will be in the TDZ. the TDZ is the zone between when the let is in the running scope and when it's declared

// 3 >> 2 then 1 >> var in function scoped (not block-scoped) 2 in fun , 1 out of fun.

// 4 >> reference Error >>  Cannot access 'x' before initialization

// 5 >> 3 3 3 because var is function-scoped, not block-scoped loop finishes first (i = 3) then setTimeout runs

// 6 >> 0 1 2 because let is block-scoped each loop has its own copy of i

// 7 >> 2 inner function takes the nearest variable (closure) so it uses a = 2 from outer, not global

// 8 >> SyntaxError, cannot redeclare variable with let after var

// 9 >> function foo() return 20 function is hoisted before var, so foo refers to the function, not 10

// 10 >> 20 because we changed the global variable a inside the function (mutation)

// 11 >> 10 var is NOT block-scoped it leaks outside the block

// 12 >> ReferenceError let is block-scoped a is not accessible outside the block

// 13 >> 10 parameter a shadows the outer a function uses its own a (10), not global (5)

// 14 >> 3 3 3 same as before: var is function-scoped loop ends first (i = 3) then setTimeout runs

// 15 >> 0 1 2 IIFE creates a new copy of i each time so each setTimeout gets its own value
