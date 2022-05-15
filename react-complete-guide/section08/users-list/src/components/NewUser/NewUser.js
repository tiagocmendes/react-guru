import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Card from "../Card/Card";
import "./NewUser.css";

const NewUser = (props) => {
    const blankUser = {
        id: "",
        name: "",
        age: "",
    };

    const [userInput, setUserInput] = useState(blankUser);
    const [confirmationMessage, setConfirmationMessage] = useState();

    const userNameChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                name: event.target.value,
            };
        });
    };

    const ageChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                age: event.target.value,
            };
        });
    };

    const checkUserInput = (newUser) => {
        if (!newUser.name) {
            setConfirmationMessage(
                <p className="invalid-user">Please, insert a valid username.</p>
            );
            return false;
        }

        if (!newUser.age || newUser.age < 0) {
            setConfirmationMessage(
                <p className="invalid-user">Please, insert a valid age.</p>
            );
            return false;
        }

        setConfirmationMessage(
            <p className="valid-user">User added successfully.</p>
        );
        return true;
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        const newUser = {
            id: uuidv4(),
            name: userInput.name,
            age: parseInt(userInput.age),
        };

        const validInput = checkUserInput(newUser);
        if (validInput) {
            props.onAddNewUser(newUser);
            setUserInput(blankUser);
            setTimeout(() => {
                setConfirmationMessage(null);
            }, 2000);
        }
    };

    return (
        <Card>
            <form onSubmit={submitFormHandler}>
                <div> 
                    <label>Username</label>
                    <input
                        type="text"
                        value={userInput.name}
                        onChange={userNameChangeHandler}
                    />
                </div>
                <div>
                    <label>Age (years)</label>
                    <input
                        type="number"
                        value={userInput.age}
                        onChange={ageChangeHandler}
                    />
                </div>
                <button type="submit">Add user</button>
                {confirmationMessage ? confirmationMessage : ""}
            </form>
        </Card>
    );
};

export default NewUser;
