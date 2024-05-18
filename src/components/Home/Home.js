import React from "react";
import homeLogo from "../../assets/images/home-logo.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home--top">
            <img src={homeLogo} alt="" />
            <h1>Движение. Творчество. Рост.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
