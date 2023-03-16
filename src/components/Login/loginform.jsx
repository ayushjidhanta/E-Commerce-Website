import React from "react";
import "./loginform.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
   const navigate = useNavigate();
  const handleAuth = () => {

    // Checking The Button--------
    console.log("HandleAuthontication Button Working")
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // local storage get items -------- Problem----Resolved
    // if ( username === localStorage.getItem("usernameS")|| password === localStorage.getItem("passwordP")){
    //   console.log("The Local Storage fetch success and Working")
    //   navigate("/home");
    // }

    // else if (username === "" && password === "") {
    //   alert("Warning! Enter Username and Password");
    // } else {
    //   window.alert("Error! Invalid Username and Password");
    // }

    if (username === "" && password ===""){
        let text1;
        text1 = "Error! Fill the Fields before Login";
        document.getElementById("demo").innerHTML = text1;
    }
    else if (password === ""){
      let text2 ;
      text2 = "Error! Password is not Filled"
      document.getElementById("demo").innerHTML = text2;
    }
    else if (username === ""){
      let text3 ;
      text3 = "Error! Password is not Filled"
      document.getElementById("demo").innerHTML = text3;
    }
    else if(username === localStorage.getItem("usernameS") || password === localStorage.getItem("passwordP")){
      console.log("The Local Storage fetch success and Working");
      navigate("/home");
    }
    else{
      let text4;
      text4 =  "Error! username and password do not match"
      document.getElementById("demo").innerHTML = text4;
    }
   };

  // Navigation to signup screen through Brouse Route--------
  const handleSignUp = () =>{
    navigate("/signup");
  }
  
  return (
    <>
    <div className = "page">
    <div className="coverLogin">
      <h1> Login </h1>

      <input type="text" id="username" placeholder="username" />
      <p className = "pp"id="demo" ></p>

      <input type="password" id="password" placeholder="password" />
      
      <button className="login-btn" onClick={handleAuth}>
        Login
      </button>
      <button className="SignUp-btn" onClick={handleSignUp}>
        Signup
      </button>
      <p className="text">Or Login Using</p>

      <div className="alt-login">
        <div className="facebook"  ></div>
        <div className="google" > </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default LoginForm;
