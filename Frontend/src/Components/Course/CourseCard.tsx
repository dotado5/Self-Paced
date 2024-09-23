import React from "react";
import { CourseCardProps } from "../../Types/Homepage";
import "./CourseCard.css";
import { useNavigate } from "react-router-dom";

const CourseCard: React.FC<CourseCardProps> = ({
  img,
  title,
  description,
  onClick,
  courseId,
}: CourseCardProps) => {
  const navigate = useNavigate();

  const navigateFunction = (link: string) => {
    navigate(`${link}`);
  };
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center py-[3em]">
      <img src={img} alt={title} className=" object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <hr className="my-4" />
        <button
          className="bg-[#0D5986] text-white px-6 py-2 rounded hover:bg-blue-700 w-full "
          onClick={(e) => {
            e.preventDefault();
            onClick && onClick(title);
            navigateFunction(`/course/${courseId}`);
          }}
        >
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
