import { useState } from "react";
import { authenticate } from "../auth/auth";
import PageContainer from "../components/layout/PageContainer";


// Credentials (for dev/testing):
//   Admin:  username = "admin", password = "mockpw"
//   Doctor: username = doctor email (e.g. "priya.desai@sgmc.org"), password = "mockpw"


export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleLoginSubmit = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");

        if (!username.trim() || !password) {
            setError("Please enter both username and password.");
            return;
        }


        const user = authenticate(username.trim(), password);


        if (!user) {
            setError("Invalid username or password.");
            return;
        }


        // TODO: store the user in context / global auth state
        console.log("Logged in as:", user);
        setSuccess(`Logged in as ${user.username} (${user.role}).`);

        // Future: redirect based on role
        // e.g., navigate("/doctors");
    };


    return (
        <PageContainer title="Login">
            <form className="login-form" onSubmit={handleLoginSubmit}>
                <div>
                    <label>
                        Username
                        <input
                        type="text"
                        value={username}
                        autoComplete="username"
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>


                <div>
                    <label>
                        Password
                        <input
                        type="password"
                        value={password}
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>


                {error && <p className="error-text">{error}</p>}
                {success && <p className="success-text">{success}</p>}


                <button type="submit">Sign In</button>
            </form>
        </PageContainer>
    );
}