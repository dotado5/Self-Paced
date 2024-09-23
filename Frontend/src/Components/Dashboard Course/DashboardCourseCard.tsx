import React from "react";
import { CourseCardProps } from "../../Types/Homepage";

const DashboardCourseCard: React.FC<CourseCardProps> = ({
  img,
  title,
  description,
}: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center pt-[3em]">
      <img src={img} alt={title} className=" object-cover" />
      <div className="p-6 pb-2">
        <h3 className="text-2xl font-medium mb-2">{title}</h3>
        <p className="text-[#2B2B2B] mb-1 font-light">{description}</p>
      </div>
    </div>
  );
};

export default DashboardCourseCard;
