/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { registerUser , loginUser } from "./authActions";

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null

const initialState = {
  loadings: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /* Register Reducers */
    builder
      .addCase(registerUser.pending, (state) => {
        state.loadings = true;
        state.success = false;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loadings = false;
        state.userInfo = action.payload;
        state.userToken = action.payload.token;
        state.success = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loadings = false;
        state.error = action.payload ? action.payload : "Unknown Error";
        state.success = false;
      })

      /* Login Reducers */
      .addCase(loginUser.pending , (state)=> {
        state.loadings = true ;
        state.success = false ;
        state.error = null;
      })
      .addCase(loginUser.fulfilled , (state , action)=> {
        state.loadings = false ;
        state.userInfo = action.payload;
        console.log("Login slice" , action)
        state.userToken = action.payload.token;
        state.success = true ;
        state.error = null ;
      })
      .addCase(loginUser.rejected , (state , action )=> {
        state.loadings = false ;
        state.error = action.payload ? action.payload : "Unknown Error";
        state.success = false;
      })
  },
});

export default authSlice.reducer;


// _id
// 65df036675b14f65c53264cb
// firstName
// "Alagba"
// secondName
// "Omo"
// email
// "alagba@gmail.com"
// password
// "$2b$10$UfQy.uuY0gpgvr2g7/Hr0u1oBYnwsRyE.acV91siGAD3JMUxYPgVO"
// isAdmin
// false
