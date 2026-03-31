import axios from "axios";

const BACKEND_URL = axios.create({
  baseURL: "https://notes-app-t9t3.onrender.com/api/v1/noteapp/",
});

export default BACKEND_URL;