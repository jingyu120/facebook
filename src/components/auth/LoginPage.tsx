import React from "react";
import SignupPage from "./SignupPage";

type Props = {};

function LoginPage({}: Props) {
  const [openRegisterModal, setOpenRegisterModal] = React.useState(false);

  return (
    <div className="flex h-screen items-center justify-around bg-slate-200">
      {openRegisterModal && (
        <SignupPage
          closeModal={() => {
            setOpenRegisterModal(false);
          }}
          modal={openRegisterModal}
        />
      )}
      <div className="w-1/4">
        <h1 className="text-blue-500 font-bold text-[45px]">facebook</h1>
        <h2 className="font-semibold">
          Connect with friends and the world around you on Facebook.
        </h2>
      </div>
      <div className="bg-white shadow-lg w-[396px] h-[350px] rounded-lg flex flex-col">
        <div className="flex flex-col m-4">
          <input className="mt-4 rounded-md" placeholder="Email" type="email" />
          <input
            className="mt-4 rounded-md"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-blue-500 w-11/12 mt-2 h-10 rounded-md text-white font-bold">
            Log In
          </button>
          <a className="t text-blue-500 font-semibold my-2" href="google.com">
            Forgot password?
          </a>
        </div>
        <hr />
        <button
          onClick={() => setOpenRegisterModal(!openRegisterModal)}
          className="bg-green-500 w-3/5 h-10 rounded-lg my-auto text-white font-semibold mx-auto"
        >
          Create new account
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
