import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";

import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const newPasswordInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredNewPassword = newPasswordInputRef.current.value;

        fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAn8T8Tb_q7t0KGaGXoAh4S7fiUH-6CceY",
            {
                method: "POST",
                body: JSON.stringify({
                    idToken: authCtx.token,
                    password: enteredNewPassword,
                    returnSecureToken: false,
                }),
                headers: {
                    "Content-type": "application/json",
                },
            }
        ).then((res) => {
            history.replace("/");
        });
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input
                    ref={newPasswordInputRef}
                    type="password"
                    minLength="7"
                    id="new-password"
                />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;
