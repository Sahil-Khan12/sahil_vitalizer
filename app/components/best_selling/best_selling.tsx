import React from "react";
import "./best_selling.css";
import Product_card from "../product_card/product_card";
import Router from "next/router";

export default function Best_selling() {
  return (
    <div className="bs_parent">
      <div className="bs_bullet">
        <div className="bs_bullet_marker"></div>
        <div className="bs_bullet_name">This month</div>
      </div>
      <div className="bs_heading">
        <div className="bs_title">Best Selling products</div>
        <div className="bs_button">View all</div>
      </div>

      <div className="bs_products">
        <div className="bs_item">
          <Product_card
            image="./images/Jacket.png"
            name="HAVIT HV-G92 Gamepad"
            discount="40"
            new_price="100"
            old_price="160"
            rate_num="88"
            rating={4}
            onSmash={() => {
              Router.push("/product");
              window.scrollTo(0, 0);
            }}
          />
        </div>
        <div className="bs_item">
          <Product_card
            image="./images/Bag.png"
            name="AK-900 Wired Keyboard"
            discount="35"
            new_price="750"
            old_price="1160"
            rate_num="75"
            rating={4}
            onSmash={() => {
              Router.push("/product");
              window.scrollTo(0, 0);
            }}
          />
        </div>
        <div className="bs_item">
          <Product_card
            image="./images/speaker.png"
            name="IPS LCD Gaming Monitor"
            discount="25"
            new_price="280"
            old_price="400"
            rate_num="99"
            rating={5}
            onSmash={() => {
              Router.push("/product");
              window.scrollTo(0, 0);
            }}
          />
        </div>
        <div className="bs_item">
          <Product_card
            image="./images/table.png"
            name="AK-900 Wired Keyboard"
            discount="35"
            new_price="300"
            old_price="1160"
            rate_num="75"
            rating={4}
            onSmash={() => {
              Router.push("/product");
              window.scrollTo(0, 0);
            }}
          />
        </div>
        <div className="bs_item">
          <Product_card
            image="./images/keyboard.png"
            name="AK-900 Wired Keyboard"
            discount="35"
            new_price="960"
            old_price="1160"
            rate_num="75"
            rating={4}
            onSmash={() => {
              Router.push("/product");
              window.scrollTo(0, 0);
            }}
          />
        </div>
      </div>
    </div>
  );
}
