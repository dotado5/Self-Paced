import CourseSyllabus from "../../../Components/CourseSyllabus/CourseSyllabus";
import "./CourseDetailsPage.css";
import course_image from "../../../assets/course_image.png";
import Button from "../../../Components/Button/Button";
import flutter from "../../../assets/bigger_flutter.png";
// import { useEffect } from "react";
// import LocalStorage from "../../../Services/Localstorage";
// import { USER_ID } from "../../../Constants/api";

const DashboardCourseDetailsPage = () => {
  // useEffect(() => {
  //   async function getUserDetails() {
  //     await setUserId(LocalStorage.get(USER_ID));
  //   }

  //   getUserDetails();
  // }, []);

  return (
    <div className="course_details_pages">
      <h1>
        <img src={flutter} alt="" />
        Mobile App Development
      </h1>
      <div className="course_details">
        <div className="course_video">
          <img src={course_image} alt="" />
          <Button
            content={"Continue Course"}
            className="w-[229px] h-[64px] sm:mt-[-1em]"
          />
        </div>
        <div className="course_info">
          <p>
            Duration <h2>2 Weeks</h2>
          </p>
          <p>
            Price <h2>250k</h2>
          </p>
          <p>
            Program Type <h2>Online</h2>
          </p>
        </div>
      </div>
      <p className="about_course">
        This comprehensive 12-week course is designed to take aspiring mobile
        app developers from the fundamentals to proficiency in building
        cross-platform mobile applications using Flutter. Flutter is a powerful
        framework for creating natively compiled applications for mobile, web,
        and desktop from a single codebase. In this course, you will learn to
        design, develop, and deploy mobile apps that are not only visually
        appealing but also robust and responsive. Whether you're a complete
        beginner or an experienced programmer, this course will equip you with
        the skills and knowledge to create your own mobile apps and launch them
        on both Android and iOS platforms.
      </p>

      <CourseSyllabus />
    </div>
  );
};

export default DashboardCourseDetailsPage;
