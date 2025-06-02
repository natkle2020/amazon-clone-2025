// src/Api/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-ff770/us-central1/api",
baseURL : "https://us-central1-clone-ff770.cloudfunctions.net/api",

});

export { axiosInstance };
