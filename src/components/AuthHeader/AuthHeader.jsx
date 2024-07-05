import { Link, useNavigate } from "react-router";
import { useAuth } from "../../utils/contexts/authContexts/authContexts";
import { doSignOut } from "../../utils/firebase/auth";

import "./AuthHeader.scss";

export function AuthHeader() {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    return (
        <div>
            {
                userLoggedIn
                ?
                <>
                </>
                :
                <>
                </>
            }
        </div>
    );
}