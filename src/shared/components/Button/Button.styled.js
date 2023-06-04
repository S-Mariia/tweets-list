import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  width: 196px;
  padding: 14px 28px;
  margin: 26px auto;

  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #373737;

  background-color: ${({ isFollowing }) => {
    return isFollowing ? '#5cd3a8' : '#ebd8ff';
  }};

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: transform 200ms linear;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
