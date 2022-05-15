import React, { useState } from "react";

import NewUser from "./components/NewUser/NewUser";
import UsersList from "./components/NewUser/UsersList";

function App() {
    const [users, setUsers] = useState([]);

    const addUserHandler = (newUser) => {
        setUsers((prevUsers) => {
            return [...prevUsers, newUser];
        });
    };

    return (
        <div>
            <NewUser onAddNewUser={addUserHandler} />
            <UsersList users={users} />
        </div>
    );
}

export default App;
