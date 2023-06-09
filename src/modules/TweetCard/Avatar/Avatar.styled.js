import styled from 'styled-components';

export const Container = styled.div`
  width: 380px;
  height: 80px;

  position: absolute;
  top: 178px;
  left: 0;
`;

export const DecorativeDiv = styled.div`
  width: 100%;
  height: 8px;

  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarWrapper = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  border: 9px solid #ebd8ff;
  border-radius: 50%;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    z-index: 5;
  }
`;

export const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
