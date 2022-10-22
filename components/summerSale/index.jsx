import styled from "styled-components";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const Wrap = styled.div`
  background-image: url("summerSale.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 20rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, #333, #000);
    opacity: 0.5;
  }
`;

const Content = styled.div`
  grid-column: 4;
  z-index: 1;
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const Offer = styled.div`
  border: 3px solid #fff;
  border-radius: 0.5rem;
  display: inline-block;
  padding: 1.4rem 1.7rem;

  & p {
    color: #fff;
    font-size: 1.4rem;
    text-transform: capitalize;
    font-weight: 500;
    margin-bottom: 0.4rem;
  }
  & span {
    color: #7678ed;
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

// const Btn = styled.a`
//   color: #fff;
//   font-size: 1.4rem;
//   text-decoration: none;
// `;
const ShopBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  & * {
    color: #fff;
    font-size: 1.3rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    &:hover {
      color: #7678ed;
    }
  }
`;
// TODO: Have little issues with hover link

const SummerSale = () => {
  return (
    <>
      <Wrap>
        <Content>
          <Title>Summer Sale</Title>
          <Offer>
            <p>
              up to <span>50%</span> off
            </p>
            <ShopBtn>
              <Link href="/collections">Shop Now</Link>
              <FaLongArrowAltRight />
            </ShopBtn>
          </Offer>
        </Content>
      </Wrap>
    </>
  );
};

export default SummerSale;
