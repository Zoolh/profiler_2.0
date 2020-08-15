import http from "../http-common";

const getAll = () => {
  return http.get("/profils");
};

const getById = id => {
  return http.get(`/profils/${id}`);  
};

export default {
  getAll,
  getById
};
