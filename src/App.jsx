import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function addItem(item) {
    setItems([...items, item]);
  }

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function clearList() {
    setItems([]);
  }

  function toggleItem(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });

    setItems(updatedItems);
  }

  return (
    <div className="app">
      <Logo />

      <Form onAddItem={addItem} />

      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
        onClearList={clearList}
      />

      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (description.trim() === "") return;

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };

    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  return (
    <div className="list">
      {items.length === 0 ? (
        <p>No items yet. Add something for your trip! 🧳</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.packed}
                onChange={() => onToggleItem(item.id)}
              />

              <span
                style={{
                  textDecoration: item.packed ? "line-through" : "none",
                }}
              >
                {item.quantity} {item.description}
              </span>

              <button type="button" onClick={() => onDeleteItem(item.id)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}

      <button type="button" onClick={onClearList}>
        Clear list
      </button>
    </div>
  );
}

function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Add some items to your packing list! 📝</em>
      </footer>
    );
  }

  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / items.length) * 100);

  return (
    <footer className="stats">
      <em>
        You have {items.length} items, and you packed {packedItems} (
        {percentage}%)
      </em>
    </footer>
  );
}
