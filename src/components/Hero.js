import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Hero({ id, reverse, light, data }) {
  const { title, subtitle, description, button, img } = data[0];
  const section = [reverse && "reverse"].join(" ");
  const content = ["content", light && "light"].join(" ");
  return (
    <div className={content} id={id}>
      <div className='container'>
        <section className={section}>
          <div className='informations'>
            <h3 className='subtitle'>{subtitle}</h3>
            <h1 className='title'>{title}</h1>
            <p className='description'>{description}</p>
            <button className='get-started'>{button}</button>
          </div>
          <div className='informations'>
            <img src={img} className='heroimg' />
          </div>
        </section>
      </div>
    </div>
  );
}
