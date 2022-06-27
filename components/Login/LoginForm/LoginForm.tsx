import React, { forwardRef, useRef } from 'react'
import styles from "./loginForm.module.scss"
import {TextField,Button} from "@mui/material";
import axios from 'axios';


const LoginForm =  forwardRef<HTMLDivElement>((props,ref) => {

  const emailRef = useRef<any>(null);
  const passRef = useRef<any>(null);
  const submitHandler = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    
    const reqData = {email,password};
    const res = await axios.post("/api/users/login",reqData);
    console.log(res);
  }

  return (
    <div ref={ref} className={styles["form-container"]}>
        <form onSubmit={submitHandler}>
            <TextField inputRef={emailRef} name='email' label="E-mail" type="email" className={styles["mat-ui-container"]} InputProps={{className:styles["mat-ui-input"]}} variant='standard' focused></TextField>
            <TextField inputRef={passRef} name='password' label="Password" type="password" className={styles["mat-ui-container"]} InputProps={{className:styles["mat-ui-input"]}} variant='standard' focused></TextField>
            <Button type='submit' className={styles["mat-ui-button"]} variant="outlined" color='primary'>Login</Button>

        </form>
    </div>
  )
})

export default LoginForm