/*
 * Danilo Zekovic
 * 2/24/2015
 */

load("set.js");
// create set
var numbers = new Set();

// add elements to numbers set
numbers.add(2);
numbers.add(5);
numbers.add(3);
numbers.add(9);
numbers.add(6);
numbers.add(7);
numbers.add(1);
numbers.add(4);
numbers.add(8);

print("Elements of set: " + numbers.show());
var findG = 4;
print("Number greater than: " + findG + " is " + numbers.heigher(findG));
