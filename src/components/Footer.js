import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='content' id='pricing'>
      <div className='container'>
        <footer>
          <h2 className='heading'>
            join to our exclusive member ship to recieve the latest news and
            trends
          </h2>
          <h4 className='sub'>keep in touch with us</h4>
          <div className='field'>
            <input className='subscribe-input' placeholder='Your Email' />
            <button>Subscribe</button>
          </div>
          <div className='links-container'>
            <div className='links'>
              <h2>about us</h2>
              <ul>
                <li>
                  <Link to='/'>how it works</Link>
                </li>
                <li>
                  <Link to='/'>testimonials</Link>
                </li>
                <li>
                  <Link to='/'>careers</Link>
                </li>
                <li>
                  <Link to='/'>inventors</Link>
                </li>
                <li>
                  <Link to='/'>terms of use</Link>
                </li>
              </ul>
            </div>
            <div className='links'>
              <h2>contact us</h2>
              <ul>
                <li>
                  <Link to='/'>contact</Link>
                </li>
                <li>
                  <Link to='/'>support</Link>
                </li>
                <li>
                  <Link to='/'>destinations</Link>
                </li>

                <li>
                  <Link to='/'>sensorships</Link>
                </li>
              </ul>
            </div>
            <div className='links'>
              <h2>videos</h2>
              <ul>
                <li>
                  <Link to='/'>submit video</Link>
                </li>
                <li>
                  <Link to='/'>agency</Link>
                </li>
                <li>
                  <Link to='/'>careers</Link>
                </li>
                <li>
                  <Link to='/'>inventors</Link>
                </li>
              </ul>
            </div>
            <div className='links'>
              <h2>social media</h2>
              <ul>
                <li>
                  <Link to='/'>facebook</Link>
                </li>
                <li>
                  <Link to='/'>instagram</Link>
                </li>
                <li>
                  <Link to='/'>twitch</Link>
                </li>
                <li>
                  <Link to='/'>twitter</Link>
                </li>
                <li>
                  <Link to='/'>whatsapp</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='social-media'>
            <ul>
              <li>
                <Link to='/' title='facebook'>
                  <FaFacebook size={34} color='#0e8cf1' />
                </Link>
              </li>
              <li>
                <Link to='/' title='instagram'>
                  <FaInstagram size={34} color='#ff3579' />
                </Link>
              </li>
              <li>
                <Link to='/' title='twitch'>
                  <FaTwitch size={34} color='#3F51B5' />
                </Link>
              </li>
              <li>
                <Link to='/' title='twitter'>
                  <FaTwitter size={34} color='#2196F3' />
                </Link>
              </li>
              <li>
                <Link to='/' title='whatsapp'>
                  <FaWhatsapp size={34} color='#1bbd21' />
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className='copyright'> */}
          <h4 className='copyright'>lavish &copy; 2021</h4>
          {/* </div> */}
        </footer>
      </div>
    </div>
  );
}
