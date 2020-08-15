import http from "../http-common";

const getAll = () => {
    return http.get("/typesGestion");
};

const getById = id => {
    return http.get(`/typesGestion/${id}`);
};


export default {
    getAll,
    getById
};
