import CategoryCard from "../../../Components/Category/CategoryCard";
import { categories } from "../../../Constants/defaults";
import "./RecommendationsPage.css";

const RecommendationsPage = () => {
  return (
    <div className="edit_recommendation">
      <h1>Edit category recommendation</h1>
      <div className="select">
        <p className="resume">SELECT CATEGORY</p>
        <div className="categories">
          {categories.map((category, index) => (
            <CategoryCard
              img={category.img}
              title={category.title}
              link={category.link}
              dimensions="w-[314px] h-[264px]"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationsPage;
