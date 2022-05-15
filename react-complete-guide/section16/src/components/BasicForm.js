import { useState } from "react";

import useInput from "../hooks/use-input2";

const BasicForm = (props) => {
    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredSurname,
        isValid: surnameIsValid,
        hasError: surnameHasError,
        valueChangeHandler: surnameChangeHandler,
        inputBlurHandler: surnameBlurHandler,
        reset: resetSurname,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput((value) => value.includes("@"));

    const formIsValid = nameIsValid && surnameIsValid && emailIsValid;

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        resetName();
        resetSurname();
        resetEmail();
    };

    const inputNameClasses = `form-control ${nameHasError ? "invalid" : ""}`;
    const inputSurnameClasses = `form-control ${
        surnameHasError ? "invalid" : ""
    }`;
    const inputEmailClasses = `form-control ${emailHasError ? "invalid" : ""}`;

    return (
        <form>
            <div className="control-group">
                <div className={inputNameClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={nameChangeHandler}
                        onBlur={nameBlurHandler}
                        value={enteredName}
                    />
                    {nameHasError && (
                        <p className="error-text">Name must not be empty!</p>
                    )}
                </div>
                <div className={inputSurnameClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={surnameChangeHandler}
                        onBlur={surnameBlurHandler}
                        value={enteredSurname}
                    />
                    {surnameHasError && (
                        <p className="error-text">
                            Last name must not be empty!
                        </p>
                    )}
                </div>
            </div>
            <div className={inputEmailClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="text"
                    id="name"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailHasError && <p className="error-text">Invalid email!</p>}
            </div>
            <div className="form-actions">
                <button
                    onSubmit={formSubmissionHandler}
                    disabled={!formIsValid}
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default BasicForm;
