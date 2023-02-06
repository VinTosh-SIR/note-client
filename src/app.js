import React, {useEffect, useState} from 'react';
import './app.css';
import Header from "./components/layout/header/header";
import Main from "./components/layout/main/main";
import axios from "axios";
import item from "./components/layout/main/list-items/item/item";
import Style from "./components/ui/buttons/button-remove/button-remove.module.css";
import Trash from "./components/ui/buttons/button-remove/trash.svg";

function App() {
    const [itemText, setItemText] = useState('');
    const [listItems, setListItems] = useState([]);

    const addItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5500/api/items", {item: itemText});
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

        useEffect(() => {
            const getItemsList = async () => {
                try {
                    const res = await axios.get('http://localhost:5500/api/items')
                    setListItems(res.data)
                    console.log('render')
                } catch (err) {
                    console.log(err);
                }
            }
            getItemsList()
        }, []);

    const deleteItem = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5500/api/item/${id}`)
            const newListItems = listItems.filter(item => item._id !== id);
            setListItems(newListItems);
            console.log(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="app">
            <Header/>
            <Main
                addItem={addItem}
                setItemText={setItemText}
                itemText={itemText}
                listItems={listItems}
                deleteItem={deleteItem}
            />
        </div>
    )
}

export default App;

