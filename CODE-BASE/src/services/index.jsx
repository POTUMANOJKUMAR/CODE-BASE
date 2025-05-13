// import axios from "axios"
import { endpoint } from "./endpoint"

import { showToast } from "../Components/Common/toast"
import { SetAccessToken, SetLoginData } from "../redux/reducers/authSlice"
// import { axiosInstance } from "../helpers"
import axios from "axios"
import { encryptToken } from "../helpers"

export const request = ({
    url,
    method, 
    // token=getToken(),
    contentType, params, data,


}) => new Promise((resolve, reject) => {
    let config = {
        url: `http://localhost:5000/api/auth${url}`,
        method: method,
        params: params ? params : null,
        data: data ? data : null,
        responseType: "",
        withCredentials: true,
        headers: {
            // Authorization: token ? "Bearer " + token : "",
            "Content-Type": contentType || "application/json",
        },
    }
    config.params == null && delete config.params
    config.data == null && config.data,
        config.responseType == null && config.responseType
        axios(config).then((res) => {
        console.log(res?.data?.message, "loginData");
        showToast({
            type: "success",
            message: res?.data?.message,
            position: "top-right",

        });
        return resolve(res);
    }).catch(({ res }) => {
      return reject(res)

    })


})


export const login =async (dispatch,data) => {
    const res = await request({
        url: endpoint.auth.login,   
        method: endpoint.APIMethods.POST,
        data: data,

    })
    console.log(res,"res")

    dispatch(SetLoginData(res?.data));
    dispatch(SetAccessToken((encryptToken(res?.data?.token))));
   return res
    
}
export const registerApi =async (data) => {
    console.log(data,"data")
    const res = await request({
        url: endpoint.auth.register,
        method: endpoint.APIMethods.POST,
        data: data,
})
    console.log(res,"res")

 
   return res
    
}
export const getUsers = async () => {
  const res = await request({
    url: endpoint.auth.allUsers,
    method: endpoint.APIMethods.GET,
  });

  return res;
};
