import CourseCard from "./components/courseCard/CourseCard";

function App() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
  };
  return (
    <div className="App" style={style}>
      <CourseCard
        title="ES001 HTML Index"
        difficulty="Elementary"
        icon="integration_instructions"
        cardTopColor="rgb(13, 67, 76)"
      />
      <CourseCard
        title="ES002 CSS Styles"
        difficulty="Intermediate"
        icon="format_paint"
        cardTopColor="rgb(106, 90, 205)"
      />
      <CourseCard
        title="ES003 JavaScript"
        difficulty="Advanced"
        icon="account_tree"
        cardTopColor="rgb(70, 130, 180)"
      />
    </div>
  );
}

export default App;
