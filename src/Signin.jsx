import { useState } from "react";
import { auth, provider, fprovider } from "./assets/components/firebase";
import { signInWithPopup } from "firebase/auth";
import { useEffect } from "react";
function Signin() {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data.user);
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      useEffect(() => {
        setValue(localStorage.getItem("email"));
      });
    });
  };
  console.log(value);
  const handleface = () => {
    signInWithPopup(auth, fprovider).then((data) => {
      console.log(data.user);
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      useEffect(() => {
        setValue(localStorage.getItem("email"));
      });
    });
  };

  return (
    <div>
      <button onClick={handleClick}>sign in with google</button>
      <button onClick={handleface}>sign in with facebook</button>
    </div>
  );
}
export default Signin;
