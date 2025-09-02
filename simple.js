// 1. Assist Function Todo marked by id
function markTodoDoneById(todos, id) {
  return todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: true };
    } else {
      return todo;
    }
  });
}
// 2.Function addTodo
// function addTodo(todos, title) {
//   return [...todos, { id: Date.now(), title, done: false }];
// }
// -------------------------------------------
// if array is empty it will return -infinity
// -------------------------------------------
function addTodoUnsafe(todos, title) {
  const maxId =
    Math.max(...todos.map((todo) => todo.id));
  const newId = maxId + 1;
  return [...todos, { id: newId, title, done: false }];
}
// Safe version
function addTodoSafe(todos, title) {
  const maxId =
    todos.length === 0 ? 0 : Math.max(...todos.map((todo) => todo.id));
  const newId = maxId + 1;
  return [...todos, { id: newId, title, done: false }];
}
// we can add more assist function leter (e.g. addTodo, toggleDone, removeTodo)

// Simple Todo Analytics
const todos = [
  { id: 1, title: "Learn map()", done: true },
  { id: 2, title: "Practice reduce()", done: false },
  { id: 3, title: "Build a project", done: false },
  { id: 4, title: "Review filter()", done: true },
];
const todosEmpty = [
  
];

//1. Get all titles
const titles = todos.map((obj) => obj.title);
console.log(titles);
//2. Find first incomplete todo
const incomplete = todos.find((obj) => obj.done !== true);
console.log(incomplete);
//3. filter completed todos
const completed = todos.filter((obj) => obj.done === true);
console.log(completed);

//4. mark all todos as done using map()(bulean array)
const allDone = todos.map((obj) => (obj.done !== true ? true : true));
console.log(allDone, "All todos marked as done(flags only)");
//5. summary ow many done / not done using reduce
const summary = todos.reduce(
  (acc, curr) => {
    if (curr.done === true) {
      acc.done += 1;
    } else {
      acc.notDone += 1;
    }
    return acc;
  },
  { done: 0, notDone: 0 }
);
console.log(summary);

//6. unsafe mutation
// console.log("before mutation", todos);
// const mutadeTodos = todos.map((obj) => {
//   obj.done = true;
//   return obj;
// });
// console.log(mutadeTodos, "mutadeTodos(unsafe)");
// console.log("after mutation", todos);

//7.Safe version using spread operator for copy (immutable)
const resetTodos = todos.map((obj) => {
  return { ...obj, done: false };
});
console.log(resetTodos, "reset todos (safe)");
console.log("Original todos still mutad from earlier(because of #6)", todos);

// Update by id
const updatedTodos = markTodoDoneById(todos, 2);
console.log("Updated:", updatedTodos);
console.log("Original still safe:", todos);
// add todo
const newTodos = addTodoUnsafe(todosEmpty, "Learn Toggle()12");
const newTodo2 = addTodoUnsafe(newTodos, "Learn Toggle()2");
const newTodo3 = addTodoUnsafe(newTodo2, "Learn Toggle()3");
const newTodo4 = addTodoUnsafe(newTodo3, "Learn Toggle()4");
const newTodos2 = addTodoSafe(todosEmpty, "Learn infinity()");
const newTodos3 = addTodoSafe(newTodos2, "Learn infinity()");
const newTodos4 = addTodoSafe(newTodos3, "Learn infinity()");
const newTodos5 = addTodoSafe(newTodos4, "Learn infinity()");
console.log("after adding new todos using unsafe way:", newTodos,newTodo2,newTodo3,newTodo4);
console.log("after adding new todos:", newTodos2,newTodos3,newTodos4,newTodos5);
console.log("Original still safe:", todosEmpty);
