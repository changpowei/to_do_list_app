import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Design new landing page', completed: false },
    { id: 2, text: 'Review code', completed: true },
    { id: 3, text: 'Buy coffee beans', completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="bg-neu-base rounded-[40px] p-8 shadow-neu-flat min-h-[600px]">
        <h1 className="text-3xl font-bold text-neu-text mb-8 text-center tracking-wide">
          My Tasks
        </h1>

        <TodoInput onAdd={addTodo} />

        <div className="mt-8">
          {todos.length === 0 ? (
            <p className="text-center text-neu-text/50 mt-12">No tasks yet. Add one above!</p>
          ) : (
            todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>
      </div>

      <p className="text-center mt-8 text-neu-text/40 text-sm">
        Neumorphism Design • React + Tailwind
      </p>
    </div>
  );
}

export default App;
