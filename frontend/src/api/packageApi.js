import axiosInstance from "./axiosInstance";

export const getPackages = () => {
    return axiosInstance.get("/packages");
};
