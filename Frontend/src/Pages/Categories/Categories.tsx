import "./Categories.css";
import quote from "../../assets/quotes.png";
import { Testimonies, categories } from "../../Constants/defaults";
import TestimonyCard from "../../Components/Testimony Card/TestimonyCard";
import CategoryCard from "../../Components/Category/CategoryCard";

const Categories = () => {
  return (
    <div className="categories_page">
      <section className="first_section">
        <div className="flex flex-col items-center">
          <h1 className="select_text">
            <p>Select a course </p>that is right for you
          </h1>
          <p>Pick a course and learn at your own pace</p>
        </div>

        <div className="categories_section">
          <h1>Categories</h1>
          <div className="categories">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                img={category.img}
                title={category.title}
                link={category.link}
                dimensions="w-[400px] h-[310px] sm:w-full sm:h-[180px] md:w-full "
              />
            ))}
          </div>
        </div>
      </section>

      <section className="second_section">
        <h1>
          What our <p>students are saying</p>
        </h1>
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

export default Categories;
