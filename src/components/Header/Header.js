import React from "react";
import headerImg from "../../assets/images/headerImg.png";
import locationH from "../../assets/images/location.png";
import { BsTelephoneForward } from "react-icons/bs";


const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header--cont">
            <img src={headerImg} alt="" />
          </div>
         <div className="header--content">
         <div className="header--text">
            <img src={locationH} alt="" />
            <a href=""> Маршала Катукова, д.8</a>
          </div>
          <div className="header--text1"> 
          <a><BsTelephoneForward /></a>
          <a>+7 (495) 750 05 00</a>
          </div>
         </div>
        <div className="header--btn">
        <button>Заказать звонок</button>
        <button>create</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
