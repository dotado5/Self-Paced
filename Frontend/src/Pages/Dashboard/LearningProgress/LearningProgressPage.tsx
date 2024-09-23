import CourseProgressCard from "../../../Components/CourseProgress/CourseProgressCard";
import { CourseProgressCardProps } from "../../../Types/Dashboard";
import manual_testing from "../../../assets/couses-images/manual.png";
import "./LearningProgressPage.css";

const course: CourseProgressCardProps = {
  courseLink: "#",
  courseTitle: "Manual Software Testing",
  currentModule: "Module 4: Functional Testing Techniques",
  moduleProgress: 20,
  img: manual_testing,
};

const LearningProgressPage = () => {
  return (
    <div className="learning_in_progress">
      <h1>Learning in progress</h1>
      <div className="current_course">
        <p className="resume">RESUME LEARNING</p>
        <CourseProgressCard
          courseTitle={course.courseTitle}
          img={course.img}
          currentModule={course.currentModule}
          moduleProgress={course.moduleProgress}
          courseLink={course.courseLink}
        />
      </div>

      <div className="other_courses">
        <p className="resume">LEARNING IN PROGRESS</p>
        <div>
          <CourseProgressCard
            courseTitle={course.courseTitle}
            img={course.img}
            currentModule={course.currentModule}
            moduleProgress={course.moduleProgress}
            courseLink={course.courseLink}
          />
        </div>
        <div>
          <CourseProgressCard
            courseTitle={course.courseTitle}
            img={course.img}
            currentModule={course.currentModule}
            moduleProgress={course.moduleProgress}
            courseLink={course.courseLink}
          />
        </div>
      </div>
    </div>
  );
};

export default LearningProgressPage;
