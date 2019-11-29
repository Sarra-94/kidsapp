import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const Cardcomp = props => {
  const { card } = props;
  const { Meta } = Card;
  console.log(card._id)
  return (
    <Card
      className="card"
      hoverable
      style={{ width: "20%", margin: "2%" }}
      cover={<img alt="example" src={card.image} />}
    >
      <Meta title={card.title} description={card.title} />
      <Link
        to={{
          pathname: `/${card.title}`,
          url: card.url,
          title: card.title
        }}
      >
        <button
          style={{ marginTop: "5%", alignContent: "start" }}
          class="btn btn-outline-primary"
        >
          WATCH MOVIE
        </button>
      </Link>
    </Card>
  );
};

export default Cardcomp;
