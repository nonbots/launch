class SimpleLinkedList {
  static fromArray(array) {
    array = array || [];
    let list = new SimpleLinkedList();
    [...array].reverse().forEach(elem => list.push(elem));
    return list;
  }
  //elem1 => elem2 => null
  //elem1 <= elem2 <= null
  // get next element to point to previous element 
  reverse() { /// 10  9 8 ==> 
    let list = new SimpleLinkedList();
    let curElem = this.head();
    while (curElem) {
      list.push(curElem.datum())
      curElem = curElem.next();
    }
    return list;
  }
  toArray() {
    let array = [];
    let curElem = this.head();
    while (curElem){
      array.push(curElem.datum());
      curElem = curElem.next();
    }
    return array;
  }
  size() {
    let size = 0;
    let curElem = this.head();
    console.log("CURELEMENT". this.head());
    while (curElem) {
      size += 1;
      curElem = curElem.next();
    }
    return size; 
  }
  isEmpty() {
    return !this.head();
  }
  head() {
    return this.headElem || null;
  }

  push(elem) { /// elem1 => null, head = elem1
    let element = new Element(elem, this.head());
    this.headElem = element; 
    //
  }
  pop() {
    let val = this.peek();
    let newHead = this.head().next(); //elem1 => elm2 => null
    this.headElem = newHead;
    return val;
  }
  peek() {
    if (this.isEmpty()) return null;
    // let curElem = this.head();
    // let nextElem = curElem.next();
    // while (nextElem !== null){
    //   curElem = curElem.next();
    // }
    // console.log(curElem.datum());
    // return curElem.datum();
    // let curElem = this.head();
  //   console.log("SIZE", this.size()) // elm1 => elm2 => null
  //   for(let i = 1; i < this.size(); i += 1) {
  //     console.log("DATA", curElem.datum());
  //     curElem = curElem.next();
  //   }
  //   return curElem.datum();
  // }
  // let curElem = this.head();
  return this.head().datum();
  }
}
class Element {
  constructor(data, nextElem = null) {
    this.data = data; 
    this.nextElem = nextElem;
  }
  datum() {
    return this.data;
  }
  //is there the last element (tail element)?
  isTail() {
    return this.next() === null;
  }
  next() {
    return this.nextElem;
  }

}

module.exports = {SimpleLinkedList, Element};