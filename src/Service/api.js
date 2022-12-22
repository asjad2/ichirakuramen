import axios from 'axios';

const url = 'http://localhost:5000';

export const addApplicant = async (applicantData) => {
  return await axios.post(`${url}/ichiraku/postApplication`, applicantData);
}
export const addLogin = async (user,pass) => {
 const userinfo= {user,pass};
  return await axios.post('http://localhost:5000/ichiraku/postLogin', userinfo);
}


export const getApplicant = async (id) => {
  id = id || "";
    return await axios.get(`${url}/ichiraku/viewApplicants/${id}`);
}

export const deleteApplicant=async(id) =>{
  return await axios.delete(`${url}/ichiraku/deleteApplicants/${id}`);
}
export const updateApplicant = async (id, user) => {
  return await axios.put(`${url}/ichiraku/updateApplicants/${id}`, user);
};


