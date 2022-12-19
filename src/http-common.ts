import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7121/api",
  headers: {
    "Content-type": "application/json"
  }
});