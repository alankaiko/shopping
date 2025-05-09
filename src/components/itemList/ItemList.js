import React from "react";
import './ItemList.css';
import {Link} from "react-router-dom";
import Item from "../item/Item";

function ItemList({items}) {
    return (
        <div className="item-list">
            {
                items.map(item => (
                    <Link to={`/item/${item.id}`} key={item.id}>
                        <Item name={item.name}
                              brand={item.brand}
                              image={item.image}
                              price={item.price}
                              rating={item.rating}
                              saleDiscount={item.saleDiscount}/>
                    </Link>
                ))
            }
        </div>
    )
}

export default ItemList;