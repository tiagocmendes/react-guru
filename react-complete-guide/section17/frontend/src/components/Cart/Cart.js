import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import Checkout from "./Checkout";

import classes from "./Cart.module.css";

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const onRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const onAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmit(true);
        await fetch("http://localhost:8080/order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items,
            }),
        });
        setIsSubmit(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    price={item.price}
                    name={item.name}
                    amount={item.amount}
                    onRemove={onRemoveHandler.bind(null, item.id)}
                    onAdd={onAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
                Close
            </button>
            {hasItems && (
                <button className={classes.button} onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
    );

    const cardModalContent = (
        <>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && (
                <Checkout
                    onClose={props.onClose}
                    onSubmit={submitOrderHandler}
                />
            )}
            {!isCheckout && modalActions}
        </>
    );

    const isSubmittingModalContent = <p>Sending order data...</p>;
    const didSubmitModalContent = <p>Successfully sent the order!</p>;
    return (
        <Modal onClose={props.onClose}>
            {!isSubmit && !didSubmit && cardModalContent}
            {isSubmit && isSubmittingModalContent}
            {!isSubmit && didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;
