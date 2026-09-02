import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CtaSection from '../components/CtaSection'

function About() {
  useEffect(() => {
    // Wait for jQuery and other libraries to be loaded
    const initAllScripts = () => {
      if (typeof window === 'undefined' || !window.jQuery) {
        return
      }

      const $ = window.jQuery

      // Preloader activation
      $(window).on('load', function (event) {
        $('#pre-load').delay(600).fadeOut(500)
        $('.pre-loader').delay(600).fadeOut(500)
      })

      // Footer year
      const yearElement = document.getElementById('year')
      if (yearElement) {
        yearElement.innerHTML = new Date().getFullYear()
      }

      // WOW Animation
      function wowAnimation() {
        if (typeof window !== 'undefined' && window.WOW) {
          const wow = new window.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
          })
          wow.init()
        }
      }
      $(window).on('load', function () {
        wowAnimation()
      })

      // Sidebar Toggle
      $('.offcanvas-close,.offcanvas-overlay').on('click', function () {
        $('.offcanvas-area').removeClass('info-open')
        $('.offcanvas-overlay').removeClass('overlay-open')
      })
      $('.sidebar-toggle').on('click', function () {
        $('.offcanvas-area').addClass('info-open')
        $('.offcanvas-overlay').addClass('overlay-open')
      })

      // Body overlay
      $('.body-overlay').on('click', function () {
        $('.offcanvas-area').removeClass('opened')
        $('.body-overlay').removeClass('opened')
      })

      // Data CSS js
      $('[data-background]').each(function () {
        $(this).css('background-image', 'url( ' + $(this).attr('data-background') + '  )')
      })

      $('[data-width]').each(function () {
        $(this).css('width', $(this).attr('data-width'))
      })

      $('[data-bg-color]').each(function () {
        $(this).css('background-color', $(this).attr('data-bg-color'))
      })

      // Odometer js - Initialize when counter section is visible
      const initOdometer = () => {
        const counterSection = document.querySelector('.rs-counter-area')
        if (!counterSection) return

        const odometerElements = document.querySelectorAll('.rs-counter-area .odometer:not([data-odometer-initialized])')
        if (odometerElements.length === 0) return

        // Observe the counter section instead of individual elements
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !counterSection.dataset.countersInitialized) {
              // Initialize all counters when section is visible
              odometerElements.forEach((element) => {
                const countNumber = element.getAttribute('data-count')
                if (!countNumber || element.dataset.odometerInitialized) return
                
                const targetValue = parseInt(countNumber)
                
                if (window.Odometer) {
                  try {
                    // Set initial value to 0 for animation
                    element.textContent = '0'
                    
                    // Create odometer instance
                    const odometer = new window.Odometer({
                      el: element,
                      value: 0,
                      format: '(,ddd)',
                      theme: 'default',
                      duration: 2000
                    })
                    
                    // Animate to target value
                    setTimeout(() => {
                      odometer.update(targetValue)
                    }, 100)
                    
                    element.dataset.odometerInitialized = 'true'
                  } catch (e) {
                    console.error('Odometer initialization error:', e)
                    element.textContent = countNumber
                    element.dataset.odometerInitialized = 'true'
                  }
                } else {
                  // Fallback: simple count animation
                  let current = 0
                  const increment = targetValue / 50
                  const timer = setInterval(() => {
                    current += increment
                    if (current >= targetValue) {
                      element.textContent = targetValue
                      clearInterval(timer)
                    } else {
                      element.textContent = Math.floor(current)
                    }
                  }, 40)
                  
                  element.dataset.odometerInitialized = 'true'
                }
              })
              
              counterSection.dataset.countersInitialized = 'true'
              observer.unobserve(counterSection)
            }
          })
        }, { threshold: 0.3, rootMargin: '0px' })
        
        observer.observe(counterSection)
      }

      // Initialize odometer after scripts are loaded
      const initOdometerWithDelay = () => {
        if (typeof window !== 'undefined' && window.Odometer) {
          setTimeout(initOdometer, 300)
        } else {
          setTimeout(initOdometerWithDelay, 100)
        }
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initOdometerWithDelay)
      } else {
        initOdometerWithDelay()
      }

      // Swiper initialization
      if (typeof window !== 'undefined' && window.Swiper) {
        const swiperElements = document.querySelectorAll('.swiper:not(.swiper-initialized)')
        swiperElements.forEach((swiperEl) => {
          const dataAttrs = swiperEl.dataset
          const hoverAutoplay = dataAttrs.hoverPause === 'true'
          
          const swiper = new window.Swiper(swiperEl, {
            loop: dataAttrs.loop === 'true',
            speed: parseInt(dataAttrs.speed) || 1000,
            autoplay: dataAttrs.autoplay === 'true' ? {
              delay: parseInt(dataAttrs.delay) || 3000,
              disableOnInteraction: false
            } : false,
            slidesPerView: parseInt(dataAttrs.item) || 1,
            spaceBetween: parseInt(dataAttrs.margin) || 0,
            breakpoints: {
              1200: {
                slidesPerView: parseInt(dataAttrs.itemXl) || parseInt(dataAttrs.item) || 1,
                spaceBetween: parseInt(dataAttrs.marginXl) || parseInt(dataAttrs.margin) || 0
              },
              992: {
                slidesPerView: parseInt(dataAttrs.itemLg) || parseInt(dataAttrs.item) || 1,
                spaceBetween: parseInt(dataAttrs.margin) || 0
              },
              768: {
                slidesPerView: parseInt(dataAttrs.itemMd) || parseInt(dataAttrs.item) || 1,
                spaceBetween: parseInt(dataAttrs.margin) || 0
              },
              576: {
                slidesPerView: parseInt(dataAttrs.itemSm) || parseInt(dataAttrs.item) || 1,
                spaceBetween: parseInt(dataAttrs.margin) || 0
              },
              480: {
                slidesPerView: parseInt(dataAttrs.itemXs) || parseInt(dataAttrs.item) || 1,
                spaceBetween: parseInt(dataAttrs.margin) || 0
              },
              0: {
                slidesPerView: parseInt(dataAttrs.itemMobile) || parseInt(dataAttrs.item) || 1,
                spaceBetween: parseInt(dataAttrs.margin) || 0
              }
            },
            navigation: {
              nextEl: swiperEl.querySelector('.swiper-button-next'),
              prevEl: swiperEl.querySelector('.swiper-button-prev')
            },
            pagination: {
              el: swiperEl.querySelector('.swiper-pagination'),
              clickable: true,
              dynamicBullets: dataAttrs.dotsDynamic === 'true'
            }
          })

          if (hoverAutoplay) {
            swiperEl.addEventListener('mouseenter', function () {
              if (swiper.autoplay) swiper.autoplay.stop()
            })
            swiperEl.addEventListener('mouseleave', function () {
              if (swiper.autoplay) swiper.autoplay.start()
            })
          }
        })
      }

      // GSAP animations initialization
      if (typeof window !== 'undefined' && window.gsap) {
        // Register GSAP plugins if available
        if (window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger)
        }
        if (window.SplitText) {
          window.gsap.registerPlugin(window.SplitText)
        }

        // Initialize RS animations if available
        if (window.rsAnimInt) {
          window.rsAnimInt()
        }
      }

      // Bootstrap tabs initialization
      if (typeof window !== 'undefined' && window.bootstrap) {
        const tabElements = document.querySelectorAll('[data-bs-toggle="pill"]')
        tabElements.forEach((tab) => {
          if (!tab.dataset.bootstrapTabInitialized) {
            new window.bootstrap.Tab(tab)
            tab.dataset.bootstrapTabInitialized = 'true'
          }
        })
      }
    }

    // Wait for scripts to load
    const checkAndInit = () => {
      if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn) {
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', () => {
            setTimeout(initAllScripts, 100)
          })
        } else {
          setTimeout(initAllScripts, 100)
        }
      } else {
        setTimeout(checkAndInit, 100)
      }
    }

    checkAndInit()
  }, [])

  return (
    <>
      {/* breadcrumb area start */}
      <section className="rs-breadcrumb-area rs-breadcrumb-one p-relative">
        <div className="rs-breadcrumb-bg" data-background="/assets/images/Main-images/Hero/AboutHeroBg.jpeg"></div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-8 col-lg-8">
              <div className="rs-breadcrumb-content-wrapper">
                <div className="rs-breadcrumb-title-wrapper">
                  <h1 className="rs-breadcrumb-title">About Us</h1>
                </div>
                <div className="rs-breadcrumb-menu">
                  <nav>
                    <ul>
                      <li><span><a href="/">Western Bearing</a></span></li>
                      <li><span>About Us</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb area end */}

      {/* about area start */}
      <section className="rs-about-area section-space rs-about-twelve rs-about-intro has-theme-light-blue">
        <div className="container">
          <div className="row g-5 justify-content-center section-title-space align-items-center">
            <div className="col-xxl-8 col-xl-9 col-lg-9">
              <div className="rs-section-title-wrapper text-center">
                <span className="rs-section-subtitle has-theme-light-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                      fill="#0C7BC7"></path>
                  </svg>
                  About Western Bearing
                </span>
                <h2 className="rs-section-title rs-split-text-enable split-in-fade">Welcome to Western Bearing, a Manufacturer & Exporter of Bearings Since 1985</h2>
              </div>
            </div>
          </div>
          {/* Mr. Aziz Belim */}
          <div className="row g-5 align-items-center" style={{ marginBottom: '40px' }}>
            <div className="col-lg-4 col-md-5">
              <div className="rs-team-details-thumb" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.05)', maxWidth: '280px', transition: 'transform 0.3s ease' }}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img src="/assets/images/Main-images/Team/1.jpg" alt="Mr.Aziz Belim" style={{ width: '100%', borderRadius: '20px', display: 'block' }} />
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="rs-team-details-content" style={{ paddingLeft: '15px' }}>
                <h2 className="rs-team-details-title" style={{ color: '#0f1c3f', fontWeight: '700', fontSize: '28px', marginBottom: '8px' }}>Mr.Aziz Belim</h2>
                <span style={{ backgroundColor: '#f4f8fc', color: '#0D80CE', padding: '6px 16px', borderRadius: '30px', fontSize: '13px', fontWeight: '600', display: 'inline-block', marginBottom: '18px', letterSpacing: '0.5px' }}>FOUNDER</span>
                
                <div className="rs-team-details-bio">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ width: '3px', height: '18px', backgroundColor: '#0D80CE', borderRadius: '2px', display: 'inline-block' }}></span>
                    <h4 style={{ color: '#0f1c3f', fontWeight: '600', fontSize: '18px', margin: 0 }}>Profile Details</h4>
                  </div>
                  <p style={{ color: '#4a5568', fontSize: '18px', lineHeight: '1.8', marginBottom: '0' }}>
                    Mr.Aziz started the bearing business in 1970 and began manufacturing in 1985. Today 2024, “WESTERN BEARING” brand is known for quality and trust.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mr. Waheed Belim (Alternating layout: Image right, text left) */}
          <div className="row g-5 align-items-center" style={{ marginBottom: '40px', borderTop: '1px solid #eaeaea', paddingTop: '40px' }}>
            <div className="col-lg-8 col-md-7 order-2 order-lg-1">
              <div className="rs-team-details-content" style={{ paddingRight: '15px' }}>
                <h2 className="rs-team-details-title" style={{ color: '#0f1c3f', fontWeight: '700', fontSize: '28px', marginBottom: '8px' }}>Mr.Waheed Belim</h2>
                <span style={{ backgroundColor: '#f4f8fc', color: '#0D80CE', padding: '6px 16px', borderRadius: '30px', fontSize: '13px', fontWeight: '600', display: 'inline-block', marginBottom: '18px', letterSpacing: '0.5px' }}>MANAGING DIRECTOR</span>
                
                <div className="rs-team-details-bio">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ width: '3px', height: '18px', backgroundColor: '#0D80CE', borderRadius: '2px', display: 'inline-block' }}></span>
                    <h4 style={{ color: '#0f1c3f', fontWeight: '600', fontSize: '18px', margin: 0 }}>Profile Details</h4>
                  </div>
                  <p style={{ color: '#4a5568', fontSize: '18px', lineHeight: '1.8', marginBottom: '0' }}>
                    In 2005, Mr.Belim took charge of the company and, with 19 years of experience, established the WESTERN brand globally. Under his leadership, the company has grown steadily with a strong focus on quality and innovation. Today, it produces premium bearings for leading OEM clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 order-1 order-lg-2">
              <div className="rs-team-details-thumb" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.05)', maxWidth: '280px', marginLeft: 'auto', transition: 'transform 0.3s ease' }}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img src="/assets/images/Main-images/Team/2.jpg" alt="Mr.Waheed Belim" style={{ width: '100%', borderRadius: '20px', display: 'block' }} />
              </div>
            </div>
          </div>

          {/* Mr. Maheed Madawat (BELIM) */}
          <div className="row g-5 align-items-center" style={{ marginBottom: '20px', borderTop: '1px solid #eaeaea', paddingTop: '40px' }}>
            <div className="col-lg-4 col-md-5">
              <div className="rs-team-details-thumb" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.05)', maxWidth: '280px', transition: 'transform 0.3s ease' }}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img src="/assets/images/Main-images/Team/3.jpg" alt="Mr.Maheed Madawat (BELIM)" style={{ width: '100%', borderRadius: '20px', display: 'block' }} />
              </div>
            </div>
            <div className="col-lg-8 col-md-7">
              <div className="rs-team-details-content" style={{ paddingLeft: '15px' }}>
                <h2 className="rs-team-details-title" style={{ color: '#0f1c3f', fontWeight: '700', fontSize: '28px', marginBottom: '8px' }}>Mr.Maheed Madawat (BELIM)</h2>
                <span style={{ backgroundColor: '#f4f8fc', color: '#0D80CE', padding: '6px 16px', borderRadius: '30px', fontSize: '13px', fontWeight: '600', display: 'inline-block', marginBottom: '18px', letterSpacing: '0.5px' }}>EXECUTIVE DIRECTOR</span>
                
                <div className="rs-team-details-bio">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <span style={{ width: '3px', height: '18px', backgroundColor: '#0D80CE', borderRadius: '2px', display: 'inline-block' }}></span>
                    <h4 style={{ color: '#0f1c3f', fontWeight: '600', fontSize: '18px', margin: 0 }}>Profile Details</h4>
                  </div>
                  <p style={{ color: '#4a5568', fontSize: '18px', lineHeight: '1.8', marginBottom: '0' }}>
                    In 2024, after completing his MBA, Mr.Maheed joined Western Bearing group to take charge of the company’s operations. MISSION: Western Engineers has initiated the process to launch its IPO, paving the way for a new direction and future growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about area end */}

      {/* history area start */}
      <section className="rs-history-area section-space rs-history-one has-theme-light-blue" style={{ background: '#f8fbfd' }}>
        <style>{`
          .timeline-container {
            position: relative;
            padding: 40px 0;
          }
          .timeline-container::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 2px;
            background: #0D80CE;
            opacity: 0.2;
            transform: translateX(-50%);
          }
          .timeline-item {
            position: relative;
            margin-bottom: 40px;
          }
          .timeline-item::after {
            content: '';
            display: table;
            clear: both;
          }
          .timeline-badge {
            position: absolute;
            top: 20px;
            left: 50%;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #0D80CE;
            border: 3px solid #fff;
            box-shadow: 0 0 0 3px rgba(13, 128, 206, 0.2);
            transform: translateX(-50%);
            z-index: 2;
          }
          .timeline-content {
            position: relative;
            width: 45%;
            padding: 24px;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
            border: 1px solid #eaeaea;
            transition: all 0.3s ease;
          }
          .timeline-content:hover {
            box-shadow: 0 10px 25px rgba(13, 128, 206, 0.08);
            border-color: #0D80CE;
            transform: translateY(-2px);
          }
          .timeline-item-left .timeline-content {
            float: left;
            text-align: right;
          }
          .timeline-item-right .timeline-content {
            float: right;
            text-align: left;
          }
          .timeline-year {
            font-size: 22px;
            font-weight: 800;
            color: #0D80CE;
            margin-bottom: 6px;
            display: inline-block;
          }
          .timeline-title {
            font-size: 18px;
            font-weight: 700;
            color: #0f1c3f;
            margin-bottom: 10px;
          }
          .timeline-desc {
            font-size: 14.5px;
            line-height: 1.6;
            color: #5b6c8f;
            margin-bottom: 0;
          }
          @media (max-width: 767px) {
            .timeline-container::before {
              left: 20px;
            }
            .timeline-badge {
              left: 20px;
            }
            .timeline-content {
              width: calc(100% - 40px);
              float: right !important;
              text-align: left !important;
            }
          }
        `}</style>
        <div className="container">
          <div className="row g-5 justify-content-center section-title-space align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="rs-section-title-wrapper text-center">
                <span className="rs-section-subtitle has-theme-light-blue justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                      fill="#0C7BC7"></path>
                  </svg>
                  Our History
                </span>
                <h2 className="rs-section-title rs-split-text-enable split-in-fade">Company Journey</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-10 col-lg-12">
              <div className="timeline-container">
                {/* 1985 */}
                <div className="timeline-item timeline-item-left">
                  <div className="timeline-badge"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">1985</span>
                    <h4 className="timeline-title">Foundation & Early Growth</h4>
                    <p className="timeline-desc">Established in 1985, the company began with a small setup focused on agriculture bearings, especially the SS series. Starting at a micro scale, it supplied taper roller bearings from 25 mm to 50 mm bore size without compromising on quality. Using SAE 52100 grade material, the products quickly gained market acceptance and built a strong reputation for reliability.</p>
                  </div>
                </div>

                {/* 1990 */}
                <div className="timeline-item timeline-item-right">
                  <div className="timeline-badge"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">1990</span>
                    <h4 className="timeline-title">Product Range Expansion</h4>
                    <p className="timeline-desc">By 1990, the taper roller bearing range was expanded from 50 mm up to 80 mm bore size. The business structure was clearly defined, with 70 percent focus on the agriculture segment and 30 percent on the industrial segment. During this period, trading activities began under the brand name WESTERN BEARING, helping establish a stronger market identity.</p>
                  </div>
                </div>

                {/* 2000 */}
                <div className="timeline-item timeline-item-left">
                  <div className="timeline-badge"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">2000</span>
                    <h4 className="timeline-title">New Plant & Dealer Network Development</h4>
                    <p className="timeline-desc">In 2000, the company shifted to a larger plant, increasing production capacity. At the same time, a strong dealer network was developed across India. This phase significantly improved both supply capability and market reach.</p>
                  </div>
                </div>

                {/* 2010 */}
                <div className="timeline-item timeline-item-right">
                  <div className="timeline-badge"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">2010</span>
                    <h4 className="timeline-title">Entry into International Market</h4>
                    <p className="timeline-desc">In 2010, the company entered the international market and began participating in international exhibitions. This provided global exposure and increased brand visibility. The experience helped build confidence in expanding export activities.</p>
                  </div>
                </div>

                {/* 2015 */}
                <div className="timeline-item timeline-item-left">
                  <div className="timeline-badge"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">2015</span>
                    <h4 className="timeline-title">Certification & Technology Upgrade</h4>
                    <p className="timeline-desc">In 2015, the company achieved ISO certification. Advanced German-made machines were installed in the laboratory to strengthen testing and quality control systems. This upgrade improved product consistency and performance reliability.</p>
                  </div>
                </div>

                {/* 2020 */}
                <div className="timeline-item timeline-item-right">
                  <div className="timeline-badge"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">2020</span>
                    <h4 className="timeline-title">Global Presence Expansion</h4>
                    <p className="timeline-desc">By 2020, the company was supplying products under its brand name to more than seven countries. This marked a period of stable export growth and increasing international recognition.</p>
                  </div>
                </div>

                {/* 2024 */}
                <div className="timeline-item timeline-item-left">
                  <div className="timeline-badge"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">2024</span>
                    <h4 className="timeline-title">Quality System Strengthening</h4>
                    <p className="timeline-desc">In 2024, the ISO 9001:2015 Management System certification was renewed. Internal systems and documentation processes were further strengthened to maintain structured and disciplined operations.</p>
                  </div>
                </div>

                {/* 2025 */}
                <div className="timeline-item timeline-item-right">
                  <div className="timeline-badge"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">2025</span>
                    <h4 className="timeline-title">National Quality Recognition</h4>
                    <p className="timeline-desc">In 2025, the company achieved ZED Certification under a Government of India quality initiative. This recognition reinforced the company's commitment to manufacturing excellence, quality control standards, and environmental responsibility.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* history area start */}

      {/* team area start */}
      {/* <section className="rs-team-area rs-team-one has-theme-light-blue">
          <div className="container has-large">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="rs-section-subtitle-wrapper">
                          <span className="rs-section-subtitle has-theme-light-blue justify-content-start">
                              Our Engineer
                          </span>
                          <div className="rs-section-border-line"></div>
                      </div>
                  </div>
              </div>
              <div className="row  g-5 section-title-space align-items-center">
                  <div className="col-xl-6 col-lg-6">
                      <div className="rs-section-title-wrapper">
                          <h2 className="rs-section-title has-theme-light-blue rs-split-text-enable split-in-fade">The
                              best
                              industry experts</h2>
                      </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                      <div className="rs-team-btn">
                          <a className="rs-btn has-theme-light-blue has-icon has-bg" href="/team">View More Member
                              <span className="icon-box">
                                  <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                      <path
                                          d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                      </path>
                                  </svg>
                                  <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                      <path
                                          d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                      </path>
                                  </svg>
                              </span>
                          </a>
                      </div>
                  </div>
              </div>
                  <div className="row justify-content-center" style={{ marginLeft: '30px', marginRight: '30px', gap: '40px' }}>
                      <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="rs-team-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                              <div className="rs-team-thumb has-clip">
                                  <Link to="/team-details/aziz"><img src="/assets/images/Main-images/Team/1.jpg"
                                          alt="image" /></Link>
                              </div>
                              <div className="rs-team-content-wrapper">
                                  <div className="rs-team-content-box">
                                      <h5 className="rs-team-title"><Link to="/team-details/aziz">Mr.Aziz Belim</Link></h5>
                                      <span className="rs-team-designation">FOUNDER</span>
                          </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="rs-team-item wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                              <div className="rs-team-thumb has-clip">
                                  <Link to="/team-details/waheed"><img src="/assets/images/Main-images/Team/2.jpg"
                                          alt="image" /></Link>
                  </div>
                              <div className="rs-team-content-wrapper">
                                  <div className="rs-team-content-box">
                                      <h5 className="rs-team-title"><Link to="/team-details/waheed">Mr.Waheed Belim</Link></h5>
                                      <span className="rs-team-designation">MANAGING DIRECTOR </span>
                              </div>
                          </div>
                              </div>
                          </div>
                      <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="rs-team-item wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                              <div className="rs-team-thumb has-clip">
                                  <Link to="/team-details/maheed"><img src="/assets/images/Main-images/Team/3.jpg"
                                          alt="image" /></Link>
                      </div>
                              <div className="rs-team-content-wrapper">
                                  <div className="rs-team-content-box">
                                      <h5 className="rs-team-title"><Link to="/team-details/maheed">Mr.Maheed Belim</Link></h5>
                                      <span className="rs-team-designation">EXECUTIVE DIRECTOR</span>
                  </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section> */}
      {/* team area end */}

      {/* counter area start */}
      {/* <section className="rs-counter-area rs-counter-one section-space-top has-space p-relative z-index-1">
        <div className="rs-counter-bg-thumb" data-background="/assets/images/Main-images/aboutBg.png"></div>
        <div className="container">
          <div className="row g-5 justify-content-center section-title-space align-items-center">
            <div className="col-xxl-6 col-xl-7 col-lg-7">
              <div className="rs-section-title-wrapper text-center">
                <span className="rs-section-subtitle has-theme-light-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                      fill="#0C7BC7"></path>
                  </svg>
                  Achievement
                </span>
                <h2 className="rs-section-title rs-split-text-enable split-in-fade">Company Achievement</h2>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="rs-counter-item">
                <div className="rs-counter-inner">
                  <div className="rs-counter-number-wrapper">
                    <span className="rs-counter-number odometer" data-count="50">00</span>
                    <span className="prefix">+</span>
                  </div>
                  <span className="rs-counter-title">Drilling Fields</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="rs-counter-item">
                <div className="rs-counter-inner">
                  <div className="rs-counter-number-wrapper">
                    <span className="rs-counter-number odometer" data-count="49">00</span>
                    <span className="prefix">%</span>
                  </div>
                  <span className="rs-counter-title">Crane Equipment</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="rs-counter-item">
                <div className="rs-counter-inner">
                  <div className="rs-counter-number-wrapper">
                    <span className="rs-counter-number odometer" data-count="20">00</span>
                    <span className="prefix">m</span>
                  </div>
                  <span className="rs-counter-title">Metal Factory</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="rs-counter-item">
                <div className="rs-counter-inner">
                  <div className="rs-counter-number-wrapper">
                    <span className="rs-counter-number odometer" data-count="25">00</span>
                    <span className="prefix">k</span>
                  </div>
                  <span className="rs-counter-title">Drilling Fields</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* counter area end */}



      {/* testimonial area start */}
      <section className="rs-testimonial-area rs-testimonial-three rs-swiper has-bg-black has-theme-light-blue">
        <div className="rs-testimonial-bg-thumb-two" data-background="/assets/images/Main-images/testimonialBG.png"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-9 col-lg-10 col-12">
              <div className="rs-testimonial-wrapper">
                <div className="rs-section-title-wrapper section-title-space text-center">
                  <span className="rs-section-subtitle has-theme-light-blue justify-content-center has-transparent">
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                      <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                        fill="#0C7BC7"></path>
                    </svg>
                    Reviews
                  </span>
                  <h2 className="rs-section-title rs-split-text-enable split-in-fade">what Client Say</h2>
                </div>
                <div className="rs-testimonial-slider-wrapper">
                  <div className="swiper" data-clone-slides="false" data-loop="true" data-speed="1500"
                    data-autoplay="true" data-dots-dynamic="false" data-hover-pause="true"
                    data-effect="false" data-delay="2500" data-item="1" data-item-xl="1"
                    data-item-lg="1" data-item-md="1" data-item-sm="1" data-item-xs="1"
                    data-item-mobile="1" data-margin="30" data-margin-xl="30">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="rs-testimonial-item">
                          <div className="rs-testimonial-avater-thumb">
                            <div className="rs-testimonial-thumb">
                              <img src="/assets/images/Main-images/review1.png" alt="image" />
                            </div>
                            <div className="rs-testimonial-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="29" viewBox="0 0 40 29" fill="none">
                                <path d="M2.85714 29H11.4286L17.1429 17.4V0H0V17.4H8.57143L2.85714 29ZM25.7143 29H34.2857L40 17.4V0H22.8571V17.4H31.4286L25.7143 29Z" fill="white" fillOpacity="0.4"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="rs-testimonial-content">
                            <h5 className="rs-testimonial-title">Zaheer Khan</h5>
                            <div className="rs-testimonial-description">
                              <p>We have been using these bearings for over a year now. The performance and durability are excellent.
Perfect for OEM applications.</p>
                            </div>
                            <div className="rs-testimonial-stars" aria-label="Rating: 5 out of 5">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="rs-testimonial-item">
                          <div className="rs-testimonial-avater-thumb">
                            <div className="rs-testimonial-thumb">
                              <img src="/assets/images/Main-images/review2.png" alt="image" />
                            </div>
                            <div className="rs-testimonial-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="29" viewBox="0 0 40 29" fill="none">
                                <path d="M2.85714 29H11.4286L17.1429 17.4V0H0V17.4H8.57143L2.85714 29ZM25.7143 29H34.2857L40 17.4V0H22.8571V17.4H31.4286L25.7143 29Z" fill="white" fillOpacity="0.4"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="rs-testimonial-content">
                            <h5 className="rs-testimonial-title">Shanti Bhai Patel</h5>
                            <div className="rs-testimonial-description">
                              <p>Reliable performance even under heavy load conditions. We experienced longer service life than
expected.</p>
                            </div>
                            <div className="rs-testimonial-stars" aria-label="Rating: 4.5 out of 5">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="rs-testimonial-item">
                          <div className="rs-testimonial-avater-thumb">
                            <div className="rs-testimonial-thumb rs-testimonial-thumb-initials" title="Deepak Jain">
                              <span aria-hidden="true">DJ</span>
                            </div>
                            <div className="rs-testimonial-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="29" viewBox="0 0 40 29" fill="none">
                                <path d="M2.85714 29H11.4286L17.1429 17.4V0H0V17.4H8.57143L2.85714 29ZM25.7143 29H34.2857L40 17.4V0H22.8571V17.4H31.4286L25.7143 29Z" fill="white" fillOpacity="0.4"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="rs-testimonial-content">
                            <h5 className="rs-testimonial-title">Deepak Jain</h5>
                            <div className="rs-testimonial-description">
                              <p>Strong packaging and timely dispatch. We look forward to a long-term business relationship</p>
                            </div>
                            <div className="rs-testimonial-stars" aria-label="Rating: 5 out of 5">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="rs-testimonial-item">
                          <div className="rs-testimonial-avater-thumb">
                            <div className="rs-testimonial-thumb">
                              <img src="/assets/images/Main-images/reviewUser.jpeg" alt="image" />
                            </div>
                            <div className="rs-testimonial-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="29" viewBox="0 0 40 29" fill="none">
                                <path d="M2.85714 29H11.4286L17.1429 17.4V0H0V17.4H8.57143L2.85714 29ZM25.7143 29H34.2857L40 17.4V0H22.8571V17.4H31.4286L25.7143 29Z" fill="white" fillOpacity="0.4"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="rs-testimonial-content">
                            <h5 className="rs-testimonial-title">User</h5>
                            <div className="rs-testimonial-description">
                              <p>I have worked with Western Bearing for many years. Their products have consistently maintained high quality and are always in strong demand in my country.</p>
                            </div>
                            <div className="rs-testimonial-stars" aria-label="Rating: 5 out of 5">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="rs-testimonial-item">
                          <div className="rs-testimonial-avater-thumb">
                            <div className="rs-testimonial-thumb">
                              <img src="/assets/images/Main-images/Ibrahim.jpeg" alt="image" />
                            </div>
                            <div className="rs-testimonial-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="29" viewBox="0 0 40 29" fill="none">
                                <path d="M2.85714 29H11.4286L17.1429 17.4V0H0V17.4H8.57143L2.85714 29ZM25.7143 29H34.2857L40 17.4V0H22.8571V17.4H31.4286L25.7143 29Z" fill="white" fillOpacity="0.4"></path>
                              </svg>
                            </div>
                          </div>
                          <div className="rs-testimonial-content">
                            <h5 className="rs-testimonial-title">Mohammad Ibrahim</h5>
                            <div className="rs-testimonial-description">
                              <p>I've been a long-time importer of Western Bearing. Their consistent quality keeps my customers coming back.</p>
                            </div>
                            <div className="rs-testimonial-stars" aria-label="Rating: 5 out of 5">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* If we need navigation buttons */}
                    <div className="rs-testimonial-navigation">
                      <button className="swiper-button-prev rs-swiper-btn has-small has-theme-light-blue"><i className="fa-regular fa-arrow-left"></i></button>
                      <button className="swiper-button-next rs-swiper-btn has-small has-theme-light-blue"><i className="fa-regular fa-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial area end */}

      {/* brand area start */}
        {/* <section className="rs-brand-area section-space rs-brand-two has-theme-light-blue">
          <div className="rs-brand-shape">
            <img src="/assets/images/shape/brand-shape.png" alt="image" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="rs-brand-wrapper">
                  <div className="rs-section-title-wrapper">
                    <span className="rs-section-subtitle has-theme-light-blue justify-content-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                        <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                          fill="#0C7BC7"></path>
                      </svg>
                      Partners
                    </span>
                    <h2 className="rs-section-title rs-split-text-enable split-in-fade mb-20">Our clients and partners</h2>
                    <p className="descrip">Engines prime movers and exhaust gas turbochargers.</p>
                  </div>
                  <div className="rs-brand-item-wrapper">
                    <div className="rs-brand-item">
                      <div className="rs-brand-thumb">
                        <img src="/assets/images/brand/brand-thumb-02.png" alt="image" />
                      </div>
                    </div>
                    <div className="rs-brand-item">
                      <div className="rs-brand-thumb">
                        <img src="/assets/images/brand/brand-thumb-03.png" alt="image" />
                      </div>
                    </div>
                    <div className="rs-brand-item">
                      <div className="rs-brand-thumb">
                        <img src="/assets/images/brand/brand-thumb-04.png" alt="image" />
                      </div>
                    </div>
                    <div className="rs-brand-item">
                      <div className="rs-brand-thumb">
                        <img src="/assets/images/brand/brand-thumb-05.png" alt="image" />
                      </div>
                    </div>
                    <div className="rs-brand-item">
                      <div className="rs-brand-thumb">
                        <img src="/assets/images/brand/brand-thumb-06.png" alt="image" />
                      </div>
                    </div>
                    <div className="rs-brand-item">
                      <div className="rs-brand-thumb">
                        <img src="/assets/images/brand/brand-thumb-07.png" alt="image" />
                      </div>
                    </div>
                    <div className="rs-brand-item">
                      <div className="rs-brand-thumb">
                        <img src="/assets/images/brand/brand-thumb-02.png" alt="image" />
                      </div>
                    </div>
                    <div className="rs-brand-item">
                      <div className="rs-brand-thumb">
                        <img src="/assets/images/brand/brand-thumb-03.png" alt="image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      {/* brand area end */}

      {/* blog area start */}
      {/* <section className="rs-blog-area section-space rs-blog-two has-theme-light-blue rs-swiper">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-7 col-lg-8">
              <div className="rs-section-title-wrapper text-center section-title-space">
                <span className="rs-section-subtitle has-theme-light-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                      fill="#0C7BC7"></path>
                  </svg>
                  News & Blog
                </span>
                <h2 className="rs-section-title rs-split-text-enable split-in-fade">Discover the future factories and Western Bearings</h2>
              </div>
            </div>
          </div>
          <div className="rs-blog-slider">
            <div className="swiper" data-clone-slides="false" data-loop="true" data-speed="1500"
              data-autoplay="true" data-dots-dynamic="false" data-hover-pause="true" data-effect="false"
              data-delay="2500" data-item="3" data-item-xl="3" data-item-lg="3" data-item-md="2"
              data-item-sm="1" data-item-xs="1" data-item-mobile="1" data-margin="30" data-margin-xl="30">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="rs-blog-item">
                    <div className="rs-blog-thumb">
                      <a href="/blog-details"><img src="/assets/images/blog/blog-thumb-04.png" alt="image" /></a>
                    </div>
                    <div className="rs-blog-content">
                      <div className="rs-blog-tag has-theme-light-blue">
                        <a href="/blog-details">Company</a>
                      </div>
                      <h5 className="rs-blog-title underline has-black"><a href="/blog-details">Construction of a new high tech plant in Washington</a></h5>
                      <div className="rs-blog-meta">
                        <div className="rs-blog-meta-item">
                          <span>By <a className="rs-blog-meta-author" href="#">Nayeem</a></span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <span>Feb 8, 2024</span>
                        </div>
                      </div>
                      <div className="rs-blog-btn-wrapper">
                        <span className="rs-blog-meta-text">22 min read</span>
                        <a className="rs-square-btn has-icon has-light-grey" href="/blog-details">
                          <span className="icon-box">
                            <i className="ri-arrow-right-line icon-first"></i>
                            <i className="ri-arrow-right-line icon-second"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="rs-blog-item">
                    <div className="rs-blog-thumb">
                      <a href="/blog-details"><img src="/assets/images/blog/blog-thumb-05.png" alt="image" /></a>
                    </div>
                    <div className="rs-blog-content">
                      <div className="rs-blog-tag has-theme-light-blue">
                        <a href="/blog-details">industry</a>
                      </div>
                      <h5 className="rs-blog-title underline has-black"><a href="/blog-details">Building resilient supply for Western Bearings and factories</a></h5>
                      <div className="rs-blog-meta">
                        <div className="rs-blog-meta-item">
                          <span>By <a className="rs-blog-meta-author" href="#">Nayeem</a></span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <span>Feb 8, 2024</span>
                        </div>
                      </div>
                      <div className="rs-blog-btn-wrapper">
                        <span className="rs-blog-meta-text">22 min read</span>
                        <a className="rs-square-btn has-icon has-light-grey" href="/blog-details">
                          <span className="icon-box">
                            <i className="ri-arrow-right-line icon-first"></i>
                            <i className="ri-arrow-right-line icon-second"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="rs-blog-item">
                    <div className="rs-blog-thumb">
                      <a href="/blog-details"><img src="/assets/images/blog/blog-thumb-06.png" alt="image" /></a>
                    </div>
                    <div className="rs-blog-content">
                      <div className="rs-blog-tag has-theme-light-blue">
                        <a href="/blog-details">Gas & Oil</a>
                      </div>
                      <h5 className="rs-blog-title underline has-black"><a href="/blog-details">Interactive technologies in factories and plants</a></h5>
                      <div className="rs-blog-meta">
                        <div className="rs-blog-meta-item">
                          <span>By <a className="rs-blog-meta-author" href="#">Nayeem</a></span>
                        </div>
                        <div className="rs-blog-meta-item">
                          <span>Feb 8, 2024</span>
                        </div>
                      </div>
                      <div className="rs-blog-btn-wrapper">
                        <span className="rs-blog-meta-text">22 min read</span>
                        <a className="rs-square-btn has-icon has-light-grey" href="/blog-details">
                          <span className="icon-box">
                            <i className="ri-arrow-right-line icon-first"></i>
                            <i className="ri-arrow-right-line icon-second"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* blog area end */}
      <CtaSection />
    </>
  )
}

export default About
