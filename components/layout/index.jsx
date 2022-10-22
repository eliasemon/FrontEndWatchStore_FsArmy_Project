import WeeklyProducts from "../weeklyProducts";
import styled from "styled-components";
import MostPremiumWatch from "../mostPremiumWatch";
import OurSpecialFeatures from "../ourSpecialFeatures";
import SummerSale from "../summerSale";

const Container = styled.div`
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
`;

const Layout = () => {
  return (
    <>
      <Container>
        <p>Layout</p>
        <WeeklyProducts />
        <MostPremiumWatch />
      </Container>
      <OurSpecialFeatures />
      <Container>
        <SummerSale />
      </Container>
    </>
  );
};

export default Layout;
