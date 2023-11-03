const {Todo, TodoList} = require("./toDoList.js");

describe("TodoList", () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo("Buy milk");
    todo2 = new Todo("Clean room");
    todo3 = new Todo("Go to the gym");

    list = new TodoList("Today's Todos") 
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test("size of list is 3", () => {
    expect(list.size()).toBe(3);
  })

  test("new array is a copy of orginal array", () => {
    expect(list.toArray()).not.toBe(list.todos);
  });

  test("first todo is Buy milk", () => {
    expect(list.first()).toBe(todo1);
  });

  test("last todo is Go to the gym", () => {
    expect(list.last()).toBe(todo3);
  });

  test("removes and returns Buy milk", () => {
    expect(list.shift()).toBe(todo1);
  })
  test("removes and returns Go to the gym", () => {
    expect(list.pop()).toBe(todo3);
  });

  test("all items are done", () => {
    expect(list.isDone()).toBe(false);
  });

  test("item is not of Todo type", () => {
    expect(() => list.add({})).toThrow();
  });

  test("item 1 is Buy milk", () => {
    expect(list.itemAt(0)).toBe(todo1)
  });

  test("item does not exist at index to get item", () => {
    expect(() => list.itemAt(50)).toThrow()
  });

  test("item at index 0 is Buy milk", () => {
    expect(list.itemAt(0)).toBe(todo1);
  })

  test("item does not exist at index to mark done", () => {
    expect(() => list.markDoneAt(50).toThrow())
  });

  test("item is marked done", () => {
    list.markDoneAt(0);
    expect(todo1.isDone()).toBe(true);
  });


  test("item does not exist at index to undo mark", () => {
    expect(() => list.markUndoneAt(50).toThrow())
  });
  test("item is unmarked", () => {
    list.markUndoneAt(0);
    expect(todo1.isDone()).not.toBe(true);
  });

  test("all items are done", () => {
    list.markAllDone();
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
  });

  test("remove item 0 Buy milk", () => {
    expect(list.removeAt(0)).toBe(todo1);
  });
  test("item does not exist at index to remove", () => {
    expect(() => list.removeItem()).toThrow();
  });

  test('toString returns string representation of the list with Buy milk marked', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    list.markDoneAt(0);
    expect(list.toString()).toBe(string);
  });
  test('toString returns string representation of the list with all items marked', () => {
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;
    list.markAllDone();
    expect(list.toString()).toBe(string);
  });

  test("iterate through list and mark all items done", () => {
    list.forEach(todo => todo.markDone());
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
  });

  test("filter for done items", () => {
    list.markDoneAt(2);
    list.markDoneAt(1);
    let result = list.filter(todo => todo.isDone());
    expect(result.toArray()).toEqual([todo2, todo3]);
  })
  
});