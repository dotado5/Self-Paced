import Hero from "../../Components/Hero/Hero";
import "./Home.css";
import quote from "../../assets/quotes.png";
import { Courses, Testimonies } from "../../Constants/defaults";
import TestimonyCard from "../../Components/Testimony Card/TestimonyCard";
import { Link } from "react-router-dom";
import next from "../../assets/arrow.png";
import CourseCard from "../../Components/Course/CourseCard";

const Home = () => {
  const cards = [
    {
      number: "92k",
      text: "Self-Paced Students",
    },
    {
      number: "345k",
      text: "Completed Courses",
    },
    {
      number: "73k",
      text: "Completed Projects",
    },
  ];

  return (
    <div className="home">
      {/* hero section */}
      <Hero />
      {/* Statistics section */}

      <section className=" py-16 first_section">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold pb-8">
            <p>
              Be the best <span className="course">at your</span>
            </p>
            <p className="pace">own pace</p>
          </h1>
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row -mx-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="md:w-1/3 xl:w-1/3 lg:w-1/3 px-4 mb-8 md:mb-0"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 text-center">
                  <div className="text-4xl font-bold mb-4 number">
                    {card.number}
                  </div>
                  <p className="text-gray-700">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="second_section">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h2>
            Choose a <p className="course">course</p>
          </h2>
          <div className="flex gap-5 flex-col xl:flex-row lg:flex-row mx-4">
            {Courses.filter((course) => course.featured).map(
              (course, index) => (
                <CourseCard
                  img={course.img}
                  title={course.title}
                  description={course.description}
                  category={course.category}
                  key={index}
                  courseId={""}
                />
              )
            )}
          </div>
        </div>

        <Link to={"/categories"} className="flex items-center gap-2">
          View all courses
          <img src={next} alt="" />
        </Link>
      </section>

      <section className="testimonies_section">
        <h2>
          Students'
          <p>testimonies</p>
        </h2>
        <img src={quote} alt="" />

        <div className="testimonies">
          {Testimonies.map((testimony, index) => (
            <TestimonyCard
              key={index}
              img={testimony.img}
              testimony={testimony.testimony}
              name={testimony.name}
              role={testimony.role}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
