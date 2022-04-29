import React, { useState } from "react";
import { XIcon } from "@heroicons/react/solid";

type Props = {
  closeModal: () => void;
  modal: boolean;
};

// eslint-disable-next-line
function SignupPage({ closeModal, modal }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const checkIfClickOutide = (event: MouseEvent) => {
      if (modal && !modalRef?.current?.contains(event.target as Node)) {
        closeModal();
      }
    };

    window.addEventListener("mousedown", checkIfClickOutide);

    return () => {
      window.removeEventListener("mousedown", checkIfClickOutide);
    };
  }, [modal, closeModal]);

  const isGenderSelected = (value: string): boolean => selectedGender === value;

  return (
    <div className="bg-gray-500 flex h-screen w-full absolute top-0 bg-opacity-40">
      <div
        ref={modalRef}
        className="bg-white w-[432px] h-[496px] m-auto p-3 rounded-md shadow-md flex flex-col justify-between"
      >
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <h5>It's quick and easy.</h5>
          </div>
          <div>
            <button
              className="w-6"
              aria-label="close"
              onClick={() => closeModal()}
            >
              <XIcon />
            </button>
          </div>
        </div>

        <hr />

        <div className="flex flex-col">
          <div className="flex">
            <input
              className="border p-1 m-2 rounded-md w-1/2"
              type="text"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="border p-1 m-2 rounded-md w-1/2"
              type="text"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            className="border p-1 m-2 rounded-md"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border p-1 m-2 rounded-md"
            type="password"
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mx-3">
          <div className="border rounded-md p-3">
            <label htmlFor="female-radio" className="p-3">
              Female
            </label>
            <input
              id="female-radio"
              type="radio"
              value="female"
              checked={isGenderSelected("female")}
              onChange={(e) => setSelectedGender(e.target.value)}
            />
          </div>
          <div className="border rounded-md p-3">
            <label htmlFor="male-radio" className="p-3">
              Male
            </label>
            <input
              id="male-radio"
              type="radio"
              value="male"
              checked={isGenderSelected("male")}
              onChange={(e) => setSelectedGender(e.target.value)}
            />
          </div>
          <div className="border rounded-md p-3">
            <label htmlFor="custom-radio" className="p-3">
              Custom
            </label>
            <input
              id="custom-radio"
              type="radio"
              value="custom"
              checked={isGenderSelected("custom")}
              onChange={(e) => setSelectedGender(e.target.value)}
            />
          </div>
        </div>

        <div className="mx-2">
          <p className="f text-[10px]">
            By clicking Sign Up, you agree to our Terms, Data Policy and Cookies
            Policy. You may receive SMS Notifications from us and can opt out
            any time.
          </p>
        </div>
        {/* <select>{monthList()}</select> */}
        <div className="my-3 mx-auto">
          <button className="bg-green-500 rounded-md py-1 px-12">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
