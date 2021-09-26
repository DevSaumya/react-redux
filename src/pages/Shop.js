import React, {useState, useEffect} from "react";

function Shop() {

    useEffect( () => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () =>{
        const localdata = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        console.log(0, localdata);
        const localItems = await localdata.json();
        console.log(1, localItems);
        console.log(2, localItems.data);
        setItems(localItems.data);
    }

    return (
        <div>
            <h1>Shop</h1>
            {items.map(item => <div>{item.itemId}</div>)}
        </div>
    );
}

export default Shop;