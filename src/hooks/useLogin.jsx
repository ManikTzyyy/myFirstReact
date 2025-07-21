import { useEffect, useState } from "react";
import { decodeToken } from "../service/auth.service";

export const useLogin = () => {
  const [userName, setUserName] = useState("");

  const userToken = localStorage.getItem("token");
  useEffect(() => {
    if (userToken) {
      const res = decodeToken(userToken);
      setUserName(res.user);
    } else {
      console.log("please login first!");
      // window.location.href = "/login";
    }
  }, [userToken]);

  return userName
};
