import styled from "styled-components";

const BaseButton = styled.button`
  background-color: ${({ bg, theme }) =>
    bg === "primary"
      ? theme?.color?.primaryColor
      : theme?.color?.secondaryColor};
  border: 1px solid
    ${({ bg, theme }) =>
      bg === "primary"
        ? theme?.color?.secondaryColor
        : theme?.color?.primaryColor};
  color: ${({ bg, theme }) =>
    bg === "primary"
      ? theme?.color?.secondaryColor
      : theme?.color?.primaryColor};
  font-size: ${({ fontSize, theme }) => theme?.fontSizes[fontSize] ?? "1rem"};
  padding: ${({ fontSize, theme }) =>
    theme?.gap[fontSize] ?? "0.25rem 0.75rem"};
  border-radius: 10px;
  cursor: pointer;
  transition: 0.5s;

  & > * {
    padding-top: 0.2em;
    margin-left: 0.2em;
  }

  &:hover {
    background-color: ${({ theme }) => theme?.color?.hoverColor};
    color: ${({ theme }) => theme?.color?.textBackground};
    border: 1px solid ${({ theme }) => theme?.color?.hoverColor};
  }
`;

const Button = ({ children, bg, fontSize }) => {
  return (
    <BaseButton bg={bg} fontSize={fontSize}>
      {children}
    </BaseButton>
  );
};

export default Button;
