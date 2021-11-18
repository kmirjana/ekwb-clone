import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/ekwb-f8682/us-central1/api",
});
export default instance;
