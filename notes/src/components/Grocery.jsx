import Item from "./Item";
import { useState } from "react";


export default function Grocery({ items, onDeleteItem, onToggleItem, onClearItems }) {
    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    /*if (sortBy === 'input') {
    sortedItems = items;
  }
  
  if (sortBy === 'name') {
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))
    }
   
    if (sortBy === 'checked') {
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
    }*/

    //terserah mo akai yang atas atau bawah sama saja

    switch (sortBy) {
        case 'name':
            sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'checked':
            sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
            break;
        default:
            sortedItems = items;
    }

    return (
        <>
            <div className="list">
                <ul>
                    {sortedItems.map((item) => (
                        <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
                    ))}

                </ul>
            </div >

            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Urutkan berdasarkan urutan input</option>
                    <option value="name">Urutkan berdasarkan nama barang</option>
                    <option value="checked">Urutkan berdasarkan ceklis</option>
                </select>
                <button onClick={onClearItems}>Bersihkan Daftar</button>
            </div>
        </>
    )
}