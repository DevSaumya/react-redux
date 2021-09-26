import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
function Shop() {

    useEffect( () => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () =>{
        const localdata = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const localItems = await localdata.json();
        setItems(localItems.data);
    }

    return (
        <div>
            <h1>Shop</h1>
            {items.map(item => 
                <h1 key={item.itemId}>
                    <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
                </h1>
            )}
        </div>
    );
}

export default Shop;