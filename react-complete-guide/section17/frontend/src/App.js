import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [showCard, setShowCard] = useState(false);

    const showCardHandler = () => {
        setShowCard(true);
    };

    const hideCardHandler = () => {
        setShowCard(false);
    };

    return (
        <CartProvider>
            {showCard && <Cart onClose={hideCardHandler} />}
            <Header onShowCart={showCardHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
