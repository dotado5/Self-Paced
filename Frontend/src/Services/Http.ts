import axios from "axios";
import LocalStorage from "./Localstorage";
import { USER_ACCESS_TOKEN } from "../Constants/api";

const Http = {
    get: async (url: string) => {
        try {
            const response = await axios.get(url);

            return response;
        } catch (error) {
            console.log(error);
        }
    },

    post: async (url: string, body: any) => {
        try {
            const userToken = LocalStorage.get(USER_ACCESS_TOKEN)

            const response = await axios.post(url, body, { headers: { Authorization: `Bearer ${userToken}` } });

            if (response.status !== 200) {
                return await Promise.reject(response);
            }

            return response;
        } catch (error) {
            console.log(error);
        }
    },
};

export default Http;
