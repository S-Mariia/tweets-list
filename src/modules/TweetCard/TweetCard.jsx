import { useState } from 'react';

import { Card, StyledParagraph } from './TweetCard.styled';

import { ReactComponent as Logo } from 'icons/logo.svg';

import Avatar from './Avatar/Avatar';
import Button from 'shared/components/Button/Button';

const USERS_ID_LS = 'following-users-id';

const TweetCard = ({ tweet }) => {
  const { id, avatar, tweets, followers } = tweet;

  const [isFollowing, setIsFollowing] = useState(() => {
    const result = JSON.parse(localStorage.getItem(USERS_ID_LS)) || [];
    return result.includes(id) ? true : false;
  });

  const toggleIsFollowing = () => {
    const result = JSON.parse(localStorage.getItem(USERS_ID_LS)) || [];
    if (!isFollowing) {
      result.push(id);
      localStorage.setItem(USERS_ID_LS, JSON.stringify(result));
    }
    if (isFollowing) {
      result.splice(result.indexOf(id), 1);
      localStorage.setItem(USERS_ID_LS, JSON.stringify(result));
    }

    setIsFollowing(prevState => !prevState);
  };

  return (
    <Card>
      <Logo style={{ marginBottom: 242 }} />
      <Avatar avatar={avatar} />
      <StyledParagraph>{tweets} tweets</StyledParagraph>
      <StyledParagraph>
        {isFollowing ? followers + 1 : followers} followers
      </StyledParagraph>
      <Button isFollowing={isFollowing} onClick={toggleIsFollowing}>
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </Card>
  );
};

export default TweetCard;
