import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <header>
        <div className="rs-header-area rs-header-four has-theme-light-blue">
          <div className="container-fluid g-0">
            {/* top start */}
            <div className="rs-header-top rs-header-top-two">
              <div className="rs-header-info-wrapper">
                <div className="rs-header-info-item">
                  <div className="rs-header-contact-item">
                    <span>Email.</span>
                    <h6><a href="mailto:sales@westernbearing.in">sales@westernbearing.in</a></h6>
                  </div>
                </div>
                {/* <div className="rs-header-info-item">
                  <div className="rs-header-contact-item">
                    <span>Call.</span>
                    <h6><a href="tel:+91 982 902 3064">+91 982 902 3064</a></h6>
                  </div>
                </div> */}
              </div>
              <div className="rs-header-info-item">
                <div className="rs-header-contact-item">
                <span>Call.</span>
                <h6><a href="tel:+91 982 902 3064">+91 982 902 3064</a></h6>
                </div>
              </div>
            </div>
            {/* top end */}
          </div>
          <div className="container-fluid">
            <div className={`rs-header-inner rs-sticky-header ${isSticky ? 'active' : ''}`} id="rs-sticky-header">
              <div className="rs-header-left">
                <div className="rs-header-logo-wrapper">
                  <div className="rs-header-logo">
                    <Link
                      to="/"
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
                    >
                      <img
                        src="/assets/images/Main-images/LOGO.jpeg"
                        alt="logo"
                        style={{ maxHeight: '70px', width: 'auto', display: 'block' }}
                      />
                      <span style={{ color: '#293194', fontWeight: 700, fontSize: '18px' }}>
                        WESTERN BEARING
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rs-header-menu">
                <div className="rs-theme-social has-transparent has-theme-blue">
                  <a href="#"><i className="ri-youtube-fill"></i></a>
                  <a href="#"><i className="ri-facebook-fill"></i></a>
                  <a href="#"><i className="ri-instagram-line"></i></a>
                </div>
                                <nav id="mobile-menu" className="main-menu">
                  <ul className="multipage-menu">
                    <li className={location.pathname === '/' ? 'active' : ''}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname.startsWith('/about') ? 'active' : ''}>
                      <Link to="/about">About us</Link>
                    </li>
                    <li className={location.pathname.startsWith('/product') || location.pathname.startsWith('/shop') ? 'active' : ''}>
                      <Link to="/shop">Product</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#" onClick={(e) => e.preventDefault()}>Pages</a>
                      <ul className="submenu last-children">
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/applications-industry">Application and industry</Link></li>
                        <li><Link to="/infrastructure">Infrastructure</Link></li>
                        <li><Link to="/news-gallery">News and gallery</Link></li>
                      </ul>
                    </li>
                    <li className={location.pathname.startsWith('/contact') ? 'active' : ''}>
                      <Link to="/contact">Contact us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="rs-header-right">
                <div className="rs-header-btn">
                  <Link className="rs-btn has-theme-light-blue has-icon has-bg" to="/contact">
                    Get In Touch
                    <span className="icon-box">
                      <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
                      </svg>
                      <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rs-header-area rs-header-four has-theme-light-blue">
          <div className="container-fluid">
            <div className="rs-header-inner">
              <div className="rs-header-left">
                <div className="rs-header-logo-wrapper">
                  <div className="rs-header-logo">
                    <Link
                      to="/"
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
                    >
                      <img
                        src="/assets/images/Main-images/LOGO.jpeg"
                        alt="logo"
                        style={{ maxHeight: '70px', width: 'auto', display: 'block' }}
                      />
                      <span style={{ color: '#293194', fontWeight: 700, fontSize: '18px' }}>
                        WESTERN BEARING
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rs-header-menu">
                <div className="rs-theme-social has-transparent has-theme-blue">
                  <a href="https://www.youtube.com/@a.v.6251"><i className="ri-youtube-fill"></i></a>
                  <a href="https://www.facebook.com/share/1ArBTdHjcx/"><i className="ri-facebook-fill"></i></a>
                  <a href="https://www.instagram.com/westernbearingindia?igsh=MzFhcmdzaXV5amhr"><i className="ri-instagram-line"></i></a>
                </div>
                                <nav id="mobile-menu-two" className="main-menu">
                  <ul className="multipage-menu">
                    <li className={location.pathname === '/' ? 'active' : ''}>
                      <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname.startsWith('/about') ? 'active' : ''}>
                      <Link to="/about">About us</Link>
                    </li>
                    <li className={location.pathname.startsWith('/product') || location.pathname.startsWith('/shop') ? 'active' : ''}>
                      <Link to="/shop">Product</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#" onClick={(e) => e.preventDefault()}>Pages</a>
                      <ul className="submenu last-children">
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/applications-industry">Application and industry</Link></li>
                        <li><Link to="/infrastructure">Infrastructure</Link></li>
                        <li><Link to="/news-gallery">News and gallery</Link></li>
                      </ul>
                    </li>
                    <li className={location.pathname.startsWith('/contact') ? 'active' : ''}>
                      <Link to="/contact">Contact us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="rs-header-right">
                <div className="rs-header-search-wrapper">
                  <div className={`rs-header-search-icon has-theme-light-blue ${isSearchOpen ? 'active' : ''}`} onClick={toggleSearch}>
                    <i className={`ri-close-fill has-close ${isSearchOpen ? 'active' : ''}`}></i>
                    <i className={`ri-search-line has-search ${isSearchOpen ? '' : 'active'}`}></i>
                  </div>
                  <form className={`rs-header-search-inner rs-stickys-form ${isSearchOpen ? 'show' : ''}`} action="#">
                    <div className="rs-header-search">
                      <input type="text" placeholder="Searching..." />
                      <button type="submit"><i className="ri-search-line"></i></button>
                    </div>
                  </form>
                </div>
                <div className="rs-header-btn">
                  <Link className="rs-btn has-theme-light-blue has-icon has-bg" to="/contact">
                    Get In Touch
                    <span className="icon-box">
                      <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
                      </svg>
                      <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
                <div className="rs-header-hamburger has-theme-light-blue">
                  <div className="sidebar-toggle" onClick={toggleSidebar}>
                    {/* <a className="bar-icon" href="javascript:void(0)">
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M8.55566 11H1.55566C1.29045 11 1.03609 11.1054 0.848557 11.2929C0.661021 11.4804 0.555664 11.7348 0.555664 12V19C0.555664 19.2652 0.661021 19.5196 0.848557 19.7071C1.03609 19.8946 1.29045 20 1.55566 20H8.55566C8.82088 20 9.07523 19.8946 9.26277 19.7071C9.45031 19.5196 9.55566 19.2652 9.55566 19V12C9.55566 11.7348 9.45031 11.4804 9.26277 11.2929C9.07523 11.1054 8.82088 11 8.55566 11ZM7.55566 18H2.55566V13H7.55566V18ZM19.5557 0H12.5557C12.2904 0 12.0361 0.105357 11.8486 0.292893C11.661 0.48043 11.5557 0.734784 11.5557 1V8C11.5557 8.26522 11.661 8.51957 11.8486 8.70711C12.0361 8.89464 12.2904 9 12.5557 9H19.5557C19.8209 9 20.0752 8.89464 20.2628 8.70711C20.4503 8.51957 20.5557 8.26522 20.5557 8V1C20.5557 0.734784 20.4503 0.48043 20.2628 0.292893C20.0752 0.105357 19.8209 0 19.5557 0ZM18.5557 7H13.5557V2H18.5557V7ZM19.5557 11H12.5557C12.2904 11 12.0361 11.1054 11.8486 11.2929C11.661 11.4804 11.5557 11.7348 11.5557 12V19C11.5557 19.2652 11.661 19.5196 11.8486 19.7071C12.0361 19.8946 12.2904 20 12.5557 20H19.5557C19.8209 20 20.0752 19.8946 20.2628 19.7071C20.4503 19.5196 20.5557 19.2652 20.5557 19V12C20.5557 11.7348 20.4503 11.4804 20.2628 11.2929C20.0752 11.1054 19.8209 11 19.5557 11ZM18.5557 18H13.5557V13H18.5557V18ZM8.55566 0H1.55566C1.29045 0 1.03609 0.105357 0.848557 0.292893C0.661021 0.48043 0.555664 0.734784 0.555664 1V8C0.555664 8.26522 0.661021 8.51957 0.848557 8.70711C1.03609 8.89464 1.29045 9 1.55566 9H8.55566C8.82088 9 9.07523 8.89464 9.26277 8.70711C9.45031 8.51957 9.55566 8.26522 9.55566 8V1C9.55566 0.734784 9.45031 0.48043 9.26277 0.292893C9.07523 0.105357 8.82088 0 8.55566 0ZM7.55566 7H2.55566V2H7.55566V7Z" fill="#616161"></path>
                      </svg>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isSidebarOpen && (
        <>
          <div className="offcanvas-overlay overlay-open" onClick={toggleSidebar}></div>
          <div className="offcanvas-area info-open">
            {/* Sidebar content can be added here */}
          </div>
        </>
      )}
    </>
  )
}

export default Header




