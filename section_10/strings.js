let s = "Chetna Bagwan";

// 1.length
console.log(s.length);

// 2.charAt(index) = do not allow negative index as argument
console.log(s.charAt(2));
// console.log(s.charAt(-2)) = returns empty string with length 0

// 3.at(index) = accepts negative indexes also
console.log(s.at(-2));
console.log(s.at(3));

// 4.slice(start,end) = extracts a part of a string, accepts negative index
console.log(s.slice(7)); //7 to end
console.log(s.slice(2,8));
console.log(s.slice(-3));  // -3 to end
console.log(s.slice(-8,-2));

// 5.substring() = similar to slice, but if start and end negative then they are treated as 0 
console.log(s.substring(-2,6)); //Chetna end index is not included
console.log(s.substring(-2,-6)); //0 empty string is returned

// 6.susbtr(start,no of characters after start index) = negative index allowed
console.log(s.substr(2,8)); //deprecated 
console.log(s.substr(-2,8)); 
console.log(s.substr(-4,2)); 

// 7.concat()
let a ="Hello";
let b = " world! ";
let c = a.concat(b);
console.log(c);

// 8.trim() = removes the whitespaces from both sides of string
console.log(b);
console.log(b.trim());
console.log(b.trimStart()); // trimEnd()

// 9.padStart() and padEnd() = adding spaces

//10.repeat(count)
console.log(b.repeat(2)); 

// split() = converting string to an array 
// replaceAll()
// indexOf('string') = first occurrence
// lastIndexOf() = last occurrence






