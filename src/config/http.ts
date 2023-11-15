import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_API_URL,
  params: {
    api_key: process.env.NEXT_API_KEY,
  },
});
