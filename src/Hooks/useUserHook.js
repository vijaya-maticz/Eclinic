import axios from 'axios';
import Cookies from 'universal-cookie';

import { API_URL } from '../config/env';
import { signUpApi, checkUserApi, 
    checkOTPApi, loginApi, 
    updateUserDataApi, resendOTPApi,
    reserveRoomApi, 
    confirmRoomApi} from '../config/userRouteFront'; 
const cookies = new Cookies();
const headers = {headers: {
    'Content-Type': 'application/json',
    'Authorization': cookies.get('accessToken')?`Bearer ${cookies.get('accessToken')}`:((cookies.get('User-Datas'))?`Bearer ${(cookies.get('User-Datas')).token}`:"")
    // 'Authorization': `Bearer ${cookies.get('accessToken')}`
  }}

export const userSignUp = async (data) => {
    let dataToReturn = {}
    await axios.post(API_URL+signUpApi,data).then((data)=>{
        console.log("data in user sign up :",data);
        dataToReturn = data.data;
        cookies.set('email', data.data.record.email, { path: '/',expires: new Date(Date.now()+600000) });
        // cookies.set('refreshToken', data.data.refreshToken, { path: '/' });
        // cookies.set('accessToken', data.data.accessToken, { path: '/' });
        cookies.set('User-Datas',data.data.record, { path: '/',expires: new Date(Date.now()+600000) })
        // console.log("cookies.get('refreshToken')",cookies.get('refreshToken'),"cookies.get('accessToken')",cookies.get('accessToken')); 
    })
    return dataToReturn;
}

export const userCheck = async (email) => {
    let dataToReturn;
    await axios.get(`${API_URL}${checkUserApi}/${email}`).then((data)=>{
        console.log("usercheck hook:",data.data.status);
        dataToReturn = data.data.status;
    })
    return dataToReturn;
}

export const checkOtp = async (data) => {
    await axios.post(API_URL+checkOTPApi,data,headers).then((data)=>{
        console.log("data in check otp :",data);
    })
}

export const loginUser = async (data) => {
    let dataToReturn = {};
    console.log("data in login user hook function :",data);
    await axios.post(API_URL+loginApi,data).then((data)=>{
        console.log("data login user, status",data,"message",data.data.message);
        cookies.set('email', data.data.message.email, { path: '/' });
        cookies.set('User-Datas',data.data.message, { path: '/' })
        dataToReturn.status = data.data.status;
        dataToReturn.message = data.data.message;
    })
    console.log(dataToReturn,"dataToReturn");
    return dataToReturn;
}

export const updateUserData = async (data) => {
    console.log("update user data hook :",data);
    let dataToReturn = {};
    await axios.post(API_URL+updateUserDataApi,data,headers).then((result)=>{
        dataToReturn.data = result.data;
    })
    return dataToReturn;
}

export const resendOTP = async (data) => {
    let dataToReturn = {};
    await axios.post(API_URL+resendOTPApi,data,headers).then((result)=>{
        dataToReturn.status = result.data.status;
        dataToReturn.message = result.data.message;
    });
    return dataToReturn;
}

export const loginUserFacebook = async (data) => {
    const usercheck = await userCheck(data.email);
    const dataFinal = {
        email:data.email,
        userId:data.userID,
        appId:data.id,
        type:data.type
    };
    let dataToReturn = {};
    if(usercheck){
        await loginUser(dataFinal).then((data)=>{
            dataToReturn = data;
        })
    }else{
        await userSignUp(dataFinal).then((data)=>{
            dataToReturn = data
        })
    }
    return dataToReturn;
}

export const loginUserGoogle = async (data) => {
    const usercheck = await userCheck(data.email);
    let dataToReturn = {};
    if(usercheck){
        await loginUser(data).then((data)=>{
            dataToReturn = data;
        })
    }else{
        await userSignUp(data).then((data)=>{
            dataToReturn = data
        })
    }
    return dataToReturn;
}

export const reserveRoom = async (data,token) => {
    let dataToReturn = {};
    await axios.post(API_URL+reserveRoomApi,data,headers).then((data)=>{
        console.log("reserve room hook after booking",data);
        dataToReturn = data;
    });
    return dataToReturn;
}

export const confirmRoom = async (data) => {
    let dataToReturn = {};
    await axios.post(API_URL+confirmRoomApi,data,headers).then((data)=>{
        console.log("reserve room hook after booking",data);
        dataToReturn = data;
    });
    return dataToReturn;
}

export const getUserEmail =  () => {
    const email = cookies.get('email');
    return email;
}

export const getUserDatas = () => {
    const data = cookies.get('User-Datas');
    console.log("get user datas in cookies:",data);
    return data;
}

export const userLogout = () => {
    cookies.remove("email");
    cookies.remove("User-Datas");
}