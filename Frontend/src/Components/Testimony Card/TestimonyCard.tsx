import React from "react";
import { TestimonyCardProps } from "../../Types/Homepage";
import "./TesimonyCard.css";

const TestimonyCard: React.FC<TestimonyCardProps> = ({
  name,
  testimony,
  img,
  role,
}: TestimonyCardProps) => {
  return (
    <div className="testimony_card">
      <img src={img} alt="" />
      <div>
        <p>{testimony}</p>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default TestimonyCard;
