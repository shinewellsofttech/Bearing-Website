import { useEffect } from 'react'
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
        <div className="rs-breadcrumb-bg" data-background="/assets/images/bg/breadcrumb-bg-01.png"></div>
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
          <div className="row rs-about-intro-row g-5 align-items-stretch">
            <div className="col-lg-5 col-md-6">
              <div className="rs-about-intro-thumb">
                <img src="/assets/images/about/about-thumb-18.png" alt="Western Bearing" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="rs-about-intro-content">
                <p>
                  Established in 1970, Western Bearing began manufacturing operations in 1985 and has since built a strong reputation for quality and reliability under the WESTERN BEARING brand.
                </p>
                <p>
                  In 2005, the company transitioned into second-generation leadership under Mr. A.V. Belim, expanding its footprint in domestic and international markets through a focused approach to precision, innovation, and consistent manufacturing standards. Today, Western Bearing supplies premium bearings to leading OEM customers in the automotive, agricultural, and earthmoving sectors.
                </p>
                <p className="mb-0">
                  In 2024, Mr. Maheed, representing the third generation, joined the Western Bearing Group after completing his MBA and assumed responsibility for operational management and strategic execution. With Western Engineers initiating the IPO process, the company is positioned for its next phase of structured growth and long-term value creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about area end */}

      {/* history area start */}
      <section className="rs-history-area section-space rs-history-one has-theme-light-blue">
        <div className="rs-history-bg-thumb" data-background="/assets/images/Main-images/journeyBG.png"></div>
        <div className="container">
          <div className="row g-5 justify-content-center section-title-space align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <div className="rs-section-title-wrapper text-center">
                <span className="rs-section-subtitle has-theme-light-blue">
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
            <div className="col-xxl-9 col-xl-10">
              <div className="rs-history-tab-wrapper">
                <div className="rs-history-tab">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-item-one-tab" data-bs-toggle="pill" data-bs-target="#pills-item-one" type="button" role="tab" aria-controls="pills-item-one" aria-selected="true">1985</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-item-two-tab" data-bs-toggle="pill" data-bs-target="#pills-item-two" type="button" role="tab" aria-controls="pills-item-two" aria-selected="false">1990</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-item-three-tab" data-bs-toggle="pill" data-bs-target="#pills-item-three" type="button" role="tab" aria-controls="pills-item-three" aria-selected="false">2000</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-item-four-tab" data-bs-toggle="pill" data-bs-target="#pills-item-four" type="button" role="tab" aria-controls="pills-item-four" aria-selected="false">2010</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-item-five-tab" data-bs-toggle="pill" data-bs-target="#pills-item-five" type="button" role="tab" aria-controls="pills-item-five" aria-selected="false">2015</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-item-six-tab" data-bs-toggle="pill" data-bs-target="#pills-item-six" type="button" role="tab" aria-controls="pills-item-six" aria-selected="false">2020</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-item-seven-tab" data-bs-toggle="pill" data-bs-target="#pills-item-seven" type="button" role="tab" aria-controls="pills-item-seven" aria-selected="false">2024</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-item-eight-tab" data-bs-toggle="pill" data-bs-target="#pills-item-eight" type="button" role="tab" aria-controls="pills-item-eight" aria-selected="false">2025</button>
                    </li>
                  </ul>
                </div>
                <div className="rs-history-tab-content-wrapper">
                  <div className="tab-content rs-history-tab-anim" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-item-one" role="tabpanel" aria-labelledby="pills-item-one-tab" tabIndex="0">
                      <div className="rs-history-tab-item">
                        <div className="rs-history-tab-thumb">
                          <img src="/assets/images/history/history-thumb-01.png" alt="Western Bearing 1985" />
                        </div>
                        <div className="rs-history-tab-content">
                          <h5 className="rs-history-tab-title">Foundation & Early Growth</h5>
                          <p>Established in 1985, the company began with a small setup focused on agriculture bearings, especially the SS series. Starting at a micro scale, it supplied taper roller bearings from 25 mm to 50 mm bore size without compromising on quality. Using SAE 52100 grade material, the products quickly gained market acceptance and built a strong reputation for reliability.</p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-item-two" role="tabpanel" aria-labelledby="pills-item-two-tab" tabIndex="0">
                      <div className="rs-history-tab-item">
                        <div className="rs-history-tab-thumb">
                          <img src="/assets/images/history/history-thumb-02.png" alt="Western Bearing 1990" />
                        </div>
                        <div className="rs-history-tab-content">
                          <h5 className="rs-history-tab-title">Product Range Expansion</h5>
                          <p>By 1990, the taper roller bearing range was expanded from 50 mm up to 80 mm bore size. The business structure was clearly defined, with 70 percent focus on the agriculture segment and 30 percent on the industrial segment. During this period, trading activities began under the brand name WESTERN BEARING, helping establish a stronger market identity.</p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-item-three" role="tabpanel" aria-labelledby="pills-item-three-tab" tabIndex="0">
                      <div className="rs-history-tab-item">
                        <div className="rs-history-tab-thumb">
                          <img src="/assets/images/history/history-thumb-03.png" alt="Western Bearing 2000" />
                        </div>
                        <div className="rs-history-tab-content">
                          <h5 className="rs-history-tab-title">New Plant & Dealer Network Development</h5>
                          <p>In 2000, the company shifted to a larger plant, increasing production capacity. At the same time, a strong dealer network was developed across India. This phase significantly improved both supply capability and market reach.</p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-item-four" role="tabpanel" aria-labelledby="pills-item-four-tab" tabIndex="0">
                      <div className="rs-history-tab-item">
                        <div className="rs-history-tab-thumb">
                          <img src="/assets/images/history/history-thumb-04.png" alt="Western Bearing 2010" />
                        </div>
                        <div className="rs-history-tab-content">
                          <h5 className="rs-history-tab-title">Entry into International Market</h5>
                          <p>In 2010, the company entered the international market and began participating in international exhibitions. This provided global exposure and increased brand visibility. The experience helped build confidence in expanding export activities.</p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-item-five" role="tabpanel" aria-labelledby="pills-item-five-tab" tabIndex="0">
                      <div className="rs-history-tab-item">
                        <div className="rs-history-tab-thumb">
                          <img src="/assets/images/history/history-thumb-05.png" alt="Western Bearing 2015" />
                        </div>
                        <div className="rs-history-tab-content">
                          <h5 className="rs-history-tab-title">Certification & Technology Upgrade</h5>
                          <p>In 2015, the company achieved ISO certification. Advanced German-made machines were installed in the laboratory to strengthen testing and quality control systems. This upgrade improved product consistency and performance reliability.</p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-item-six" role="tabpanel" aria-labelledby="pills-item-six-tab" tabIndex="0">
                      <div className="rs-history-tab-item">
                        <div className="rs-history-tab-thumb">
                          <img src="/assets/images/history/history-thumb-01.png" alt="Western Bearing 2020" />
                        </div>
                        <div className="rs-history-tab-content">
                          <h5 className="rs-history-tab-title">Global Presence Expansion</h5>
                          <p>By 2020, the company was supplying products under its brand name to more than seven countries. This marked a period of stable export growth and increasing international recognition.</p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-item-seven" role="tabpanel" aria-labelledby="pills-item-seven-tab" tabIndex="0">
                      <div className="rs-history-tab-item">
                        <div className="rs-history-tab-thumb">
                          <img src="/assets/images/history/history-thumb-02.png" alt="Western Bearing 2024" />
                        </div>
                        <div className="rs-history-tab-content">
                          <h5 className="rs-history-tab-title">Quality System Strengthening</h5>
                          <p>In 2024, the ISO 9001:2015 Management System certification was renewed. Internal systems and documentation processes were further strengthened to maintain structured and disciplined operations.</p>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-item-eight" role="tabpanel" aria-labelledby="pills-item-eight-tab" tabIndex="0">
                      <div className="rs-history-tab-item">
                        <div className="rs-history-tab-thumb">
                          <img src="/assets/images/history/history-thumb-03.png" alt="Western Bearing 2025" />
                        </div>
                        <div className="rs-history-tab-content">
                          <h5 className="rs-history-tab-title">National Quality Recognition</h5>
                          <p>In 2025, the company achieved ZED Certification under a Government of India quality initiative. This recognition reinforced the company's commitment to manufacturing excellence, quality control standards, and environmental responsibility.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* history area start */}

      {/* team area start */}
      {/* <section className="rs-team-area section-space rs-team-one">
        <div className="container">
          <div className="row g-5 section-title-space align-items-center">
            <div className="col-xl-7 col-lg-7">
              <div className="rs-section-title-wrapper">
                <span className="rs-section-subtitle has-theme-light-blue justify-content-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                      fill="#0C7BC7"></path>
                  </svg>
                  Engineer
                </span>
                <h2 className="rs-section-title">The Best Industry Expert</h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5">
              <div className="rs-team-btn d-flex justify-content-lg-end">
                <a className="rs-btn has-theme-light-blue has-icon has-bg" href="/team">Become a Member
                  <span className="icon-box">
                    <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
                    </svg>
                    <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="rs-team-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                <div className="rs-team-thumb has-clip">
                  <a href="/team-details"><img src="/assets/images/team/team-thumb-01.png" alt="image" /></a>
                  <div className="rs-theme-social rs-team-social has-transparent">
                    <a href="#"><i className="ri-twitter-x-line"></i></a>
                    <a href="#"><i className="ri-facebook-fill"></i></a>
                    <a href="#"><i className="ri-linkedin-fill"></i></a>
                  </div>
                </div>
                <div className="rs-team-content-wrapper">
                  <div className="rs-team-content-box">
                    <h5 className="rs-team-title"><a href="/team-details">Peter Hase</a></h5>
                    <span className="rs-team-designation">Sr. Engineer</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="rs-team-item wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                <div className="rs-team-thumb has-clip">
                  <a href="/team-details"><img src="/assets/images/team/team-thumb-02.png" alt="image" /></a>
                  <div className="rs-theme-social rs-team-social has-transparent">
                    <a href="#"><i className="ri-twitter-x-line"></i></a>
                    <a href="#"><i className="ri-facebook-fill"></i></a>
                    <a href="#"><i className="ri-linkedin-fill"></i></a>
                  </div>
                </div>
                <div className="rs-team-content-wrapper">
                  <div className="rs-team-content-box">
                    <h5 className="rs-team-title"><a href="/team-details">Jack Peter</a></h5>
                    <span className="rs-team-designation">Four Man</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="rs-team-item wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                <div className="rs-team-thumb has-clip">
                  <a href="/team-details"><img src="/assets/images/team/team-thumb-03.png" alt="image" /></a>
                  <div className="rs-theme-social rs-team-social has-transparent">
                    <a href="#"><i className="ri-twitter-x-line"></i></a>
                    <a href="#"><i className="ri-facebook-fill"></i></a>
                    <a href="#"><i className="ri-linkedin-fill"></i></a>
                  </div>
                </div>
                <div className="rs-team-content-wrapper">
                  <div className="rs-team-content-box">
                    <h5 className="rs-team-title"><a href="/team-details">Bradley Roy</a></h5>
                    <span className="rs-team-designation">Sr. Engineer</span>
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

      {/* certificates area start */}
      <section className="rs-certificates-area has-space section-space-top section-space-bottom">
        <div className="container">
          <div className="row g-5 justify-content-center section-title-space align-items-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="rs-section-title-wrapper text-center">
                <span className="rs-section-subtitle has-theme-light-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M11 3.10345e-06L11 15L3.14286 15L3.14286 10L8.85714 10L8.85714 5L3.14286 5L3.14286 3.10345e-06L11 3.10345e-06Z" fill="#0C7BC7"></path>
                  </svg>
                  Company Achievement
                </span>
                <h2 className="rs-section-title">Our Certifications</h2>
                <p className="rs-section-desc">"We test our products according to international standards, provide 2D/3D drawings as per customer requirements, and continuously work on improving quality.".</p>
              </div>
            </div>
          </div>
          <div className="row g-5 justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="rs-certificate-item">
                <div className="rs-certificate-thumb">
                  <img
                    src="/assets/images/Main-images/Certificates/1.jpeg"
                    alt="ISO 9001:2015 Quality Management"
                    loading="lazy"
                  />
                </div>
                <div className="rs-certificate-content">
                  <h4 className="rs-certificate-title">Moody International Certificate</h4>
                  <p className="rs-certificate-desc">Western Bearing Company is a trusted, ISO and ZED certified bearing manufacturer, supplying quality bearings to both government and private sectors, with regular tool calibration ensuring consistent standards. </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="rs-certificate-item">
                <div className="rs-certificate-thumb">
                  <img
                    src="/assets/images/Main-images/Certificates/2.jpeg"
                    alt="Industry certification"
                    loading="lazy"
                  />
                </div>
                <div className="rs-certificate-content">
                  <h4 className="rs-certificate-title">ROHS Certificate</h4>
                  <p className="rs-certificate-desc">We obtained the EN ISO 9001:2008 certification on 12th October 2009 through Moody International.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-12">
              <div className="rs-certificate-item">
                <div className="rs-certificate-thumb">
                  <img
                    src="/assets/images/Main-images/Certificates/3.jpeg"
                    alt="Export certification"
                    loading="lazy"
                  />
                </div>
                <div className="rs-certificate-content">
                    <h4 className="rs-certificate-title">ZED Certificate</h4>
                  <p className="rs-certificate-desc">Western Bearing ISO 9001 : 2015 certified, ensuring quality, consistency, and customer satisfaction."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* certificates area end */}

      {/* testimonial area start */}
      <section className="rs-testimonial-area rs-testimonial-three rs-swiper has-bg-black has-theme-light-blue">
        <div className="rs-testimonial-bg-thumb" data-background="/assets/images/testimonial/testimonial-thumb-02.png"></div>
        <div className="rs-testimonial-bg-thumb-two" data-background="/assets/images/Main-images/testimonialBG.png"></div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xxl-6 col-xl-7 col-lg-7 col-12">
              <div className="rs-testimonial-wrapper">
                <div className="rs-section-title-wrapper section-title-space">
                  <span className="rs-section-subtitle has-theme-light-blue justify-content-start has-transparent">
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
