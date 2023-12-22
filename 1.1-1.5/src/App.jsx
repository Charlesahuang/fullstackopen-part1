import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  const content1 = props.parts[0]; // Access props using their names
  const content2 = props.parts[1];
  const content3 = props.parts[2];

  return (
    <div>
      <Part1 part1={content1.name} exercises1={content1.exercises} />
      <Part2 part2={content2.name} exercises2={content2.exercises} />
      <Part3 part3={content3.name} exercises3={content3.exercises} />
    </div>
  );
};

const Part1 = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
    </div>
  );
};

const Part2 = (props) => {
  return (
    <div>
      <p>
        {props.part2} {props.exercises2}
      </p>
    </div>
  );
};

const Part3 = (props) => {
  return (
    <div>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  );
};

const Total = (props) => {
  const content1 = props.parts[0]; // Access props using their names
  const content2 = props.parts[1];
  const content3 = props.parts[2];

  return (
    <div>
      <p>
        Number of exercises{" "}
        {content1.exercises + content2.exercises + content3.exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
