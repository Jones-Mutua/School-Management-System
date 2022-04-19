import React, { useState, useContext } from 'react'
import { LoginWrapper } from './Login.style'
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from "../../App";

const Login = () => {

    const emailRegex = new RegExp(
        /^[a-zaA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const pwdRegex = new RegExp(
        /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).{6,16}$/
    );

    const [formErrors, setFormErrors] = useState({
        email: "",
        password: "",
    });
    const [user, setUser] = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState("");
    const [message, setMessage] = useState("");

    const handleErrors = (e) => {
        const { name, value } = e.target;
        let error;

        switch (name) {
            case "email":
                error = emailRegex.test(value) ? "" : "Invalid email address";
                break;
            case "password":
                error = pwdRegex.test(value) ? "" : "Invalid password";
                break;
            default:
                break;
        }
        setFormErrors({ [name]: error });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post(`/api/login`, {
            email,
            password,
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            
        }).then(
            (res) => {
                
                //console.log(res.data);
                //console.log(sessionStorage.getItem('token'));\
                const { accesstoken, email, role} = res.data;

                localStorage.setItem("user", [accesstoken, email, role]);
                const localUser = localStorage.getItem("user")
               console.log(localUser);
               
                
                if (res.data.role === 1 ) {
                    setUser({ accesstoken : res.data.accesstoken});
                    // console.log(user);
                    setUser({ 
                        accesstoken : localUser[0],
                        email: localUser[1],
                        role: localUser[2]
                    });
                    console.log(user);
                    

                    //sessionStorage.setItem("token", res.data.accesstoken)
                    setRedirect("/admin-dashboard");
                    console.log(user);
                    
                }
                if (res.data.role === 2 ) {
                    setUser({
                        accesstoken: res.data.accesstoken,
                    });
                    sessionStorage.setItem("token", res.data.accesstoken)
                    setRedirect("/teacher-dashboard");
                }
                if (res.data.role === 3 ) {
                    setUser({
                        accesstoken: res.data.accesstoken,
                    });
                    sessionStorage.setItem("token", res.data.accesstoken)
                    setRedirect("/student-dashboard");
                }
                
                if (res.data.error){
                    setMessage(res.data.error);
                }
            }
        );

    }
    

    
    if (redirect) {
        return <Navigate to={redirect} />;
    } else
        return (
            <LoginWrapper>
                <form action='POST' className='form'>
                    <img src="" alt="" />
                    <h2>Login</h2>
                    <div className="input-group">
                        <label htmlFor="login-email">Email</label>
                        <input type="email" name="email" id="login-email" value={email}
                            className={formErrors.email ? "error" : null}
                            onChange={(e) => {
                                handleErrors(e);
                                setEmail(e.target.value);
                            }} />
                        
                        {formErrors.email && (
                            <small className="danger-error">{formErrors.email}</small>
                        )}
                    </div>
                    <div className="input-group">
                        <label htmlFor="login-password">Password</label>
                        <input type="password" name="password" id="login-password" value={password}
                            className={formErrors.password ? "error" : null}
                            onChange={(e) => {
                                handleErrors(e);
                                setPassword(e.target.value);
                            }} />
                        
                        {formErrors.password && (
                            <small className="danger-error">{formErrors.password}</small>
                        )}
                    </div>
                    {message && <small className="danger-error">{message}</small>}
                    <input type="submit" value="Login" className="submit-btn" onClick={handleLogin} />
                    <a href="#forgot-pw" className='forgot-pw'>Forgot Password?</a>
                </form>
            </LoginWrapper>
        )
                        
}

export default Login