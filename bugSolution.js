function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Or throw an error: throw new Error('Inputs cannot be null');
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b; 
}
console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, null)); // 0
console.log(foo(null, null)); // 0
console.log(foo('a', 2)); // throws an error
console.log(foo(1, 'b')); // throws an error