import React, {Component} from "react";
import { Link } from "react-router-dom";


class LoginForm extends Component{

    render(){
        return (
            <div className="form mx-auto ">
                <form className="">
                   
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control nice-border" id="username"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control nice-border" id="username"/>
                    </div>
                    <div className="form-group">
                    <Link to="/app/dashboard" className="text-light"><button className="btn btn-primary w-100 mt-2">Login</button></Link>
                    </div>
                    {/* <div className=" font-weight-normal">
                        <p>Forgot password? <Link to="/password-reset-account-verify " >Click to Reset</Link></p>
                    </div>
                    <div className=" font-weight-normal">
                        <p>New user? <Link to="/registration " className=" ">Click to Register</Link></p>
                    </div> */}
                </form>
            </div>
        )
    }
}

export default LoginForm;