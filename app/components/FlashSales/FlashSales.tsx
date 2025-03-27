"use client"; // Required for Next.js App Router

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Product_card from "../product_card/product_card"; // Ensure this is correctly imported
import styles from "./FlashSales.module.css"; // Import CSS Module

export default function Flash_sales() {
  const router = useRouter();
  const duration = 1.5 * 60 * 60 * 1000; // 1.5 hours
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [products, setProducts] = useState([]); // State for products
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => Math.max(prev - 1000, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/products/company/67e3dc19cfdf5e5d8a2b65e7"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const formatTime = (ms: number) => {
    const hours = String(Math.floor(ms / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor((ms / (1000 * 60)) % 60)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor((ms / 1000) % 60)).padStart(2, "0");
    return `${hours} : ${minutes} : ${seconds}`;
  };

  if (loading) return <div className={styles.loading}>Loading products...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.section_parent}>
      <div className={styles.bullet}>
        <div className={styles.bullet_marker}></div>
        <div className={styles.bullet_name}>Today's</div>
      </div>

      <div className={styles.heading}>
        <div className={styles.title}>Flash Sales</div>
        <div className={styles.timer}>
          (Ends in {formatTime(timeRemaining)})
        </div>
      </div>

      <div className={styles.products}>
        {products.map((product: any) => (
          <Product_card
            key={product._id}
            image={
              product.images.length > 0 && product.images[0].imageUrls
                ? `http://localhost:8000${product.images[0].imageUrls}`
                : "http://localhost:8000/uploads/1743006765353-tshirt.jpg"
            }
            name={product.productName}
            discount={product.Discount}
            new_price={product.price - (product.price * product.Discount) / 100}
            old_price={product.price}
            rate_num="50" // Replace with actual rating count if available
            rating={4} // Replace with actual rating if available
            onSmash={() => {
              router.push(`/product/${product._id}`);
              window.scrollTo(0, 0);
            }}
          />
        ))}
      </div>

      <div className={styles.view_container}>
        <div className={styles.view_button}>View all products</div>
      </div>
    </div>
  );
}
