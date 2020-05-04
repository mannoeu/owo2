import axios from "axios";

let api_key = "AIzaSyB9XbWGYorHaSfR4wbf89EkIzoKxiFo_ck";

const api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 12,
    key: api_key,
  },
});

export default api;
