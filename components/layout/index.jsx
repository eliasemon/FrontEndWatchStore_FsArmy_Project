import WeeklyProducts from "../weeklyProducts";
import MostPremiumWatch from "../mostPremiumWatch";
import OurSpecialFeatures from "../ourSpecialFeatures";
import SummerSale from "../summerSale";
import Container from "../sharedUI/container";
import Background from "../sharedUI/backgrounds";

const Layout = () => {
  return (
    <>
      <Container>
        <WeeklyProducts />
        <MostPremiumWatch />
      </Container>
      <Background>
        <Container>
          <OurSpecialFeatures />
        </Container>
      </Background>
      <Container>
        <SummerSale />
      </Container>
    </>
  );
};

export default Layout;
