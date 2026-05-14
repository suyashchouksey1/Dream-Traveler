import axiosInstance from "./axiosInstance";

// Register user
export const registerUser = (data) => {
    return axiosInstance.post("/auth/register", data);
};

// Login user
export const loginUser = (data) => {
    return axiosInstance.post("/auth/login", data);
};
