import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";


function Register() {
    // state variables for email and passwords
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false); // add a loading state

    // state variable for error messages
    const [error, setError] = useState("");

    const handleLoginClick = () => {
        navigate("/login");
    }


    // handle change events for input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
        if (name === "confirmPassword") setConfirmPassword(value);
    };

    // handle submit event for the form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // validate email and passwords
        if (!email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
        } else if (password !== confirmPassword) {
            setError("Passwords do not match.");
        } else {
            setLoading(true);

            // clear error message
            setError("");
            // post data to the /register api
            fetch("/register", {
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
                        setError("Successful register.");
                    }, 500);
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 1500);
                }
                else{
                    setTimeout(() => {
                        setLoading(false);
                        setError("Error registering.");
                    }, 500);
                }
            }).catch((error) => {
                // handle network error
                console.error(error);
                setError("Error registering.");
            });
        }
    };

    return (
        <div id="login">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="containerbox register">
                <form onSubmit={handleSubmit}>
                <h3>Register</h3>
                    <div>
                        <label htmlFor="email">Email:</label>
                    </div><div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label></div><div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password:</label></div><div>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Register</button>

                    </div>
                    <div>
                        <button onClick={handleLoginClick}>Go to Login</button>
                    </div>
                    {loading && <Loading />}
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Register;