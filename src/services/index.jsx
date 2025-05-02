import axios from "axios"
import { endpoint } from "./endpoint"

import { showToast } from "../Components/Common/toast"
import { SetAccessToken, SetLoginData } from "../redux/reducers/authSlice"

export const request = ({
    url,
    method, token,
    contentType, params, data,


}) => new Promise((resolve, reject) => {
    let config = {
        url: `http://doodlebluelive.com:2030/api${url}`,
        method: method,
        params: params ? params : null,
        data: data ? data : null,
        responseType: "",
        headers: {
            Authorization: token ? "Bearer " + token : "",
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

        alert("error")
        return reject(res)

    })


})


export const login =async (dispatch) => {
    const data =
        { username: "sample@email.com", password: "Testing@1234" }

    const res = await request({
        url: endpoint.auth.login,
        method: endpoint.APIMethods.POST,
        data: data,

    })
    console.log(res,"res")
    dispatch(SetLoginData(res?.data));
         dispatch(SetAccessToken(res?.data?.access_token));
   return res
    
}