import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../store/auth-context";

import classes from "./AuthForm.module.css";

const apiKey = "AIzaSyAn8T8Tb_q7t0KGaGXoAh4S7fiUH-6CceY";

const AuthForm = () => {
    const history = useHistory();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();

    const authCtx = useContext(AuthContext);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        setIsLoading(true);
        let url;
        if (isLogin) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
        } else {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                } else {
                    res.json().then((data) => {
                        throw new Error("Authentication failed!");
                    });
                }
            })
            .then((data) => {
                const expirationTime = new Date(
                    new Date().getTime() + +data.expiresIn * 1000
                );
                authCtx.login(data.idToken, expirationTime.toISOString());
                history.replace("/");
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input ref={emailRef} type="email" id="email" required />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Your Password</label>
                    <input
                        ref={passwordRef}
                        type="password"
                        id="password"
                        required
                    />
                </div>
                <div className={classes.actions}>
                    {!isLoading && (
                        <button>{isLogin ? "Login" : "Create Account"}</button>
                    )}
                    {isLoading && <p>Loading...</p>}
                    <button
                        type="button"
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin
                            ? "Create new account"
                            : "Login with existing account"}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;
