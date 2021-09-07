import axios from "../myAxios.js";

const getAllPerson = ()=>{
    return axios.get("/person");
};
const getPersonById = (id)=>{
    return axios.get(`/person/${id}`);
};
const createPerson = (data)=>{
    return axios.post("/person",data);
};
const updatePerson = (id,data)=>{
    return axios.put(`/person/${id}`,data);
};
const deletePerson = (id)=>{
    return axios.delete(`/person/${id}`);
};
export default {
    getAllPerson,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
}