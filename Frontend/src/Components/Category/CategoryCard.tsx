import React from "react";
import { Link } from "react-router-dom";
import { CategoryProps } from "../../Types/Homepage";
import "./CategoryCard.css";

const CategoryCard: React.FC<CategoryProps> = ({
  link,
  img,
  title,
  dimensions,
}: CategoryProps) => {
  return (
    <Link to={link} className={`category_card ${dimensions}`}>
      <img src={img} alt="" className="sm:w-[120px] sm:h-[100px]" />
      {title}
    </Link>
  );
};

export default CategoryCard;
