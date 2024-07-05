import { useState } from "react";
import { Navigate, Link } from "react-router";
import { doSignInWithEmailAndPassword } from "../../utils/firebase/auth";
import { useAuth } from "../../utils/contexts/authContexts/authContexts";

import "./Login.scss";

export function Login() {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doSignInWithEmailAndPassword(email, password);
        }
    };

    return (
        <div>
            {userLoggedIn && (<Navigate to={"/"} replace={true} />)}
        </div>
    );
}