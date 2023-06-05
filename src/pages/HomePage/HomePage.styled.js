import styled from 'styled-components';

import { Link } from 'react-router-dom';

import bg from 'images/welcome.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 330px;

  background-image: url(${bg});
  background-size: 568px;
  background-position: top 80px left 50%;
  background-repeat: no-repeat;

  color: #373737;
`;

export const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 46px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 36px;
`;

export const StyledLink = styled(Link)`
  display: block;

  font-size: 18px;
  text-align: center;
  color: #5131a5;
`;
