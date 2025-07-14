import axios from "axios";

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
