import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
// axios.defaults.withCredentials = true;
let headers = {
   apiKey: process.env.REACT_APP_API_KEY,
};
export const login = async (email, password) => {
   try {
      const data = await axios.post(
         `${process.env.REACT_APP_URL_SERVICE}/login`,
         { email, password },
         {
            headers,
         }
      );
      localStorage.setItem("token", data.data.token);
      return data;
   } catch (error) {
      console.log(error);
      return false;
   }
};

export const getUsers = async (limit, skip) => {
   try {
      headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
      const data = await axios.get(`${process.env.REACT_APP_URL_SERVICE}/users`, {
         headers,
      });

      return data;
   } catch (error) {
      if (error.response) {
         // Request made and server responded
         console.log(error.response.data);

         console.log(error.response.status);
         console.log(error.response.headers);
         return error.response;
      } else if (error.request) {
         // The request was made but no response was received
         console.log(error.request);
      } else {
         // Something happened in setting up the request that triggered an Error
         console.log("Error", error.message);
      }

      return false;
   }
};

export const updateUser = async (user) => {
   try {
      const data = await axios.put(
         `${process.env.REACT_APP_URL_SERVICE}/user/update`,
         { user: user.user },
         {
            headers,
         }
      );

      return data;
   } catch (error) {
      console.log(error);
      return false;
   }
};

export const newUser = async (user) => {
   try {
      const data = await axios.post(
         `${process.env.REACT_APP_URL_SERVICE}/user/create`,
         { user: user.user },
         {
            headers,
         }
      );

      return data;
   } catch (error) {
      console.log(error);
      return false;
   }
};

export const deleteUser = async (user_id) => {
   try {
      const data = await axios.delete(`${process.env.REACT_APP_URL_SERVICE}/user/delete`, {
         params: { user_id },
         headers,
      });

      return data;
   } catch (error) {
      console.log(error);
      return false;
   }
};
