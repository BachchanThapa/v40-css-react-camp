import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Drink Coffee", done: false },
    { id: 2, text: "Code JavaScript", done: false },
    { id: 3, text: "Push to GitHub", done: false },
  ]);

  const [text, setText] = useState("");

  function addTodo(e) {
    e.preventDefault(); // Stop the browser's normal form-submit behavior.

    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos([...todos, { id: Date.now(), text: trimmed, done: false }]);
    setText("");
  }

  function toggleDone(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    ); // if todo.id is what we clicked(? means true) then ...todo(copy that todo) and toggle :todo else leave it as it is.
  }

  // this function will create a new array after deletion of the id we clicked
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id)); // All todos whose id does NOT match the clicked id will remain.
  }

  return (
    <main className="app">
      <h1> My ToDo List </h1>
      <form className="input-row" onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New todo"
        />
        <button type="submit">Add to List</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo" key={todo.id}>
            <button type="button" onClick={() => toggleDone(todo.id)}>
              {todo.done ? "Unmark" : "Done"}
            </button>{" "}
            {todo.text}{" "}
            <button type="button" onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
