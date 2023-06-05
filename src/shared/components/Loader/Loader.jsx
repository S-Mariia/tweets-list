import { MutatingDots } from 'react-loader-spinner';

import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <MutatingDots
        height="100"
        width="100"
        color="#51309e"
        secondaryColor="#5cb76a"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Wrapper>
  );
};

export default Loader;
