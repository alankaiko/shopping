import React from "react";
import ItemList from "../itemList/ItemList";
import items from "../../mockData/items.json";

function HomePage() {
    return (
        <section>
            <ItemList items={items}/>
        </section>
    )
}

export default HomePage;