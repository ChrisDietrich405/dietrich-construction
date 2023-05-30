import React from "react";
import Layout from "../components/Layout";
import SlideShow from "../components/Slideshow";
import MediaCard from "../components/MediaCard.jsx"

const HomePage = () => {
  return (
    <Layout style={{paddingLeft: "0"}}>
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
          <MediaCard/>
    </Layout>
  );
};

export default HomePage;
