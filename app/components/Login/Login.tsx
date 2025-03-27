"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Header from "../header/header";
import Footer from "../footer/footer";
import image from "./image.png"; // Ensure the image is inside the /public folder
import "./Login.css"; // Import the CSS file

const Login: React.FC = () => {
  const router = useRouter(); // Initialize router
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null); // Reset error

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          companyName: "DaltaX",
          email,
          password,
        }
      );

      console.log("✅ Login Successful:", response.data);

      // Store token in localStorage
      console.log(response.data.token);

      localStorage.setItem("token", response.data.token);

      // Redirect to home page
      alert("Login successful!");
      router.push("/");
    } catch (err: any) {
      console.error("❌ Login Failed:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="Conta">
        {/* Left Image Section */}
        <div className="img-Conta">
          <Image src={image} alt="Login Image" className="img_login" priority />
        </div>

        {/* Right Form Section */}
        <div className="sml-conta">
          <h2 className="first-head">Log in to Exclusive</h2>
          <h5 className="sub-head">Enter your details below</h5>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form className="form-page" onSubmit={handleSubmit}>
            <input
              className="inpt-email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="inpt-pswrd"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="ftr">
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Logging in..." : "Log In"}
              </button>
              <Link href="/forgot-password" className="text-red-500">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
