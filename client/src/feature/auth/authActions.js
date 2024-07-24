/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { backendURL } from "../../constants";

const REGISTER_URL = backendURL.register;
const LOGIN_URL = backendURL.login;

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ firstName, secondName, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post(
        `${REGISTER_URL}`,
        { firstName, secondName, email, password },
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const { data } = await axios.post(
        `${LOGIN_URL}`,
        { email, password },
        config
      );
      localStorage.setItem('userToken', data.token)
      return data ;
    } catch (error) { 
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
