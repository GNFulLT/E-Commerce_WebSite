import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { GetStaticProps, GetStaticPropsContext } from 'next'

import Login from "../../components/Login/Login";
import LoginForm from "../../components/Login/LoginForm/LoginForm";
import RegisterForm from "../../components/Login/RegisterForm/RegisterForm";
import { useAuth } from "../../lib/hooks/Auth";

import Router from 'next/router'


const Home: NextPage = () => {
  const [isLogin,setIsLogin] = useState(true);
  const {auth} = useAuth();

  if(auth)
    Router.push("/");
    
  return (
    <>
   <Login setIsLogin={setIsLogin}>
    {isLogin ? (<LoginForm></LoginForm>) : (<RegisterForm></RegisterForm>)}
    </Login>
    </>
  );
};

export default Home;
