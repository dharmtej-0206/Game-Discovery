import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "c269581677f240f6b9d631e45d1549a7",
  },
});
