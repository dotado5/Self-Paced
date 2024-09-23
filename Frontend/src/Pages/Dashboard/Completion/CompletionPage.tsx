import Button from "../../../Components/Button/Button";
import "./CompletionPage.css";
import completion_icon from "../../../assets/completion_image.png";

const CompletionPage = () => {
  return (
    <div className="completion_page">
      <h1>
        <span>01</span>Course Completion
      </h1>
      <div>
        <img src={completion_icon} alt="" />
        <p>Congratulation on completing this course</p>
        <Button
          content={"Completed"}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          className="w-[229px] h-[64px]"
        />
      </div>
    </div>
  );
};

export default CompletionPage;
