import React from "react";
import { FiHome, FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import signupImg from "../assets/undraw_arrived_f58d.svg";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Signup() {
  function Field({ name, placeholder, Icon }) {
    return (
      <div className='field'>
        <label>{name}:</label>
        <div className='input'>
          <Icon size={22} color='#232323' />
          <input placeholder={placeholder} />
        </div>
      </div>
    );
  }
  return (
    <div className='signup'>
      <div className='view-signup'>
        <div className='svg'>
          <img src={signupImg} />
        </div>
        <h3>
          Join To Our Exclusive Member Ship To Recieve The Latest News And
          Trends
        </h3>
        <p>Keep In Touch With Us</p>
        <button>login</button>
      </div>
      <div className='form-signup'>
        <ul className='nav'>
          <li>
            <Link to='/' className='logo'>
              lavish
            </Link>
          </li>
          <li>
            <Link to='/' className='home'>
              <FiHome />
              home
            </Link>
          </li>
        </ul>
        <h1>sign up</h1>
        <form action='/' method='post'>
          <Field name='email' placeholder='Your Email' Icon={FiMail} />
          <Field name='password' placeholder='Your Password' Icon={FiLock} />
          <Field
            name='condfirm-password'
            placeholder='Confirm Your Password'
            Icon={FiLock}
          />

          <Link to='/forget-password' className='forget-password'>
            i forget my password ?
          </Link>

          <button type='submit'>sign up</button>
          <div className='or'>
            <hr />
            <p>Or</p>
            <hr />
          </div>
          <div className='social-media-form'>
            <p>use social media to sign up</p>
            <div className='social-media'>
              <ul>
                <li>
                  <Link to='/' title='facebook'>
                    <FaFacebook size={34} color='#0e8cf1' />
                  </Link>
                </li>
                <li>
                  <Link to='/' title='google plus'>
                    <FaGooglePlus size={34} color='red' />
                  </Link>
                </li>

                <li>
                  <Link to='/' title='twitter'>
                    <FaTwitter size={34} color='#2196F3' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
