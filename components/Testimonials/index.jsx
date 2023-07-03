import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
// import { api } from "../api/api";
import ContentSlider from "../ContentSlider";
import testimonialData from "../../testimonialData";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(testimonialData);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2 className="titles">Testimonials</h2>

      <ContentSlider
        typeOfSlide="text"
        childrenImageHeight="large"
        numOfSlides={1}
        slideContent={testimonials}
      
      />
    </div>
  );
};

export default Testimonials;
