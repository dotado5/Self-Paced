import { useNavigate } from "react-router-dom";
import { API_BASE_URL, ENDPOINTS, EXPIRATION_TOKEN, USER_ACCESS_TOKEN } from "../Constants/api";
import Http from "../Services/Http";
import LocalStorage from "../Services/Localstorage";
import { Login, Register } from "../Types/auth";

const useAuth = () => {
    const navigate = useNavigate();

    const saveToken = (token: string, expiresIn: number) => {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

        // console.log('user token', newToken);

        LocalStorage.set(USER_ACCESS_TOKEN, token);
        LocalStorage.set(EXPIRATION_TOKEN, expirationDate.toISOString());
        // setToken(newToken);
    }

    const register = async (data: Register) => {
        const url = `${API_BASE_URL}/${ENDPOINTS.REGISTER}`;
        try {
            const response = await Http.post(url, data);

            return response;
        } catch (error) {
            console.log(error);
        }
    };

    const login = async (data: Login) => {
        const url = `${API_BASE_URL}/${ENDPOINTS.LOGIN}`;
        try {
            const response = await Http.post(url, data);

            saveToken(response?.data.accessToken, 5000)


            return response;
        } catch (error) {
            console.log(error);
        }
    };


    const logOut = async () => {
        await LocalStorage.set(USER_ACCESS_TOKEN, '');
        navigate('/auth/signin');
    };

    return { register, login, saveToken, logOut };
};

export default useAuth;
