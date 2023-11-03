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
    return this.todos.splice(index, 1)[0];
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
  shift() {
    return this.todos.shift();
  }
  toArray() {
  //   return this.todos.map(todo => {
  //     let todoCopy = {};
  //     return Object.assign(todoCopy, todo);  
  // })
  return this.todos.slice();
  }
}

let todo1 = new Todo("todo");
console.log(todo1);

module.exports = {
  Todo,
  TodoList,
}
