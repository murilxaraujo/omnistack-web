import axios from "axios";

const api = axios.create({
  baseURL: "https://devradar-maraujo.herokuapp.com"
});

export default api;
