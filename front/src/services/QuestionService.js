import http from "../http-common";

const getAll = () => {
  return http.get("/questions");
  
};

const get = id => {
  return http.get(`/questions/${id}`);
};



export default {
  getAll,
  get
};
