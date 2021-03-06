import React from "react";

import Header from "../components/Landing/Header";

import Companies from "../components/Landing/Companies";
import Excellent from "../components/Landing/Excellent";
import LeadleyWorks from "../components/Landing/LeadleyWorks";
import Widget from "../components/Landing/Widget";
import Interactive from "../components/Landing/Interactive";
import Features from "../components/Landing/Features";
import Visitor from "../components/Landing/Visitor";
import Reviews from "../components/Landing/Reviews";
import TopBar from "../components/Landing/TopBar";

function Landing() {
  return (
    <div>
      <TopBar />
      <Header />
      <Companies />
      <Reviews />
      <Excellent />
      <LeadleyWorks />
      <Widget />
      <Interactive />
      <Features />
      <Visitor />
    </div>
  );
}

export default Landing;
