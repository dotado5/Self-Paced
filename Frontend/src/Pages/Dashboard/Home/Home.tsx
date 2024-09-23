import CourseProgressCard from "../../../Components/CourseProgress/CourseProgressCard";
import { CourseProgressCardProps } from "../../../Types/Dashboard";
import "./Home.css";
import manual_testing from "../../../assets/couses-images/manual.png";
import { Link, useNavigate } from "react-router-dom";
import pencil from "../../../assets/pencil.png";
import { Courses } from "../../../Constants/defaults";
import DashboardCourseCard from "../../../Components/Dashboard Course/DashboardCourseCard";
import right_arrow from "../../../assets/right_arrow.png";
import { useEffect } from "react";
import {
  USER_FIRSTNAME,
  USER_INITIALS,
  EXPIRATION_TOKEN,
  USER_ACCESS_TOKEN,
} from "../../../Constants/api";
// import axios from "axios";
// import { useEffect } from "react";
// import { API_BASE_URL, ENDPOINTS } from "../../../Constants/api";

const course: CourseProgressCardProps = {
  courseLink: "#",
  courseTitle: "Manual Software Testing",
  currentModule: "Module 4: Functional Testing Techniques",
  moduleProgress: 20,
  img: manual_testing,
};

const DashboardHome = () => {
  const navigate = useNavigate();

  const navigateFunction = (link: string) => {
    navigate(`${link}`);
  };

  useEffect(() => {
    const checkTokenExpiration = () => {
      const expiration = localStorage.getItem(EXPIRATION_TOKEN);
      // console.log("less than", localStorage.getItem(USER_ACCESS_TOKEN));

      if (expiration && new Date(expiration) <= new Date()) {
        localStorage.setItem(USER_ACCESS_TOKEN, "");
        localStorage.removeItem(EXPIRATION_TOKEN);
        localStorage.setItem(USER_INITIALS, "");
        localStorage.removeItem(USER_FIRSTNAME);
      }

      if (localStorage.getItem(USER_ACCESS_TOKEN)?.length === 0) {
        localStorage.setItem(USER_INITIALS, "");
        localStorage.removeItem(USER_FIRSTNAME);
      }
    };

    checkTokenExpiration();
    const interval = setInterval(checkTokenExpiration, 1000); // Check every second

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.get(`${API_BASE_URL}/${ENDPOINTS.HOME}`);

  //       console.log("response", res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <div className="dashboardHome">
      <div className="top_div">
        <p>RESUME LEARNING</p>
        <CourseProgressCard
          courseTitle={course.courseTitle}
          img={course.img}
          currentModule={course.currentModule}
          moduleProgress={course.moduleProgress}
          courseLink={course.courseLink}
        />
        <Link to={"/dashboard/learning_progress"} className="to_progress">
          View all learning in progress{" "}
          <img src={right_arrow} alt="" className="mt-1" />
        </Link>
      </div>
      <div className="bottom_div">
        <h5>EXPLORE RECOMMENDATIONS</h5>
        <p className="category mb-3">
          Category, Engineering
          <span
            className="cursor-pointer"
            onClick={() => navigateFunction("/dashboard/recommendations")}
          >
            Edit <img src={pencil} alt="" />
          </span>
        </p>

        <div className="recommendations">
          {Courses.slice(0, 3).map((subject, index) => (
            <DashboardCourseCard
              img={subject.img}
              title={subject.title}
              description={subject.description}
              category={subject.category}
              key={index}
              courseId={""}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
