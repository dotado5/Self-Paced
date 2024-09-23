import { API_BASE_URL, ENDPOINTS } from "../Constants/api";
import Http from "../Services/Http";
import { EnrollUser, UserCoursesRequest } from "../Types/Homepage";

const useUsers = () => {
    const enrollUser = async (data: EnrollUser) => {
        const url = `${API_BASE_URL}/${ENDPOINTS.ENROLL}`;
        try {
            const response = await Http.post(url, data);

            return response;
        } catch (error) {
            console.log(error);
        }
    };

    const getUserCourses = async (data: UserCoursesRequest) => {
        const url = `${API_BASE_URL}/${ENDPOINTS.GET_USER_COURSES}`;
        try {
            const response = await Http.post(url, data);

            return response;
        } catch (error) {
            console.log(error);
        }
    };

    return { enrollUser, getUserCourses };
};

export default useUsers;
