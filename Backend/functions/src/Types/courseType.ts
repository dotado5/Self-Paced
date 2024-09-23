
interface Progress {
    moduleTitle: string;
    completed: boolean;
    completionDate?: Date; // Optional, only present if completed
}

interface EnrolledCourse {
    courseId: string;
    progress: Progress[];
}

interface Module {
    title: string;
    content: string;
    duration?: number; // Duration in minutes
}

interface Course {
    courseId: string;
    title: string;
    description: string;
    modules: Module[];
    category: 'engineering' | 'design' | 'business & marketing' | 'data science' | 'IT security';
    duration: string;
}

interface CourseRequest {
    title: { colored: string, plain: string };
    about: string;
    description: string;
    modules: Module[];
    category: 'engineering' | 'design' | 'business & marketing' | 'data science' | 'IT security';
    imgUrlNo: number
}

interface UpdateCourse {
    courseId: string;
    title?: { colored: string, plain: string };
    about?: string;
    description?: string;
    modules?: Module[];
    category?: 'engineering' | 'design' | 'business & marketing' | 'data science' | 'IT security';
    imgUrlNo?: number
}

interface getCourse {
    courseId: string
}


export { Progress, EnrolledCourse, Module, Course, CourseRequest, getCourse, UpdateCourse }