import React from "react";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ComputerIcon from "@mui/icons-material/Computer";
import WatchIcon from "@mui/icons-material/Watch";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HeadsetIcon from "@mui/icons-material/Headset";
import "./categories.css";

// Note :- classNames of some components are same as that of those in flash_sales to maintain consistency. Changes made to these classes would be reflected throughout.

export default function Categories() {
  return (
    <div className="section_parent2">
      <div className="bullet2">
        <div className="bullet_marker2"></div>
        <div className="bullet_name2">Categories</div>
      </div>
      <div className="title2">Browse By Category</div>
      <div className="category_list">
        <div className="item">
          <SmartphoneIcon sx={{ height: 45, width: 45 }} />
          <div className="logo_name">Mobiles</div>
        </div>
        <div className="item">
          <ComputerIcon sx={{ height: 45, width: 45 }} />
          <div className="logo_name">Laptops</div>
        </div>
        <div className="item">
          <WatchIcon sx={{ height: 45, width: 45 }} />
          <div className="logo_name">Smartwatch</div>
        </div>
        <div className="item">
          <CameraAltIcon sx={{ height: 45, width: 45 }} />
          <div className="logo_name">Camera</div>
        </div>
        <div className="item">
          <HeadsetIcon sx={{ height: 45, width: 45 }} />
          <div className="logo_name">Headphones</div>
        </div>
        <div className="item">
          <SportsEsportsIcon sx={{ height: 45, width: 45 }} />
          <div className="logo_name">Gaming</div>
        </div>
      </div>
    </div>
  );
}
