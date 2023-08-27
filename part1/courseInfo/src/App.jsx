import Header from "./components/Header";
import Total from "./components/Total";
import Content from "./components/Content";

const App = () => {
  const courseData = {
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

  const totalNum = courseData.parts.reduce((prev, curr) => {
    return prev + curr.exercises;
  }, 0);
  return (
    <div>
      <Header course={courseData.name} />
      {courseData.parts.map((part, index) => {
        return (
          <div key={index}>
            {" "}
            <Content part={part.name} exc={part.exercises} />
          </div>
        );
      })}
      <Total totalNum={totalNum} />
    </div>
  );
};

export default App;
