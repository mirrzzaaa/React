import { useState } from "react";
import Header from "./Header";
import From from "./Form";
import Grocery from "./Grocery";
import Item from "./Item";
import Footer from "./Footer";

const groceryItems = [
  {
    id: 1,
    name: 'Ikan',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Merah',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Sumur',
    quantity: 3,
    checked: false,
  },
];

export default function App() {

  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <From onAddItem={handleAddItem} />
      <Grocery items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Footer items={items} />
    </div>
  )
}






