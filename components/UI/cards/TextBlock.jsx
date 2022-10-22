import styled from "styled-components";
import { BlockText, InlineText } from "../texts";
import { Rating } from "../rating";
import { FaCartPlus, FaInfo } from "react-icons/fa";

import Button from "./../buttons/index";

const TextBlockStyle = styled.div`
  padding: 1rem;
`;

const PriceStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const TextBlock = () => {
  return (
    <TextBlockStyle>
      <BlockText size="md">Lorem Ipsum is simply</BlockText>
      <Rating rates="5" />
      <PriceStyle>
        <InlineText size="md" color="primary" weight="semiBold">
          $60.00
        </InlineText>
        <InlineText size="md" cross>
          $60.00
        </InlineText>
      </PriceStyle>
      <ButtonGroup>
        <Button bg="primary">
          Add Card <FaCartPlus />{" "}
        </Button>
        <Button>
          Details <FaInfo />{" "}
        </Button>
      </ButtonGroup>
    </TextBlockStyle>
  );
};

export default TextBlock;
