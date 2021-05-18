import React, { useState } from "react";


function InputArea(props) {
    const [entry, setEntry] = useState({
        basket: "",
        price: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;

        setEntry(prevEntry => {
            return {
                ...prevEntry,
                [name]: value
            };
        })
    }

    function sendEntry(event) {
        props.onAdd(entry)
        event.preventDefault();



    }

    return (
        <div>
            <form>
                <input name="basket"
                    onChange={handleChange}
                    value={entry.basket}
                    placeholder="Fruit Basket Type"
                />
                <input name="price"
                    onChange={handleChange}
                    value={entry.price}
                    placeholder="price"
                />
                <button onClick={sendEntry}>Add</button>
            </form>
        </div>

    );
}

export default InputArea;