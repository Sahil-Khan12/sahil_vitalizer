import "./product_card_select.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useEffect } from "react";

export default function Product_card_select({
  imageA,
  imageB,
  old_price,
  new_price,
  name,
  rate_num,
  rating,
  col1,
  col2,
}) {
  const [select1, setSelect1] = useState("block");
  const [select2, setSelect2] = useState("none");
  const [border1, setBorder1] = useState("2px solid black");
  const [border2, setBorder2] = useState("none");

  function handleClick1() {
    setSelect1("block");
    setSelect2("none");
    setBorder1("2px solid black");
    setBorder2("none");
  }

  function handleClick2() {
    setSelect1("none");
    setSelect2("block");
    setBorder1("none");
    setBorder2("2px solid black");
  }

  return (
    <div className="tap">
      <div className="card_opt_1" style={{ display: select1 }}>
        <Product_card_2
          image2={imageA}
          name2={name}
          new_price2={new_price}
          old_price2={old_price}
          rate_num2={rate_num}
          rating2={rating}
        />
      </div>
      <div className="card_opt_2" style={{ display: select2 }}>
        <Product_card_2
          image2={imageB}
          name2={name}
          new_price2={new_price}
          old_price2={old_price}
          rate_num2={rate_num}
          rating2={rating}
        />
        {/* Beware : This might cause some errors */}
      </div>
      <div className="card_select">
        <div className="select_container">
          <div
            className="opt"
            style={{ backgroundColor: col1, border: border1 }}
            onClick={handleClick1}
          ></div>
        </div>
        <div className="select_container">
          <div
            className="opt"
            style={{ backgroundColor: col2, border: border2 }}
            onClick={handleClick2}
          ></div>
        </div>
      </div>
    </div>
  );
}

function Product_card_2({
  image2,
  old_price2,
  new_price2,
  name2,
  rate_num2,
  rating2,
}) {
  return (
    <div className="card_parent_2">
      <div
        className="card_frame_2"
        style={{ backgroundImage: `url(${image2})` }}
      >
        <div className="image_2"></div>
        <div className="like_2">
          <div className="xyz_2">
            <Fav2 />
          </div>
        </div>
      </div>
      <div className="name_2">{name2}</div>
      <div className="price_2">
        ${new_price2}
        <span className="old_price_2">${old_price2}</span>
      </div>
      <Rating2 num2={rating2} rate_num2={rate_num2} />
    </div>
  );
}

function Rating2({ num2, rate_num2 }) {
  const [iconColor1, setIconColor1] = useState("grey");
  const [iconColor2, setIconColor2] = useState("grey");
  const [iconColor3, setIconColor3] = useState("grey");
  const [iconColor4, setIconColor4] = useState("grey");
  const [iconColor5, setIconColor5] = useState("grey");

  const [value, setValue] = useState(num2);

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
    <div className="rating_2">
      <StarRateRoundedIcon
        className="star_2"
        sx={{ width: 20, height: 20, color: iconColor1 }}
      />
      <StarRateRoundedIcon
        className="star_2"
        sx={{ width: 20, height: 20, color: iconColor2 }}
      />
      <StarRateRoundedIcon
        className="star_2"
        sx={{ width: 20, height: 20, color: iconColor3 }}
      />
      <StarRateRoundedIcon
        className="star_2"
        sx={{ width: 20, height: 20, color: iconColor4 }}
      />
      <StarRateRoundedIcon
        className="star_2"
        sx={{ width: 20, height: 20, color: iconColor5 }}
      />
      <div className="rate_num_2">({rate_num2})</div>
    </div>
  );
}

function Fav2() {
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
      className="fav_2"
      onClick={handleClick}
      sx={{ width: 18, height: 18, color: color, padding: 0.4 }}
    />
  );
}
