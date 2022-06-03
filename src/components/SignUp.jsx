import React, { useState } from "react";
import Axios from 'axios'

function Signup() {

    const [usernameReg,setUsernameReg]= useState('')
    const [emailReg,setEmailReg]= useState('')
    const [passwordReg,setPasswordReg]= useState('')


    const register = () => {
        Axios.post("http://localhost:3000/SignUp",{
            username:usernameReg,
            email:emailReg,
            password:passwordReg,
        }).then((response)=>{
            console.log(response);
        });
    };

    return (

        <body class="text-center">

            <main class="form-signin w-100 m-auto" >
                <form action="/" method="post">
                    <h1 class="h3 mb-3 fw-normal">Sign Up</h1>


                    <input type="text" onChange={(e)  =>{
                        setUsernameReg(e.target.value);
                    }} 
                    name="name" class="form-control top" placeholder=" Name" required autofocus />
                    <input type="email" onChange={(e)  =>{
                        setEmailReg(e.target.value);
                    }}  name="email" class="form-control middle" placeholder="Email" required />
                    <input type="password" onChange={(e)  =>{
                        setPasswordReg(e.target.value);
                    }}  name="pass" class="form-control bottom" placeholder="Password" required />


                    <button onClick={register} class="w-100 btn btn-lg btn-dark" type="submit">Sign UP</button>
            
                </form>
            </main>



        </body>


    )

}

export default Signup;

