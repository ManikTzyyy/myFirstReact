import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
      //   console.log(res.data.token);
    })
    .catch((e) => {
      callback(false, e.response.data);
      //   console.log(e.response.data);
    });
};


export const decodeToken = (token)=>{
     const decodeToken = jwtDecode(token);
     return decodeToken;
}