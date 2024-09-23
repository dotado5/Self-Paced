import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const navigateFunction = (link: string) => {
    navigate(`${link}`);
  };

  return (
    <section className="py-16 hero">
      <div className="container mx-auto flex flex-col md:flex-row xl:flex-row items-center">
        <div className="md:w-1/2 xl:w-1/2 text-center md:text-left xl:text-left p-4">
          <h1 className="text-6xl font-bold mb-4">
            Master IT Skills <p className="pace">at Your Own Pace</p>
          </h1>
          <p className="text-gray-700 mb-6">
            Discover the freedom to learn and excel in IT with our flexible,
            self-paced courses, designed to fit your schedule and boost your
            career!
          </p>
          <div className="space-x-4">
            <button
              className="bg-[#0D5986] text-white px-6 py-2 rounded hover:bg-blue-700"
              onClick={() => navigateFunction("/auth/signup")}
            >
              Start Learning
            </button>
            <button
              className="border border-[#0D5986] text-[#0D5986] px-6 py-2 rounded hover:border-gray-700 hover:text-gray-700"
              onClick={() => navigateFunction("/categories")}
            >
              View Courses
            </button>
          </div>
        </div>
        <div className="md:w-1/2 p-4 xl:w-1/2">
          <video controls className="w-full h-auto rounded">
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
