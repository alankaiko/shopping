import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetail from "./components/itemDetail/ItemDetail";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Navbar/>
                </div>
                <Routes>
                    <Route path={"/item/:id"} element={<ItemDetail/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
