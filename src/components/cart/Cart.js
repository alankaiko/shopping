import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState";
import './Cart.css';
import {Link} from "react-router-dom";

function Cart() {
    const {cart} = useContext(GlobalContext);

    return (
        <div className="cart-container">
            <h1>Cart</h1>
            {
                !cart.length ? (<p>Nenhum item adicionado, por favor adicione o item</p>) : (
                    <>
                        <div className="cart-item">
                            {
                                cart.map(item => (
                                    <div className="cart-item" key={item.id}>
                                        <div className="item-price">{item.price}</div>
                                        <div className="item-name">{item.name}</div>
                                        <div className="item-expectedDelivery">(Prazo de entrega 3 - 6 dias)</div>
                                    </div>
                                ))
                            }
                        </div>
                        <Link to="/checkout">
                            <button className="item-btn">Próximo</button>
                        </Link>
                    </>
                )
            }
        </div>
    )
}

export default Cart;