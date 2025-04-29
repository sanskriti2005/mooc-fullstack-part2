import React from "react";
import Header from "./Header";
import Content from "./Content";
// import Total from "./components/Total";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      {course.parts.map((part) => {
        return (
          <div key={part.id}>
            <Content part={part} />
          </div>
        );
      })}
      <strong>
        Total of {course.parts.reduce(
          (acc, courseObj) => (acc += courseObj.exercises),
          0
        )} exercises
      </strong>
    </div>
  );
};

export default Course;
