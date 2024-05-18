import React from "react";
import afishaImg from "../../assets/images/afisha.png";
import afishaImg1 from "../../assets/images/afisha1.png";

const Afisha = () => {
  //ghjggiu
  return (
    <div id="afisha">
        <div className="afisha">
          <h1>Афиша</h1>
          <div className="topAfisha">
            <div className="afisha--card">
              <img src={afishaImg} alt="" />
              <div className="afisha--card__text">
                <p>ул. Маршала Катукова, д. 8</p>
              </div>
              <a>Летняя резиднция.</a>
              <h2>Детский концерт 8-10 лет</h2>
              <div className="afisha--card__text1">
                <p>Смена: 20-24 августа</p>
              </div>
            </div>
            <div className="afisha--card1">
              <img src={afishaImg1} alt="" />
              <div className="afisha--card__text">
                <p>ул. Маршала Катукова, д. 8</p>
              </div>

              <a>Выступление</a>
              <h2>“ЛЕБЕДИНОЕ ОЗЕРО”</h2>
              <div className="afisha--card__text1">
                <p>Смена: 20-24 августа</p>
              </div>
            </div>
            <div className="afisha--card">
              <img src={afishaImg} alt="" />
              <div className="afisha--card__text">
                <p>ул. Маршала Катукова, д. 8</p>
              </div>
              <a>Летняя резиднция.</a>
              <h2>Детский концерт 8-10 лет</h2>
              <div className="afisha--card__text1">
                <p>Смена: 20-24 августа</p>
              </div>
            </div>
            <div className="afisha--card1">
              <img src={afishaImg1} alt="" />
              <div className="afisha--card__text">
                <p>ул. Маршала Катукова, д. 8</p>
              </div>
              <a>Выступление</a>
              <h2>“ЛЕБЕДИНОЕ ОЗЕРО”</h2>
              <div className="afisha--card__text1">
                <p>Смена: 20-24 августа</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Afisha;
