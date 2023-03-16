import React from "react";
import "./signup.css";
import { useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();
  const handleAuth = () => {
    console.log("The signup is Cicked "); // check----
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let pass2 = document.getElementById("pass2").value;

    if (user === "" && pass === "" && pass2 === "") {
      alert("Any Field Is Empty ");
    } else if (pass !== pass2) {
      alert("password do not match");
    } else {
      localStorage.setItem("usernameS", user);
      localStorage.setItem("passwordP", pass);
      navigate("/");
      console.log("Navigation to login working--")
    }

    // if (user === "" || pass === "" || pass2 === ""){
    //   alert("Any Field Is Empty ");
    //   flag = false;
    // }
    // else if (pass !== pass2){
    //   alert("password do not match")
    //   flag = false;
    // }
    // else if(flag === true){
    //   console.log("flag true --- Invoke"); //check----
    //   var user_name = document.getElementById('user').value;
    //   var user_pass = document.getElementById('pass').value;
    //   localStorage.setItems("user", user_name);
    //   localStorage.setItems("pass" , user_pass);

    //   // for retreivinf the data to the local storage
    //   document.getElementById("output").innerHTML = localStorage.getItem("user");
    // alert("Data saved")
    // }
    
  };

  return (
    <div className = "page">
    <div className="coverSignup">
      {/* <div className="wrapper"> */}
        <h1> Signup</h1>
        <input type="text" id="user" placeholder="username" />
        <input type="password" id="pass" placeholder="password" />
        <input type="password" id="pass2" placeholder="confirm password" />
        <button className="signup-btn" onClick={handleAuth}>
          Signup
        </button>
      </div>
    </div>
  );
};
export default SignUp;
