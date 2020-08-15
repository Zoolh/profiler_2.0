import http from "../http-common";

const getAll = () => {
    return http.get("/conseils");
};

const getById = id => {
    return http.get(`/conseils/${id}`);
};


export default {
    getAll,
    getById
};
