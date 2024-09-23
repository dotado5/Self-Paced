import Button from "../../../Components/Button/Button";
import "./LearningPage.css";
import course_image from "../../../assets/course_image.png";

const LearningPage = () => {
  return (
    <div className="learning_page">
      <h1>
        <span>01</span>Introduction to Manual Testing
      </h1>
      <div>
        <img src={course_image} alt="" />
        <Button
          content={"Mark as Complete"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          className="w-[229px] h-[64px]"
        />
      </div>
    </div>
  );
};

export default LearningPage;
