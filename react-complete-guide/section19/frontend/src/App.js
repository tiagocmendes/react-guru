import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { sendCartData, fetchCartData } from "./store/cart";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }
        dispatch(sendCartData(cart));
    }, [cart, dispatch]);

    return (
        <Layout>
            {cart.showCart && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;
