import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const anotherInstance = axios.create({
  baseURL: "https://www.themoviedb.org",
  // Add any other configuration options here
});

export { instance as default, anotherInstance };
