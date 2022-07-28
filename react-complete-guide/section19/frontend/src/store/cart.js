import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "6289207052902b48337dd15c",
    showCart: false,
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.showCart = action.payload.showCart;
            state.items = action.payload.items;
        },

        toggleCart(state) {
            state.showCart = !state.showCart;
        },

        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.title === newItem.title
            );
            if (!existingItem) {
                state.items.push({
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                });
            } else {
                existingItem.quantity++;
            }
        },

        removeItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.title === newItem.title
            );
            existingItem.quantity--;
            if (existingItem.quantity === 0) {
                state.items = state.items.filter(
                    (item) => item.title !== existingItem.title
                );
            }
        },
    },
});

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8080/cart");

            if (!response.ok) {
                throw new Error("Could not fetch cart data!");
            }

            const data = await response.json();

            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartSlice.actions.replaceCart(cartData));
        } catch (error) {
            throw new Error(error);
        }
    };
};

export const sendCartData = (cart) => {
    return () => {
        const payload = { items: cart.items, showCart: cart.showCart };

        fetch(`http://localhost:8080/cart/${cart.id}`, {
            method: "PUT",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
