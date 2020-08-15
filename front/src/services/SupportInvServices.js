import http from "../http-common";

const getAll = () => {
    return http.get("/supportsInv");
};

const getById = id => {
    return http.get(`/supportsInv/${id}`);
};

const getByPropositionId = idProposition => {
    const params = {
        idProposition: idProposition
    }
    return http.post("/supportsInv/getByPropositionId/", { params });
};


export default {
    getAll,
    getById,
    getByPropositionId
};
