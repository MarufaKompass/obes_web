import React from "react";
import HeroSection from "./HeroSection";
import HealthCare from "./HealthCare";
import Health from "./Health";
import Impact from "./Impact";
import Blog from "./Blog";
import ImageGallery from "./ImageGallery";
import HealthChecklist from "./HealthChecklist";
import Doctors from "./Doctors";
export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <HealthChecklist></HealthChecklist>
      <Doctors></Doctors>
      {/* <ImageGallery></ImageGallery> */}
      <Health></Health>
      <HealthCare></HealthCare>
      <Impact></Impact>
      <Blog></Blog>
    </div>
  );
}
