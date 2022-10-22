import Title from "../sharedUI/title";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4.25rem;
`;

const Disclaimer = styled.span`
  color: #7678ed;
  font-size: 0.94rem;
  margin-top: 0.94rem;
`;

const MostPremiumWatch = () => {
  return (
    <>
      <Wrapper>
        <div className="left">
          <Image src="/diamondWatch.jpg" width="642" height="600" />
        </div>

        <div className="right">
          <Title content="Most Premium Diamond Watch" />

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          {/* TODO: Reuse button component */}

          <Disclaimer>
            *If You are Interested in our premium products. Click “Want Live
            Try” Button And Fill the form with your details, Our Sales person
            will knock your dour!!
          </Disclaimer>
        </div>
      </Wrapper>
    </>
  );
};

export default MostPremiumWatch;
