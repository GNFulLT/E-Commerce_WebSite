import React, { forwardRef } from 'react'
import styles from "./loginForm.module.scss"
import {TextField,Button} from "@mui/material";


const LoginForm =  forwardRef<HTMLDivElement>((props,ref) => {
  return (
    <div ref={ref} className={styles["form-container"]}>
        <form action="">
            <TextField label="E-mail" type="email" className={styles["mat-ui-container"]}  InputProps={{className:styles["mat-ui-input"]}} variant='standard' focused></TextField>
            <TextField label="Password" type="password" className={styles["mat-ui-container"]} InputProps={{className:styles["mat-ui-input"]}} variant='standard' focused></TextField>
            <Button type='submit' className={styles["mat-ui-button"]} variant="outlined" color='primary'>Login</Button>

        </form>
    </div>
  )
})

export default LoginForm