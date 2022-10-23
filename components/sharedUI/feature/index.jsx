import styled from "styled-components";

const FeatureWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: ${({ theme }) => theme?.color?.whiteColor};
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 1rem 0.9rem;
`;

const FeatureTitle = styled.h4`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme?.fontWeight?.bold};
  color: ${({ theme }) => theme?.color?.primaryColor};
`;
const FeatureText = styled.span`
  font-size: 0.9rem;
  margin-top: 0.4rem;
`;
const Icon = styled.div`
  font-size: 2.8rem;
  color: ${({ theme }) => theme?.color?.primaryColor};
`;

const Feature = ({ title, description, icon }) => {
  return (
    <>
      <FeatureWrap>
        <Icon>{icon}</Icon>
        <div>
          <FeatureTitle>{title}</FeatureTitle>
          <FeatureText>{description} </FeatureText>
        </div>
      </FeatureWrap>
    </>
  );
};

export default Feature;
