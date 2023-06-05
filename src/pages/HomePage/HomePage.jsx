import { Wrapper, StyledTitle, StyledLink } from './HomePage.styled';

const HomePage = () => {
  return (
    <Wrapper>
      <StyledTitle>list of tweets</StyledTitle>
      <StyledLink to="/tweets">Go to tweets</StyledLink>
    </Wrapper>
  );
};

export default HomePage;
