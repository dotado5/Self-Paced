import "./CourseDetailsPage.css";
import Button from "../../Components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCourse from "../../Hooks/useCourse";
import { EnrollUser, getCourse } from "../../Types/Homepage";
import { Images } from "../../Constants/defaults";
import LocalStorage from "../../Services/Localstorage";
import { USER_ID, USER_INITIALS } from "../../Constants/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUsers from "../../Hooks/useUsers";

// const syllabus = [
//   { content: "HTML5 Elements and Semantic Markup" },
//   { content: "Introduction to HTML5 and CSS3" },
//   { content: "Styling with CSS3" },
//   { content: "Responsive Web Design" },
//   { content: "CSS Layout Techniques" },
//   { content: "Advanced CSS3 Effects" },
//   { content: "Web Forms and Validations" },
//   { content: "Web Accessibility and Best Practices" },
//   { content: "Project Work and Portfolio Development" },
// ];

const CourseDetailsPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { courseId } = params;
  const { getCourseById } = useCourse();
  const { enrollUser } = useUsers();
  const [course, setCourse] = useState<any>();
  // const [icons, setIcons] = useState<string[]>();
  const [userInitials, setUserInitials] = useState<string | null>();
  const [userId, setUserId] = useState<string | null>();

  useEffect(() => {
    async function fetchCourse() {
      if (courseId) {
        const course: getCourse = { courseId: courseId };
        try {
          const response = await getCourseById(course);

          await setCourse(response?.data.course);
          // switch (response?.data.course.category) {
          //   case "engineering":
          //     setIcons(engineeringImages);

          //     break;

          //   default:
          //     break;
          // }

          // console.log(response);
        } catch (error) {
          console.log(error);
        }
      }
    }

    async function fetchUserDetails() {
      await setUserInitials(LocalStorage.get(USER_INITIALS));
      await setUserId(LocalStorage.get(USER_ID));
    }

    fetchUserDetails();
    fetchCourse();
  }, [courseId]);

  const navigateFunction = (link: string) => {
    navigate(`${link}`);
  };

  const notify = (text: string) => toast(`${text}`);

  async function enrollUserInCourse(data: EnrollUser) {
    try {
      const res = await enrollUser(data);

      if (res?.status === 200) {
        notify("Course successfully enrolled in");
        navigateFunction(`/dashboard/course_details/${data.courseId}`);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {course && (
        <div className="courseDetails">
          <ToastContainer />
          <p className="text-start sm:w-full sm:text-sm capitalize">
            Categories | {course.category} |{" "}
            {`${course.title.colored} ${course.title.plain}`}
          </p>
          <section className="first_section">
            <div>
              <h1>
                <p>{course.title.colored}</p>
                {course.title.plain}
              </h1>
              <p className="text-center">{course.about}</p>
              <Button
                content={"Start Learning"}
                onClick={(e) => {
                  e.preventDefault();
                  if (userInitials?.length !== 0) {
                    enrollUserInCourse({
                      courseId: course.courseId,
                      userId: userId ? userId : "",
                    });
                  } else {
                    notify("User needs to login to enroll in course");
                  }
                }}
                className="w-[335px]"
              />
            </div>
            <img src={Images ? Images[course.imgUrlNo] : ""} alt="" />
          </section>
          <section className="about_section">
            <h1>About the Course</h1>
            <p>{course.description}</p>
          </section>
          <section className="syllabus_section">
            <h2>Course Syllabus</h2>
            {course.modules.map((lesson: any, index: number) => (
              <div className="module" key={index}>
                <h4>Module {index + 1}</h4>
                <p>{lesson.title}</p>
              </div>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default CourseDetailsPage;
