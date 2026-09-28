import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleLogin(event) {
        event.preventDefault();
        if (email === "" || password === "") {
            setError("Email and password are required");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            setError("Please enter a valid email");
            return;
        }
        setError("");
        console.log(email);
        console.log(password);
    }

    return (
        <div className="login-container">
            <h1>Login</h1>

            <p>Welcome to CyberTrace</p>

            <form className="content" onSubmit={handleLogin}>
                <label htmlFor="Email">Email</label>
                <input
                    id="Email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }
                    }

                // required
                />
                <label htmlFor="Password">Password</label>
                <input
                    id="Password"
                    type="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(""); }}
                    setError=""
                // required
                />

                {error && <p>{error}</p>}

                <button type="submit">Login</button>

                <p>Don't have an account?</p>
                <button onClick={()=>{navigate("/signup")}}>Sign up</button>
            </form>
        </div>
    );
}

export default Login;