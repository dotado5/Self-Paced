import { EnrolledCourse } from "./courseType";

interface Register {
    firstName: string;
    middleName?: string;
    lastName: string
    email: string;
    password: string;
    enrolledCourses?: EnrolledCourse[];
}

interface Login {
    email: string;
    password: string;
}

interface User {
    userId: string;
    firstName?: string;
    middleName?: string;
    lastName?: string
    email?: string;
    password?: string;
    enrolledCourses?: EnrolledCourse[];
}

interface UserRequest {
    firstName: string;
    middleName?: string;
    lastName: string
    email: string;
    password: string;
    enrolledCourses: EnrolledCourse[];
}

interface EnrollUser {
    userId: string;
    courseId: string;
}

interface UserCoursesRequest {
    userId: string
}


export type { User, Login, Register, UserRequest, EnrollUser, UserCoursesRequest }
