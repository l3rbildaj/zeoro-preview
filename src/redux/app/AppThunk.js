
import axiosClient from "@/axios/api";
import { createAsyncThunk } from "@reduxjs/toolkit";


const appThunk = createAsyncThunk('app', async () =>{
    try {
        const response = await axiosClient.get('todos/todos');
        return response.data.data;
      } catch (error) {
        throw new Error('Failed to fetch todos.');
      }
})


export default appThunk


