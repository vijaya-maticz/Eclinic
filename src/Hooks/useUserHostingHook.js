import axios from 'axios';
import Cookies from 'universal-cookie';
import { API_URL } from '../config/env';
import { createHostingApi, getArrivingSoonApi, getBookingDetailsApi, getCheckoutTodayApi, getPendingBookingsApi, getReverseGeolocationApi, getUpcomingBookingsApi, getUserBookingsApi, getUserPendingApi, getUserTripsApi, hostRoomApprovalApi } from '../config/userRouteFront'; 
import { getHostDetailsApi,getHostedDatasApi,getSingleHostingDetailApi, getAdminDetailApi } from '../config/adminRouteFront'; 
const cookies = new Cookies();

const headers = {headers: {
    'Content-Type': 'application/json',
    'Authorization': cookies.get('accessToken')?`Bearer ${cookies.get('accessToken')}`:((cookies.get('User-Datas'))?`Bearer ${(cookies.get('User-Datas')).token}`:"")
    // 'Authorization': `Bearer ${cookies.get('accessToken')}`
  }}
// export const uploadHostImages = async (ImageFiles,email) => {
//     try{
//     console.log("imageFile>>>>>",ImageFiles);
//     let imageArray = [];
//     const bodyformData = new FormData()
//     if(ImageFiles.length>0){
//     for (var i = 0; i < ImageFiles.length; i++) {
//         bodyformData.append(`Files${i}`, ImageFiles[i])
//     }
//     bodyformData.append('email',email);
//     await axios({
//         'method': 'post',
//         'url': API_URL+createHostingPhotosApi,
//         'headers': {
//             'Content-Type': 'multipart/form-data'
//         },
//         'data': bodyformData,

//     }).then((data)=>{console.log('data from uploadHostImages:',data);})

//     }
// }
// catch(e){
//     console.log("errorrrr",e);
// }
// }

export const createHostUser = async (hostDatas) => {
    const bodyformData = new FormData();
    for (var i = 0; i < hostDatas.photos.length; i++) {
        bodyformData.append(`Files${i}`, hostDatas.photos[i])
    }
    bodyformData.append('email',hostDatas.email);
    bodyformData.append('title',hostDatas.title);
    bodyformData.append('propertyTypeGroup',JSON.stringify(hostDatas.propertyTypeGroup));
    bodyformData.append('propertyType',JSON.stringify(hostDatas.propertyType));
    bodyformData.append('address',JSON.stringify(hostDatas.address));
    bodyformData.append('amenities',JSON.stringify(hostDatas.amenities));
    bodyformData.append('privacyType',JSON.stringify(hostDatas.privacyType));
    bodyformData.append('description',JSON.stringify(hostDatas.description));
    bodyformData.append('descriptionContent',hostDatas.descriptionContent);
    bodyformData.append('price',hostDatas.price);
    bodyformData.append('legal',hostDatas.legal);
    bodyformData.append('firstName',hostDatas.firstName);
    bodyformData.append('lastName',hostDatas.lastName);
    bodyformData.append('floorPlan',JSON.stringify(hostDatas.floorPlan));
    console.log("host datas inside hook:",hostDatas,"bodyformdata :",bodyformData);
    await axios({
        'method': 'post',
        'url': API_URL+createHostingApi,
        'headers': {
            'Content-Type': 'multipart/form-data',
            'Authorization': cookies.get('accessToken')?`Bearer ${cookies.get('accessToken')}`:`Bearer ${cookies.get('User-Data').token}`
        },
        'data': bodyformData,

    })
}

export const getCurrentLocationFromNav = async(lat,long) => {
    let dataToReturn;
    const data = {
        latitude:lat,
        longitude:long
    }
    // await axios.post(API_URL+getReverseGeolocationApi,data).then((data)=>{
    //     dataToReturn = data;
    // })

    await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${"c5410198dae06dddc405cf7f50e09f8c"}`).then((data)=>{
        dataToReturn = data;
    })

    return dataToReturn;
}

export const getHostingDetails = async () => {
    let dataToReturn = []
    await axios.get(API_URL+getHostDetailsApi).then((data)=>{
        if(data.data.status){
        dataToReturn = data.data.data
        }
    })
    return dataToReturn
}

export const getHostedDatas = async (start,end) => {
    let data = {
        starting:start,
        ending:end
    }
    let dataToReturn = [];
    await axios.post(API_URL+getHostedDatasApi,data).then((data)=>{
        dataToReturn = data.data;
    });
    return dataToReturn;
} 

export const getRoomUsingId = async (id) => {
    let dataToReturn = {};
    await axios.get(API_URL+getSingleHostingDetailApi+`/${id}`).then((data)=>{
        dataToReturn = data.data;
    })
    return dataToReturn;
}

export const getAdminDetails = async () => {
    let dataToReturn = {}
    await axios.get(API_URL+getAdminDetailApi).then((data)=>{
        dataToReturn = data.data
    })
    return dataToReturn;
}


export const getPendingBookings = async (mail) => {
    let dataToReturn = {}
    await axios.get(API_URL+getPendingBookingsApi+"/"+mail).then((data)=>{
        dataToReturn = data.data
    })
    return dataToReturn;
}

export const getArrivingSoon = async (mail) => {
    let dataToReturn = {}
    await axios.get(API_URL+getArrivingSoonApi+"/"+mail).then((data)=>{
        dataToReturn = data.data
    })
    return dataToReturn;
}

export const getCheckoutToday = async (mail) => {
    let dataToReturn = {}
    await axios.get(API_URL+getCheckoutTodayApi+"/"+mail).then((data)=>{
        dataToReturn = data.data
    })
    return dataToReturn;
}

export const getUpcomingBookings = async (mail) => {
    let dataToReturn = {}
    await axios.get(API_URL+getUpcomingBookingsApi+"/"+mail).then((data)=>{
        dataToReturn = data.data
    })
    return dataToReturn;
}

export const hostRoomApproval = async (data) => {
    let dataToReturn = {}
    await axios.post(API_URL+hostRoomApprovalApi,data,headers).then((data)=>{
        dataToReturn = data.data
    })
    return dataToReturn;
}

export const getBookingDetails = async (id) => {
    let dataToReturn = {}
    await axios.get(API_URL+getBookingDetailsApi+"/"+id).then((data)=>{
        dataToReturn = data.data
    })
    return dataToReturn;
}

export const getUserBookings = async (mail) => {
    let dataToReturn = {}
    await axios.get(API_URL+getUserBookingsApi+"/"+mail).then((data)=>{
        dataToReturn = data.data
    })
    return dataToReturn;
}

export const getUserPendings = async (mail) => {
    let dataToReturn = {}
    await axios.get(API_URL+getUserPendingApi +"/"+mail).then((data)=>{
        dataToReturn = data.data
    })
    return dataToReturn;
}

export const getUserTrips = async (mail) => {
    let dataToReturn = {}
    await axios.get(API_URL+getUserTripsApi +"/"+mail).then((data)=>{
        dataToReturn = data.data
    })
    return dataToReturn;
}