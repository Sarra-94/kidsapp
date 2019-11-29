import React from "react";
import { Card } from "antd";

const Cardgame = props => {
  const { card } = props;
  const { Meta } = Card;

  return (
    <Card
    class="d-inline p-2 bg-primary text-white"
      hoverable
      style={{ width: "20%", height: "80%", margin: "2%" }}
      cover={<img alt="example" style={{ height: "50%" }} src={card.image} />}
    >
      <Meta title={card.title} description={card.title} />
      <a href={card.url} >
        <img
          src="https://files.adventistas.org/noticias/pt/2017/04/11160045/Google_Play_logo.png"
          alt="Disponible sur Google Play"
          data-lazy-src="https://app-enfant.fr/wp-content/themes/app-enfant/images/btn-googleplay.png"
         style={{width:'50%' , alignContent:'end'}}
          data-was-processed="true"
        />
      </a>
    </Card>
  );
};

export default Cardgame;
