import { StyledButton } from "./index.styles";
import PropTypes from "prop-types";

export default function BaseButton({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
};
