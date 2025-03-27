"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Header from "../header/header";
import Footer from "../footer/footer";
import image1 from "./image.png"; // Ensure image is inside the /public folder
import "./Register.css"; // Import the CSS file
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  const router = useRouter();
  const [companyName, setCompanyName] = useState<string>("DaltaX");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null); // Reset errors

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        {
          companyName,
          userName: username,
          email,
          password,
        }
      );

      console.log("✅ Registration Successful:", response.data);

      alert("Account created successfully!");
      router.push("/login");
    } catch (err: any) {
      console.error(
        "❌ Registration Failed:",
        err.response?.data || err.message
      );
      setError(
        err.response?.data?.message || "Something went wrong. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        {/* Left Image Section */}
        <div className="img-container">
          <Image src={image1} alt="Register Image" className="image" priority />
        </div>

        {/* Right Form Section */}
        <div className="small-container">
          <h2 className="heading_accountpage">Create an Account</h2>
          <h5 className="sub">Enter your details below</h5>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <form className="form-create" onSubmit={handleSubmit}>
            <div>
              <input
                className="text"
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="text"
                type="text"
                placeholder="Full Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="pswrd"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="submit-Accountbtn">
              <button
                type="submit"
                className="submit_btn-Accountpage"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </div>
          </form>

          <div className="para">
            <p>Already have an account?</p>
            <p className="hover:border-b hover:border-b-black hover:cursor-pointer">
              <Link href="/login">Log in</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
