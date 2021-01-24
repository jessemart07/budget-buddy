import axios from "axios";

const instance = axios.create({
  baseURL: "https://budget-app-4f643-default-rtdb.firebaseio.com/",
});

export default instance;
