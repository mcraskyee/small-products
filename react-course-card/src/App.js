import "./App.css";
import coursesData from "./Redux/data";
import CourseCard from "./components/courseCard/CourseCard";

function App() {
  return (
    <div className="App">
      {coursesData.map((course) => (
        <CourseCard
          key={course.id}
          title={course.title}
          difficulty={course.difficulty}
          price={course.price.toFixed(2)}
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
