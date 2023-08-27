import PropTypes from "prop-types";

const Button = ({ setter, value, text }) => {
  return <button onClick={() => setter(value + 1)}>{text}</button>;
};

Button.propTypes = {
  setter: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
