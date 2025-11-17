import React from "react";
import HeroSection from "../components/Hero/Herosection";
import InfoTabs from "../components/Tabs/InfoTabs";
import ForumSection from "../components/Forum/ForumSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <InfoTabs />
      <ForumSection />
    </div>
  );
};

export default Home;
