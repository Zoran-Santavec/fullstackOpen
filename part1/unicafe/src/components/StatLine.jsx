import PropTypes from "prop-types";

const StatLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

StatLine.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number,
};

export default StatLine;
