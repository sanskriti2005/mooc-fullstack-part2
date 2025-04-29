import React from "react";
import Header from './Header'
import Content from './Content'
// import Total from "./components/Total";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      {course.parts.map((part, i) => {
        return (
          <div key={i}>
            <Content part={part} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
