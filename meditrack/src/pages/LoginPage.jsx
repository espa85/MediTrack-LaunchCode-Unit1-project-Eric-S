import { useState } from "react";
import { authenticate } from "../auth/auth";
import PageContainer from "../components/layout/PageContainer";


export default function LoginPage() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");


const handleLoginSubmit = (event) => {
event.preventDefault();
setError("");


const user = authenticate(username.trim(), password);


if (!user) {
setError("Invalid username or password.");
return;
}


// TODO: store the user in context / global auth state
console.log("Logged in as:", user);


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


<button type="submit">Sign In</button>
</form>
</PageContainer>
);
}