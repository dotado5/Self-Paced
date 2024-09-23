import { useParams } from "react-router-dom";
import CourseCard from "../../Components/Course/CourseCard";
import { Courses, Icons } from "../../Constants/defaults";
import "./CategoryPage.css";
import { useEffect, useState } from "react";
import useCourse from "../../Hooks/useCourse";

const CategoryPage = () => {
  const param = useParams();
  const { category_name } = param;
  const { getAllCourses } = useCourse();
  const [categoryName, setCategoryName] = useState<string>();
  const [category, setcategory] = useState<
    | "engineering"
    | "design"
    | "business & marketing"
    | "data science"
    | "IT security"
  >();
  const [courses, setCourses] = useState<any[]>([]);

  useEffect(() => {
    async function fetchCourses(category: string) {
      let allCourses = [];
      try {
        const response = await getAllCourses();

        console.log(response);
        allCourses = response?.data.data;

        await setCourses(
          allCourses.filter((course: any) => course.category === category)
        );

        console.log(courses);
      } catch (error) {
        console.log(error);
      }
    }

    if (category_name) {
      switch (category_name) {
        case "engineering":
          setCategoryName("an engineering");
          setcategory("engineering");

          break;
        case "design":
          setCategoryName("a design");
          setcategory("design");

          break;
        case "business_marketing":
          setCategoryName("a business and marketing");
          setcategory("business & marketing");

          break;
        case "data_science":
          setCategoryName("a data science");
          setcategory("data science");

          break;
        case "IT_security":
          setCategoryName("an IT security");
          setcategory("IT security");

          break;

        default:
          break;
      }

      fetchCourses(category_name);
    }
  }, [category_name]);

  return (
    <div className="category_page">
      <h1 className="select_text">
        <p>Select {categoryName} course </p>that is right for you
      </h1>
      <p>Pick a course and learn at your own pace</p>

      <div
        className={`${
          Courses.filter((course) => course.category === category).length > 2
            ? "course_list grid-cols-3 sm:grid-cols-1 sm:w-full sm:px-3 md:grid-cols-2 md:w-full md:px-3 xl:px-[5%]"
            : "course_list grid-cols-2 w-[70%] mx-auto sm:grid-cols-1 sm:w-full sm:px-3 md:px-5"
        }`}
      >
        {/* .filter((course) => course.category === category) */}
        {courses.map((course, index) => (
          <CourseCard
            img={Icons[course.imgUrlNo]}
            title={`${course.title.colored} ${course.title.plain}`}
            description={course.about}
            category={course.category}
            key={index}
            courseId={course.courseId}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
