import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & .form {
        position: relative;
        width: 100%;
        max-width: 23rem;
        padding: 5rem 2.5rem 2.5rem;
        border-radius: 10px;
        color: #fff;
        background: rgb(240,240,255);
        box-shadow: 0 15px 25px rgba(0,0,0,0.5);
    }
    & .form::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        /* background: rgba(255,255,255,.8); */
        transform: skewX(-26deg);
        transform-origin: bottom left;
        border-radius: 10px;
        pointer-events: none;
    }
    & .form img {
        position: absolute;
        top: -50px;
        left: calc(50% - 50px);
        width: 100px;
        background: rgb(255,255,255,);
        border-radius: 50%;
    }
    & .form h2 {
        text-align: center;
        letter-spacing: 1px;
        margin-bottom: 2rem;
        color: darkblue;
    }
    & .form .input-group {
        position: relative;
        margin: .6rem;
        height: fit-content;
    }
    & .form .input-group input {
        width: 100%;
        padding: 10px 0;
        font-size: 1rem;
        letter-spacing: 1px;
        margin-bottom: 1rem;
        border: none;
        border-bottom: 1px solid darkblue;
        outline: none;
        background-color: transparent;
        box-shadow: rgba(0,0,0,.7);
    }
    &  input:-webkit-autofill,
       input:-webkit-autofill:hover, 
       input:-webkit-autofill:focus, 
       input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 30px rgba(255,255,255,) inset !important;
        -webkit-text-fill-color: #000;
    }
    & .form .input-group label {
        /* position: absolute; */
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 1rem;
        pointer-events: none;
        transition: .3s ease-out;
        color: darkblue;
    }
    /* & .form .input-group input:focus + label,
    .form .input-group input:valid + label {
        transform: translateY(-20px);
        color: darkblue;
        font-size: large.8rem;
    } */
    & .submit-btn {
        display: block;
        margin-left:auto ;
        border: none;
        outline: none;
        background: darkblue;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        color: #fff;
    }
    & .forgot-pw {
        color: inherit;
    } 
    & .forgot-pw {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        right: 0;
        height: 0;
        z-index: 1;
        background: #fff;
        opacity: 0;
        transition: .6s;
    }
    & #forgot-pw:target{
        height: 100%;
        opacity: 1;
    }
    & .close {
        position: absolute;
        right: 1.5rem;
        top: .5rem;
        font-size: 2rem;
        font-weight: 900;
        text-decoration: none;
        color: inherit;
    }
    & .danger-error {
    color: #e74c3c;
    display: inline-block;
    margin-bottom: 1rem;
  }
`