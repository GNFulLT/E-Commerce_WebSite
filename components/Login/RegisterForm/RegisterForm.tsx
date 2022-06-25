import React from 'react'
import styles from "./registerForm.module.scss"
import {Checkbox,TextField,Button} from "@mui/material";


const RegisterForm = () => {
  return (
    <div className={styles["form-container"]}>
        <form action="">
            <TextField label="Name Surname"  className={styles["mat-ui-container"]} helperText="Type: Name Surname" InputProps={{className:styles["mat-ui-input"]}} variant='standard' focused></TextField>
            <TextField label="E-mail" type="email" className={styles["mat-ui-container"]}  InputProps={{className:styles["mat-ui-input"]}} variant='standard' focused></TextField>
            <TextField type="password" label="Password" helperText="Min length : 5" className={styles["mat-ui-container"]} InputProps={{className:styles["mat-ui-input"]}} variant='standard' focused></TextField>
            <div className={styles["agreement-container"]}><Checkbox sx={{color:"white"}} color='primary'></Checkbox> <div>Sözleşmeyi okuyup kabul ediyorum kardeşim</div></div>
            <Button type='submit' className={styles["mat-ui-button"]} variant="outlined" color='primary'>Register</Button>

        </form>
    </div>
  )
}

export default RegisterForm