import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import img1 from "../assets/undraw_city_life_gnpr.svg";
import img2 from "../assets/undraw_Faq_re_31cw.svg";
import img3 from "../assets/undraw_deliveries_131a.svg";
import img4 from "../assets/undraw_Online_learning_re_qw08.svg";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        id='home'
        data={[
          {
            subtitle: "exclusive access",
            title: "unlimited transactions with zero fees",
            description: `
        Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.`,
            button: "Get Started",
            img: img1,
          },
        ]}
      />
      <Hero
        id='services'
        reverse
        light
        data={[
          {
            subtitle: "easy setup",
            title: "super fast and simple on boarding process",
            description: `Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.`,
            button: "Start Now",
            img: img2,
          },
        ]}
      />
      <Hero
        id='products'
        data={[
          {
            subtitle: "view our products",
            title: "shop through our catalog of products",
            description: `when an unknown printer took a galley of
              type and scrambled it to make a type specimen book Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.`,
            button: "Shop Now",
            img: img3,
          },
        ]}
      />
      <Hero
        id='services'
        reverse
        light
        data={[
          {
            subtitle: "easy setup",
            title: "super fast and simple on boarding process",
            description: `Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.`,
            button: "Start Now",
            img: img2,
          },
        ]}
      />
      <Hero
        id='about'
        light
        data={[
          {
            subtitle: "easy setup",
            title: "super fast and simple on boarding process",
            description: `Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.`,
            button: "Start Now",
            img: img4,
          },
        ]}
      />
      <Footer />
    </>
  );
}
