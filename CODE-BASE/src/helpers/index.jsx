import CryptoJS from "crypto-js";

const SECRET_KEY = "123456"; // Use a secure and stored secret

// Encrypt function
export const encryptToken = (token) => {
  console.log(token,"token")
  return CryptoJS.AES.encrypt(token, SECRET_KEY).toString();
};

// Decrypt function (if needed)
export const decryptToken = (encryptedToken) => {
  const bytes = CryptoJS.AES.decrypt(encryptedToken, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};

export const getToken = () => {
    try {
      const persistRoot = localStorage.getItem("persist:root");
      console.log(persistRoot,"per")
      if (!persistRoot) return null;
  
      const parsedRoot = JSON.parse(persistRoot);
      const kitchenState = JSON.parse(parsedRoot.kitchen);
      const encryptedToken = kitchenState.accessToken;
      console.log(parsedRoot,kitchenState,encryptedToken)
      if (!encryptedToken) return null;

      return decryptToken(encryptedToken);
    } catch (error) {
      console.error("Error parsing token from localStorage:", error);
      return null;
    }
  };
  