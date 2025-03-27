import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/navigation";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CancelIcon from "@mui/icons-material/Cancel";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "next/link";
import "./header.css";

const Dropdown: React.FC = () => {
  const router = useRouter();

  return (
    <div className="prof_dropdown">
      <div className="dropdown_rows">
        <PersonIcon />
        <div
          className="dropdown_text"
          onClick={() => {
            router.push("/account");
            window.scrollTo(0, 0);
          }}
        >
          Manage My Account
        </div>
      </div>
      <div className="dropdown_rows">
        <LocalMallIcon />
        <div className="dropdown_text">My Order</div>
      </div>
      <div className="dropdown_rows">
        <CancelIcon />
        <div className="dropdown_text">My Cancellations</div>
      </div>
      <div className="dropdown_rows">
        <StarBorderIcon />
        <div className="dropdown_text">My Reviews</div>
      </div>
      <div className="dropdown_rows">
        <LogoutIcon />
        <div className="dropdown_text">Logout</div>
      </div>
    </div>
  );
};

const Header: React.FC<{ logoUrl?: string }> = ({ logoUrl }) => {
  const router = useRouter();
  const [recolor, setRecolor] = useState<string>("black");
  const [dropdown, setDropdown] = useState<string>("none");
  const [check, setCheck] = useState<boolean>(true);
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    console.log(logoUrl);
  });

  const handleClick = () => {
    setCheck(!check);
    setRecolor(check ? "#DB4444" : "black");
    setDropdown(check ? "block" : "none");
  };

  return (
    <div className="header_parent">
      <div className="top_header">
        <p className="abc">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="shop_now">Shop Now</span>
        </p>
        <select className="language">
          <option className="opt" defaultValue="English">
            English
          </option>
          <option className="opt">Bengali</option>
        </select>
      </div>
      <div className="main_header">
        <div
          className="header_title"
          onClick={() => {
            console.log(logoUrl);

            return router.push("/home");
          }}
          style={{
            backgroundImage: `url(${logoUrl})` ,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="header_nav">
          <div
            className="header_nav_content"
            onClick={() => router.push("/home")}
          >
            Home
          </div>
          <div
            className="header_nav_content"
            onClick={() => router.push("/contact")}
          >
            Contact
          </div>
          <div
            className="header_nav_content"
            onClick={() => router.push("/about")}
          >
            About
          </div>
          <div
            className="header_nav_content"
            onClick={() => router.push("/register")}
          >
            Sign up
          </div>
        </div>
        <div className="header_other">
          <div className="search_container">
            <input
              className="header_search"
              placeholder={isMobile ? "Search" : "What are you looking for?"}
            />
            <span className="search_icon_bg">
              <SearchIcon sx={{ color: "grey" }} />
            </span>
          </div>
          <FavoriteBorderIcon className="header_icons" />
          <Link href="/cart">
            <ShoppingCartIcon className="header_icons" />
          </Link>
          <AccountCircleIcon
            className="header_icons"
            sx={{ color: recolor, height: 30, width: 30 }}
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="dropdown_container" style={{ display: dropdown }}>
        <Dropdown />
      </div>
    </div>
  );
};

export default Header;
