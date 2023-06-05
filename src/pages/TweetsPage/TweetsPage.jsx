import { useState, useEffect } from 'react';

import { MdArrowBackIosNew } from 'react-icons/md';

import { fetchUsers } from 'shared/services/api';

import TweetCard from 'modules/TweetCard/TweetCard';
import Button from 'shared/components/Button/Button';
import Loader from 'shared/components/Loader/Loader';

import {
  StyledList,
  StyledLink,
  Wrapper,
  Div,
  StyledError,
} from './TweetsPage.styled';

const TweetsPage = () => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getTweets = async page => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchUsers(page);
        setTweets(prevTweets => [...prevTweets, ...data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getTweets(page);
  }, [page]);

  return (
    <>
      <Wrapper>
        <StyledLink to="/">
          <MdArrowBackIosNew size={18} /> Go back
        </StyledLink>
        {error && (
          <StyledError>{error}. Please try to reload the page.</StyledError>
        )}
        <StyledList>
          {tweets.map(tweet => (
            <li key={tweet.id}>
              <TweetCard tweet={tweet} />
            </li>
          ))}
        </StyledList>
        <Div>
          {page < 5 && !isLoading && (
            <Button onClick={() => setPage(prevPage => prevPage + 1)}>
              Load more
            </Button>
          )}
          {isLoading && <Loader />}
        </Div>
      </Wrapper>
    </>
  );
};

export default TweetsPage;
