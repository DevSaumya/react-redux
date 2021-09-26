import React, {useState, useEffect} from "react";

function ItemDetails({match}) {
    const id = match.params.uuid;
    useEffect(() => {
        fetchItem(id);
    },[id]);

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async (id) =>{
        const localdata = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`);
        const localItems = await localdata.json();
        setItem(localItems.data.item);
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.background} alt="Italian Trulli"></img>
        </div>
    );
}

export default ItemDetails;