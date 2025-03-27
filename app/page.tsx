"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Box from "@mui/material/Box";
import Header from "./components/header/header";
import SliderSidebar from "./components/SliderSidebar/SliderSidebar";
import FlashSales from "./components/FlashSales/FlashSales";
import Categories from "./components/categories/Categories";
import Best_selling from "./components/best_selling/best_selling";
import SpeakerImage from "./components/SpeakerImage/SpeakerImage";
import Our_products from "./components/our_products/our_products";
import NewArrivals from "./components/Arrivals.module/NewArrivals";
import Bottom_image from "./components/bottom_image/bottom_image";
import Footer from "./components/footer/footer";
import logo from "./components/header/logo.png"
interface DecodedToken {
  userId: string;
  iat: number;
  exp: number;
  companyId: string;
}

export default function Home() {
  const [companyData, setCompanyData] = useState<any>(null);
  const [categoryNames, setCategoryNames] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found. Please log in.");
          setLoading(false);
          return;
        }

        const decoded: DecodedToken = jwtDecode(token);
        const companyId = decoded.companyId;

        if (!companyId) {
          setError("Invalid token. Unable to fetch company data.");
          setLoading(false);
          return;
        }

        const companyResponse = await axios.get(
          `http://localhost:8000/api/companies/${companyId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        let companyInfo = companyResponse.data;
        if (Array.isArray(companyInfo)) {
          companyInfo =
            companyInfo.find((company) => company._id === companyId) ||
            companyInfo[0];
        }

        if (companyInfo) {
          console.log("Company Data Fetched:", companyInfo);
          setCompanyData(companyInfo);
        } else {
          setError("Company data is empty.");
        }

        // Fetch category data
        const categoryResponse = await axios.get(
          `http://localhost:8000/api/categories/categories/67e3dc19cfdf5e5d8a2b65e7`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (Array.isArray(categoryResponse.data)) {
          const categories = categoryResponse.data.map(
            (cat) => cat.categoryName
          );
          setCategoryNames(categories);
        }
      } catch (err: any) {
        console.error("Error fetching company data:", err.message);
        setError("Failed to fetch company details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, []);

  if (loading) return <p>Loading company data...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!companyData) return <p>Company data not found.</p>;

  return (
    <Box>
      <Header
        logoUrl={
          logo.src
        }
      />
      <SliderSidebar categoryNames={categoryNames} />
      <div className="content">
        <FlashSales />
        <Categories />
        <Best_selling />
        <SpeakerImage />
        <Our_products />
        <NewArrivals />
        <Bottom_image />
      </div>
      <Footer />
    </Box>
  );
}
