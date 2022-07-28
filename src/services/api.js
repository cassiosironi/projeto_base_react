import axios from "axios";

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/cassiosironi/api-test/",
});
export default api;
