import http from "../http-common";

const getAllByIdQuestion = idQuestion => {
  return http.get("/propositions/getByQuestions", {
      params: {
          id: idQuestion
      }
    });
};


const get = id => {
  return http.get(`/propositions/${id}`);
};



export default {
  getAllByIdQuestion,
  get
};
