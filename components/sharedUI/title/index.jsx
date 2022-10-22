import styled from "styled-components";

const H3 = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  color: #333;
`;
const Bar = styled.div`
  background: #7678ed;
  border-radius: 0.3rem;
  width: 3.2rem;
  height: 0.25rem;
  margin: 0.37rem 0 1.6rem 0;
`;

const Title = ({ content }) => {
  return (
    <>
      <H3>{content}</H3>
      <Bar />
    </>
  );
};

export default Title;
