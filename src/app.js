import React, {useEffect, useState} from 'react';
import './app.css';
import Header from "./components/layout/header/header";
import Main from "./components/layout/main/main";
import axios from "axios";

function App() {
    const [itemText, setItemText] = useState('');
    const [listItems, setListItems] = useState([]);
    const [isUpdating, setIsUpdating] = useState('');
    const [updateItemText, setUpdateItemText] = useState('');


    const addItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5500/api/items", {item: itemText});
            setListItems(prev => [...prev, res.data]);
            setItemText('');
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const getItemsList = async () => {
            try {
                const res = await axios.get('http://localhost:5500/api/items');
                setListItems(res.data);
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
        } catch (err) {
            console.log(err);
        }
    }

    const updateItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:5500/api/item/${isUpdating}`, {item: updateItemText});
            const updatedItemIndex = listItems.findIndex(item=> item._id === isUpdating);
            const updatedItem = listItems[updatedItemIndex].item = updateItemText;
            setUpdateItemText('');
            setIsUpdating('');
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
                isUpdating={isUpdating}
                setIsUpdating={setIsUpdating}
                updateItemText={updateItemText}
                setUpdateItemText={setUpdateItemText}
                updateItem={updateItem}
            />
        </div>
    )
}

export default App;

