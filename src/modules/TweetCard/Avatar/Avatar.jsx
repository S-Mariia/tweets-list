import {
  Container,
  DecorativeDiv,
  AvatarWrapper,
  StyledImg,
} from './Avatar.styled';

const Avatar = ({ avatar }) => {
  return (
    <Container>
      <DecorativeDiv />
      <AvatarWrapper>
        <StyledImg src={avatar} />
      </AvatarWrapper>
    </Container>
  );
};

export default Avatar;
