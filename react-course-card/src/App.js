import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import coursesData from "./Redux/coursesData";
import CourseCard from "./components/courseCard/CourseCard";
import LecturerCard from "./components/lecturerCard/LecturerCard";

function App() {
  const [lecturers, setLecturers] = useState([]);

  useEffect(() => {
    //promise to get data from web
    // const fetchLecturers = () => {
    //   fetch("https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers")
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error("Failed to fetch lecturers.");
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       setLecturers(data);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data", error);
    //     });
    // };

    //async-await to get data from web
    // const fetchLecturers = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers"
    //     );
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch lecturers.");
    //     }
    //     const data = await response.json();
    //     setLecturers(data);
    //   } catch (error) {
    //     console.error("Error fetching data", error);
    //   }
    // };

    //axios to get data from web
    const fetchLecturers = () => {
      axios
        .get(
          "https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers"
        )
        .then((response) => {
          setLecturers(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    };
    fetchLecturers();
  }, []);

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
      {lecturers.map((lecturer) => (
        <LecturerCard
          id={lecturer.id}
          name={lecturer.name}
          title={lecturer.title}
          biography={lecturer.biography}
          coursesTaught={lecturer.coursesTaught}
          yearsOfExperience={lecturer.yearsOfExperience}
        />
      ))}
    </div>
  );
}

export default App;
