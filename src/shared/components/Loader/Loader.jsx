import { MutatingDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <MutatingDots
      height="160"
      width="160"
      color="#C07043"
      secondaryColor="#4fa94d"
      radius="15.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      visible={true}
    />
  );
};

export default Loader;
