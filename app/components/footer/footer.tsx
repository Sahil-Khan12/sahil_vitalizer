"use client";

import React from "react";
import styles from "./footer.module.css";
import { useRouter } from "next/navigation";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";

export default function Footer() {
  const router = useRouter();

  return (
    <>
      <footer className={styles.footer_parent}>
        <div className={styles.footer_col}>
          <div className={styles.footer_logo}></div>
          <div className={styles.footer_title}>Subscribe</div>
          <div className={styles.footer_content}>
            Get 10% off your first order
          </div>
          <div className={styles.footer_input_bar}>
            <input
              type="email"
              className={styles.footer_email}
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className={styles.footer_col} style={{ paddingRight: 40 }}>
          <div className={styles.footer_title}>Support</div>
          <div className={styles.footer_content}>
            111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
          </div>
          <div className={styles.footer_content}>exclusive@gmail.com</div>
          <div className={styles.footer_content}>+88015-88888-9999</div>
        </div>

        <div className={styles.footer_col}>
          <div className={styles.footer_title}>Account</div>
          <div className={styles.footer_content_hover}>My Account</div>
          <div className={styles.footer_content_hover}>Login / Register</div>
          <div className={styles.footer_content_hover}>Cart</div>
          <div className={styles.footer_content_hover}>Wishlist</div>
          <div className={styles.footer_content_hover}>Shop</div>
        </div>

        <div className={styles.footer_col}>
          <div className={styles.footer_title}>Quick Links</div>
          <div className={styles.footer_content_hover}>Privacy Policy</div>
          <div className={styles.footer_content_hover}>Terms Of Use</div>
          <div
            className={styles.footer_content_hover}
            onClick={() => {
              router.push("/about");
              window.scrollTo(0, 0);
            }}
          >
            About
          </div>
          <div
            className={styles.footer_content_hover}
            onClick={() => {
              router.push("/contact");
              window.scrollTo(0, 0);
            }}
          >
            Contact
          </div>
        </div>

        <div className={styles.footer_col}>
          <div className={styles.footer_title}>Download App</div>
          <div className={styles.footer_new_user}>
            Save $3 with app (for new users only)
          </div>
          <div className={styles.footer_other}>
            <div className={styles.footer_QR}></div>
            <div className={styles.footer_google_apple}>
              <div className={styles.footer_google}></div>
              <div className={styles.footer_apple}></div>
            </div>
          </div>
          <div className={styles.footer_icons_col}>
            <div className={styles.footer_icons}>
              <FacebookIcon sx={{ height: 35, width: 35 }} />
            </div>
            <div className={styles.footer_icons}>
              <TwitterIcon sx={{ height: 35, width: 35 }} />
            </div>
            <div className={styles.footer_icons}>
              <InstagramIcon sx={{ height: 35, width: 35 }} />
            </div>
            <div className={styles.footer_icons}>
              <LinkedInIcon sx={{ height: 35, width: 35 }} />
            </div>
          </div>
        </div>
      </footer>

      <div className={styles.copyright}>
        <CopyrightRoundedIcon sx={{ width: 15, height: 15 }} />
        <div>Copyright &copy; 2023. All rights reserved</div>
      </div>
    </>
  );
}
