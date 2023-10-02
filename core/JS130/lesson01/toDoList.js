// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

// var bar = 42;
// console.log(global.bar);
// console.log(this.bar);
// foo = 34;
// this.qux = 56;
// console.log(this);
// console.log(global.hasOwnProperty("foo"));
// console.log(globalThis.hasOwnProperty("foo"));
// console.log(globalThis.bar);


class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

// omitted code

// This class represents a collection of Todo objects.
// You can perform typical collection-oriented actions
// on a TodoList object, including iteration and selection.

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  // rest of class needs implementation
  add(todo) {
    if (!(todo instanceof Todo)) {
      throw new TypeError("can only add todo objects");
    }
    this.todos.push(todo);
  }
  size() {
    return this.todos.length;
  }
  first() {
    return this.todos[0];
  }
  last() {
    return this.todos[this.todos.length - 1];
  }
  itemAt(position) {
   this.#validateIndex(position);
   return this.todos[position];
  }
  #validateIndex(index) { // _ in name suggests a "private" method
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }
  isDone() {
    return this.todos.every(todo => todo.isDone());
  }
  markDoneAt(index) {
    this.itemAt(index).markDone();
  }
  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }
  toString() {
    let title = `---- ${this.title} ----`;
    let list = this.todos.map(todo => todo.toString()).join("\n");
    return `${title}\n${list}`;
  }
  forEach(cb) {
    this.todos.forEach(cb);
  }
  pop() {
    return this.todos.pop();
  }
  shift() {
    return this.todos.shift();
  }
  removeAt(index) {
    this.#validateIndex(index);
    return this.todos.splice(index);
  }
  filter(cb){
    let newList = new TodoList("filtered list");
    this.forEach(todo => {
      if (cb(todo)){
       newList.add(todo);
      }
    });
    return newList;
  }
  findByTitle(title) {
    return this.filter(todo => todo.getTitle() === title).first();
  }
  allDone() {
    return this.filter(todo => todo.isDone());
  }
  allNotDone() {
    return this.filter(todo => !(todo.isDone()));
  }
  markDone(title){
    let todo = this.findByTitle(title);
    if(todo !== undefined) todo.markDone();
  }
  markAllDone() {
    this.forEach(todo => todo.markDone());
  }
  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }
  toArray() {
    return this.todos.map(todo => {
      let todoCopy = {};
      return Object.assign(todoCopy, todo);  
  })
  }
}


let list = new TodoList("Today's Todos");
// console.log(list); // TodoList { title: "Today's Todos", todos: [] }

// Omitted code

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
// list.markAllDone();
// console.log(list.todos[0].isDone());
// console.log(list.toArray().every(todo => console.log(todo)));
console.log(list.toString());
// Omitted code

// console.log(list.size());  // 4
// // Omitted code

// console.log(list.first());
// console.log(list.last());

// let emptyList = new TodoList("Empty List");
// console.log(emptyList.first());
// console.log(emptyList.last());


// Omitted code

// console.log(list.itemAt(1));
// Omitted code

// console.log(list.itemAt("a")); // delete this line after testing it
// // // Omitted code

// console.log(list.itemAt(55)); // delete this line after testing it
// Omitted code

// list.markDoneAt(1);
// console.log(list);

// list.markUndoneAt(1);
// console.log(list);
// Omitted code

// Omitted code

// Omitted code

// console.log(list.isDone()); // false
// list.toString();
// list.markDoneAt(0);
// list.markDoneAt(1);
// list.markDoneAt(2);
// list.markDoneAt(3);
// console.log(list.isDone()); // true
// list.toString();
// list.markUndoneAt(2);
// console.log(list.isDone()); // false
// list.toString();

// Omitted code

// console.log(list.shift());
// console.log(list.pop());
// console.log(list);

// console.log(emptyList.shift());
// console.log(emptyList.pop());
// console.log(emptyList);

// Omitted code

// First, let's create some new todos.
// let todo5 = new Todo("Feed the cats");
// let todo6 = new Todo("Study for Launch School");
// list.add(todo5);
// list.add(todo6);


// console.log(list.removeAt(2));
// console.log(list.toString());
// console.log(list.removeAt(0));
// console.log(list.removeAt(1));
// console.log(list);

// list.removeAt(100); // delete this line after testing it

// list.forEach(todo => console.log(todo.toString()));

// let todo1 = new Todo("Buy milk");
// let todo2 = new Todo("Clean room");
// let todo7 = new Todo("Clean room");
// let todo3 = new Todo("Go to the gym");
// let todo4 = new Todo("Go shopping");
// let todo5 = new Todo("Feed the cats");
// let todo6 = new Todo("Study for Launch School");
// let list = new TodoList("Today's Todos");

// list.add(todo1);
// list.add(todo2);
// list.add(todo3);
// list.add(todo4);
// list.add(todo5);
// list.add(todo6);
// list.add(todo7);
// todo1.markDone();
// todo5.markDone();

// console.log(list.allDone().toString());
// console.log(list.allNotDone().toString());
// console.log(list.markDone("Clean room"));
// console.log(list.toString());
// console.log(list.allDone().toString());
// const copyList = list.toArray();
// console.log(list);
// console.log(copyList);

module.exports = {
  Todo,
  TodoList,
}
