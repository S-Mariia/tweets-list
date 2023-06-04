import { StyledButton } from "./Button.styled";

const Button = ({ children, type = "button", ...props }) => {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
