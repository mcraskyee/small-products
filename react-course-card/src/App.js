import CourseCard from "./components/courseCard/CourseCard";

let courses = [
  {
    id: 1,
    title: "ES001 HTML Index",
    difficulty: "Elementary",
    duration: "2h",
    isCompleted: true,
    icon: "integration_instructions",
    cardTopColor: "rgb(13, 67, 76)",
  },
  {
    id: 2,
    title: "ES002 CSS Styles",
    difficulty: "Intermediate",
    duration: "5h",
    isCompleted: true,
    icon: "format_paint",
    cardTopColor: "rgb(106, 90, 205)",
  },
  {
    id: 3,
    title: "ES001 HTML Index",
    difficulty: "Intermediate",
    duration: "8h",
    isCompleted: false,
    icon: "account_tree",
    cardTopColor: "rgb(70, 130, 180)",
  },
];

function App() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
  };
  return (
    <div className="App" style={style}>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          difficulty={course.difficulty}
          duration={course.duration}
          isCompleted={course.isCompleted}
          icon={course.icon}
          cardTopColor={course.cardTopColor}
        />
      ))}
    </div>
  );
}

export default App;
