import React from "react";
import "./CourseProgressCard.css";
import { CourseProgressCardProps } from "../../Types/Dashboard";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import right_arrow from "../../assets/right_arrow.png";

const CourseProgressCard: React.FC<CourseProgressCardProps> = ({
  courseTitle,
  currentModule,
  moduleProgress,
  img,
}: CourseProgressCardProps) => {
  // const navigate = useNavigate();

  // const navigateFunction = (link: string) => {
  //   navigate(`${link}`);
  // };

  return (
    <div className="course_progress_card">
      <img src={img} alt="" />
      <div className="second_div">
        <div className="details">
          <h2>{courseTitle}</h2>
          <p className="text-[#2B2B2B]">{currentModule}</p>
          <span className="flex gap-2 text-[#818181] mt-4">
            Module Progress:{" "}
            <p className="text-[#0D5986] font-bold">
              {moduleProgress}% Complete
            </p>
          </span>
          <div className="progressbar w-[220px] sm:w-[170px] md:w-full">
            <div
              style={{
                height: "100%",
                width: `${moduleProgress}%`,
                transition: "width 0.5s",
              }}
              className="statusBar"
            ></div>
          </div>
        </div>
        <div className="course_links">
          <Button
            content={"Continue Course"}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            className="w-[229px]"
          />
          <Link
            to={"/dashboard/course_details"}
            className="text-[#0D5986] font-medium flex items-center gap-2"
            // onClick={() => navigateFunction("/dashboard/course")}
          >
            Course Overview <img src={right_arrow} alt="" className="mt-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseProgressCard;
