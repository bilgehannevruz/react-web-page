import React from "react";
import { Link } from "react-router-dom";

function CardItem() {
  return (
    <>
      <li className="cards_item">
        <Link className="cards__item__link">
            <figure className="cards__item_pic_wrap">
              <img src="/" alt="title" className="cards__item__img" />
            </figure>
            <div className="cards__item__info">

            </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
