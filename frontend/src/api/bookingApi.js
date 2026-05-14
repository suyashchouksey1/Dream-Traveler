import axiosInstance from "./axiosInstance";

export const createBooking = (bookingData) => {
  return axiosInstance.post("/bookings", bookingData);
};