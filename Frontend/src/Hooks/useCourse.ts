import { API_BASE_URL, ENDPOINTS } from "../Constants/api";
import Http from "../Services/Http"
import { getCourse } from "../Types/Homepage";

const useCourse = () => {

    const getAllCourses = async () => {
        const url = `${API_BASE_URL}/${ENDPOINTS.GET_ALL_COURSES}`;
        try {
            const res = await Http.get(url)

            return res
        } catch (error) {
            console.log(error);

        }
    }

    const getCourseById = async (course: getCourse) => {
        const url = `${API_BASE_URL}/${ENDPOINTS.GET_COURSE_BY_ID}`;
        try {
            const res = await Http.post(url, course)

            return res
        } catch (error) {
            console.log(error);

        }
    }

    return { getAllCourses, getCourseById }
}

export default useCourse