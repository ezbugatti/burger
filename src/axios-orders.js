import axios from "axios";

const instance = axios.create({
  baseURL: "https://online-burger-app-default-rtdb.firebaseio.com/",
});

export default instance;
