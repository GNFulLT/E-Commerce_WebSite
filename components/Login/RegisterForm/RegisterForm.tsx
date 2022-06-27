import React, { useRef } from 'react'
import styles from "./registerForm.module.scss"
import {Checkbox,TextField,Button} from "@mui/material";
import axios from 'axios';


const RegisterForm = () => {
  const nameSurnameRef = useRef<any>(null);
  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);

  const submitHandler = async (e:React.FormEvent<HTMLFormElement>)  =>{
    e.preventDefault();

    const nameSurname = nameSurnameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const data = {nameSurname,email,password};

    const res = await axios.post("/api/users/register",data);

    console.log(res);
  } 
  return (
    <div className={styles["form-container"]}>
        <form onSubmit={submitHandler} action="">
            <TextField inputRef={nameSurnameRef} label="Name Surname" name='nameSurname'  className={styles["mat-ui-container"]} helperText="Type: Name Surname" InputProps={{className:styles["mat-ui-input"]}} variant='standard' focused></TextField>
            <TextField inputRef={emailRef} label="E-mail" type="email"  className={styles["mat-ui-container"]}  InputProps={{className:styles["mat-ui-input"]}} variant='standard' focused></TextField>
            <TextField inputRef={passwordRef} type="password" label="Password" helperText="Min length : 5" className={styles["mat-ui-container"]} InputProps={{className:styles["mat-ui-input"]}} variant='standard' focused></TextField>
            <div className={styles["agreement-container"]}><Checkbox sx={{color:"white"}} color='primary'></Checkbox> <div>Sözleşmeyi okuyup kabul ediyorum kardeşim</div></div>
            <Button type='submit' className={styles["mat-ui-button"]} variant="outlined" color='primary'>Register</Button>

        </form>
    </div>
  )
}

export default RegisterForm