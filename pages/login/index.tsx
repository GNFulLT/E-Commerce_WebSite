import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import Login from "../../components/Login/Login";
import LoginForm from "../../components/Login/LoginForm/LoginForm";
import RegisterForm from "../../components/Login/RegisterForm/RegisterForm";

const Home: NextPage = () => {
  const [isLogin,setIsLogin] = useState(true);


  return (
    <>
   <Login setIsLogin={setIsLogin}>
    {isLogin ? (<LoginForm></LoginForm>) : (<RegisterForm></RegisterForm>)}
    </Login>
    </>
  );
};

export default Home;
