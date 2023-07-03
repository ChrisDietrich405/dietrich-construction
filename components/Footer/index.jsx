import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <footer className={styles.footer_container}>
        <section>
          <Image src="/dclogo.png" width={200} height={200} alt="Logo" />
          <h4>
            Copyright {currentYear} Dietrich Contractors, all rights reserved{" "}
          </h4>
        </section>
        <section className={styles.contact_container}>
          <div>
            <h2 className={styles.get_in_touch}>Get in Touch</h2>
          </div>
          <div>
            <p>203 17th Ave</p>
            <p>Brooklyn Park, Maryland</p>
          </div>
          <div>
            <p>(443) 306-5270</p>
            <p>dietrichcontractors@gmail.com</p>
          </div>
          <div>
            <a
              href="https://www.instagram.com/dietrichcontractors/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram style={{ fontSize: "50px", color: "#4c6675" }} />
            </a>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
