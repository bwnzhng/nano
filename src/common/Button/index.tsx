import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick, href }: ButtonProps) =>
  href ? (
    <StyledButton
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      color={color}
    >
      {children}
    </StyledButton>
  ) : (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
