import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./Signup.css"

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");
    function handleSignup(event) {
        event.preventDefault();
        if (name === "" || email === "" || password === "" || confirm === "") {
            setError("please fill up the required feild");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            setError("enter a valid email");
            return;
        }
        if (password !== confirm) {
            setError("Passwords do not match");
            return;
        }
        setError("");
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(confirm);

    }
    return (
        <form className="signup-container" onSubmit={handleSignup}>
            <h1>Signup</h1>
            <p>Create your CyberTrace account</p>
            <label htmlFor="Name">Name</label>
            <input id="Name" type="text" value={name} onChange={(e) => {setName(e.target.value);setError("");}} />
            <label htmlFor="Email">Email</label>
            <input id="Email" type="email" value={email} onChange={(e) => {setEmail(e.target.value);setError("");}} />
            <label htmlFor="pass">Password</label>
            <input id="Password" type="password" value={password} onChange={(e) => {setPassword(e.target.value);setError("");}} />
            <input id="Confirmpass" placeholder="Confirm password" type="password" value={confirm} onChange={(e) => {setConfirm(e.target.value);setError("");}} />
            {error && <p>{error}</p>}
            <button type="submit">Create Account</button>
            <p>Already have an account?</p>
            <button className="sec-btn" onClick={()=>navigate("/login")}>Login</button>
        </form>
    );
}
export default Signup;