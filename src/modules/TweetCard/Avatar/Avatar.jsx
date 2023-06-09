import {
  Container,
  DecorativeDiv,
  AvatarWrapper,
  StyledImg,
} from './Avatar.styled';

import defaultPhoto from 'images/default-image.png';

const Avatar = ({ avatar }) => {
  return (
    <Container>
      <DecorativeDiv />
      <AvatarWrapper>
        <StyledImg src={avatar || defaultPhoto} alt="actor avatar" />
      </AvatarWrapper>
    </Container>
  );
};

export default Avatar;
