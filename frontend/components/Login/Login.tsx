import React, { useRef } from 'react'
import styles from "./login.module.scss";
import  LoginForm  from './LoginForm/LoginForm';

interface LoginProps
{
  children:JSX.Element,
  setIsLogin:any
}

const Login:React.FC<LoginProps> = ({children,setIsLogin}) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  const loginHandler = () =>
  {
    if(spanRef.current?.classList.contains(styles["isRegister"]))
    {
      spanRef.current?.classList.remove(styles["isRegister"]);
      console.log("Çıkarıldı")
      setIsLogin(true);
    }
  }

  const registerHandler = () =>
  {
    if(!spanRef.current?.classList.contains(styles["isRegister"]))
    {
      spanRef.current?.classList.add(styles["isRegister"]);
      console.log("Eklendi")
      setIsLogin(false);
    }
  }
  return (
    <>
    <div className={styles["container"]}>
      <div className={styles["login-register-container"]}>
        <div className={styles["login-register-mini-container"]}>
          <div style={{cursor:"pointer"}} onClick={loginHandler}>Login</div>
          <span className={styles["login-register-border"]}></span>
          <div  style={{cursor:"pointer"}} onClick={registerHandler}>Register</div>
        </div>
        <span ref={spanRef}></span>
      </div>
      {children}
    </div>
  </>  )
}

export default Login