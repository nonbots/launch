/*
1. Encapsulation: the combining of state and behavior into an object. 

"Instantiated an object using object literal syntax"
let employee = {
  baseSalary: 6000,
  overtime: 10,
  rate: 50,
  computeWage: function() {
    return this.baseSalary + (this.overtime * this.rate)
  }
}

2. Factory funtions (object factory functions, factory object creation pattern) : creates multiple objects of th same "type" by returning the instance of the object
  a. disadvantages
    - every instance of the object has a full copu of hte methods. This cause redundancy and heavy on memory.
    - it is impossible to identify the "type" of the instance once created

*/
