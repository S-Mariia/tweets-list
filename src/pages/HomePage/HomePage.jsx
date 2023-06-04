import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>Home page</div>
      <Link to="/tweets">Tweets</Link>
    </>
  );
};

export default HomePage;
