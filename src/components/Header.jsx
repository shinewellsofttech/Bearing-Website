import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPagesOpen, setIsPagesOpen] = useState(false)
  const location = useLocation()
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsPagesOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (isMobileMenuOpen) setIsPagesOpen(false)
  }

  /* Shared nav items */
  const navItems = (isMobile = false) => (
    <ul className={isMobile ? 'mobile-nav-list' : 'multipage-menu'}>
      <li className={location.pathname === '/' ? 'active' : ''}>
        <Link to="/">Home</Link>
      </li>
      <li className={location.pathname.startsWith('/about') ? 'active' : ''}>
        <Link to="/about">About us</Link>
      </li>
      <li className={location.pathname.startsWith('/product') || location.pathname.startsWith('/shop') ? 'active' : ''}>
        <Link to="/shop">Product</Link>
      </li>
      {isMobile ? (
        <li className={`mobile-has-children ${isPagesOpen ? 'open' : ''}`}>
          <div className="mobile-parent-link" onClick={() => setIsPagesOpen(!isPagesOpen)}>
            <span>Pages</span>
            <i className={`ri-arrow-${isPagesOpen ? 'up' : 'down'}-s-line`}></i>
          </div>
          <ul className={`mobile-submenu ${isPagesOpen ? 'open' : ''}`}>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/applications-industry">Application and industry</Link></li>
            <li><Link to="/infrastructure">Infrastructure</Link></li>
            <li><Link to="/news-gallery">News and gallery</Link></li>
          </ul>
        </li>
      ) : (
        <li className="menu-item-has-children">
          <a href="#" onClick={(e) => e.preventDefault()}>Pages</a>
          <ul className="submenu last-children">
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/applications-industry">Application and industry</Link></li>
            <li><Link to="/infrastructure">Infrastructure</Link></li>
            <li><Link to="/news-gallery">News and gallery</Link></li>
          </ul>
        </li>
      )}
      <li className={location.pathname.startsWith('/contact') ? 'active' : ''}>
        <Link to="/contact">Contact us</Link>
      </li>
    </ul>
  )

  const logoBlock = (
    <Link
      to="/"
      style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
    >
      <img
        src="/assets/images/Main-images/LOGO.jpeg"
        alt="logo"
        className="header-logo-img"
        style={{ maxHeight: '70px', width: 'auto', display: 'block' }}
      />
      <span className="header-logo-text" style={{ color: '#293194', fontWeight: 700, fontSize: '18px' }}>
        WESTERN BEARING
      </span>
    </Link>
  )

  return (
    <>
      <header>
        <div className="rs-header-area rs-header-four has-theme-light-blue">
          <div className="container-fluid g-0">
            {/* top bar */}
            <div className="rs-header-top rs-header-top-two">
              <div className="rs-header-info-wrapper">
                <div className="rs-header-info-item">
                  <div className="rs-header-contact-item">
                    <span>Email.</span>
                    <h6><a href="mailto:sales@westernbearing.in">sales@westernbearing.in</a></h6>
                  </div>
                </div>
              </div>
              <div className="rs-header-info-item">
                <div className="rs-header-contact-item">
                  <span>Call.</span>
                  <h6><a href="tel:+91 982 902 3064">+91 982 902 3064</a></h6>
                </div>
              </div>
            </div>
          </div>

          {/* sticky header */}
          <div className="container-fluid">
            <div className={`rs-header-inner rs-sticky-header ${isSticky ? 'active' : ''}`} id="rs-sticky-header">
              <div className="rs-header-left">
                <div className="rs-header-logo-wrapper">
                  <div className="rs-header-logo">{logoBlock}</div>
                </div>
              </div>
              <div className="rs-header-menu">
                <div className="rs-theme-social has-transparent has-theme-blue">
                  <a href="#"><i className="ri-youtube-fill"></i></a>
                  <a href="#"><i className="ri-facebook-fill"></i></a>
                  <a href="#"><i className="ri-instagram-line"></i></a>
                </div>
                <nav id="mobile-menu" className="main-menu">{navItems()}</nav>
              </div>
              <div className="rs-header-right">
                <div className="rs-header-btn">
                  <Link className="rs-btn has-theme-light-blue has-icon has-bg" to="/contact">
                    Get In Touch
                    <span className="icon-box">
                      <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path></svg>
                      <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path></svg>
                    </span>
                  </Link>
                </div>
                {/* Mobile hamburger */}
                <button className="mobile-hamburger-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
                  <span className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`}>
                    <span></span><span></span><span></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* normal (non-sticky) header */}
        <div className="rs-header-area rs-header-four has-theme-light-blue">
          <div className="container-fluid">
            <div className="rs-header-inner">
              <div className="rs-header-left">
                <div className="rs-header-logo-wrapper">
                  <div className="rs-header-logo">{logoBlock}</div>
                </div>
              </div>
              <div className="rs-header-menu">
                <div className="rs-theme-social has-transparent has-theme-blue">
                  <a href="https://www.youtube.com/@a.v.6251"><i className="ri-youtube-fill"></i></a>
                  <a href="https://www.facebook.com/share/1ArBTdHjcx/"><i className="ri-facebook-fill"></i></a>
                  <a href="https://www.instagram.com/westernbearingindia?igsh=MzFhcmdzaXV5amhr"><i className="ri-instagram-line"></i></a>
                </div>
                <nav id="mobile-menu-two" className="main-menu">{navItems()}</nav>
              </div>
              <div className="rs-header-right">
                <div className="rs-header-btn">
                  <Link className="rs-btn has-theme-light-blue has-icon has-bg" to="/contact">
                    Get In Touch
                    <span className="icon-box">
                      <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path></svg>
                      <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path></svg>
                    </span>
                  </Link>
                </div>
                {/* Mobile hamburger */}
                <button className="mobile-hamburger-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
                  <span className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`}>
                    <span></span><span></span><span></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}></div>
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`} ref={mobileMenuRef}>
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <img src="/assets/images/Main-images/LOGO.jpeg" alt="logo" style={{ maxHeight: '50px', width: 'auto' }} />
              <span style={{ color: '#293194', fontWeight: 700, fontSize: '16px' }}>WESTERN BEARING</span>
            </Link>
          </div>
          <button className="mobile-menu-close" onClick={toggleMobileMenu} aria-label="Close menu">
            <i className="ri-close-line"></i>
          </button>
        </div>
        <nav className="mobile-menu-nav">
          {navItems(true)}
        </nav>
        <div className="mobile-menu-footer">
          <div className="mobile-menu-contact">
            <a href="mailto:sales@westernbearing.in" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#555', textDecoration: 'none', marginBottom: '12px', fontSize: '14px' }}>
              <i className="ri-mail-line" style={{ color: '#0C7BC7', fontSize: '18px' }}></i>
              sales@westernbearing.in
            </a>
            <a href="tel:+919829023064" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#555', textDecoration: 'none', marginBottom: '16px', fontSize: '14px' }}>
              <i className="ri-phone-line" style={{ color: '#0C7BC7', fontSize: '18px' }}></i>
              +91 982 902 3064
            </a>
          </div>
          <div className="mobile-menu-social">
            <a href="https://www.youtube.com/@a.v.6251"><i className="ri-youtube-fill"></i></a>
            <a href="https://www.facebook.com/share/1ArBTdHjcx/"><i className="ri-facebook-fill"></i></a>
            <a href="https://www.instagram.com/westernbearingindia?igsh=MzFhcmdzaXV5amhr"><i className="ri-instagram-line"></i></a>
          </div>
          <Link className="mobile-menu-cta" to="/contact">
            Get In Touch
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>

      {isSidebarOpen && (
        <>
          <div className="offcanvas-overlay overlay-open" onClick={toggleSidebar}></div>
          <div className="offcanvas-area info-open"></div>
        </>
      )}
    </>
  )
}

export default Header




