import React from "react";
import "./our_products.css";
import Product_card_select from "../product_card_2/product_card_select.jsx";

export default function Our_products() {
  //     const [productsContainer, setProductsContainer] = useState(null);

  //   useEffect(() => {
  //     const productsContainerEl = document.querySelector(".op_products");
  //     productsContainerEl.addEventListener("wheel", (evt) => {
  //       evt.preventDefault();
  //       productsContainerEl.scrollLeft += evt.deltaY;

  //     });
  //     setProductsContainer(productsContainerEl);

  //   }, []);

  return (
    <div className="op_section_parent">
      <div className="op_bullet">
        <div className="op_bullet_marker"></div>
        <div className="op_bullet_name">Our Products</div>
      </div>
      <div className="op_heading">
        <div className="op_title">Explore Our Products</div>
      </div>
      <div className="op_products">
        <Product_card_select
          imageA="./images/red_car.png"
          imageB="./images/green_car.png"
          name="HAVIT HV-G92 Gamepad"
          new_price="100"
          old_price="160"
          rate_num="88"
          rating={4}
          col1="red"
          col2="green"
        />
        <Product_card_select
          imageA="./images/neon_shoes.png"
          imageB="./images/black_shoes.png"
          name="AK-900 Wired Keyboard"
          new_price="750"
          old_price="1160"
          rate_num="75"
          rating={4}
          col1="lightgreen"
          col2="black"
        />
        <Product_card_select
          imageA="./images/black_controller.png"
          imageB="./images/controller.png"
          name="IPS LCD Gaming Monitor"
          new_price="280"
          old_price="400"
          rate_num="99"
          col1="black"
          col2="red"
          rating={5}
        />
        <Product_card_select
          imageA="./images/keyboard.png"
          imageB="./images/green_car.png"
          name="AK-900 Wired Keyboard"
          new_price="300"
          old_price="1160"
          rate_num="75"
          rating={4}
          col1="red"
          col2="green"
        />
        <Product_card_select
          imageA="./images/keyboard.png"
          imageB="./images/green_car.png"
          name="AK-900 Wired Keyboard"
          new_price="960"
          old_price="1160"
          rate_num="75"
          rating={4}
          col1="red"
          col2="green"
        />
      </div>

      <div className="op_view_container">
        <div className="op_view_button">View all products</div>
      </div>
    </div>
  );
}
