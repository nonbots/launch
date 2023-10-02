class CustomSet {
  constructor (array = []) {
    this.array = array;
  }
  isEmpty() {
    return this.array.length === 0; 
  }
  contains(num) {
    return this.array.includes(num);
  }
  // elements in the first set is in the other set
  isSubset(set2) {
    for (let i = 0; i < this.array.length; i += 1) {
      if (!(set2.contains(this.array[i]))) return false ;
    }
    return true;
  }
  isDisjoint(set2) {
    for (let i = 0; i < this.array.length; i += 1) {
      if (set2.contains(this.array[i])) return false ;
    }
    return true;
  }
  isSame(set2) {
    if(this.array.length !== set2.array.length) return false;
    return this.isSubset(set2);
  }
  add(num) {
    if (!(this.contains(num))) this.array.push(num);
    return this;
  }
  intersection(set2) {
    let newSet = [];
    for (let i = 0; i < this.array.length; i+= 1) {
      if (set2.contains(this.array[i])) newSet.push(this.array[i]);
    }
    return new CustomSet(newSet);
  }
  
  difference(set2) {
    let newSet = [];
    for (let i = 0; i < this.array.length; i+= 1) {
      if (!(set2.contains(this.array[i]))) newSet.push(this.array[i]);
    }
    return new CustomSet(newSet);
  }

  union(set2) {
    let newSet = [...this.array];
    for (let i = 0; i < set2.array.length; i+= 1) {
      console.log("SET2 item", set2.array[i])
      if (!(this.contains(set2.array[i]))) newSet.push(set2.array[i]);
    }
    console.log("HERE UNION", newSet);
    return new CustomSet(newSet);
  }
 }
 
//  class second {

//  }
// console.log("MOD HERE", module);
// console.log("EXPORTS", exports);
// console.log(this === exports);
// console.log(this === module.exports);
// console.log(exports === module.exports);
// console.log(this === require);

// this is the modules (the current file) export object  

module.exports = CustomSet;
// module.exports = second;

/*
non strict 
this = module (module.eports) 


strict
this = undefined

*/