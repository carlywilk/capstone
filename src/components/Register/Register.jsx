import { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router";
import { useAuth } from "../../utils/contexts/authContexts/authContexts";
import { doCreateUserWithEmailAndPassword } from "../../utils/firebase/auth";

import "./Register.scss";

export function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

    };

    return (
        <div>
            {userLoggedIn && (<Navigate to={"/"} replace={true} />)}
        </div>
    );
}