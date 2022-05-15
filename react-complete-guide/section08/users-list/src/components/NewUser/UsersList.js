import React, { useState } from "react";

import Card from "../Card/Card";
import "./UsersList.css";

const UsersList = ({ users }) => {
    if (users.length === 0) {
        return (
            <Card>
                <h2>No users yet</h2>
            </Card>
        );
    }

    return (
        <Card>
            <ul>
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            <h3>
                                {user.name} (
                                {`${user.age} year${
                                    user.age !== 1 ? "s" : ""
                                } old`}
                                )
                            </h3>
                        </li>
                    );
                })}
            </ul>
        </Card>
    );
};

export default UsersList;
