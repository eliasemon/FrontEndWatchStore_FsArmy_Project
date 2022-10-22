import Feature from "../sharedUI/feature";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineLock } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";

const FullWidthContainer = styled.div`
  width: 100%;
  background: #eaeaff;
  padding: 3.5rem 0;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
  /* TODO:this code not optimised. I'm not satified. Working on it later */
`;

const OurSpecialFeatures = () => {
  return (
    <>
      <FullWidthContainer>
        <Wrapper>
          <Feature
            title="Unique Everything"
            description="Lorem Ipsum simply and text of the printing."
            icon={<AiOutlineHeart />}
          />
          <Feature
            title="Free Shipping"
            description="Lorem Ipsum simply and text of the printing."
            icon={<MdOutlineLocalShipping />}
          />
          <Feature
            title="Secure Payments"
            description="Lorem Ipsum simply and text of the printing."
            icon={<AiOutlineLock />}
          />
          <Feature
            title="Support Customer"
            description="Lorem Ipsum simply and text of the printing."
            icon={<MdOutlineSupportAgent />}
          />
        </Wrapper>
      </FullWidthContainer>
    </>
    // need to dynamic icon and background
  );
};

export default OurSpecialFeatures;
