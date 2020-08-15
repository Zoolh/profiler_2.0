import http from "../http-common";

const getAll = () => {
    return http.get("/actifs");
};

const getById = id => {
    return http.get(`/actifs/${id}`);
};

const getByProfilId = idProfil => {
    const params = {
        idProfil: idProfil
    }
    return http.post("/actifs/getByProfilId/", { params });
};


export default {
    getAll,
    getById,
    getByProfilId
};
