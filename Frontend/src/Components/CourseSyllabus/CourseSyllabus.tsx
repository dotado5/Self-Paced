import CircularProgressBar from "../CircularProgress/CircularProgress";
import "./CourseSyllabus.css";

const syllabus = [
  { content: "HTML5 Elements and Semantic Markup", progress: 20 },
  { content: "Introduction to HTML5 and CSS3", progress: 0 },
  { content: "Styling with CSS3", progress: 0 },
  { content: "Responsive Web Design", progress: 0 },
  { content: "CSS Layout Techniques", progress: 0 },
  { content: "Advanced CSS3 Effects", progress: 0 },
  { content: "Web Forms and Validations", progress: 0 },
  { content: "Web Accessibility and Best Practices", progress: 0 },
  { content: "Project Work and Portfolio Development", progress: 0 },
];

const CourseSyllabus = () => {
  return (
    <section className="syllabus_section">
      <h2>Course Syllabus</h2>
      {syllabus.map((lesson, index) => (
        <div className="module" key={index}>
          <div className="flex flex-col gap-2 items-start">
            <h4>Module {index + 1}</h4>
            <p className="sm:text-sm">{lesson.content}</p>
          </div>
          <CircularProgressBar
            percentage={lesson.progress}
            width="48px"
            height="48px"
          />
        </div>
      ))}
    </section>
  );
};

export default CourseSyllabus;
