import React, {useEffect} from 'react';
import Layout from './Layout';
import Userlist from '../components/Userlist';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getMe} from '../features/authSlice';

const User = () => {
    const dispacth = useDispatch();
    const navigate = useNavigate();
    const {isError, user} = useSelector((state => state.auth));

    useEffect(() =>{
        dispacth(getMe());
    }, [dispacth]);

    useEffect(() =>{
        if(isError){
            navigate("/");
        }
        if(user && user.role !== "admin"){
            navigate("/dashboard");
        }
    }, [isError, user, navigate]);
    
  return (
    <Layout>
        <Userlist/>
    </Layout>
  )
}

export default User