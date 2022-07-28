import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const checkStringLength = (value, length) => value.trim().length > length;

const Checkout = (props) => {
    const [formFieldsValidity, setFormFieldsValidity] = useState({
        enteredNameIsValid: false,
        enteredStreetIsValid: false,
        enteredPostalCodeIsValid: false,
        enteredCityIsValid: false,
    });

    const [formIsTouched, setFormIsTouched] = useState(false);

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = checkStringLength(enteredName, 0);
        const enteredStreetIsValid = checkStringLength(enteredStreet, 0);
        const enteredPostalCodeIsValid = checkStringLength(
            enteredPostalCode,
            4
        );
        const enteredCityIsValid = checkStringLength(enteredCity, 0);

        setFormIsTouched(true);
        setFormFieldsValidity({
            enteredNameIsValid,
            enteredStreetIsValid,
            enteredPostalCodeIsValid,
            enteredCityIsValid,
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredPostalCodeIsValid &&
            enteredCityIsValid;

        props.onSubmit({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity,
        });
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div
                className={`${classes.control} ${
                    !formFieldsValidity.enteredNameIsValid && formIsTouched
                        ? classes.invalid
                        : ""
                }`}
            >
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formFieldsValidity.enteredNameIsValid && formIsTouched && (
                    <p>Please enter a valid name!</p>
                )}
            </div>
            <div
                className={`${classes.control} ${
                    !formFieldsValidity.enteredStreetIsValid && formIsTouched
                        ? classes.invalid
                        : ""
                }`}
            >
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!formFieldsValidity.enteredStreetIsValid && formIsTouched && (
                    <p>Please enter a valid street!</p>
                )}
            </div>
            <div
                className={`${classes.control} ${
                    !formFieldsValidity.enteredPostalCodeIsValid &&
                    formIsTouched
                        ? classes.invalid
                        : ""
                }`}
            >
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalCodeInputRef} />
                {!formFieldsValidity.enteredPostalCodeIsValid &&
                    formIsTouched && <p>Please enter a valid postal!</p>}
            </div>
            <div
                className={`${classes.control} ${
                    !formFieldsValidity.enteredCityIsValid && formIsTouched
                        ? classes.invalid
                        : ""
                }`}
            >
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formFieldsValidity.enteredCityIsValid && formIsTouched && (
                    <p>Please enter a valid city!</p>
                )}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
