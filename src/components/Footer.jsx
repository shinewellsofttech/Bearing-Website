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
        <div className="rs-footer-bg-thumb" style={{ backgroundImage: 'url(/assets/images/bg/footer-bg-04.png)' }}></div>
        <div className="container">
          <div className="rs-footer-top">
            <div className="row g-5">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="rs-footer-widget footer-2-col-1">
                  <div className="rs-footer-widget-logo mb-25">
                    <Link to="/">
                      <img src="/assets/images/Main-images/LOGO.jpeg" alt="logo" />
                    </Link>
                  </div>
                  <div className="rs-footer-widget-content">
                    <p className="rs-footer-widget-description">
                      It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                      Ipsums.
                    </p>
                    <div className="rs-footer-widget-stroke-text">
                      <h3 className="rs-footer-stroke-text has-theme-blue">Since 2007</h3>
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
                        <li><a href="javascript:void(0)">Application and industry</a></li>
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
                        <a target="_blank" href="https://www.google.com/maps" rel="noopener noreferrer">
                          42 Mamnoun Street, Saba Carpet and Antiques Store, UK
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
                          <a href="tel:+91 982 902 3064">+91 982 902 3064</a>
                        </span>
                      </div>
                    </div>
                    <h5 className="rs-footer-widget-title">Follow Us</h5>
                    <div className="rs-footer-widget-social">
                      <div className="rs-theme-social has-theme-light-blue">
                        <a href="#"><i className="ri-twitter-x-line"></i></a>
                        <a href="#"><i className="ri-facebook-fill"></i></a>
                        <a href="#"><i className="ri-linkedin-fill"></i></a>
                        <a href="#"><i className="ri-instagram-line"></i></a>
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
                <p className="underline">© <span id="year">2025</span> Western Bearing. Designed by <a href="https://rstheme.com">RSTheme</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


