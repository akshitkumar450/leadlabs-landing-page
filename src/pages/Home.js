import React from "react";
import Header from "../components/Home/Header";
import Working from "../components/Home/Working";
import Features from "../components/Home/Features";
import Engaging from "../components/Home/Engaging";
import FirstLeadly from "../components/Home/FirstLeadly";
import Numbers from "../components/Home/Numbers";
import Plan from "../components/Home/Plan";
import Widget from "../components/Home/Widget";
import { Helmet } from "react-helmet";
import Conventional from "../components/Home/Conventional";
import Leadley from "../components/Home/Leadley";
import FullImg from "../components/Home/FullImg";

function Home() {
  return (
    <div>
      <Helmet>
        <title>LeadLabs | Turn Your Anonymous Audience Into Leads</title>
        <meta name="robots" content="index, follow" />
        <meta
          content="Use shareable bite sized content to get 2x leads &amp; 3x sales for your biz. Sign Up for Free Now!"
          name="description"
        />
        <meta
          content="LeadLabs | Turn Your Anonymous Audience Into Leads"
          property="og:title"
        />
        <meta
          content="Use shareable bite sized content to get 2x leads &amp; 3x sales for your biz. Sign Up for Free Now!"
          property="og:description"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.imgur.com/YURnjXO.png" />

        <meta
          content="LeadLabs | Turn Your Anonymous Audience Into Leads"
          property="twitter:title"
        />
        <meta
          content="Use shareable bite sized content to get 2x leads &amp; 3x sales for your biz. Sign Up for Free Now!"
          property="twitter:description"
        />
        <meta name="twitter:image" content="https://i.imgur.com/YURnjXO.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />
      <Conventional />
      <FullImg />
      <Leadley />

      {/* <PlayWidget img={thumbnail} />
      <StepCards />
      <LeadlyAddOn />
      <Demo />
      <Cards />
     */}
      <Working />
      <Widget />
      <Features />
      <Engaging />
      <FirstLeadly />
      <Numbers />
      <Plan />
    </div>
  );
}

export default Home;
