import Typed from "react-typed";
import Header from "./Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="animated-typing">
          <Typed
                      strings={[
                "Introducing DebateMaster",
              "Unleash the power of AI",
              "Enhance your debating powers",
              "Win arguments effortlessly",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </div>
      </div>
    </>
  );
};

export default Home;
