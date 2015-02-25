/*
 * Danilo Zekovic
 * 2/25/2015
 * define the Set
 */
load("stack.js");
function Set() {
 this.dataStore = [];
 this.add = add;
 this.remove = remove;
 this.contains = contains;
 this.size = size;
 this.union = union;
 this.intersect = intersect;
 this.subset = subset;
 this.difference = difference;
 this.show = show;
 this.heigher = heigher;
}

function add(data) {
 if (this.dataStore.indexOf(data) < 0) {
   this.dataStore.push(data);
   return true;
   }
 else {
   return false;
   }
}

function remove(data) {
 var pos = this.dataStore.indexOf(data);
 if (pos > -1) {
   this.dataStore.splice(pos,1);
   return true;
   }
 else {
   return false;
   }
}

function show() {
 return this.dataStore;
}

/* function contains(data) {
 if (this.dataStore.indexOf(data) > -1) {
   return true;
   }
 else {
   return false;
   }
}
*/

function contains(data) {
	return this.dataStore.indexOf(data) > -1 ? true : false;
	}


function intersect(set) {
 var tempSet = new Set();
 for (var i = 0; i < this.dataStore.length; ++i) {
   if (set.contains(this.dataStore[i])) {
     tempSet.add(this.dataStore[i]);
     }
   }
 return tempSet;
}

function subset(set) {
 if (this.size() > set.size()) {
   return false;
   }
 else {
   for (var member in this.dataStore) {
     if (!set.contains(member)) {
       return false;
     }
   }
 }
 return true;
}

function size() {
 return this.dataStore.length;
}

function difference(set) {
 var tempSet = new Set();
   for (var i = 0; i < this.dataStore.length; ++i) {
     if (!set.contains(this.dataStore[i])) {
       tempSet.add(this.dataStore[i]);
     }
   }
 return tempSet;
}



function union(set) {
 var tempSet = new Set();
 for (var i = 0; i < this.dataStore.length; ++i) {
   tempSet.add(this.dataStore[i]);
   }
 for (var i = 0; i < set.dataStore.length; ++i) {
   if (!tempSet.contains(set.dataStore[i])) {
     tempSet.dataStore.push(set.dataStore[i]);
     }
   }
 return tempSet;
}

// heigher
// function to find the number that is higher than element but
// still the closest one to it 
// from the set
function heigher(element) {
  var numHigh = new Stack();
  // go through all elements in set
  for (var i = 0; i < this.size(); ++i){
    // if set element is higher than element
    if (this.dataStore[i] > element){
      //if stack empty push the number to stack
      //else if the element at the top is greater than number pop it and
      //push the new number to stack
      if (numHigh.length() == 0){
	numHigh.push(this.dataStore[i]);
      }else if( this.dataStore[i] < numHigh.peek()){
        numHigh.pop();
	numHigh.push(this.dataStore[i]);
      } // end second if
    } // end first if
  } // end for
  return numHigh.pop(); // return the last num on the stack
}
