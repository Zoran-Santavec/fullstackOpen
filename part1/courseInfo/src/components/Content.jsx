import Part from "./Part";
import PropTypes from "prop-types";

const Content = ({ part, exc }) => {
  return (
    <div>
      <Part part={part} exercises={exc} />
    </div>
  );
};
Content.propTypes = {
  part: PropTypes.string.isRequired,
  exc: PropTypes.number.isRequired,
};
export default Content;
