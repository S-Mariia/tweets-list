import styled from "styled-components";
import backgroundImage from "images/background.png";

export const Card = styled.div`
  width: 380px;
  height: 460px;
  padding: 20px;

  position: relative;

  background-image: url(${backgroundImage}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 308px, cover;
  background-position: top 28px right 36px, center;
  background-repeat: no-repeat;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  color: #ebd8ff;
`;

export const StyledParagraph = styled.p`
  margin-bottom: 16px;
  text-align: center;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;

// export const StyledButton = styled.button`
//   display: block;
//   width: 196px;
//   padding: 14px 28px;
//   margin: 26px auto;

//   font-family: inherit;
//   font-weight: 600;
//   font-size: 18px;
//   line-height: 1.2;
//   text-transform: uppercase;

//   color: #373737;
//   background-color: #ebd8ff;
//   /* #5cd3a8; */

//   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
//   transition: transform 200ms linear;

//   &:hover {
//     cursor: pointer;
//     transform: scale(1.05);
//   }
// `;
