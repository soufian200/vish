import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  const [toggleBar, setToggleBar] = useState(false);
  const [button, setButton] = useState(true);
  //   motion
  const anim = {
    init: {
      rotate: 0,
      x: 0,
    },
    w: {
      rotate: 360,
      x: 400,
      transition: { repeat: 2, duration: 2, ease: "linear" },
    },
  };

  const list = {
    open: {
      x: "-100vh",
    },
    closed: {
      x: 0,
    },
  };

  const item = {
    open: {
      y: 0,
    },
    closed: {
      y: 60,
    },
  };

  const item2 = {
    open: {
      y: 0,
    },
    closed: {
      y: 120,
    },
  };

  const item3 = {
    open: {
      y: 0,
    },
    closed: {
      y: 180,
    },
  };

  const item4 = {
    open: {
      y: 0,
    },
    closed: {
      y: 240,
    },
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className='navbar'>
        <div className='navbar-container container'>
          <Link to='/' className='navbar-logo'>
            LAVISH
          </Link>
          <div className='menu-icon' onClick={() => setToggleBar(!toggleBar)}>
            {!toggleBar ? (
              <FaBars size={22} color='#eee' />
            ) : (
              <FaTimes size={22} color='#eee' />
            )}
          </div>
          <ul className={toggleBar ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to='/' className='nav-links'>
                home
              </Link>
            </li>
            <li>
              <Link to='/services' className='nav-links'>
                services
              </Link>
            </li>

            <li>
              <Link to='/pricing' className='nav-links'>
                pricing
              </Link>
            </li>
            <li>
              <Link to='/' className='nav-links'>
                contact
              </Link>
            </li>
            <li>
              <Link to='/sign-up' className='btn-link'>
                sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <motion.div className='box' variants={list}></motion.div>
    </>
  );
}

export default Navbar;
