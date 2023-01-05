import React, {Component} from "react";
import { Link } from "react-router-dom";


class RegistrationForm extends Component{

    render(){
        return (
            <div className="form mx-auto">
                <form className="">
                    <div className="form-group">
                        <h3 className="text-center pb-3 styled-header">Register</h3>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control nice-border" id="username"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control nice-border" id="username"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">I agree all terms & conditions</label>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary w-100 mt-2">Login</button>
                    </div>
                    <div>
                        <p>Already user? <Link to="/login">Click to Login</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegistrationForm;