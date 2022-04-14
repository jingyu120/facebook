import React, { useEffect, useState } from "react";

type Props = {};
// eslint-disable-next-line
function SignupPage({}: Props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    if (username && email && password) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [username, email, password]);

  return (
    <div>
      <h1>Sign Up</h1>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        id="password"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={disableButton}>Sign Up</button>
    </div>
  );
}

export default SignupPage;
