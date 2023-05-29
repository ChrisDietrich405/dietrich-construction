import React from "react";
import Layout from "../components/Layout";
import SlideShow from "../components/Slideshow";

const HomePage = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default HomePage;
