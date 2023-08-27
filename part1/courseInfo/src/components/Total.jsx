import PropTypes from "prop-types";

const Total = ({ totalNum }) => {
  return <p>Number of exercises : {totalNum}</p>;
};

Total.propTypes = {
  totalNum: PropTypes.number.isRequired,
};

export default Total;
