import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetail from "./components/itemDetail/ItemDetail";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";
import Cart from "./components/cart/Cart";
import Orders from "./components/orders/Orders";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Navbar/>
                </div>
                <Routes>
                    <Route path={"/item/:id"} element={<ItemDetail/>}/>
                    <Route path={"/cart"} element={<Cart/>}/>
                    <Route path={"/orders"} element={<Orders/>}/>
                    <Route path={"/"} element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
