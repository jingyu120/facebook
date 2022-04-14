import React from "react";

type Props = {};

function SignupPage({}: Props) {
  return (
    <div>
      <h1>Sign Up</h1>
      <input placeholder="Username" />
      <input placeholder="Email" />
      <input id="password" placeholder="Password" type="password" />
      <button>Sign Up</button>
    </div>
  );
}

export default SignupPage;
