import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;

  position: absolute;
  top: 0;
  left: 0;

  font-family: inherit;
  font-size: 18px;
  font-weight: 500;

  color: #373737;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  position: relative;

  margin-top: 24px;
`;

export const Div = styled.div`
  position: relative;
`;

export const StyledError = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: darkred;

  width: 600px;
  margin: 0 auto 20px;
`;
