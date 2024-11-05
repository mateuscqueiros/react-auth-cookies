import Axios from "axios";

export const axios = Axios.create({
  baseURL: "http://localhost:3001",
});

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = "application/json";

axios.interceptors.response.use(
  (response) => response, (error) => {
    if (error.response.status === 401 && !window.location.href.includes("/login")) {
      console.log("401");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  });
