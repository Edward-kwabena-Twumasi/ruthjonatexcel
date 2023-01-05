import React, {Component, useEffect, useRef, useState} from "react";
import "../style/auth.css";
import LoginForm from "../components/auth/LoginForm";
import RegistrationForm from "../components/auth/RegistrationForm";
import PasswordResetVerifyForm from "../components/auth/PasswordResetVerifyForm";
import PasswordResetForm from "../components/auth/PasswordResetForm";


const AuthPage =(props)=>{
    const [index,setIndex]=useState(0)
    const getIntro=useRef(null)

   const currentUrl = props.location.pathname;
    
    useEffect(()=>{
       const introParent=getIntro.current;
       const intros= introParent.querySelectorAll('h3')
        
     
       intros.forEach((intro,i) => {
        if (intro) {
           let prev=intro
            setTimeout(() => {
                intro.classList.toggle("show-text")
            }, (i)*1800);
            prev.classList.remove("show-text")
            
        }
       });
       
    //    }, 3600);
       
    },[])

   


    

   const getAuthScreen=()=>{
    {
        
     if(currentUrl == "/login"){
            return <LoginForm></LoginForm>
        }
        else if(currentUrl == "/registration"){
            return <RegistrationForm></RegistrationForm>
        }
        else if(currentUrl == "/password-reset-account-verify"){
            return <PasswordResetVerifyForm></PasswordResetVerifyForm>
        }
        else if(currentUrl == "/password-reset"){
            return <PasswordResetForm></PasswordResetForm>
        }
        
    }
   }
    
    return(
        <div className="auth-screen">
             <div className="sm-text">
                 <h3 className=" "> Manage your <span className="text-success">stock</span></h3>
             </div>
            <div className="intro" ref={getIntro}>
                <h3 className="intro-text "> Manage your <span className="text-success">stock</span></h3>,
                <h3 className="intro-text ">Know how <span className="text-success" >business is going</span></h3> ,
                <h3 className="intro-text ">Make informed <span className="text-success">decisions</span></h3>
                <h3 className="intro-text font-weight-normal text-success"> Get Started </h3> 
            </div>
        {
         getAuthScreen()
        }
    </div>
    )
}

export default AuthPage;