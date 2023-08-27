import StatLine from "./StatLine";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, combined, average, positive }) => {
  if (combined === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatLine text="good" value={good} />
          <StatLine text="netural" value={neutral} />
          <StatLine text="bad" value={bad} />
          <StatLine text="all" value={combined} />
          <StatLine text="average" value={average} />
          <StatLine text="positive" value={positive} />
        </tbody>
      </table>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  combined: PropTypes.number,
  average: PropTypes.number,
  positive: PropTypes.number,
};

export default Statistics;
