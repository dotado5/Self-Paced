import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Navbar/Navbar";
import "./Sidebar.css";
import home_icon from "../../assets/home.png";
import up_arrow from "../../assets/down_arrow.png";
import projects from "../../assets/projects.png";
import logout from "../../assets/logout.png";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import useUsers from "../../Hooks/useUsers";
import LocalStorage from "../../Services/Localstorage";
import { USER_ID } from "../../Constants/api";
import { UserCoursesRequest } from "../../Types/Homepage";
import useCourse from "../../Hooks/useCourse";
import { Icons } from "../../Constants/defaults";

const Sidebar = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  const { getUserCourses } = useUsers();
  const { getCourseById } = useCourse();
  const [courses, setCourses] = useState<any[]>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchCourses() {
      const userId = await LocalStorage.get(USER_ID);
      let courseList: any[];
      let res: any;

      try {
        const data: UserCoursesRequest = { userId: userId ? userId : "" };

        const response = await getUserCourses(data);
        courseList = await response?.data.data;

        await courseList.forEach(async (course: any) => {
          res = await getCourseById({ courseId: course.courseId });
          await setCourses([res.data.course]);
        });

        console.log(response);
        console.log(courses);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCourses();
  }, []);

  const navigateFunction = (link: string) => {
    navigate(`${link}`);
  };

  const logUserOut = () => {
    logOut();
    navigateFunction("/auth/signin");
  };

  return (
    <>
      {isOpen ? (
        <div className="sidebar_cont flex">
          <div className="sidebar">
            <Logo width={"w-[143px] ml-[40px] mt-[32px] mb-[28px]"} />
            <button
              className="dashboard_home"
              onClick={() => navigateFunction("/dashboard")}
            >
              <img src={home_icon} alt="" /> Home
            </button>
            <div className="div">
              <p>
                YOUR COURSES
                <img src={up_arrow} alt="" />
              </p>
              {courses &&
                courses?.map((course, index) => (
                  <Link to={""} className="link" key={index}>
                    <img src={Icons ? Icons[course.imgUrlNo] : ""} alt="" />
                    {`${course.title.colored} ${course.title.plain}`}
                  </Link>
                ))}
              <span>
                MATERIAL
                <img src={up_arrow} alt="" />
              </span>
              <Link to={""} className="link">
                <img src={projects} alt="" />
                Projects
              </Link>
            </div>

            <button className="logout_button" onClick={logUserOut}>
              <img src={logout} alt="" />
              Logout
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0D5986] absolute top-[2.7%] left-[68%] z-[999] lg:hidden xl:hidden  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#0D5986] absolute top-[5%] left-3 lg:hidden xl:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      )}

      <div className="sidebar md:hidden sm:hidden">
        <div className="md:hidden lg:hidden xl:hidden"></div>
        <Logo width={"w-[143px] ml-[40px] mt-[32px] mb-[28px]"} />
        <button
          className="dashboard_home"
          onClick={() => navigateFunction("/dashboard")}
        >
          <img src={home_icon} alt="" /> Home
        </button>
        <div className="div">
          <p>
            YOUR COURSES
            <img src={up_arrow} alt="" />
          </p>
          {courses &&
            courses?.map((course, index) => (
              <Link to={""} className="link" key={index}>
                <img src={Icons ? Icons[course.imgUrlNo] : ""} alt="" />
                {`${course.title.colored} ${course.title.plain}`}
              </Link>
            ))}
          <span>
            MATERIAL
            <img src={up_arrow} alt="" />
          </span>
          <Link to={""} className="link">
            <img src={projects} alt="" />
            Projects
          </Link>
        </div>

        <button className="logout_button" onClick={logUserOut}>
          <img src={logout} alt="" />
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
