import React from "react";
import Image from "next/image";
import { FaPaintRoller } from "react-icons/fa";
import { BsFillHouseDoorFill } from "react-icons/bs";

import Layout from "../components/Layout";
import SlideShow from "../components/Slideshow";
import MediaCard from "../components/MediaCard.jsx";

import Container from "@mui/material/Container";

import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <Layout style={{ paddingLeft: "0" }}>
      <SlideShow
        timeOut={3000}
        images={[
          {
            url: "/fence.jpg",
            title: "Fence Installation",
          },
          {
            url: "/me.jpg",
            title: "Sod Installation",
          },
        ]}
      ></SlideShow>
      <section className={styles.our_services_container}>
        <h2 className={styles.titles}>Our Services</h2>
        <div className={styles.icon_container}>
          <FaPaintRoller className={styles.icon} />
          <Image
            src="/bricks.png"
            width={150}
            height={150}
            alt="Picture of the author"
          ></Image>
          <BsFillHouseDoorFill className={styles.icon} />
        </div>
      </section>
      <h2 className={styles.titles}>Our Projects</h2>
      <MediaCard />
    </Layout>
  );
};

export default HomePage;
