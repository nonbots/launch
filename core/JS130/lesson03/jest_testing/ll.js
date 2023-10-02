class Element {
    constructor(datumVal, nextEl = null) {
        this.datumVal = datumVal;
        this.nextEl = nextEl;
    }
    datum() {
        return this.datumVal;
    }
    isTail() {
        return this.next() === null;
    }
    next() {
        return this.nextEl;
    }
}

class SimpleLinkedList {
 static fromArray(array = []){
    if (array === null) array = [];
    let list = new SimpleLinkedList();
    console.log("createdList",list);
    for (let i = array.length - 1; i >= 0; i -= 1) {
        list.push(array[i]);
        console.log("LIST", list);
    }
    // console.log("STATIC", list);
    return list; 
 }


 toArray(array = []) { //[1,2]
    let curEl = this.head();
    // console.log("TO ARRAY THIS", this);
    while (curEl) {
        // console.log("curEl", curEl);
        array.push(curEl.datum());
        // console.log("IN LOOP ARRAY", array);
        curEl = curEl.next();
    }
    // console.log("ARRAY", array);
    return array;
 }
 reverse() {
    let list = new SimpleLinkedList();
    // console.log("CREATED REVERSE", list);
    // console.log("PASSED IN LIST", this);
    let curEl = this.head();
    for (let i = 0; i < this.size(); i += 1) {///{1, 2}
        list.push(curEl.datum());
        // console.log("REVERSEDLIST", list);
        curEl = curEl.next();
        }
    // console.log("REVERSE", list);
    return list; 
 }

 size() {
    // console.log("get size");
    let size = 0;
    let curElem = this.head();
    // console.log("CURELEMENT". curElem);
    while (curElem) {
        size += 1; 
        curElem = curElem.next();
    }
    return size ;
 }
 isEmpty() {
    return !this.head(); 
 }
//  isEmpty() {
//     return this.size() === 0;
//  }
 head() {
    return this.headEl || null;
 }
 push(val) {
    this.headEl = (new Element(val, this.head()));
 }
 peek() {
    if (this.isEmpty()) return null;
    return this.head().datum();
 }
 pop() {
    // console.log("___________POP____________");
    // console.log("THIS", this);
   
    let val = this.peek();
    // console.log("VAL", val);
    if (!val) return val;
    // console.log("VAL", val);
    // console.log("CUR HEAD", this.head());
    this.headEl = this.head().next(); 
    // console.log("NEW HEAD", this.headEl);
    return val;
 }
 // reassign head
 //el2 => el1 => null
 //{2, {1, null}}
}


module.exports = {Element, SimpleLinkedList};

// this points to the newly created object 
// sets the proprotype property of the newly created object to the propotype object (stores all methods of the class)
// sets the state on the newly created onbject