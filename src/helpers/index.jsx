// import axios from "axios";
// import CryptoJS from "crypto-js";

// const secretKey = "process.env.REACT_APP_AES_SECRET_KEY";
// // ENCRYPTION FUNCTION 
// export const encryptData = (payload) => {
//   const encryptedData = CryptoJS.AES.encrypt(
//     JSON.stringify(payload),
//     secretKey
//   ).toString();
//   return {encryptedData: encryptedData};
// };

// // DECRYPTION FUNCTION
// export const decryptData = (response) => {
//   const bytes = CryptoJS.AES.decrypt(response, secretKey);
//   const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
//   return JSON.parse(decryptedData);

// };


// // Create Axios instance
// export const axiosInstance = axios.create();

// // Request Interceptor for Encryption
// axiosInstance.interceptors.request.use(
// (config) => {
//     if (config.data) {
//       config.data = encryptData(config.data);
//     }
//     return config;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// // Response Interceptor for Decryption
// axiosInstance.interceptors.response.use(
//   (response) => {
//     if (response?.data?.data) {
//       response.data.data = decryptData(response.data.data);
//     }
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );