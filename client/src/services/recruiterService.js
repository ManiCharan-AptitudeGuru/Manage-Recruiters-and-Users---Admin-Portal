import axios from "axios";

//http://localhost:5000/

const API_URL =
  "https://manage-recruiters-and-users-admin-portal.onrender.com/api/recruiters";

export const getRecruiters = async ({
  page = 1,
  status = "all",
  search = "",
} = {}) => {
  const response = await axios.get(API_URL, {
    params: { page, status, search },
  });
  return response.data;
};

export const approveRecruiter = async (id, reason) => {
  const response = await axios.put(`${API_URL}/approve`, { id, reason });
  return response.data;
};

export const rejectRecruiter = async (id, reason) => {
  const response = await axios.put(`${API_URL}/reject`, { id, reason });
  return response.data;
};

export const verifyRecruiter = async (id) => {
  const response = await axios.put(`${API_URL}/verify/${id}`);
  return response.data;
};
