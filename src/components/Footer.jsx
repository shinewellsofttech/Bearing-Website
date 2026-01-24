import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Footer() {
  useEffect(() => {
    const yearElement = document.getElementById("year")
    if (yearElement) {
      yearElement.innerHTML = new Date().getFullYear()
    }
  }, [])

  return (
    <footer>
      <div className="rs-footer-area rs-footer-two has-theme-light-blue">
        <div className="rs-footer-bg-thumb" style={{ backgroundImage: 'url(/assets/images/Main-images/footer.jpg.jpeg)' }}></div>
        <div className="container">
          <div className="rs-footer-top">
            <div className="row g-5">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="rs-footer-widget footer-2-col-1">
                  <div className="rs-footer-widget-logo mb-25">
                    <Link 
                      to="/"
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
                    >
                      <img 
                        src="/assets/images/Main-images/LOGO.jpeg" 
                        alt="logo" 
                        style={{ maxHeight: '75px', width: 'auto', display: 'block' }}
                      />
                      <span style={{ color: '#fff', fontWeight: 700, fontSize: '22px' }}>
                        WESTERN BEARING
                      </span>
                    </Link>
                  </div>
                  <div className="rs-footer-widget-content">
                    <p className="rs-footer-widget-description">
                    Manufacturer and exporter of premium bearings since 1985.
                    Trusted for quality, precision engineering, and reliable performance across industries worldwide.
                    </p>
                    <div className="rs-footer-widget-stroke-text">
                      <h3 className="rs-footer-stroke-text has-theme-blue">Since 1985</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="rs-footer-widget footer-2-col-2">
                  <h5 className="rs-footer-widget-title">Useful Links</h5>
                  <div className="rs-footer-widget-content">
                    <div className="rs-footer-widget-links has-theme-light-blue">
                      <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/shop">Product</Link></li>
                        <li><a href="javascript:void(0)">Application </a></li>
                        <li><a href="javascript:void(0)">Infrastructure</a></li>
                        <li><a href="javascript:void(0)">News and gallery</a></li>
                        <li><Link to="/contact">Contact us</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="rs-footer-widget footer-2-col-3">
                  <h5 className="rs-footer-widget-title">Office Address</h5>
                  <div className="rs-footer-widget-content">
                    <div className="rs-footer-widget-meta">
                      <div className="rs-footer-widget-address">
                        <a target="_blank" href="https://www.google.com/maps/dir//WESTERN+BEARING,+86,+New+Power+House+Rd,+Section+7+Extension,+Shastri+Nagar,+Jodhpur,+Rajasthan+342011/@26.2995968,73.0365952,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39418e8f828701a1:0xe56fda7f5b778b07!2m2!1d73.0128354!2d26.2632152?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" rel="noopener noreferrer">
                        B-7, Industrial Estate, New Power House Road, Jodhpur - 342 003 (Rajasthan.) INDIA
                        </a>
                      </div>
                      <h5 className="rs-footer-widget-title">Email Address</h5>
                      <p>Interested in working with us?</p>
                      <div className="rs-footer-widget-email">
                        <a href="mailto:westernbearing1988@gmail.com">westernbearing1988@gmail.com</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="rs-footer-widget footer-2-col-4">
                  <h5 className="rs-footer-widget-title">Phone Number</h5>
                  <div className="rs-footer-widget-content">
                    <div className="rs-footer-widget-contact-info">
                      <div className="rs-footer-widget-number">
                        <span>
                          <a href="tel:+91 982 902 3064">+91 982 902 3064</a>
                        </span>
                        <span>
                          <a href="tel:+91 982 902 3064">+91 992 853 2210</a>
                        </span>
                      </div>
                    </div>
                    <h5 className="rs-footer-widget-title">Follow Us</h5>
                    <div className="rs-footer-widget-social">
                      <div className="rs-theme-social has-theme-light-blue">
                        <a href="https://www.youtube.com/@a.v.6251"><i className="ri-youtube-fill"></i></a>
                        <a href="https://www.facebook.com/share/1ArBTdHjcx/"><i className="ri-facebook-fill"></i></a>
                        <a href="https://www.instagram.com/westernbearingindia?igsh=MzFhcmdzaXV5amhr"><i className="ri-instagram-line"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rs-footer-copyright-area rs-copyright-one has-theme-light-blue">
        <div className="rs-copyright-bg-thumb" style={{ backgroundImage: 'url(/assets/images/bg/copy-right-bg-01.png)' }}></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="rs-footer-copyright has-theme-blue text-center">
                <p className="underline">© <span id="year">2025</span> Western Bearing. Designed by Shinewell Softtech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


