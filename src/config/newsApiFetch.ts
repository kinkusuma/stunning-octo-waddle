import Axios from "axios";

export const newsApiFetch = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEWS_API_BASE_URL,
});

newsApiFetch.interceptors.request.use(async (config) => {
  config.headers["X-Api-Key"] = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  return config;
});

newsApiFetch.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    return Promise.reject(error);
  }
);
