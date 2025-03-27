import React from "react";
import "./product_card.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";

export default function Product_card({
  image,
  discount,
  old_price,
  new_price,
  name,
  rate_num,
  rating,
  onSmash,
}) {
  return (
    <div className="card_parent">
      <div
        className="card_frame"
        style={{ backgroundImage: `url(${image})` }}
        onClick={onSmash}
      >
        <div className="image"></div>
        <div className="discount">-{discount}%</div>
      </div>
      <div className="like1">
        <Fav />
      </div>
      <div className="name" onClick={onSmash}>
        {name}
      </div>
      <div className="abc_price" onClick={onSmash}>
        ${new_price}
        <span className="old_price">${old_price}</span>
      </div>

      {/* Careful here */}
      <div className="rating_parent" onClick={onSmash}>
        <Rating num={rating} rate_num={rate_num} />
      </div>
    </div>
  );
}

export function Rating({ num, rate_num }) {
  const [iconColor1, setIconColor1] = useState("grey");
  const [iconColor2, setIconColor2] = useState("grey");
  const [iconColor3, setIconColor3] = useState("grey");
  const [iconColor4, setIconColor4] = useState("grey");
  const [iconColor5, setIconColor5] = useState("grey");

  const [value, setValue] = useState(num);

  useEffect(() => {
    switch (value) {
      case 1:
        setIconColor1("#FFAD33");
        break;
      case 2:
        setIconColor1("#FFAD33");
        setIconColor2("#FFAD33");
        break;
      case 3:
        setIconColor1("#FFAD33");
        setIconColor2("#FFAD33");
        setIconColor3("#FFAD33");
        break;
      case 4:
        setIconColor1("#FFAD33");
        setIconColor2("#FFAD33");
        setIconColor3("#FFAD33");
        setIconColor4("#FFAD33");
        break;
      case 5:
        setIconColor1("#FFAD33");
        setIconColor2("#FFAD33");
        setIconColor3("#FFAD33");
        setIconColor4("#FFAD33");
        setIconColor5("#FFAD33");
        break;
    }
  }, [value]);

  return (
    <div className="rating">
      <StarRateRoundedIcon
        className="star"
        sx={{ width: 20, height: 20, color: iconColor1 }}
      />
      <StarRateRoundedIcon
        className="star"
        sx={{ width: 20, height: 20, color: iconColor2 }}
      />
      <StarRateRoundedIcon
        className="star"
        sx={{ width: 20, height: 20, color: iconColor3 }}
      />
      <StarRateRoundedIcon
        className="star"
        sx={{ width: 20, height: 20, color: iconColor4 }}
      />
      <StarRateRoundedIcon
        className="star"
        sx={{ width: 20, height: 20, color: iconColor5 }}
      />
      <div className="rate_num">({rate_num})</div>
    </div>
  );
}

export function Fav() {
  const [check, setCheck] = useState(true);
  const [color, setColor] = useState("grey");

  let handleClick = () => {
    if (check) {
      setColor("red");
    } else {
      setColor("grey");
    }
    setCheck(!check);
  };

  return (
    <FavoriteIcon
      className="fav"
      onClick={handleClick}
      sx={{ width: 18, height: 18, color: color, padding: 0.4 }}
    />
  );
}
