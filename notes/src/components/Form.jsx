
import { useState } from "react";

export default function From({ onAddItem }) {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!name) return; //jika nama barang kosng gak bisa klick tambah

        const newItem = { name, quantity, checked: false, id: Date.now() };
        onAddItem(newItem);

        console.log(newItem);

        setName('');
        setQuantity(1);
    }

    const quantityNum = [...Array(10)].map((__, i) => (
        <option value={i + 1} key={i + 1}>{i + 1}</option>
    ));

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>Hari ini belanja apa kita?</h3>
            <div>
                <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                    {quantityNum}
                </select>
                <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.
                    value
                )} />
                <button type="submit">Tambah</button>
            </div>
        </form>
    )
}