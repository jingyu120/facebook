import React, { useEffect, useState } from "react";

type Props = {};
// eslint-disable-next-line
function SignupPage({}: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const isGenderSelected = (value: string): boolean => selectedGender === value;
  // const monthList = () => {
  //   const months = ["Jan", "Feb", "Mar"];
  //   return months.map((m) => {
  //     return <option value={m}>{m}</option>;
  //   });
  // };
  // const dayList = () => {
  //   const months = ["Jan", "Feb", "Mar"];
  //   return months.map((m) => {
  //     return <option value={m}>{m}</option>;
  //   });
  // };

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <input
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="New Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="female-radio">Female</label>
        <input
          id="female-radio"
          type="radio"
          value="female"
          checked={isGenderSelected("female")}
          onChange={(e) => setSelectedGender(e.target.value)}
        />
        <label htmlFor="male-radio">Male</label>
        <input
          id="male-radio"
          type="radio"
          value="male"
          checked={isGenderSelected("male")}
          onChange={(e) => setSelectedGender(e.target.value)}
        />
        <label htmlFor="custom-radio">Custom</label>
        <input
          id="custom-radio"
          type="radio"
          value="custom"
          checked={isGenderSelected("custom")}
          onChange={(e) => setSelectedGender(e.target.value)}
        />
      </div>
      {/* <select>{monthList()}</select> */}
      <button>Sign Up</button>
    </div>
  );
}

export default SignupPage;
