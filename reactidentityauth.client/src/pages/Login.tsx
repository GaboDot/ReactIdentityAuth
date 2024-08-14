import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function Login() {
    // state variables for email and passwords
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberme, setRememberme] = useState<boolean>(false);
    // state variable for error messages
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false); // add a loading state

    // handle change events for input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
        if (name === "rememberme") setRememberme(e.target.checked);
    };

    const handleRegisterClick = () => {
        navigate("/register");
    }

    // handle submit event for the form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // validate email and passwords
        if (!email || !password) {
            setError("Please fill in all fields.");
        } else {
            // clear error message
            setError("");
            // post data to the /register api

            setLoading(true);
            var loginurl = "";
            if (rememberme == true)
                loginurl = "/login?useCookies=true";
            else
                loginurl = "/login?useSessionCookies=true";

            fetch(loginurl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            }).then((data) => {
                // handle success or error from the server
                console.log(data);
                if (data.ok) {
                    setTimeout(() => {
                        setLoading(false);
                        window.location.href = '/';    
                    }, 750);
                }
                else{
                    setTimeout(() => {
                        setLoading(false);
                        if(data.statusText == 'Unauthorized')
                            setError("Invalid Email/Password.");
                        else
                            setError("Error Logging In.");
                    }, 750);
                }
            }).catch((error) => {
                // handle network error
                console.error(error);
                setError("Error Logging in.");
            });
        }
    };

    return (
        <div id="login">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="containerbox">
                <form onSubmit={handleSubmit}>
                    <h3>Login</h3>
                    <div>
                        <label className="forminput" htmlFor="email">Email:</label>
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="rememberme"
                            name="rememberme"
                            checked={rememberme}
                            onChange={handleChange} /><span>Remember Me</span>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                    <div>
                        <button onClick={handleRegisterClick}>Register</button>
                    </div>
                    {loading && <Loading />}
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Login;