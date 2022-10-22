import styled from "styled-components";
import ImageBlock from './ImageBlock'
import TextBlock from './TextBlock'


const BaseCard = styled.div`
  margin: 1rem .5rem;
  border: 1px solid #eee;
  border-radius: 10px;
  transition: .5s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:hover {
    transform: scale(1.025);
  }
`;

const BaseCardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Card = () => {
  return (
    <BaseCard>
      <ImageBlock/>
      <TextBlock/>
    </BaseCard>
  );
};

export const CardGroup = () => {
  return (
    <BaseCardGroup>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </BaseCardGroup>
  );
};
