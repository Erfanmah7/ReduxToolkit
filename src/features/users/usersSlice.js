import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
});

const initialState = {
  users: [],
  loading: false,
  error: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.loading = false),
        (state.error = ""),
        (state.users = action.payload);
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      (state.loading = false), (state.users = []);
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
export { fetchUsers };
