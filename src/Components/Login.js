import React from "react";

const Login = props => {

    return (
        <div>
            <label>USERNAME
               <input type={'text'} /> 
            </label>
            <label>PASSWORD
               <input type={'password'} /> 
            </label>
            <button type="submit">Submit</button>
            
        </div>
    )
}

export default Login