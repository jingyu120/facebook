import React from "react";

type Props = {};

function LoginPage({}: Props) {
  return (
    <div>
      <div>
        <h1>facebook</h1>
        <h2>Connect with friends and the world around you on Facebook.</h2>
      </div>
      <div>
        <div>
          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />
        </div>
        <div>
          <button>Log In</button>
          <a href="google.com">Forgot password?</a>
        </div>
        <hr />
        <button>Create new account</button>
      </div>
    </div>
  );
}

export default LoginPage;
