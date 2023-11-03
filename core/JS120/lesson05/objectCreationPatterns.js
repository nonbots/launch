'use strict'
/*
init array to an emtpy array
while the prototype is not equal to null 
  - add the current prototype of the object to the array 
- return the array

add the method of the to foo 
*/



// name property added to make objects easier to identify
// let foo = {name: 'foo'};
// let bar = Object.create(foo);
// bar.name = 'bar';
// let baz = Object.create(bar);
// baz.name = 'baz';
// let qux = Object.create(baz);
// qux.name = 'qux';

// foo.ancestors = function() {
//   const arr = [];
//   let ancestor = Object.getPrototypeOf(this);
//   while(ancestor !== null) {
//     ancestor === Object.prototype ? arr.push("Object.prototype") : arr.push(ancestor.name)
//     ancestor = Object.getPrototypeOf(ancestor);
//   }
//   return arr;
// }

// console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
// console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
// console.log(foo.ancestors());  // returns ['Object.prototype']


//Classical Object Creation

// function Person(firstName, lastName, age, gender) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.fullName = function () {
//   return this.firstName + ' ' + this.lastName;
// }

// Person.prototype.communicate = function () {  
//   console.log("Communicating");
// }

// Person.prototype.eat = function() {
//   console.log("Eating");
// }
// Person.prototype.sleep = function() {
//   console.log("Sleeping"); 
// }
// function Doctor(firstName, lastName, age, gender, specialization) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.specialization = specialization;
// }

// Doctor.prototype = Object.create(Person.prototype);
// Doctor.prototype.diagnose = function() {
//   console.log("Diagnosing");
// }

// Doctor.prototype.constructor = Doctor;

// function Professor(firstName, lastName, age, gender, subject) {
//  Person.call(this, firstName, lastName, age, gender);
//  this.subject = subject; 
// }
// Professor.prototype = Object.create(Person.prototype);
// Professor.prototype.teach = function() {
//   console.log("Teaching");
// }
// Professor.prototype.constructor = Professor;

// function Student(firstName, lastName, age, gender, degree) {
//   Person.call(this, firstName, lastName, age, gender);
//   this.degree = degree;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.study = function() {
//   console.log("Studying");
// }
// Student.prototype.constructor = Student;
// function GraduateStudent(firstName, lastName, age, gender, gradDegree) {
//   Student.call(this,firstName, lastName, age, gender);
//   this.gradDegree = gradDegree;
// }

// GraduateStudent.prototype = Object.create(Student.prototype);
// GraduateStudent.prototype.research = function() {
//   console.log("Researching");
// }
// GraduateStudent.prototype.constructor = GraduateStudent;


// let person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

// let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

// let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// // logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'

// class CircularQueue {
//   constructor(size) {
//     this.size = size;
//     this.queue = [];
//     this.indexAdd = 0;
//     this.indexRemove = 0;
//   }
//   // check if the current index has a value (isFilled)
//   isFilled() {
//     return this.queue[this.indexRemove] !== undefined;
//   }
//   // increment the index (incrementIndex) 
//   incrementAddIndex() {
//     this.indexAdd += 1; 
//     this.indexAdd %= this.size;
//     // this.indexRemove += 1; 
//     // this.indexRemove %= this.size;
//   }
//   enqueue(val) {
//     this.queue[this.indexAdd] = val;
//     this.incrementAddIndex();
//     //if the indexAdd is the same or greater than then 
//   }
//   dequeue() {
//     let count = 0 
//     // console.log(this.indexRemove, totalCount);
//     while(count < this.size){
//       // console.log("COUNT", count);
//       // console.log("ISFILLED", this.isFilled());
//       if(this.isFilled()){
//         let val = this.queue[this.indexRemove];
//         console.log("VAL", val);
//         this.queue[this.indexRemove] = undefined;
//         this.indexRemove += 1; 
//         this.indexRemove %= this.size
//         return val;
//       }
//       this.indexRemove += 1;
//       this.indexRemove %= this.size
//       count += 1;
//       // console.log("REMOVEINDEX", this.indexRemove);
      
//     }
//     if (count >= this.size) return null;
//   }
// }



class CircularQueue {
  constructor(size) {
    this.buffer = new Array(size).fill(null);
    this.nextPosition = 0;
    this.oldestPosition = 0;
  }

  enqueue(object) {
    if (this.buffer[this.nextPosition] !== null) {
      this.oldestPosition = this.increment(this.nextPosition);
    }
    this.buffer[this.nextPosition] = object;
    this.nextPosition = this.increment(this.nextPosition);
  }

  dequeue() {
    let value = this.buffer[this.oldestPosition];
    this.buffer[this.oldestPosition] = null;
    if (value !== null) {
      this.oldestPosition = this.increment(this.oldestPosition);
    }
    return value;
  }

  increment(position) {
    return (position + 1) % this.buffer.length;
  }
}
// let queue = new CircularQueue(3);
// console.log(queue.dequeue() === null);

// queue.enqueue(1);
// console.log(queue.queue);
// queue.enqueue(2);
// console.log(queue.queue);
// console.log(queue.dequeue() === 1);
// console.log(queue.queue);
// queue.enqueue(3);
// console.log(queue.queue);
// queue.enqueue(4);
// console.log(queue.queue);
// console.log(queue.dequeue() === 2);
// console.log(queue.queue);
// queue.enqueue(5);
// console.log(queue.queue);
// queue.enqueue(6);
// console.log(queue.queue);
// queue.enqueue(7);
// console.log(queue.queue);
// console.log(queue.dequeue() === 5);
// console.log(queue.queue);
// console.log(queue.dequeue() === 6);
// console.log(queue.queue);
// console.log(queue.dequeue() === 7);
// console.log(queue.queue);
// console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.queue);
console.log(anotherQueue.dequeue() === 1);
console.log(anotherQueue.queue);
anotherQueue.enqueue(3)

anotherQueue.enqueue(4)
console.log(anotherQueue.queue);
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.queue);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);


//get the difference of position remove and add 2 - 0 = 2 
// get the difference on each added value
// if the difference is 0
  // increment remove by 1 

 