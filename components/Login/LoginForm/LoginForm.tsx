import React, { forwardRef, useRef, useState } from 'react'
import styles from "./loginForm.module.scss"
import {TextField,Button} from "@mui/material";
import axios from 'axios';
import { useAuth } from '../../../lib/hooks/Auth';
import Router from 'next/router';


const LoginForm =  forwardRef<HTMLDivElement>((props,ref) => {

  const {signIn} = useAuth();

  const emailRef = useRef<any>(null);
  const passRef = useRef<any>(null);

  const [helperText,setHelperText] = useState("");

  const changeHelperText = async () => {
    setHelperText("Email or password is wrong");
  }

  const submitHandler = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    signIn(email,password)
    .then(() => {
      Router.push("/");
    })
    .catch((ex) => {
      setHelperText("Email or password is wrong");
    })
    .finally(() => {
      setTimeout(() => {
        setHelperText("");
      },2000)
    })
      
      
    
    
  }

  return (
    <div ref={ref} className={styles["form-container"]}>
        <form onSubmit={submitHandler}>
            <TextField inputRef={emailRef} name='email' label="E-mail" type="email" className={styles["mat-ui-container"]} InputProps={{className:styles["mat-ui-input"]}} variant='standard' focused></TextField>
            <TextField inputRef={passRef} helperText={helperText} name='password' label="Password" type="password" className={styles["mat-ui-container"]} InputProps={{className:styles["mat-ui-input"]}} variant='standard' focused></TextField>
            <Button type='submit' className={styles["mat-ui-button"]} variant="outlined" color='primary'>Login</Button>

        </form>
    </div>
  )
})

export default LoginForm