const API_BASE_URL = "http://localhost:3000"
const USER_ACCESS_TOKEN = 'accessToken'
const EXPIRATION_TOKEN = 'token_expiration'
const USER_FIRSTNAME = 'user_firstname'
const USER_INITIALS = 'user_initials'
const USER_ID = 'user_id'
const ENDPOINTS = {
    HOME: 'home',
    REGISTER: 'register',
    LOGIN: 'login',
    ENROLL: 'enroll',
    GET_ALL_COURSES: 'getAllCourses',
    GET_COURSE_BY_ID: 'getCourseById',
    GET_USER_COURSES: 'getUserCourses'
}

export { API_BASE_URL, ENDPOINTS, USER_ACCESS_TOKEN, EXPIRATION_TOKEN, USER_FIRSTNAME, USER_INITIALS, USER_ID }