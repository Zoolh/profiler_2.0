// File crée manuellement, suite npm install axios.
// Gère la connexion générale à l'API.

import axios from "axios";

export default axios.create({
  
  // baseURL: "http://localhost:8080/api",
  // baseURL: "https://profiler-prod.herokuapp.com/api",
  baseURL: process.env.API_URL,
  headers: {
    "Content-type": "application/json"
  }
});
