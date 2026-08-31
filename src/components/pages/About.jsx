import React from "react";
import { Helmet } from "react-helmet-async";
import ReactModal from "react-modal";
import AboutBanner from "../about/AboutBanner";
import AboutDetails from "../about/AboutDetails";
import AboutVideoModal from "../about/AboutVideoModal";
import AboutTeam from "../about/AboutTeam";
import AboutTestimonials from "../about/AboutTestimonials";


if (typeof document !== "undefined") {
  ReactModal.setAppElement("#root");
}

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Cabbage Store</title>
        <meta
          name="description"
          content="Learn more about Cabbage organic food store, our fresh farm products, quality assurance, and expert team."
        />
        <meta
          name="keywords"
          content="organic food, fresh cabbage, farm fresh, sustainable marketplace"
        />
      </Helmet>

      <section className="overflow-hidden">
        <AboutBanner />
        <AboutDetails />
        <AboutVideoModal />
        <AboutTeam />
        <AboutTestimonials />
      </section>
    </>
  );
};

export default About;
