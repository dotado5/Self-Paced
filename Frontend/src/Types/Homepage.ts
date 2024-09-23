export interface TestimonyCardProps {
    img: string;
    testimony: string;
    name: string;
    role: string;
}

export interface CategoryProps {
    img: string;
    title: string;
    link: string;
    dimensions?: string
}

export interface CourseCardProps {
    courseId: string;
    img: string;
    title: string;
    description: string;
    onClick?: (query: string) => void;
    category: 'engineering' | 'design' | 'business & marketing' | 'data science' | 'IT security';
    featured?: boolean;
}

export interface ButtonProps {
    content: string;
    className?: string
    onClick?: (e: any) => void;
}

export interface CourseProps {
    img: string;
    title: string;
    description: string;
    aboutCourse: string;
    onClick?: (query: string) => void;
    category: 'engineering' | 'design' | 'business & marketing' | 'data science' | 'IT security';
    featured?: boolean;
    courseSyllabus: any[];
}

export interface EnrollUser {
    userId: string;
    courseId: string;
}
interface getCourse {
    courseId: string
}

interface UserCoursesRequest {
    userId: string
}

export type { getCourse, UserCoursesRequest }