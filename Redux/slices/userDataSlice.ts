import api from "@/hooks/api/retrievToken";
import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const accessToken = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  if (!accessToken) {
    throw new Error("Access token not found");
  }

  const response = await axios.get(`https://post.rootski.live/employee/get_employee_details/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log("Response:", response);
  return response?.data;

});

interface UserDataState {
  data: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserDataState = {
  data: [],
  status: "idle",
  error: null,
};

const dataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    resetUserData: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload; // Update once
        state.status = "succeeded";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch data";
      });
  },
});

export const { resetUserData } = dataSlice.actions;

export default dataSlice.reducer;
