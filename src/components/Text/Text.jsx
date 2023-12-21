import "./Text.css";
import PropTypes from "prop-types";

const getStyles = (...args) => ["text", ...args].filter(Boolean).join(" ");

const Text = ({ children, type, size }) => {
  return <p className={getStyles(type, size)}>{children}</p>;
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["left", "right", "center", "justify"]),
  size: PropTypes.oneOf(["small", "medium", "large"])
};

export default Text;
