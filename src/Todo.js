import React, { useState } from 'react';

function Todo() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!text) return;
    setItems([...items, { id: Date.now(), text }]);
    setText('');
  }

  function handleDelete(id) {
    setItems(items.filter(item => item.id !== id));
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Add</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
