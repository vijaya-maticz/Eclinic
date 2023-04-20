import axios from 'axios';
import { hostingfilterApi ,wishlistApi,filtericonApi,iconfilterApi,filteroptionApi,filterbuttonApi } from '../config/filterRouteFront';
import { API_URL } from '../config/env';
export const filter = async function(data){
    console.log("filter axios darta" , data);
    var formdata  = new FormData();
    try {
    console.log("axios data>>>>>>>>>>  >>>>",data);
      
    if(data){
      formdata.append('country',data.country)
      formdata.append('checkInDate',data.checkInDate)
      formdata.append('checkOutDate',data.checkOutDate)
      formdata.append('adultcount',data.adult)
      formdata.append('childrencount',data.children)
      formdata.append('infantcount',data.infants)
      formdata.append('petcount',data.pets)
      console.log("form data ",formdata);
    }
    try {
      let respdata = await axios({
        'method': 'POST',
        'url': API_URL+hostingfilterApi,
        'credentials': true,
        'headers': {
          'content-Type':'application/json',
          //  'multipart/form-data', 
        },
        data: formdata,
  
      });
      console.log("response",respdata);
      return {
        data: respdata.data
      }
    }
    catch (err) {
      return {
        error: err
      }
    }
  }
  catch(e){
    console.log("error" , e);
      return {error: e}
  }
  }

  export const addwishlist = async(data) => {
    console.log("wishlist axios data" , data);
    var formdata = new FormData();
    try{
      if(data){
        formdata.append("roomid" , data.roomid)
        formdata.append("emailid" , data.emailid)
      }
      try {
        let respdata = await axios({
          'method': 'POST',
          'url': API_URL+wishlistApi,
          'credentials': true,
          'headers': {
            'content-Type':'application/json',
          },
          data: formdata,
        });
        console.log("response",respdata);
        return {
          data: respdata.data
        }
      }
      catch (err) {
        return {
          error: err
        }
      }
    }
    catch(e){
      console.log("error" , e);
      return {error: e}
    }
  }
 
  export const getfiltericon = async() => {
    try {
      let respData = await axios({
        'method': 'GET',
        'url': API_URL+filtericonApi,
        
    });
      console.log("respdata",respData);
      return {
        data: respData
      }
    }
    catch (err) {
      return {
           error: err.response.data
      }
    }
  }

  export const geticondata = async(data) => {
    console.log("get icon data  axios data" , data);
    var formdata = new FormData();
    try{
      if(data){
        formdata.append("description" , data.description)
      }
      try {
        let respdata = await axios({
          'method': 'POST',
          'url': API_URL+iconfilterApi,
          'credentials': true,
          'headers': {
            'content-Type':'application/json',
          },
          data: formdata,
        });
        console.log("response",respdata);
        return {
          data: respdata.data
        }
      }
      catch (err) {
        return {
          error: err.response.data
        }
      }
    }
    catch(e){
      console.log("error" , e);
      return {error: e}
    }
  }

  export const getfilteroption = async() => {
    try {
      let respData = await axios({
        'method': 'GET',
        'url': API_URL+filteroptionApi,
        
    });
      console.log("respdata",respData);
      return {
        data: respData
      }
    }
    catch (err) {
      return {
           error: err.response.data
      }
    }
  }

  export const getfilteroptiondata = async(data) => {
    console.log("getfilter option data" , data);
    var formdata = new FormData();
    try{
      if(data){
        formdata.append("placetype" , data.Place)
        formdata.append("propertytype" , data.Property)
        formdata.append("floorplan" , data.Floor)
        formdata.append("aminities" , data.Aminity)
      }
      try {
        let respdata = await axios({
          'method': 'POST',
          'url': API_URL+filterbuttonApi,
          'credentials': true,
          'headers': {
            'content-Type':'application/json',
          },
          data: data,
        });
        console.log("response",respdata);
        return {
          data: respdata.data
        }
      }
      catch (err) {
        return {
          error: err
        }
      }
    }
    catch(e){
      console.log("error" , e);
    }
  }