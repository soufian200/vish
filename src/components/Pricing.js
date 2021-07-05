import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaDiceD20, FaBoxes, FaHotjar } from "react-icons/fa";

export default function Pricing() {
  const [plans, setPlans] = useState([
    {
      id: 0,
      Icon: FaDiceD20,
      planName: "free trial",
      price: "$00,00",
      indicator: "free for month",
      features: ["100 transactions", "2% cash back", "$10,000 limits"],
    },
    {
      id: 1,
      Icon: FaBoxes,
      planName: "medium",
      price: "$09,00",
      indicator: "per month",
      features: ["200 transactions", "50% cash back", "$40,000 limits"],
    },
    {
      id: 2,
      Icon: FaHotjar,
      planName: "free trial",
      price: "$100,00",
      indicator: "per year",
      features: ["500 transactions", "100% cash back", "$100,000 limits"],
    },
  ]);
  function Plan({ plan }) {
    const { Icon, planName, price, indicator, features } = plan;
    return (
      <div className='plan'>
        <div className='icon'>
          <Icon size={80} color='#fff' />
        </div>
        <h2 className='sub-title'>{planName}</h2>
        <h2 className='price'>{price}</h2>
        <small className='indicator'>{indicator}</small>
        <ul>
          {features.map((feature) => (
            <li>{feature}</li>
          ))}
        </ul>
        <button>choose plan</button>
      </div>
    );
  }
  return (
    <div className='content light' id='pricing'>
      <div className='container'>
        <section className='plans'>
          <h1 className='heading'>hello</h1>
          <div className='pricing'>
            {plans.map((plan) => (
              <Plan plan={plan} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
