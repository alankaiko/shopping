import React, {useContext} from "react";
import {GlobalContext} from "../../context/GlobalState";
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    const {cart} = useContext(GlobalContext);

    return (
        <div className="navbar">
            <Link to="/">
                <h2>Shopping</h2>
            </Link>

            <ul className="navbar-ul">
                <li>Womens</li>
                <li>Mens</li>
                <li>Clothing</li>
                <li>Brands</li>

                <Link to="/cart">
                    <li>
                        &#128722;{" "}
                        <span className="card-count" style={{color: "red"}}>
                            ({cart.length})
                        </span>
                    </li>
                </Link>

                <Link to="/orders">
                    <li>Orders</li>
                </Link>

                <button className="nav-btn">Olá, Genésio</button>
            </ul>
        </div>
    )
}

export default Navbar;