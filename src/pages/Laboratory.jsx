import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Laboratory() {
  // State for Read More functionality
  const [expandedCards, setExpandedCards] = useState({});
  // State for mobile detection
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  // Flags data array
  const flags = [
    // { name: 'India', image: 'India.png' },
    { name: 'Country 1', image: '1.png' },
    { name: 'Country 2', image: '2.png' },
    { name: 'Country 3', image: '3.png' },
    { name: 'Country 4', image: '4.png' },
    { name: 'Country 5', image: '5.png' },
    { name: 'Country 6', image: '6.png' },
    { name: 'Country 7', image: '7.png' },
    { name: 'Country 8', image: '8.png' },
    { name: 'Country 9', image: '9.png' },
    { name: 'Country 10', image: '10.png' },
    { name: 'Country 11', image: '11.png' },
    { name: 'Country 12', image: '12.png' },
    { name: 'Country 13', image: '13.png' },
    { name: 'Country 14', image: '14.png' },
    { name: 'Country 15', image: '15.png' },
    { name: 'Country 16', image: '16.png' },
    { name: 'Country 17', image: '17.png' },
    { name: 'Country 18', image: '18.png' },
    { name: 'Country 19', image: '19.png' },
    { name: 'Country 20', image: '20.png' },
    { name: 'Country 21', image: '21.png' },
    { name: 'Country 22', image: '22.png' },
    { name: 'Country 23', image: '23.png' },
    { name: 'Country 24', image: '24.png' },
    { name: 'Country 25', image: '25.png' },
    { name: 'Country 26', image: '26.png' },
    { name: 'Country 27', image: '27.png' },
    { name: 'Country 28', image: '28.png' },
    { name: 'Country 29', image: '29.png' },
    { name: 'Country 30', image: '30.png' },
    { name: 'Country 31', image: '31.png' },
    { name: 'Country 32', image: '32.png' }
  ];

  useEffect(() => {
    // Handle window resize for mobile detection
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

//   useEffect(() => {
//     // Handle all link clicks to show "Page Working in Progress..." message
//     const handleLinkClick = (e) => {
//       // Check for anchor tags
//       let target = e.target.closest('a')
//       if (!target) {
//         // Check for React Router Link components
//         target = e.target.closest('[role="link"]') || e.target.closest('Link')
//       }
//       if (!target) return
      
//       const href = target.getAttribute('href') || target.getAttribute('to')
      
//       // Only intercept internal navigation links (not external URLs, email, tel, or anchor links)
//       if (href && 
//           !href.startsWith('http') && 
//           !href.startsWith('mailto:') && 
//           !href.startsWith('tel:') && 
//           !href.startsWith('javascript:') && 
//           !href.startsWith('#') &&
//           href !== '/') {
//         e.preventDefault()
//         e.stopPropagation()
//         alert('Page Working in Progress...')
//         return false
//       }
//     }

//     // Use event delegation on document level with capture phase
//     document.addEventListener('click', handleLinkClick, true)

//     // Also handle React Router navigation programmatically
//     const originalPushState = window.history.pushState
//     window.history.pushState = function(...args) {
//       const url = args[2]
//       if (url && url !== '/' && !url.startsWith('http') && !url.startsWith('#')) {
//         alert('Page Working in Progress...')
//         return
//       }
//       return originalPushState.apply(window.history, args)
//     }

//     // Cleanup
//     return () => {
//       document.removeEventListener('click', handleLinkClick, true)
//       window.history.pushState = originalPushState
//     }
//   }, [])

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

      // MagnificPopup image view
      if ($.fn.magnificPopup) {
        $('.popup-image').magnificPopup({
          type: 'image',
          gallery: {
            enabled: true,
          },
        })

        // MagnificPopup video view
        $('.popup-video').magnificPopup({
          type: 'iframe',
        })
      }

      // Jarallax js
      if (typeof window !== 'undefined' && window.jarallax) {
        window.jarallax(document.querySelectorAll('.jarallax'), {
          speed: 0.5,
        })
      }

      // Nice Select Js
      if ($.fn.niceSelect) {
        $('select').niceSelect()
      }

      // PureCounter Js
      if (typeof window !== 'undefined' && window.PureCounter) {
        new window.PureCounter()
        new window.PureCounter({
          filesizing: true,
          selector: '.filesizecount',
          pulse: 2,
        })
      }

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

      // Also try jQuery appear method as fallback
      if ($.fn.appear) {
        $('.odometer').appear(function (e) {
          const $this = $(this)
          if ($this.data('odometer-initialized')) return
          
          const countNumber = $this.attr('data-count')
          if (countNumber && window.Odometer) {
            try {
              $this.text('0')
              const odometer = new window.Odometer({
                el: this,
                value: 0,
                format: '(,ddd)',
                theme: 'default',
                duration: 2000
              })
              
              setTimeout(() => {
                odometer.update(parseInt(countNumber))
              }, 100)
              
              $this.data('odometer-initialized', true)
            } catch (e) {
              $this.html(countNumber)
              $this.data('odometer-initialized', true)
            }
          } else if (countNumber) {
            $this.html(countNumber)
            $this.data('odometer-initialized', true)
          }
        })
      }

      // Search toggle
      $('.rs-header-search-icon').on('click', function (event) {
        $('.rs-stickys-form').slideToggle('show')
        $(this).toggleClass('icon-close')
      })

      // Tooltip
      document.addEventListener('DOMContentLoaded', function () {
        const tooltipTriggers = document.querySelectorAll('.rs-portfolio-tooltip .rs-portfolio-tooltip-item')
        tooltipTriggers.forEach(function (element) {
          element.addEventListener('mousemove', function (e) {
            const x = e.clientX
            const y = e.clientY
            const tooltipTrigger = e.currentTarget
            const tooltip = tooltipTrigger.querySelector('.rs-portfolio-tooltip .rs-portfolio-tooltip-content')
            if (!tooltip) return
            const triggerRect = tooltipTrigger.getBoundingClientRect()
            const tooltipRect = tooltip.getBoundingClientRect()
            const triggerWidth = triggerRect.width
            const triggerHeight = triggerRect.height
            const tooltipWidth = tooltipRect.width
            const tooltipHeight = tooltipRect.height
            const buffer = 200
            const maxX = triggerWidth - tooltipWidth + buffer
            const maxY = triggerHeight - tooltipHeight + buffer
            const left = Math.min(Math.max(x - triggerRect.left - tooltipWidth / 2, -buffer), maxX)
            const top = Math.min(Math.max(y - triggerRect.top - tooltipHeight / 2, -buffer), maxY)
            tooltip.style.left = left + 'px'
            tooltip.style.top = top + 'px'
          })
        })
      })

      // Circle text slide
      if ($('.rs-text-circle').length) {
        $('.rs-text-circle').each(function () {
          const sentence = $(this).text().replace(/\s+/g, ' ').trim()
          let wrappedSentence = ''
          for (let i = 0; i < sentence.length; i++) {
            wrappedSentence += '<span>' + sentence[i] + '</span>'
          }
          $(this).html(wrappedSentence)

          const rotateDegree = parseInt($(this).data('rotate-degree'), 10) || 20
          $(this).find('span').each(function (index) {
            $(this).css('transform', 'rotate(' + ((index + 1) * rotateDegree) + 'deg)')
          })
        })
      }

      // Swiper Dynamic Slider Active
      if (typeof window !== 'undefined' && window.Swiper) {
        $('.rs-swiper .swiper').each(function (index) {
          const $swiper = $(this)
          if (this.swiper) return // Already initialized

          const hoverAutoplay = $swiper.data('hover-pause') === undefined ? true : $swiper.data('hover-pause')
          const loop = $(this).data('loop') === undefined ? true : $(this).data('loop')
          const centeredSlides = $(this).data('center-mode') === undefined ? false : $(this).data('center-mode')
          const autoplay = $(this).data('autoplay') === undefined ? true : $(this).data('autoplay')
          const dynamicBullets = $(this).data('dots-dynamic') === undefined ? true : $(this).data('dots-dynamic')
          const direction = $(this).data('direction') === 'vertical' ? 'vertical' : 'horizontal'
          const effect = $(this).data('effect') || 'slide'
          const grabCursor = $(this).data('grab-cursor') === undefined ? false : $(this).data('grab-cursor')
          const slidesPerView = $(this).data('item') || 1
          const speed = $(this).data('speed') || 500
          const gap = $(this).data('no-gap') === true ? 0 : 30
          const margin = $(this).data('margin') ? $(this).data('margin') : gap

          // Breakpoints
          const slidesPerViewXl = $(this).data('item-xl')
          const slidesPerViewLg = $(this).data('item-lg')
          const slidesPerViewMd = $(this).data('item-md')
          const slidesPerViewSm = $(this).data('item-sm')
          const slidesPerViewXs = $(this).data('item-xs')
          const slidesPerViewMobile = $(this).data('item-mobile')
          const marginXl = $(this).data('margin-xl') ? $(this).data('margin-xl') : margin
          const marginLg = $(this).data('margin-lg') ? $(this).data('margin-lg') : marginXl
          const marginMd = $(this).data('margin-md') ? $(this).data('margin-md') : marginLg
          const marginSm = $(this).data('margin-sm') ? $(this).data('margin-sm') : marginMd
          const marginXs = $(this).data('margin-xs') ? $(this).data('margin-xs') : marginSm
          const marginMobile = $(this).data('margin-mobile') ? $(this).data('margin-mobile') : marginXs

          // Controls unique classes based on the index
          const rsNavPrev = `rs-nav-prev-${index}`
          const rsNavNext = `rs-nav-next-${index}`
          $swiper.closest('.rs-swiper').find('.swiper-button-prev').addClass(rsNavPrev)
          $swiper.closest('.rs-swiper').find('.swiper-button-next').addClass(rsNavNext)

          const rsPagination = `rs-pagination-${index}`
          $swiper.closest('.rs-swiper').find('.swiper-pagination').addClass(rsPagination)

          const swiper = new window.Swiper(this, {
            loop: loop,
            autoplay: autoplay ? { delay: $(this).data('delay') || 3000 } : false,
            direction: direction,
            effect: effect,
            grabCursor: grabCursor,
            centeredSlides: centeredSlides,
            slidesPerView: slidesPerView,
            spaceBetween: margin,
            speed: speed,
            pagination: {
              el: `.${rsPagination}`,
              dynamicBullets: dynamicBullets,
              clickable: true,
            },
            navigation: {
              nextEl: `.${rsNavPrev}`,
              prevEl: `.${rsNavNext}`,
            },
            breakpoints: {
              10: {
                slidesPerView: slidesPerViewMobile ? slidesPerViewMobile : 1,
                spaceBetween: marginMobile,
              },
              481: {
                slidesPerView: slidesPerViewXs ? slidesPerViewXs : 1,
                spaceBetween: marginXs,
              },
              576: {
                slidesPerView: slidesPerViewSm ? slidesPerViewSm : 1,
                spaceBetween: marginSm,
              },
              768: {
                slidesPerView: slidesPerViewMd ? slidesPerViewMd : 1,
                spaceBetween: marginMd,
              },
              992: {
                slidesPerView: slidesPerViewLg ? slidesPerViewLg : 1,
                spaceBetween: marginLg,
              },
              1025: {
                slidesPerView: slidesPerViewXl ? slidesPerViewXl : 1,
                spaceBetween: marginXl,
              },
              1201: {
                slidesPerView: slidesPerView,
                spaceBetween: margin,
              }
            }
          })

          if (hoverAutoplay) {
            $swiper.on('mouseenter', function () {
              if (swiper.autoplay) swiper.autoplay.stop()
            }).on('mouseleave', function () {
              if (swiper.autoplay) swiper.autoplay.start()
            })
          }
        })

        // Marquee slide
        if ($('.rs-marquee-slide').length && !$('.rs-marquee-slide')[0].swiper) {
          new window.Swiper('.rs-marquee-slide', {
            spaceBetween: 0,
            centeredSlides: true,
            speed: 10000,
            autoplay: {
              delay: 1,
            },
            loop: true,
            slidesPerView: 'auto',
            allowTouchMove: false,
            disableOnInteraction: true
          })
        }

        // Text slide
        if ($('.text-slide-one').length && !$('.text-slide-one')[0].swiper) {
          new window.Swiper('.text-slide-one', {
            loop: true,
            freemode: true,
            slidesPerView: 4,
            spaceBetween: 0,
            allowTouchMove: false,
            speed: 10000,
            autoplay: {
              delay: 1,
              disableOnInteraction: true,
            },
          })
        }
      }

      // Back to top button
      const progressPath = document.querySelector('.backtotop-wrap path')
      if (progressPath) {
        const pathLength = progressPath.getTotalLength()
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none'
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength
        progressPath.style.strokeDashoffset = pathLength
        progressPath.getBoundingClientRect()
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear'
        const updateProgress = function () {
          const scroll = $(window).scrollTop()
          const height = $(document).height() - $(window).height()
          const progress = pathLength - (scroll * pathLength) / height
          progressPath.style.strokeDashoffset = progress
        }
        updateProgress()
        $(window).scroll(updateProgress)
        const offset = 150
        const duration = 550
        $(window).on('scroll', function () {
          if ($(this).scrollTop() > offset) {
            $('.backtotop-wrap').addClass('active-progress')
          } else {
            $('.backtotop-wrap').removeClass('active-progress')
          }
        })
        $('.backtotop-wrap').on('click', function (event) {
          event.preventDefault()
          $('html, body').animate({
            scrollTop: 0
          }, parseInt(duration, 10))
          return false
        })
      }

      // Sticky header
      const stickyHeader = $('#rs-sticky-header')
      if (stickyHeader.length) {
        $(window).on('scroll', function () {
          if ($(this).scrollTop() > 200) {
            stickyHeader.addClass('active')
          } else {
            stickyHeader.removeClass('active')
          }
        })
      }

      // Mobile Menu Js
      if ($.fn.meanmenu) {
        $('#mobile-menu').meanmenu({
          meanMenuContainer: '.mobile-menu',
          meanScreenWidth: '1199',
          meanExpand: ['<i className="fa-regular fa-plus"></i>'],
        })

        $('#mobile-menu-two').meanmenu({
          meanMenuContainer: '.mobile-menu',
          meanScreenWidth: '1199',
          meanExpand: ['<i className="fa-regular fa-plus"></i>'],
        })
      }

      // Smooth Scrolling (Lenis)
      if ($('.rs-smoother-yes').length && typeof window !== 'undefined' && window.Lenis) {
        const lenis = new window.Lenis({
          smoothWheel: true,
          wheelMultiplier: 1.2,
          duration: 1.5,
          lerp: 0.1,
        })
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // Handle scroll animation for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((el) => {
          el.addEventListener('click', (e) => {
            e.preventDefault()
            const id = el.getAttribute('href')?.slice(1)
            if (!id) return
            const target = document.getElementById(id)
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' })
            }
          })
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

      // Mobile marquee fallback - duplicate content for seamless loop
      const initMobileMarquee = () => {
        const isMobile = window.innerWidth <= 991
        const marqueeElements = document.querySelectorAll('.rs-text-slide-two .gsap-marquee .rs-text-slide-inner')
        
        marqueeElements.forEach((inner) => {
          // Check if already duplicated
          if (inner.dataset.mobileDuplicated === 'true') return
          
          if (isMobile) {
            // Clone all items for seamless loop
            const items = inner.querySelectorAll('.rs-text-slide-item')
            items.forEach((item) => {
              const clone = item.cloneNode(true)
              inner.appendChild(clone)
            })
            inner.dataset.mobileDuplicated = 'true'
          }
        })
      }

      // Initialize on load and resize
      if (window.innerWidth <= 991) {
        setTimeout(initMobileMarquee, 500)
      }
      window.addEventListener('resize', () => {
        setTimeout(initMobileMarquee, 100)
      })

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

        {/* banner area start */}
        <section className="rs-banner-area rs-banner-six p-relative rs-swiper">
            <div className="rs-banner-slider-wrapper">
                <div className="swiper" data-clone-slides="false" data-loop="true" data-speed="2000" data-autoplay="true"
                    data-dots-dynamic="false" data-hover-pause="true" data-effect="fade" data-delay="1000" data-item="1"
                    data-item-xl="1" data-item-lg="1" data-item-md="1" data-item-sm="1" data-item-xs="1"
                    data-item-mobile="1" data-margin="30" data-margin-xl="30" data-margin-lg="30" data-margin-md="30"
                    data-margin-sm="30" data-margin-xs="30" data-margin-mobile="30">
                    <div className="swiper-wrapper">
                        {/* SLIDE 1 — Legacy & Trust (FOUNDATION SLIDE) */}
                        <div className="swiper-slide">
                            <div className="rs-banner-item-wrapper">
                                <div className="rs-banner-bg-thumb" data-background="/assets/images/Main-images/Hero/1.jpg">
                                </div>
                                <div className="container-fluid">
                                    <div className="row g-5">
                                        <div className="col-xl-7 col-lg-7">
                                            <div className="rs-banner-item">
                                                <div className="rs-banner-content">
                                                    <span className="rs-banner-subtitle">
                                                        <img src="/assets/images/shape/border-line.png" alt="image" />
                                                        Welcome to Western Bearing, a trusted bearing manufacturer since 1985.
                                                    </span>
                                                    <h1 className="rs-banner-title">Innovate <br />
                                                        <img className="rs-banner-shape"
                                                            src="/assets/images/shape/arrow-shape.png" alt="image" />
                                                        <span className="rs-banner-stroke-text">Precision</span>
                                                    </h1>
                                                    <div className="rs-banner-info">
                                                        <div className="rs-banner-btn">
                                                            <div className="rs-rotate-btn">
                                                                <a href="/contact"
                                                                    className="rs-play-btn popup-video has-transparent-btn"><i
                                                                        className="fa-light fa-arrow-right-long"></i></a>
                                                                <div
                                                                    className="rs-circle-title gsap-rotate rs-text-circle-wrapper">
                                                                    <div className="rs-text-circle"
                                                                        data-rotate-degree="13.33">
                                                                        Explore More - Explore More -
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rs-banner-descrip">
                                                            <p>Delivering quality, performance, and reliability trusted by industries worldwide.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SLIDE 2 — Manufacturing & Quality (STRENGTH SLIDE) */}
                        <div className="swiper-slide">
                            <div className="rs-banner-item-wrapper">
                                <div className="rs-banner-bg-thumb" data-background="/assets/images/Main-images/Hero/2.jpg">
                                </div>
                                <div className="container-fluid">
                                    <div className="row g-5">
                                        <div className="col-xl-7 col-lg-7">
                                            <div className="rs-banner-item">
                                                <div className="rs-banner-content">
                                                    <span className="rs-banner-subtitle">
                                                        <img src="/assets/images/shape/border-line.png" alt="image" />
                                                        ISO 9001:2015 certified manufacturer with in-house CNC grinding,
                                                    </span>
                                                    <h1 className="rs-banner-title">Engineering <br />
                                                        <img className="rs-banner-shape"
                                                            src="/assets/images/shape/arrow-shape.png" alt="image" />
                                                        <span className="rs-banner-stroke-text">Excellence</span>
                                                    </h1>
                                                    <div className="rs-banner-info">
                                                        <div className="rs-banner-btn">
                                                            <div className="rs-rotate-btn">
                                                                <a href="https://www.youtube.com/watch?v=Yue48fUXuqI"
                                                                    className="rs-play-btn popup-video has-transparent-btn"><i
                                                                        className="fa-light fa-arrow-right-long"></i></a>
                                                                <div
                                                                    className="rs_circle_title gsap-rotate rs-text-circle-wrapper">
                                                                    <div className="rs-text-circle"
                                                                        data-rotate-degree="13.33">
                                                                        Explore More - Explore More -
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rs-banner-descrip">
                                                            <p>OEM-standard testing, and premium-grade steel for long-lasting performance.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SLIDE 3 — Global Reach & Vision (GROWTH SLIDE) */}
                        <div className="swiper-slide">
                            <div className="rs-banner-item-wrapper">
                                <div className="rs-banner-bg-thumb" data-background="/assets/images/Main-images/Hero/3.jpg">
                    </div>
                                <div className="container-fluid">
                                    <div className="row g-5">
                                        <div className="col-xl-7 col-lg-7">
                                            <div className="rs-banner-item">
                                                <div className="rs-banner-content">
                                                    <span className="rs-banner-subtitle">
                                                        <img src="/assets/images/shape/border-line.png" alt="image" />
                                                        Exporting to 30+ countries with a strong global presence,
                                                    </span>
                                                    <h1 className="rs-banner-title">Driven by <br />
                                                        <img className="rs-banner-shape"
                                                            src="/assets/images/shape/arrow-shape.png" alt="image" />
                                                        <span className="rs-banner-stroke-text">Reliability</span>
                                                    </h1>
                                                    <div className="rs-banner-info">
                                                        <div className="rs-banner-btn">
                                                            <div className="rs-rotate-btn">
                                                                <a href="/contact"
                                                                    className="rs-play-btn popup-video has-transparent-btn"><i
                                                                        className="fa-light fa-arrow-right-long"></i></a>
                                                                <div
                                                                    className="rs-circle-title gsap-rotate rs-text-circle-wrapper">
                                                                    <div className="rs-text-circle"
                                                                        data-rotate-degree="13.33">
                                                                        Explore More - Explore More -
                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="rs-banner-descrip">
                                                            <p>Western Bearing stands for trust, innovation, and future-ready growth.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* If we need navigation buttons */}
                    <div className="rs-banner-navigation">
                        <button className="swiper-button-prev rs-swiper-btn has-theme-light-blue"><i
                                className="fa-regular fa-arrow-left"></i></button>
                        <button className="swiper-button-next rs-swiper-btn has-theme-light-blue"><i
                                className="fa-regular fa-arrow-right"></i></button>
                    </div>
                    {/* if we need pagination */}
                    <div className="rs-banner-pagination d-block d-sm-none">
                        <div className="swiper-pagination rs-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
        {/* banner area end */}

        {/* feature area start */}
        <section className="rs-feature-area rs-feature-five section-space">
            <div className="container has-large">
                <div className="row g-5">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="rs-feature-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                            <div className="rs-feature-bg-thumb" data-background="/assets/images/Main-images/manufacturing-capablity.png">
                            </div>
                            <div className="rs-feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"
                                    fill="none">
                                    <path
                                        d="M25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50ZM25 47.9167C37.6565 47.9167 47.9167 37.6565 47.9167 25C47.9167 12.3435 37.6565 2.08333 25 2.08333C12.3435 2.08333 2.08333 12.3435 2.08333 25C2.08333 37.6565 12.3435 47.9167 25 47.9167Z"
                                        fill="white"></path>
                                    <path
                                        d="M44.5815 35.5139L46.2407 37.129L47.6938 35.6361L45.6161 33.6136C45.3561 33.3605 44.9831 33.261 44.6316 33.3508L39.5617 34.6467C38.8858 34.8195 38.5674 35.5949 38.927 36.1928L42.3769 41.9296L44.1623 40.8559L41.4337 36.3186L44.5815 35.5139Z"
                                        fill="white"></path>
                                    <path
                                        d="M23.9358 16.9333C23.1864 17.0222 22.5456 17.1803 22.0278 17.441C20.4149 18.2533 19.8374 19.1321 20.0384 20.6227C20.1605 21.5282 20.8651 22.0868 21.9639 22.5739C21.8849 22.675 21.8055 22.7805 21.726 22.8902C21.3316 23.4349 21.0002 24.0092 20.7533 24.6107C20.1657 26.0421 20.0525 26.3928 20.0775 27.0743C20.1013 27.7211 20.3328 28.3074 20.8292 29.1159C21.3483 29.9614 22.0399 30.4124 22.9855 30.6951C23.1485 30.7439 23.2098 30.7599 23.5553 30.8471C24.0281 30.9665 24.2018 31.0345 24.2929 31.119C24.3908 31.2097 24.8068 32.1044 25.269 33.3264C25.3819 33.6249 25.4989 33.9436 25.6191 34.28C25.9005 35.067 26.1868 35.9123 26.4626 36.758C26.628 37.2654 26.7529 37.6594 26.8222 37.8827C27.0713 38.6854 28.1194 38.8778 28.6374 38.216C28.7844 38.0282 29.0383 37.6969 29.3636 37.2604C29.9053 36.5334 30.4472 35.7785 30.9543 35.0329C31.1699 34.716 31.375 34.4068 31.5681 34.1068C32.2683 33.0192 32.7895 32.0894 33.0928 31.342C33.3573 30.6901 33.5543 29.9358 33.6958 29.0965C33.7962 28.5005 33.8649 27.897 33.9083 27.308C34.0599 27.4025 34.2124 27.4851 34.366 27.5547C34.8243 27.7623 35.2847 27.8505 35.7466 27.7708C36.3728 27.6628 36.7377 27.409 37.2995 26.8652C37.7209 26.4579 37.704 26.4642 37.9714 26.5844C38.1443 26.6621 38.3061 26.9385 38.4921 27.5726C38.5253 27.686 38.5582 27.8047 38.6263 28.0523C39.0507 29.5783 39.5318 30.2984 40.8625 30.0723C42.0173 29.8761 42.6096 28.9894 43.3215 27.2239C43.4003 27.0284 43.6451 26.4002 43.6671 26.3449C43.7516 26.1318 43.8202 25.967 43.8811 25.8331C43.966 25.8866 44.0798 25.9593 44.2366 26.0595C45.2196 26.6876 45.888 26.9381 46.762 26.7122C46.8865 26.68 47.0086 26.6369 47.1277 26.5828C47.9254 26.2209 48.4975 25.5026 48.9327 24.5516C49.2585 23.8396 49.4479 23.1453 49.5364 22.655L49.7214 21.6299L47.6712 21.2599L47.4862 22.285C47.4259 22.6187 47.2781 23.1606 47.0383 23.6847C46.7924 24.2221 46.5115 24.5747 46.2668 24.6857C46.1223 24.7257 45.8712 24.6316 45.3583 24.3039C44.5864 23.8107 44.6089 23.8243 44.2981 23.7073C43.6333 23.4573 42.9502 23.5584 42.4682 24.1446C42.3297 24.313 42.2094 24.5107 42.0895 24.7502C41.9778 24.9735 41.8701 25.2248 41.7305 25.5769C41.7044 25.6426 41.4626 26.2629 41.3893 26.4447C41.1235 27.1039 40.8877 27.5524 40.7222 27.7971C40.6958 27.7128 40.6664 27.6126 40.6334 27.494C40.5674 27.2538 40.5296 27.1172 40.4912 26.9864C40.1465 25.8107 39.7233 25.0878 38.8256 24.6842C37.6147 24.1399 36.8186 24.4329 35.9154 25.3055C35.5759 25.6341 35.4764 25.7033 35.3924 25.7178C35.3935 25.7176 35.3347 25.7064 35.2258 25.657C35.0085 25.5586 34.7379 25.3657 34.4508 25.1075C34.1347 24.8231 33.8731 24.5338 33.7304 24.3554C33.1015 23.5696 31.8344 24.044 31.8763 25.0497C31.8771 25.0672 31.8771 25.0672 31.8802 25.182C31.9043 26.2435 31.8466 27.5333 31.6414 28.7501C31.5233 29.4507 31.3634 30.0631 31.1623 30.5586C30.9184 31.1598 30.4522 31.9914 29.8164 32.9791C29.6332 33.2636 29.4377 33.5583 29.2317 33.8612C28.8973 34.3529 28.5459 34.8506 28.189 35.3416C27.9879 34.7394 27.7835 34.1453 27.5808 33.5785C27.4565 33.2308 27.3352 32.9002 27.2176 32.5893C26.5994 30.9549 26.1592 30.0081 25.709 29.5909C25.275 29.1888 24.8718 29.0308 24.0653 28.8272C23.7554 28.7489 23.7039 28.7355 23.5822 28.6991C23.0865 28.5509 22.8204 28.3773 22.6046 28.0259C22.2791 27.4957 22.1673 27.2127 22.1595 26.9979C22.1503 26.7474 22.2314 26.4959 22.6805 25.4018C22.8603 24.9639 23.1103 24.5306 23.4134 24.1121C23.8243 23.5447 24.2347 23.1227 24.487 22.9077C25.1322 22.358 24.8857 21.3089 24.0632 21.104C23.7714 21.0313 23.3061 20.8865 22.8545 20.6897C22.3742 20.4805 22.092 20.2624 22.103 20.3442C22.0329 19.8242 22.085 19.7448 22.9649 19.3017C23.2271 19.1697 23.6516 19.0649 24.1812 19.0021C24.7896 18.9299 25.4515 18.9188 26.0474 18.944C26.1478 18.9482 26.2216 18.9526 26.2504 18.9547C26.9056 19.0025 27.4409 18.4392 27.3598 17.7872C27.3591 17.7835 27.3546 17.7372 27.3503 17.6751C27.2969 16.9009 27.3846 15.9739 27.7179 15.1187C27.9178 14.6057 28.1946 14.161 28.5569 13.7956C29.2976 13.0484 30.0839 12.6154 31.5712 12.0349C31.7546 11.9636 31.7546 11.9636 31.9406 11.8918C33.2461 11.3872 33.8631 11.1092 34.5883 10.6363C35.1113 10.2953 35.7277 9.84412 36.4219 9.3012C36.6015 9.1607 36.7854 9.01479 36.973 8.86396C37.6191 8.34468 38.2824 7.7897 38.9273 7.23489C39.3144 6.90191 39.6101 6.64229 39.7782 6.49234L40.5557 5.79909L39.1692 4.24414L38.3917 4.9374C38.2322 5.0796 37.9456 5.33123 37.5686 5.65557C36.9401 6.19631 36.294 6.73688 35.6679 7.2401C35.4872 7.38531 35.3105 7.52552 35.1384 7.66016C34.4873 8.16942 33.9156 8.58785 33.4504 8.89119C32.8855 9.25952 32.3625 9.4952 31.1896 9.94849C31.0031 10.0205 31.0031 10.0205 30.8137 10.0942C29.0769 10.7721 28.0723 11.3252 27.0773 12.3289C26.5036 12.9076 26.0758 13.595 25.7768 14.3622C25.4505 15.1994 25.2972 16.0508 25.2606 16.8497C24.8224 16.8557 24.374 16.8813 23.9358 16.9333Z"
                                        fill="white"></path>
                                    <path
                                        d="M9.93816 36.0687C9.93816 33.6367 9.43954 32.436 8.15151 31.2393C8.01208 31.1097 7.44249 30.606 7.29839 30.4729C6.96823 30.1679 6.69401 29.8849 6.42323 29.5595C6.24682 29.3475 6.06496 29.1405 5.87812 28.9386C5.09718 28.0945 4.26227 27.3703 3.42587 26.7638C2.91796 26.3956 2.51523 26.1445 2.2694 26.0099L1.35562 25.5099L0.355469 27.3374L1.26925 27.8375C1.44144 27.9317 1.77026 28.1367 2.2029 28.4505C2.93411 28.9806 3.66679 29.6162 4.34893 30.3534C4.51127 30.5289 4.66903 30.7084 4.82181 30.892C5.15586 31.2935 5.49194 31.6404 5.88472 32.0032C6.05178 32.1575 6.61837 32.6586 6.73343 32.7655C7.58722 33.5588 7.85483 34.2032 7.85483 36.0687C7.85483 40.4456 8.82879 44.0101 10.7128 45.4065C11.8545 46.2526 12.8108 45.4869 13.7175 43.9797C14.2896 43.0285 14.9058 41.6448 15.5148 39.9933C16.6443 36.9301 17.5763 33.415 17.5763 32.1234C17.5763 30.3226 16.0444 29.5671 13.068 28.9449C12.6243 28.8521 11.2219 28.5882 11.0623 28.5561C10.3879 28.4204 9.98046 28.2987 9.95185 28.2755C9.13439 27.6143 8.78469 26.7965 8.78469 25.0919C8.78469 24.6922 9.19225 24.0179 10.0315 23.1079C10.3219 22.793 10.6412 22.4704 11.1024 22.0201C13.2979 19.8767 13.6197 19.5258 13.9285 18.6203C14.219 17.7684 14.0909 16.9058 13.6627 15.5268C13.6004 15.3279 13.6004 15.3279 13.5382 15.134C13.0948 13.7535 13.0637 13.3969 12.9985 13.4233C12.9938 13.4252 13.0318 13.4548 13.4019 14.0468C13.4824 14.1761 13.4824 14.1761 13.5679 14.3143C14.4232 15.6913 15.0758 16.2988 16.3258 16.1862C17.7891 16.0544 18.5625 15.355 19.8204 13.6144L19.8968 13.5086C20.2673 12.9961 20.4608 12.7464 20.6809 12.5117C22.3437 10.738 23.3681 8.40417 22.4995 6.89418C21.7197 5.53865 18.1426 4.3457 16.2324 4.3457C15.3621 4.3457 14.8236 4.70767 14.2262 5.42658C14.189 5.47136 14.0239 5.67386 13.9805 5.72568C13.6951 6.06694 13.5089 6.21429 13.2413 6.2945C12.9788 6.37322 12.6265 6.42016 12.2113 6.43293C11.7189 6.44807 11.1779 6.41531 10.6416 6.35099C10.3743 6.31894 10.1727 6.28741 10.0671 6.26792L9.04269 6.07893L8.66471 8.12769L9.68909 8.31668C9.83536 8.34366 10.0794 8.38184 10.3935 8.4195C11.0253 8.49526 11.6655 8.53403 12.2753 8.51528C12.8572 8.49738 13.3809 8.4276 13.8396 8.29009C14.5715 8.07066 15.0555 7.68768 15.5786 7.0623C15.6325 6.99776 15.8004 6.79183 15.8284 6.75814C16.0685 6.4692 16.1283 6.42904 16.2324 6.42904C17.4706 6.42904 20.3882 7.40204 20.6936 7.93302C20.9377 8.3572 20.2488 9.92643 19.161 11.0868C18.8614 11.4064 18.6295 11.7056 18.2084 12.2882L18.1319 12.3941C17.2202 13.6556 16.7802 14.0535 16.139 14.1113C15.9853 14.1251 15.7898 13.9431 15.3377 13.2151C15.255 13.0816 15.255 13.0816 15.1684 12.9423C14.3023 11.5572 13.5341 10.9588 12.2166 11.4923C10.6082 12.1435 10.6897 13.078 11.5547 15.7711C11.6151 15.9597 11.6151 15.9597 11.6731 16.1446C11.971 17.1039 12.054 17.6626 11.9567 17.9478C11.8129 18.3696 11.4148 18.8035 9.64701 20.5294C9.16192 21.003 8.82045 21.3481 8.50005 21.6955C7.32462 22.97 6.70135 24.0012 6.70135 25.0919C6.70135 27.3968 7.30865 28.817 8.6416 29.8953C9.04638 30.2227 9.58822 30.3845 10.6513 30.5985C10.8313 30.6347 12.2233 30.8966 12.6417 30.9841C14.5566 31.3844 15.493 31.8462 15.493 32.1234C15.493 33.0922 14.6073 36.4325 13.5601 39.2725C12.9925 40.8119 12.4244 42.0877 11.9322 42.9058C11.8121 43.1056 11.7001 43.2713 11.602 43.3991C10.6023 42.2297 9.93816 39.4551 9.93816 36.0687Z"
                                        fill="white"></path>
                                    <path
                                        d="M28.125 29.166C29.8509 29.166 31.25 27.7669 31.25 26.041C31.25 24.3151 29.8509 22.916 28.125 22.916C26.3991 22.916 25 24.3151 25 26.041C25 27.7669 26.3991 29.166 28.125 29.166Z"
                                        fill="white"></path>
                                    <path
                                        d="M15.625 41.666C17.3509 41.666 18.75 40.2669 18.75 38.541C18.75 36.8151 17.3509 35.416 15.625 35.416C13.8991 35.416 12.5 36.8151 12.5 38.541C12.5 40.2669 13.8991 41.666 15.625 41.666Z"
                                        fill="white"></path>
                                    <path
                                        d="M36.457 16.666C38.1829 16.666 39.582 15.2669 39.582 13.541C39.582 11.8151 38.1829 10.416 36.457 10.416C34.7311 10.416 33.332 11.8151 33.332 13.541C33.332 15.2669 34.7311 16.666 36.457 16.666Z"
                                        fill="white"></path>
                                    <path
                                        d="M38.543 39.584C40.2689 39.584 41.668 38.1849 41.668 36.459C41.668 34.7331 40.2689 33.334 38.543 33.334C36.8171 33.334 35.418 34.7331 35.418 36.459C35.418 38.1849 36.8171 39.584 38.543 39.584Z"
                                        fill="white"></path>
                                    <path
                                        d="M7.29297 20.834C9.01886 20.834 10.418 19.4349 10.418 17.709C10.418 15.9831 9.01886 14.584 7.29297 14.584C5.56708 14.584 4.16797 15.9831 4.16797 17.709C4.16797 19.4349 5.56708 20.834 7.29297 20.834Z"
                                        fill="white"></path>
                                </svg>
                            </div>
                            <h5 className="rs-feature-title">Manufacuring Capabilities
                            </h5>
                            <div className="rs-feature-descrip">
                                <p style={{ 
                                    display: isMobile ? 'block' : (expandedCards.card1 ? 'block' : '-webkit-box'),
                                    WebkitLineClamp: isMobile ? 'none' : (expandedCards.card1 ? 'none' : '4'),
                                    WebkitBoxOrient: isMobile ? 'initial' : 'vertical',
                                    overflow: isMobile ? 'visible' : (expandedCards.card1 ? 'visible' : 'hidden'),
                                    textOverflow: isMobile ? 'clip' : 'ellipsis',
                                    lineHeight: '1.6'
                                }}>Western Bearings has an annual production capacity of 2.4 million bearings, supported by over 100 skilled and semi-skilled employees and advanced CNC and grinding machines from leading global brands. With complete in-house manufacturing facilities, we produce bearings ranging from 30 mm to 120 mm inner bore diameter, ensuring high precision and consistent quality through strict dimensional control using Mitutoyo (Japan) dial gauges.</p>
                                {!isMobile && (
                                    <button 
                                        onClick={() => setExpandedCards(prev => ({ ...prev, card1: !prev.card1 }))}
                                        style={{
                                            marginTop: '15px',
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#007bff',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            padding: '0',
                                            alignSelf: 'flex-start',
                                            flexShrink: 0
                                        }}
                                    >
                                        {expandedCards.card1 ? 'Read Less' : 'Read More'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="rs-feature-item wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                            <div className="rs-feature-bg-thumb" data-background="/assets/images/Main-images/Quality-Standards.png">
                            </div>
                            <div className="rs-feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="55" viewBox="0 0 40 55"
                                    fill="none">
                                    <path
                                        d="M11.9206 54.3715C11.6594 54.3717 11.403 54.3004 11.1794 54.1654C10.9557 54.0303 10.7733 53.8367 10.6518 53.6054L8.55811 49.617L4.27048 50.9875C4.0089 51.0716 3.72866 51.0786 3.46321 51.0077C3.19775 50.9369 2.95828 50.7912 2.77335 50.588C2.58842 50.3848 2.46585 50.1327 2.42025 49.8618C2.37465 49.5908 2.40796 49.3125 2.51618 49.06L8.62685 34.7492C8.77593 34.3998 9.05771 34.1239 9.4102 33.9822C9.76269 33.8406 10.157 33.8447 10.5065 33.9938C10.8559 34.1429 11.1318 34.4247 11.2734 34.7771C11.4151 35.1296 11.4109 35.524 11.2619 35.8734L6.37993 47.3057L8.83021 46.5238C9.15112 46.4207 9.4981 46.4341 9.81008 46.5617C10.1221 46.6893 10.379 46.9228 10.5358 47.2212L11.7846 49.5998L17.0231 37.284C17.0932 37.106 17.1982 36.9438 17.332 36.8071C17.4658 36.6704 17.6256 36.5618 17.802 36.4879C17.9784 36.4139 18.1679 36.3761 18.3592 36.3765C18.5505 36.377 18.7397 36.4158 18.9158 36.4906C19.0918 36.5654 19.2511 36.6748 19.3842 36.8122C19.5173 36.9496 19.6216 37.1122 19.6907 37.2906C19.7599 37.4689 19.7927 37.6593 19.7871 37.8505C19.7815 38.0417 19.7377 38.2299 19.6581 38.4039L13.2367 53.4994C13.1308 53.7485 12.9565 53.9625 12.734 54.1167C12.5115 54.2708 12.2498 54.3586 11.9793 54.3701L11.9206 54.3715Z"
                                        fill="white"></path>
                                    <path
                                        d="M28.0642 54.3728H28.0055C27.7345 54.3618 27.4723 54.2742 27.2492 54.1201C27.0261 53.9659 26.8513 53.7516 26.7453 53.5021L20.3425 38.4008C20.1939 38.051 20.1905 37.6565 20.3328 37.3042C20.4752 36.9518 20.7516 36.6704 21.1015 36.5219C21.4513 36.3734 21.8457 36.37 22.1981 36.5123C22.5504 36.6546 22.8318 36.9311 22.9803 37.2809L28.206 49.5968L29.4533 47.221C29.61 46.9229 29.8668 46.6896 30.1785 46.5621C30.4901 46.4345 30.8368 46.4209 31.1575 46.5236L33.6049 47.3055L28.7287 35.9047C28.6492 35.731 28.6053 35.5432 28.5996 35.3523C28.5938 35.1613 28.6263 34.9712 28.6951 34.793C28.7639 34.6148 28.8677 34.4522 29.0003 34.3148C29.1329 34.1773 29.2917 34.0677 29.4673 33.9926C29.6429 33.9174 29.8318 33.8781 30.0228 33.877C30.2138 33.8759 30.4031 33.913 30.5795 33.9862C30.7559 34.0593 30.916 34.167 31.0502 34.303C31.1843 34.4389 31.29 34.6003 31.3608 34.7777L37.4658 49.0612C37.5737 49.3135 37.6068 49.5914 37.5613 49.8619C37.5157 50.1325 37.3934 50.3843 37.209 50.5873C37.0245 50.7904 36.7855 50.9361 36.5206 51.0073C36.2556 51.0785 35.9758 51.072 35.7144 50.9888L31.4267 49.6183L29.333 53.6066C29.2115 53.8379 29.0291 54.0316 28.8054 54.1666C28.5818 54.3017 28.3255 54.3729 28.0642 54.3728Z"
                                        fill="white"></path>
                                    <path
                                        d="M19.998 40.0183C19.2196 40.0183 18.4635 39.7583 17.8499 39.2794L15.5657 37.5022C15.4296 37.4024 15.2609 37.3574 15.0931 37.3761L12.229 37.7743C11.4575 37.8844 10.6714 37.7326 9.99633 37.3432C9.32131 36.9537 8.7964 36.3491 8.50558 35.6261L7.42149 32.9496C7.39013 32.8696 7.34304 32.7967 7.28303 32.7352C7.22301 32.6737 7.15128 32.6249 7.07207 32.5916L4.39552 31.5075C3.67312 31.2158 3.06915 30.6908 2.67984 30.016C2.29053 29.3412 2.1383 28.5555 2.2474 27.7841L2.64409 24.9199C2.65614 24.8364 2.65105 24.7513 2.62914 24.6698C2.60722 24.5883 2.56894 24.5121 2.51663 24.4459L0.739425 22.1546C0.260271 21.5411 0 20.7849 0 20.0065C0 19.228 0.260271 18.4719 0.739425 17.8584L2.51377 15.567C2.56601 15.5005 2.60434 15.4241 2.62648 15.3424C2.64862 15.2607 2.65412 15.1754 2.64266 15.0916L2.24597 12.2274C2.13686 11.4561 2.2891 10.6704 2.6784 9.99557C3.06771 9.32077 3.67169 8.7957 4.39408 8.50404L7.07207 7.41853C7.15062 7.38712 7.22197 7.34008 7.2818 7.28026C7.34162 7.22044 7.38866 7.14909 7.42006 7.07053L8.50558 4.39255C8.79682 3.66985 9.32181 3.06557 9.99672 2.6762C10.6716 2.28683 11.4575 2.13482 12.229 2.24443L15.0931 2.64255C15.177 2.65427 15.2623 2.64889 15.344 2.62674C15.4257 2.60459 15.5021 2.56612 15.5686 2.51366L17.8513 0.73789C18.4652 0.259677 19.2212 0 19.9994 0C20.7776 0 21.5336 0.259677 22.1475 0.73789L24.4317 2.5151C24.4983 2.5673 24.5747 2.60551 24.6564 2.62741C24.7381 2.64931 24.8234 2.65446 24.9071 2.64255L27.7713 2.24443C28.5427 2.13533 29.3284 2.28756 30.0032 2.67687C30.678 3.06618 31.203 3.67016 31.4947 4.39255L32.5788 7.07053C32.6109 7.14928 32.6585 7.22078 32.7188 7.28081C32.7791 7.34083 32.8508 7.38814 32.9296 7.41996L35.6062 8.50404C36.3281 8.79633 36.9317 9.32152 37.3209 9.99615C37.7101 10.6708 37.8626 11.4562 37.7543 12.2274L37.3562 15.0916C37.3342 15.2602 37.38 15.4307 37.4836 15.5656L39.2594 17.8569C39.7393 18.4702 40 19.2264 40 20.005C40 20.7837 39.7393 21.5399 39.2594 22.1532L37.4822 24.4373C37.3794 24.5725 37.3341 24.7429 37.3562 24.9113L37.7543 27.7755C37.8626 28.5468 37.7101 29.3322 37.3209 30.0068C36.9317 30.6814 36.3281 31.2066 35.6062 31.4989L32.9225 32.5916C32.8438 32.6237 32.7722 32.6711 32.712 32.7311C32.6517 32.7911 32.604 32.8624 32.5716 32.941L31.489 35.6175C31.1967 36.3395 30.6715 36.943 29.9969 37.3322C29.3222 37.7214 28.5369 37.874 27.7656 37.7657L24.9014 37.3675C24.7323 37.3458 24.5615 37.3916 24.426 37.495L22.1432 39.2708C21.5316 39.7524 20.7765 40.0156 19.998 40.0183ZM15.1733 34.5063C15.9508 34.5076 16.706 34.7659 17.3214 35.2409L19.6128 37.0195C19.7239 37.1055 19.8604 37.1521 20.0009 37.1521C20.1413 37.1521 20.2778 37.1055 20.3889 37.0195L22.6717 35.2423C23.0412 34.9563 23.4641 34.7469 23.9155 34.6261C24.367 34.5054 24.838 34.4759 25.301 34.5392L28.1651 34.9359C28.3049 34.9589 28.4483 34.9329 28.571 34.8621C28.6937 34.7914 28.7881 34.6803 28.8382 34.5478L29.9223 31.8698C30.0992 31.4358 30.3611 31.0415 30.6926 30.7103C31.0241 30.379 31.4186 30.1174 31.8527 29.9408L34.5307 28.8567C34.6611 28.8038 34.7702 28.7089 34.8405 28.5869C34.9108 28.465 34.9384 28.323 34.9188 28.1836L34.5221 25.3195C34.4586 24.8574 34.4879 24.3872 34.6081 23.9365C34.7283 23.4858 34.9372 23.0636 35.2224 22.6945L37.001 20.4032C37.0873 20.2925 37.1342 20.1561 37.1342 20.0158C37.1342 19.8754 37.0873 19.7391 37.001 19.6284L35.2253 17.3371C34.9399 16.9693 34.7306 16.5485 34.6094 16.0991C34.4882 15.6496 34.4575 15.1806 34.5192 14.7193L34.9159 11.8551C34.9355 11.7157 34.9079 11.5738 34.8376 11.4518C34.7673 11.3299 34.6583 11.2349 34.5278 11.182L31.8499 10.0965C31.416 9.92016 31.0218 9.65876 30.6905 9.32772C30.3592 8.99667 30.0975 8.60267 29.9208 8.16893L28.8353 5.49095C28.7835 5.35962 28.6888 5.24967 28.5666 5.17895C28.4444 5.10824 28.3019 5.08092 28.1623 5.10143L25.2981 5.49955C24.8356 5.56298 24.365 5.53346 23.914 5.41272C23.463 5.29198 23.0407 5.08245 22.6717 4.79639L20.3803 3.01919C20.2695 2.93255 20.1329 2.88549 19.9923 2.88549C19.8516 2.88549 19.715 2.93255 19.6042 3.01919L17.3128 4.79496C16.9432 5.0798 16.5208 5.28869 16.07 5.40961C15.6193 5.53053 15.149 5.5611 14.6864 5.49955L11.8223 5.10143C11.6828 5.08247 11.5409 5.11045 11.419 5.18097C11.2972 5.25149 11.2022 5.36054 11.1492 5.49095L10.0637 8.16893C9.88709 8.6025 9.6256 8.99638 9.29457 9.32741C8.96354 9.65844 8.56967 9.91993 8.1361 10.0965L5.45812 11.1806C5.32771 11.2337 5.21865 11.3286 5.14813 11.4504C5.07761 11.5723 5.04963 11.7142 5.06859 11.8537L5.46671 14.7178C5.53002 15.1808 5.50018 15.6517 5.37894 16.103C5.2577 16.5543 5.0475 16.9768 4.7607 17.3457L2.99924 19.6313C2.91261 19.7421 2.86554 19.8787 2.86554 20.0194C2.86554 20.16 2.91261 20.2966 2.99924 20.4075L4.77645 22.6988C5.06229 23.0679 5.2717 23.4903 5.39243 23.9412C5.51316 24.3922 5.54279 24.8627 5.4796 25.3252L5.08148 28.1894C5.06201 28.3289 5.08977 28.471 5.16036 28.593C5.23094 28.7149 5.34029 28.8098 5.47101 28.8624L8.14899 29.948C8.58243 30.1247 8.9762 30.3863 9.3072 30.7173C9.6382 31.0483 9.89977 31.4421 10.0766 31.8755L11.1621 34.5549C11.2153 34.6848 11.3101 34.7934 11.4317 34.8636C11.5532 34.9338 11.6946 34.9618 11.8337 34.943L14.6979 34.5464C14.8553 34.5223 15.0141 34.5089 15.1733 34.5063Z"
                                        fill="white"></path>
                                    <path
                                        d="M19.998 40.0183C19.2196 40.0183 18.4635 39.7583 17.8499 39.2794L15.5657 37.5022C15.4296 37.4024 15.2609 37.3574 15.0931 37.3761L12.229 37.7743C11.4575 37.8844 10.6714 37.7326 9.99633 37.3432C9.32131 36.9537 8.7964 36.3491 8.50558 35.6261L7.42149 32.9496C7.39013 32.8696 7.34304 32.7967 7.28303 32.7352C7.22301 32.6737 7.15128 32.6249 7.07207 32.5916L4.39552 31.5075C3.67312 31.2158 3.06915 30.6908 2.67984 30.016C2.29053 29.3412 2.1383 28.5555 2.2474 27.7841L2.64409 24.9199C2.65614 24.8364 2.65105 24.7513 2.62914 24.6698C2.60722 24.5883 2.56894 24.5121 2.51663 24.4459L0.739425 22.1546C0.260271 21.5411 0 20.7849 0 20.0065C0 19.228 0.260271 18.4719 0.739425 17.8584L2.51377 15.567C2.56601 15.5005 2.60434 15.4241 2.62648 15.3424C2.64862 15.2607 2.65412 15.1754 2.64266 15.0916L2.24597 12.2274C2.13686 11.4561 2.2891 10.6704 2.6784 9.99557C3.06771 9.32077 3.67169 8.7957 4.39408 8.50404L7.07207 7.41853C7.15062 7.38712 7.22197 7.34008 7.2818 7.28026C7.34162 7.22044 7.38866 7.14909 7.42006 7.07053L8.50558 4.39255C8.79682 3.66985 9.32181 3.06557 9.99672 2.6762C10.6716 2.28683 11.4575 2.13482 12.229 2.24443L15.0931 2.64255C15.177 2.65427 15.2623 2.64889 15.344 2.62674C15.4257 2.60459 15.5021 2.56612 15.5686 2.51366L17.8513 0.73789C18.4652 0.259677 19.2212 0 19.9994 0C20.7776 0 21.5336 0.259677 22.1475 0.73789L24.4317 2.5151C24.4983 2.5673 24.5747 2.60551 24.6564 2.62741C24.7381 2.64931 24.8234 2.65446 24.9071 2.64255L27.7713 2.24443C28.5427 2.13533 29.3284 2.28756 30.0032 2.67687C30.678 3.06618 31.203 3.67016 31.4947 4.39255L32.5788 7.07053C32.6109 7.14928 32.6585 7.22078 32.7188 7.28081C32.7791 7.34083 32.8508 7.38814 32.9296 7.41996L35.6062 8.50404C36.3281 8.79633 36.9317 9.32152 37.3209 9.99615C37.7101 10.6708 37.8626 11.4562 37.7543 12.2274L37.3562 15.0916C37.3342 15.2602 37.38 15.4307 37.4836 15.5656L39.2594 17.8569C39.7393 18.4702 40 19.2264 40 20.005C40 20.7837 39.7393 21.5399 39.2594 22.1532L37.4822 24.4373C37.3794 24.5725 37.3341 24.7429 37.3562 24.9113L37.7543 27.7755C37.8626 28.5468 37.7101 29.3322 37.3209 30.0068C36.9317 30.6814 36.3281 31.2066 35.6062 31.4989L32.9225 32.5916C32.8438 32.6237 32.7722 32.6711 32.712 32.7311C32.6517 32.7911 32.604 32.8624 32.5716 32.941L31.489 35.6175C31.1967 36.3395 30.6715 36.943 29.9969 37.3322C29.3222 37.7214 28.5369 37.874 27.7656 37.7657L24.9014 37.3675C24.7323 37.3458 24.5615 37.3916 24.426 37.495L22.1432 39.2708C21.5316 39.7524 20.7765 40.0156 19.998 40.0183ZM15.1733 34.5063C15.9508 34.5076 16.706 34.7659 17.3214 35.2409L19.6128 37.0195C19.7239 37.1055 19.8604 37.1521 20.0009 37.1521C20.1413 37.1521 20.2778 37.1055 20.3889 37.0195L22.6717 35.2423C23.0412 34.9563 23.4641 34.7469 23.9155 34.6261C24.367 34.5054 24.838 34.4759 25.301 34.5392L28.1651 34.9359C28.3049 34.9589 28.4483 34.9329 28.571 34.8621C28.6937 34.7914 28.7881 34.6803 28.8382 34.5478L29.9223 31.8698C30.0992 31.4358 30.3611 31.0415 30.6926 30.7103C31.0241 30.379 31.4186 30.1174 31.8527 29.9408L34.5307 28.8567C34.6611 28.8038 34.7702 28.7089 34.8405 28.5869C34.9108 28.465 34.9384 28.323 34.9188 28.1836L34.5221 25.3195C34.4586 24.8574 34.4879 24.3872 34.6081 23.9365C34.7283 23.4858 34.9372 23.0636 35.2224 22.6945L37.001 20.4032C37.0873 20.2925 37.1342 20.1561 37.1342 20.0158C37.1342 19.8754 37.0873 19.7391 37.001 19.6284L35.2253 17.3371C34.9399 16.9693 34.7306 16.5485 34.6094 16.0991C34.4882 15.6496 34.4575 15.1806 34.5192 14.7193L34.9159 11.8551C34.9355 11.7157 34.9079 11.5738 34.8376 11.4518C34.7673 11.3299 34.6583 11.2349 34.5278 11.182L31.8499 10.0965C31.416 9.92016 31.0218 9.65876 30.6905 9.32772C30.3592 8.99667 30.0975 8.60267 29.9208 8.16893L28.8353 5.49095C28.7835 5.35962 28.6888 5.24967 28.5666 5.17895C28.4444 5.10824 28.3019 5.08092 28.1623 5.10143L25.2981 5.49955C24.8356 5.56298 24.365 5.53346 23.914 5.41272C23.463 5.29198 23.0407 5.08245 22.6717 4.79639L20.3803 3.01919C20.2695 2.93255 20.1329 2.88549 19.9923 2.88549C19.8516 2.88549 19.715 2.93255 19.6042 3.01919L17.3128 4.79496C16.9432 5.0798 16.5208 5.28869 16.07 5.40961C15.6193 5.53053 15.149 5.5611 14.6864 5.49955L11.8223 5.10143C11.6828 5.08247 11.5409 5.11045 11.419 5.18097C11.2972 5.25149 11.2022 5.36054 11.1492 5.49095L10.0637 8.16893C9.88709 8.6025 9.6256 8.99638 9.29457 9.32741C8.96354 9.65844 8.56967 9.91993 8.1361 10.0965L5.45812 11.1806C5.32771 11.2337 5.21865 11.3286 5.14813 11.4504C5.07761 11.5723 5.04963 11.7142 5.06859 11.8537L5.46671 14.7178C5.53002 15.1808 5.50018 15.6517 5.37894 16.103C5.2577 16.5543 5.0475 16.9768 4.7607 17.3457L2.99924 19.6313C2.91261 19.7421 2.86554 19.8787 2.86554 20.0194C2.86554 20.16 2.91261 20.2966 2.99924 20.4075L4.77645 22.6988C5.06229 23.0679 5.2717 23.4903 5.39243 23.9412C5.51316 24.3922 5.54279 24.8627 5.4796 25.3252L5.08148 28.1894C5.06201 28.3289 5.08977 28.471 5.16036 28.593C5.23094 28.7149 5.34029 28.8098 5.47101 28.8624L8.14899 29.948C8.58243 30.1247 8.9762 30.3863 9.3072 30.7173C9.6382 31.0483 9.89977 31.4421 10.0766 31.8755L11.1621 34.5549C11.2153 34.6848 11.3101 34.7934 11.4317 34.8636C11.5532 34.9338 11.6946 34.9618 11.8337 34.943L14.6979 34.5464C14.8553 34.5223 15.0141 34.5089 15.1733 34.5063Z"
                                        fill="white"></path>
                                    <path
                                        d="M14.9175 29.2687C14.709 29.2685 14.5031 29.2229 14.3141 29.1349C14.1251 29.047 13.9576 28.9188 13.8232 28.7594C13.6889 28.5999 13.591 28.4131 13.5364 28.2119C13.4817 28.0107 13.4717 27.8001 13.5069 27.5946L14.349 22.6797L10.7788 19.1983C10.5898 19.0115 10.4566 18.7758 10.3939 18.5176C10.3312 18.2594 10.3417 17.9888 10.424 17.7361C10.5063 17.4835 10.6573 17.2587 10.8601 17.087C11.0629 16.9153 11.3094 16.8034 11.5722 16.7638L16.5071 16.0477L18.7139 11.5768C18.8457 11.3535 19.0335 11.1685 19.2586 11.0399C19.4838 10.9114 19.7385 10.8438 19.9978 10.8438C20.2571 10.8438 20.5118 10.9114 20.737 11.0399C20.9621 11.1685 21.1499 11.3535 21.2817 11.5768L23.4928 16.0391L28.4263 16.7552C28.6909 16.7934 28.9396 16.9049 29.1441 17.0771C29.3486 17.2493 29.5008 17.4753 29.5835 17.7295C29.6663 17.9838 29.6762 18.2561 29.6121 18.5157C29.548 18.7753 29.4126 19.0117 29.2211 19.1983L25.6409 22.6797L26.483 27.5946C26.5279 27.8577 26.4984 28.1282 26.3977 28.3755C26.2971 28.6228 26.1293 28.837 25.9133 28.994C25.6974 29.151 25.4418 29.2444 25.1756 29.2639C24.9093 29.2833 24.6429 29.2279 24.4064 29.104L19.9914 26.784L15.5791 29.104C15.3751 29.2113 15.1481 29.2678 14.9175 29.2687ZM19.9971 23.7337C20.2291 23.7338 20.4576 23.7904 20.663 23.8984L23.1763 25.2202L22.6965 22.4233C22.6572 22.1946 22.6741 21.9597 22.7457 21.7389C22.8173 21.5182 22.9415 21.3181 23.1076 21.156L25.1411 19.1754L22.3328 18.7673C22.103 18.7339 21.8848 18.6451 21.6969 18.5087C21.5091 18.3722 21.3572 18.1921 21.2544 17.9839L19.9971 15.4377L18.7412 17.9839C18.6386 18.1924 18.4868 18.3728 18.2989 18.5095C18.111 18.6462 17.8927 18.7352 17.6628 18.7687L14.8545 19.1768L16.8866 21.1574C17.0527 21.3195 17.1769 21.5196 17.2485 21.7404C17.3201 21.9612 17.3369 22.196 17.2976 22.4248L16.8193 25.2231L19.3297 23.9012C19.5355 23.7927 19.7644 23.7352 19.9971 23.7337Z"
                                        fill="white"></path>
                                </svg>
                            </div>
                            <h5 className="rs-feature-title">Quality Standards & Testing Excellence</h5>
                            <div className="rs-feature-descrip">
                                <p style={{ 
                                    display: isMobile ? 'block' : (expandedCards.card2 ? 'block' : '-webkit-box'),
                                    WebkitLineClamp: isMobile ? 'none' : (expandedCards.card2 ? 'none' : '4'),
                                    WebkitBoxOrient: isMobile ? 'initial' : 'vertical',
                                    overflow: isMobile ? 'visible' : (expandedCards.card2 ? 'visible' : 'hidden'),
                                    textOverflow: isMobile ? 'clip' : 'ellipsis',
                                    lineHeight: '1.6'
                                }}>Western Bearing operates a state-of-the-art in-house testing laboratory equipped with world-class instruments, including Mahr (Germany) roughness testing machine controll RA value 0.010 to 0.025 and Contour testing machines Mahr (Germany) for Bearing profile and hardness testing facilities so every batch controll with quality. As an ISO 9001:2015 and ZED certified manufacturer, we follow international testing standards, provide 2D/3D drawings as per customer requirements
                                </p>
                                {!isMobile && (
                                    <button 
                                        onClick={() => setExpandedCards(prev => ({ ...prev, card2: !prev.card2 }))}
                                        style={{
                                            marginTop: '10px',
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#007bff',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            padding: '0'
                                        }}
                                    >
                                        {expandedCards.card2 ? 'Read Less' : 'Read More'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="rs-feature-item wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                            <div className="rs-feature-bg-thumb" data-background="/assets/images/Main-images/Product-Portfolio.png">
                            </div>
                            <div className="rs-feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="57" viewBox="0 0 50 57"
                                    fill="none">
                                    <path
                                        d="M48.5385 39.3089C48.5359 39.3089 48.5334 39.308 48.5301 39.308L46.8333 39.0476C46.6317 38.3942 46.3713 37.7717 46.0547 37.1871L47.0677 35.8138C47.5784 35.1309 47.5103 34.1632 46.9072 33.5618L45.4642 32.1263C44.8737 31.5039 43.9043 31.4241 43.2105 31.9398L41.8279 32.9579C41.2198 32.6328 40.5949 32.3749 39.9615 32.1851L39.7045 30.4984C39.5861 29.6551 38.8503 29.0193 37.9926 29.0193H35.9448C35.1015 29.0193 34.3808 29.6282 34.2254 30.4951L33.9793 32.1885C33.7088 32.2708 33.4551 32.3623 33.2124 32.4656C33.0923 32.5018 32.9822 32.5454 32.9192 32.5799C32.6504 32.6866 32.3808 32.8117 32.1137 32.9545L30.7303 31.9356C30.0373 31.4325 29.0696 31.5123 28.4901 32.1095L27.0462 33.5542C26.6744 33.9149 26.5049 34.4126 26.5402 34.9019C26.153 34.8502 25.7644 34.814 25.3746 34.792V31.3561C28.2412 29.1645 30.0571 25.3974 30.2539 21.2647H31.3602C32.7874 21.2647 33.949 20.103 33.949 18.6759V17.8031C33.949 16.4311 32.8721 15.3162 31.521 15.2314C31.178 10.3964 27.9129 6.28097 23.2688 4.86426V2.51571C23.2688 1.12892 22.1399 0 20.7531 0H18.8985C17.5117 0 16.3828 1.12892 16.3828 2.51571V4.86426C11.7387 6.28097 8.47356 10.3964 8.13059 15.2314C6.7795 15.3162 5.70255 16.4311 5.70255 17.8031V18.6759C5.70255 20.103 6.86423 21.2647 8.29133 21.2647H9.37983C9.57691 25.4077 11.4164 29.1938 14.2744 31.3655V34.8076C6.33153 35.2509 0 41.8376 0 49.8942V53.1028C0 55.123 1.64382 56.7668 3.66479 56.7668H10.6635C10.6664 56.7668 10.6689 56.7685 10.6718 56.7685C10.6747 56.7685 10.6772 56.7668 10.6802 56.7668H29.8937C29.8967 56.7668 29.8991 56.7685 29.9021 56.7685C29.905 56.7685 29.9075 56.7668 29.9104 56.7668H35.9792C37.5564 56.7668 38.9665 55.7321 39.4476 54.2383C39.5668 54.0463 39.6621 53.8357 39.7028 53.5942L39.9624 51.8983C40.6091 51.7001 41.2307 51.4439 41.8195 51.1314L43.2189 52.1587C43.9144 52.6568 44.8804 52.572 45.444 51.9765L46.919 50.5183C47.3877 50.0336 47.5364 49.3415 47.3079 48.7359C47.26 48.5771 47.1802 48.4209 47.071 48.2739L46.0538 46.8946C46.3713 46.3041 46.6326 45.6817 46.8325 45.0349L48.5217 44.7771C49.365 44.6561 50 43.9237 50 43.0736V41.0182C50 40.1799 49.3717 39.445 48.5385 39.3089ZM38.9993 45.5468C38.2901 43.1587 36.9944 40.98 35.2123 39.198C35.0668 39.0518 34.914 38.9118 34.7615 38.7721C35.4168 38.3234 36.1861 38.0766 37.0032 38.0766C39.2131 38.0766 41.0115 39.8742 41.0115 42.0841C41.0115 43.5239 40.2124 44.8378 38.9993 45.5468ZM16.7835 32.7769C16.8523 32.802 16.9202 32.829 16.9895 32.8522C17.9007 33.1626 18.849 33.3266 19.8082 33.3266C20.774 33.3266 21.7306 33.1601 22.6517 32.8456C22.7211 32.8222 22.7893 32.7954 22.8583 32.7703C23.0701 32.6922 23.2794 32.6061 23.4867 32.5119C23.542 32.4868 23.5995 32.4692 23.6544 32.443V35.2594L19.8305 38.7122L15.9947 35.2099V32.4539C16.0551 32.4827 16.1185 32.5021 16.1794 32.5295C16.3787 32.6195 16.5799 32.702 16.7835 32.7769ZM16.3828 6.68552V9.60169C16.3828 10.0771 16.7675 10.4618 17.2429 10.4618C17.7183 10.4618 18.103 10.0771 18.103 9.60169V5.52028V2.51571C18.103 2.07724 18.46 1.72026 18.8985 1.72026H20.7531C21.1916 1.72026 21.5486 2.07724 21.5486 2.51571V5.52028C21.5486 5.66633 21.5953 5.79957 21.6611 5.92173V9.98387C21.6611 10.4593 22.0458 10.844 22.5213 10.844C22.9967 10.844 23.3814 10.4593 23.3814 9.98387V6.72763C26.9691 8.08208 29.4723 11.3665 29.7987 15.2144H9.85284C10.1827 11.327 12.7347 8.01325 16.3828 6.68552ZM7.42281 18.6759V17.8031C7.42281 17.3244 7.81255 16.9355 8.29133 16.9355H31.3602C31.839 16.9355 32.2288 17.3244 32.2288 17.8031V18.6759C32.2288 19.1547 31.839 19.5444 31.3602 19.5444H29.4342H10.1922H8.29133C7.81255 19.5444 7.42281 19.1547 7.42281 18.6759ZM11.0859 21.2647H28.5548C28.3565 25.0202 26.6598 28.4111 24.0265 30.2389C23.8389 30.3695 23.6406 30.4716 23.4461 30.584C21.1537 31.8959 18.4059 31.8881 16.1369 30.5545C15.9653 30.4521 15.7903 30.3631 15.6226 30.2456C12.9968 28.438 11.285 25.0286 11.0859 21.2647ZM35.9792 55.0465H30.7622V46.7006C30.7622 46.2252 30.3775 45.8405 29.9021 45.8405C29.4266 45.8405 29.0419 46.2252 29.0419 46.7006V55.0465H11.5319V46.7006C11.5319 46.2252 11.1472 45.8405 10.6718 45.8405C10.1964 45.8405 9.81168 46.2252 9.81168 46.7006V55.0465H3.66479C2.59298 55.0465 1.72026 54.1746 1.72026 53.1028V49.8942C1.72026 42.6102 7.55305 36.6649 14.8408 36.4893L19.2445 40.5109C19.4092 40.6612 19.6166 40.736 19.8249 40.736C20.0316 40.736 20.2374 40.6621 20.4012 40.5142L20.4421 40.4773L24.8681 36.4899C25.9013 36.5168 26.9319 36.6613 27.934 36.9208C29.7551 37.3996 31.4266 38.248 32.91 39.4483C33.2897 39.7473 33.6542 40.0716 33.9952 40.4134C35.7953 42.2135 37.0359 44.468 37.5844 46.9375C37.8036 47.8976 37.9145 48.8921 37.9145 49.8942V53.1028C37.9145 53.2912 37.8893 53.4557 37.8445 53.609C37.839 53.6244 37.8327 53.6395 37.828 53.6556C37.592 54.4745 36.8318 55.0465 35.9792 55.0465ZM48.2797 41.0182L48.2697 43.0753L46.0244 43.4188C45.6826 43.4709 45.4045 43.7238 45.3205 44.0589C45.1013 44.93 44.7569 45.7514 44.2958 46.5024C44.1118 46.8006 44.1278 47.1811 44.3361 47.4633L45.6893 49.2995C45.6893 49.2986 45.6666 49.2659 45.6515 49.1987C45.6632 49.2491 45.6758 49.2608 45.696 49.3087L44.2294 50.7661L42.389 49.4154C42.2378 49.3053 42.0589 49.2491 41.88 49.2491C41.7263 49.2491 41.5726 49.2902 41.4348 49.3734C40.8729 49.7127 40.2698 49.9891 39.6348 50.1974V49.8942C39.6348 49.3817 39.6012 48.8723 39.5498 48.3658C39.5338 48.2079 39.5092 48.053 39.4883 47.8961C39.4613 47.6936 39.4441 47.4893 39.4088 47.2886C41.4248 46.3604 42.7317 44.3563 42.7317 42.0841C42.7317 38.9259 40.1623 36.3564 37.0032 36.3564C35.6836 36.3564 34.4035 36.8192 33.3888 37.6466C33.2509 37.5457 33.105 37.4596 32.9643 37.3638C32.8142 37.2616 32.6649 37.1587 32.5117 37.0623C32.2233 36.8808 31.9275 36.7142 31.6285 36.5535C31.4963 36.4825 31.3674 36.4049 31.2331 36.338C30.7984 36.1212 30.3549 35.9225 29.9 35.7491C29.8424 35.7272 29.7821 35.7118 29.7242 35.6906C29.3761 35.5628 29.0255 35.4406 28.6665 35.3383L28.2532 34.7798L29.7156 33.3241L31.5476 34.6739C31.8315 34.8839 32.2145 34.8982 32.5144 34.71C32.8588 34.495 33.2082 34.3161 33.6206 34.1489C33.6592 34.1296 33.692 34.117 33.7248 34.1078C33.7659 34.0969 33.8062 34.0826 33.8457 34.0658C34.1716 33.9238 34.532 33.8071 34.9469 33.7096C35.2905 33.6282 35.55 33.3451 35.6004 32.9957L35.9448 30.7395L38.0027 30.7479L38.3463 33.0015C38.3992 33.3501 38.6596 33.6307 39.0031 33.7105C39.833 33.902 40.6537 34.2405 41.4432 34.7176C41.7423 34.8982 42.1194 34.8814 42.3983 34.6739L44.2328 33.3275L45.6868 34.7873L44.3361 36.6193C44.1269 36.9032 44.1118 37.2846 44.2974 37.5836C44.7544 38.3194 45.0979 39.14 45.3205 40.0237C45.4045 40.3588 45.6826 40.6117 46.0244 40.6637L48.2697 41.0081L48.3999 40.1581L48.2797 41.0182Z"
                                        fill="white"></path>
                                </svg>
                            </div>
                            <h5 className="rs-feature-title">Product Portfolio & Industrial Applications & Services
                            </h5>
                            <div className="rs-feature-descrip">
                                <p style={{ 
                                    display: isMobile ? 'block' : (expandedCards.card3 ? 'block' : '-webkit-box'),
                                    WebkitLineClamp: isMobile ? 'none' : (expandedCards.card3 ? 'none' : '4'),
                                    WebkitBoxOrient: isMobile ? 'initial' : 'vertical',
                                    overflow: isMobile ? 'visible' : (expandedCards.card3 ? 'visible' : 'hidden'),
                                    textOverflow: isMobile ? 'clip' : 'ellipsis',
                                    lineHeight: '1.6'
                                }}>estern Bearing offers a wide range of high-quality bearings, including Insert Unit Bearings, Tapered Roller Bearings, Cylindrical Roller Bearings, Deep Groove Ball Bearings, and Kingpin Bearings. Our products are widely used in heavy commercial and passenger vehicles, as well as agricultural and earth-moving machinery such as tractors, harvesters, and combine machines. Designed for durability, smooth performance, and reliable operation under heavy-load conditions, we are committed to providing dependable products along with 24/7 customer support and service.</p>
                                {!isMobile && (
                                    <button 
                                        onClick={() => setExpandedCards(prev => ({ ...prev, card3: !prev.card3 }))}
                                        style={{
                                            marginTop: '10px',
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#007bff',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            fontWeight: '600',
                                            padding: '0'
                                        }}
                                    >
                                        {expandedCards.card3 ? 'Read Less' : 'Read More'}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* feature area end */}

        {/* about area start */}
        <section className="rs-about-area rs-about-six">
            <div className="rs-about-shape-one">
                <img src="/assets/images/shape/about-shape-01.png" alt="image" />
            </div>
            <div className="rs-about-shape-two">
                <img src="/assets/images/shape/about-shape-02.png" alt="image" />
            </div>
            <div className="container has-large">
                <div className="row">
                    <div className="col-xl-12">
                        <h2 className="rs-about-title" > Western Bearing</h2>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-xl-12">
                        <div className="rs-about-wrapper">
                            <div className="rs-about-thumb rs-image scroll_reveal reveal_left reveal-active">
                                <img 
                                    decoding="async" 
                                    src="/assets/images/Main-images/short-about1.png" 
                                    alt="image" 
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto', 
                                        display: 'block',
                                        maxWidth: '100%'
                                    }} 
                                />
                            </div>
                            <div className="rs-about-content-wrapper">
                                <div className="rs-section-title-wrapper">
                                    <span className="rs-section-subtitle has-theme-light-blue justify-content-start">
                                        About Western Bearing
                                    </span>
                                    <h2
                                        className="rs-section-title has-theme-light-blue rs-split-text-enable split-in-fade mb-30 ">
                                        We design and build some of
                                        the most <span className="rs-theme-light-blue">powerful facilities</span> in the
                                        world. Those
                                        that change business status</h2>
                                </div>
                                <div className="rs-about-tab">
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-item-one-tab"
                                                data-bs-toggle="pill" data-bs-target="#pills-item-one" type="button"
                                                role="tab" aria-controls="pills-item-one" aria-selected="true">
                                                Our History
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-item-two-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-item-two" type="button" role="tab"
                                                aria-controls="pills-item-two" aria-selected="false"> Our Mission
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-item-three-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-item-three" type="button" role="tab"
                                                aria-controls="pills-item-three" aria-selected="false">
                                                Our Vision
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="rs-aobut-tab-content-wrapper">
                                    <div className="tab-content rs-about-tab-anim" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-item-one" role="tabpanel"
                                            aria-labelledby="pills-item-one-tab" tabIndex="0">
                                            <div className="rs-about-tab-content">
                                                <p>Founded in 1970 and manufacturing since 1985, Western Bearing has
                                                    earned a strong reputation for quality and reliability under the
                                                    WESTERN BEARING brand. Now a trusted supplier to leading OEMs in the
                                                    automotive, agricultural, and earthmoving sectors, the company has
                                                    expanded its domestic and global presence through a commitment to
                                                    precision, innovation, and consistent manufacturing standards. With
                                                    third-generation leadership driving operations and strategic growth,
                                                    and the IPO process underway, Western Bearing is well positioned for
                                                    its next phase of structured expansion and long-term value
                                                    creation.</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-item-two" role="tabpanel"
                                            aria-labelledby="pills-item-two-tab" tabIndex="0">
                                            <div className="rs-about-tab-content">
                                                <p>Our mission is to achieve a 30 percent increase in market share in the heavy commercial vehicle segment by 2027.
                                                  </p>
                                                <div style={{ marginTop: '20px' }}>
                                                    <p style={{ marginBottom: '10px' }}>Agriculture Industry – 50%</p>
                                                    <p style={{ marginBottom: '10px' }}>Commercial & Passenger Light Vehicles – 15%</p>
                                                    <p style={{ marginBottom: '10px' }}>Commercial & Passenger Heavy Vehicles – 15%</p>
                                                    <p style={{ marginBottom: '10px' }}>Earth Moving Machinery – 20%</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-item-three" role="tabpanel"
                                            aria-labelledby="pills-item-three-tab" tabIndex="0">
                                            <div className="rs-about-tab-content">
                                                <p>To build WESTERN BEARING as a globally trusted bearing brand,
                                                    recognized for quality, innovation, and long-term growth.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rs-about-btn">
                                    <a className="rs-btn has-theme-light-blue has-icon has-bg" href="/about">Discover Us
                                        <span className="icon-box">
                                            <svg className="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 32 32">
                                                <path
                                                    d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                </path>
                                            </svg>
                                            <svg className="icon-second" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 32 32">
                                                <path
                                                    d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                </path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* about area end */}

        {/* services area start */}
        <section className="rs-services-area section-space-top rs-services-six">
            <div className="container has-large">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-section-subtitle-wrapper">
                            <span className="rs-section-subtitle has-theme-light-blue justify-content-start">
                                Our Participation
                            </span>
                            <div className="rs-section-border-line"></div>
                        </div>
                    </div>
                </div>
                <div className="row  g-5 section-title-space align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-7">
                        <div className="rs-section-title-wrapper">
                            <h2 className="rs-section-title has-theme-light-blue rs-split-text-enable split-in-fade">
                                Exhibition & Participation </h2>
                        </div>
                    </div>

                </div>
                <div className="row g-5 process-counts">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="rs-services-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                            <div className="rs-services-bg-thumb" data-background="/assets/images/shape/service-shape.png">
                            </div>
                            <h4 className="rs-services-title underline has-theme-blue"><a href="/services-details">
                                    International <br/>Auto Expo  </a></h4>
                            <p className="descrip"> Participated in India’s premier
automobile exhibition across multiple years (2014, 2016, 2018, 2020, 2023).</p>
                            <div className="rs-services-icon">
                                <a className="rs-btn has-icon has-transparent-btn" href="/services-details">
                                    <span className="icon-box">
                                        <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" width="26"
                                            height="12" viewBox="0 0 26 12" fill="none">
                                            <path opacity="0.6"
                                                d="M25.5303 6.53033C25.8232 6.23743 25.8232 5.76256 25.5303 5.46967L20.7574 0.696697C20.4645 0.403804 19.9896 0.403804 19.6967 0.696697C19.4038 0.989591 19.4038 1.46446 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM6.55671e-08 6.75L25 6.75L25 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                fill="#616161"></path>
                                        </svg>
                                        <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" width="26"
                                            height="12" viewBox="0 0 26 12" fill="none">
                                            <path opacity="0.6"
                                                d="M25.5303 6.53033C25.8232 6.23743 25.8232 5.76256 25.5303 5.46967L20.7574 0.696697C20.4645 0.403804 19.9896 0.403804 19.6967 0.696697C19.4038 0.989591 19.4038 1.46446 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM6.55671e-08 6.75L25 6.75L25 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                fill="#616161"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div className="rs-services-thumb">
                                <img src="/assets/images/Main-images/exh-1.jpg" alt="image" />
                            </div>
                            <div className="rs-services-number"></div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="rs-services-item wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                            <div className="rs-services-bg-thumb" data-background="/assets/images/shape/service-shape.png">
                            </div>
                            <h4 className="rs-services-title underline has-theme-blue"><a href="/services-details">
                                    ACMA <br />Automechanika </a></h4>
                            <p className="descrip"> Global exhibition organized by Germany(2015, 2017, 2019, 2024, 2026),
building strong market presence and brand identity.</p>
                            <div className="rs-services-icon">
                                <a className="rs-btn has-icon has-transparent-btn" href="/services-details">
                                    <span className="icon-box">
                                        <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" width="26"
                                            height="12" viewBox="0 0 26 12" fill="none">
                                            <path opacity="0.6"
                                                d="M25.5303 6.53033C25.8232 6.23743 25.8232 5.76256 25.5303 5.46967L20.7574 0.696697C20.4645 0.403804 19.9896 0.403804 19.6967 0.696697C19.4038 0.989591 19.4038 1.46446 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM6.55671e-08 6.75L25 6.75L25 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                fill="#616161"></path>
                                        </svg>
                                        <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" width="26"
                                            height="12" viewBox="0 0 26 12" fill="none">
                                            <path opacity="0.6"
                                                d="M25.5303 6.53033C25.8232 6.23743 25.8232 5.76256 25.5303 5.46967L20.7574 0.696697C20.4645 0.403804 19.9896 0.403804 19.6967 0.696697C19.4038 0.989591 19.4038 1.46446 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM6.55671e-08 6.75L25 6.75L25 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                fill="#616161"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div className="rs-services-thumb">
                                <img src="/assets/images/Main-images/exh-2.jpg" alt="image" />
                            </div>
                            <div className="rs-services-number"></div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="rs-services-item wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                            <div className="rs-services-bg-thumb" data-background="/assets/images/shape/service-shape.png">
                            </div>
                            <h4 className="rs-services-title underline has-theme-blue"><a href="/services-details">
                                    Bauma <br /> Conexpo </a></h4>
                            <p className="descrip">Participated in Construction Expo 2025,
showcasing innovation at Bauma Conexpo India.</p>
                            <div className="rs-services-icon">
                                <a className="rs-btn has-icon has-transparent-btn" href="/services-details">
                                    <span className="icon-box">
                                        <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" width="26"
                                            height="12" viewBox="0 0 26 12" fill="none">
                                            <path opacity="0.6"
                                                d="M25.5303 6.53033C25.8232 6.23743 25.8232 5.76256 25.5303 5.46967L20.7574 0.696697C20.4645 0.403804 19.9896 0.403804 19.6967 0.696697C19.4038 0.989591 19.4038 1.46446 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM6.55671e-08 6.75L25 6.75L25 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                fill="#616161"></path>
                                        </svg>
                                        <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" width="26"
                                            height="12" viewBox="0 0 26 12" fill="none">
                                            <path opacity="0.6"
                                                d="M25.5303 6.53033C25.8232 6.23743 25.8232 5.76256 25.5303 5.46967L20.7574 0.696697C20.4645 0.403804 19.9896 0.403804 19.6967 0.696697C19.4038 0.989591 19.4038 1.46446 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM6.55671e-08 6.75L25 6.75L25 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                fill="#616161"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div className="rs-services-thumb">
                                <img src="/assets/images/Main-images/exh-3.jpg" alt="image" />
                            </div>
                            <div className="rs-services-number"></div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="rs-services-item wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
                            <div className="rs-services-bg-thumb" data-background="/assets/images/shape/service-shape.png">
                            </div>
                            <h4 className="rs-services-title underline has-theme-blue"><a href="/services-details">
                                    Kisan Agri <br />Show</a></h4>
                            <p className="descrip"> Participated in Kisan Agri Show 2025,
connecting with the agricultural industry nationwide.</p>
                            <div className="rs-services-icon">
                                <a className="rs-btn has-icon has-transparent-btn" href="/services-details">
                                    <span className="icon-box">
                                        <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" width="26"
                                            height="12" viewBox="0 0 26 12" fill="none">
                                            <path opacity="0.6"
                                                d="M25.5303 6.53033C25.8232 6.23743 25.8232 5.76256 25.5303 5.46967L20.7574 0.696697C20.4645 0.403804 19.9896 0.403804 19.6967 0.696697C19.4038 0.989591 19.4038 1.46446 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM6.55671e-08 6.75L25 6.75L25 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                fill="#616161"></path>
                                        </svg>
                                        <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" width="26"
                                            height="12" viewBox="0 0 26 12" fill="none">
                                            <path opacity="0.6"
                                                d="M25.5303 6.53033C25.8232 6.23743 25.8232 5.76256 25.5303 5.46967L20.7574 0.696697C20.4645 0.403804 19.9896 0.403804 19.6967 0.696697C19.4038 0.989591 19.4038 1.46446 19.6967 1.75736L23.9393 6L19.6967 10.2426C19.4038 10.5355 19.4038 11.0104 19.6967 11.3033C19.9896 11.5962 20.4645 11.5962 20.7574 11.3033L25.5303 6.53033ZM6.55671e-08 6.75L25 6.75L25 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                fill="#616161"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div className="rs-services-thumb">
                                <img src="/assets/images/Main-images/exh-4.jpg" alt="image" />
                            </div>
                            <div className="rs-services-number"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* services area end */}

        {/* text slider area start */}
        <div className="rs-text-slide-area rs-text-slide-two">
            <div className="container has-large">
                   <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-text-slide-wrapper">
                            <div className="gsap-marquee right speed-20 move-to-1000">
                                <div className="rs-text-slide-inner">
                                    <div className="rs-text-slide-item">
                                        <h2 className="rs-text-slide-title"> INNOVATION ACROSS EVERY PRODUCT</h2>
                                    </div>
                                    <div className="rs-text-slide-item">
                                        <h2 className="rs-text-slide-title">&amp; SERVING EVERY INDUSTRY WITH PRECISION</h2>
                                    </div>
                                    <div className="rs-text-slide-item">
                                        <h2 className="rs-text-slide-title">&amp; HIGH-PERFORMANCE BEARING
                                        </h2>
                                    </div>
                                    <div className="rs-text-slide-item">
                                        <h2 className="rs-text-slide-title">&amp; INNOVATION ACROSS EVERY PRODUCT</h2>
                                    </div>
                                    <div className="rs-text-slide-item">
                                        <h2 className="rs-text-slide-title">&amp; HIGH-PERFORMANCE BEARING</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* text slider area end */}

        {/* video area start */}
       <div className="rs-video-area rs-video-two jarallax">
            <div className="container has-large">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-video-bg-thumb-wrapper">
                            <div className="rs-video-bg-thumb jarallax-img"
                                data-background="/assets/images/Main-images/1720x550.jpg.jpeg">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-10">
                        <div className="rs-video-content">
                            <div className="rs-video-play-btn">
                                <div className="rs-rotate-btn">
                                    <a href="https://www.youtube.com/watch?v=qUk7T0Tj5eo"
                                        className="rs-play-btn popup-video"><i className="ri-play-fill"></i></a>
                                    <div className="rs-circle-title gsap-rotate rs-text-circle-wrapper">
                                        <div className="rs-text-circle" data-rotate-degree="13.33">
                                            Watch Video - Watch Video
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* video area end */}

        {/* work step area start 
        <section className="rs-work-stpe-area section-space rs-work-step-three">
            <div className="container has-large">
                <div className="row g-5 process-counts">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="rs-work-step-item  wow fadeIn" data-wow-delay=".3s">
                            <div className="rs-work-step-number-wrapper">
                                <span className="rs-work-step-number"></span>
                                <span className="rs-work-step-text">step</span>
                            </div>
                            <h5 className="rs-work-step-title">Research</h5>
                            <p className="descrip">Industry standard dummy text took since the when an unknown printer
                                galley type
                                scrambled. </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="rs-work-step-item  wow fadeIn" data-wow-delay=".5s">
                            <div className="rs-work-step-number-wrapper">
                                <span className="rs-work-step-number"></span>
                                <span className="rs-work-step-text">step</span>
                            </div>
                            <h5 className="rs-work-step-title"> Brainstorming</h5>
                            <p className="descrip"> Ority have suffered alteration in some randomised words which don't look
                                even
                                slightly believable. </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="rs-work-step-item  wow fadeIn" data-wow-delay=".7s">
                            <div className="rs-work-step-number-wrapper">
                                <span className="rs-work-step-number"></span>
                                <span className="rs-work-step-text">step</span>
                            </div>
                            <h5 className="rs-work-step-title"> Finalize</h5>
                            <p className="descrip">All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                chunks
                                as necessary. </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="rs-work-step-item  wow fadeIn" data-wow-delay=".7s">
                            <div className="rs-work-step-number-wrapper">
                                <span className="rs-work-step-number"></span>
                                <span className="rs-work-step-text">step</span>
                            </div>
                            <h5 className="rs-work-step-title">Launch</h5>
                            <p className="descrip"> Handful model sentence structures
                                to generate which looks reasonable repeat generated. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        working step area end */}

        {/* portfolio area start */}
        <section className="rs-portfolio-area section-space-bottom rs-portfolio-five">
            <div className="container has-large">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-section-subtitle-wrapper">
                            <span className="rs-section-subtitle has-theme-light-blue justify-content-start">
                            Industries & Applications We Serve
                            </span>
                            <div className="rs-section-border-line"></div>
                        </div>
                    </div>
                </div>
                <div className="row  g-5 section-title-space align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="rs-section-title-wrapper">
                            <h2 className="rs-section-title has-theme-light-blue rs-split-text-enable split-in-fade">
                            Precision bearings powering vehicles, agriculture, and heavy-duty machinery. </h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="rs-services-btn">
                            <a className="rs-btn has-theme-light-blue has-icon has-bg" href="/portfolio">See More Works
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
                <div className="row g-5">
                    <div className="col-xl-6 col-lg-12">
                        <div className="rs-portfolio-item">
                            <div className="rs-portfolio-thumb">
                                <img src="/assets/images/Main-images/Vehicle/truck.jpeg" alt="image" />
                            </div>
                            <div className="rs-portfolio-content has-large">
                                <h3 className="rs-portfolio-title has-big underline has-white"> <a
                                        href="/portfolio-details">Heavy Commercial Vehicles

                                        </a></h3>
                                <div className="rs-portfolio-tag">
                                    {/* <a href="/portfolio-details">High-performance bearings used in tractors for smooth operation, durability, and long service life under heavy agricultural loads.</a> */}
                                </div>
                            </div>
                            <div className="rs-services-text-btn">
                                <a className="rs-btn has-theme-light-blue has-icon has-bg" href="/portfolio">See More
                                    Works
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
                    <div className="col-xl-6 col-lg-12">
                        <div className="row g-5">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="rs-portfolio-item">
                                    <div className="rs-portfolio-thumb">
                                        <img src="/assets/images/Main-images/Vehicle/Earth-Moving-Machine.jpg" alt="image" />
                                    </div>
                                    <div className="rs-portfolio-content">
                                        <h5 className="rs-portfolio-title underline has-white"> <a
                                                href="/portfolio-details">Earth Moving Machines
                                                </a></h5>
                                        <div className="rs-portfolio-tag">
                                            {/* <a href="/portfolio-details">Robust bearings for earth-moving equipment, delivering strength, reliability, and long operational life in demanding environments.</a> */}
                                        </div>
                                    </div>
                                    <div className="rs-services-text-btn">
                                        <a className="rs-btn has-theme-light-blue has-icon has-bg" href="/portfolio">See
                                            More
                                            Works
                                            <span className="icon-box">
                                                <svg className="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32">
                                                    <path
                                                        d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                    </path>
                                                </svg>
                                                <svg className="icon-second" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32">
                                                    <path
                                                        d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="rs-portfolio-item">
                                    <div className="rs-portfolio-thumb">
                                        <img src="/assets/images/Main-images/Vehicle/Concreate-Mixer.jpg" alt="image" />
                                    </div>
                                    <div className="rs-portfolio-content">
                                        <h5 className="rs-portfolio-title underline has-white"> <a
                                                href="/portfolio-details"> Concrete Mixer
                                                </a></h5>
                                        <div className="rs-portfolio-tag">
                                            {/* <a href="/portfolio-details">Durable bearing solutions for tractor trolleys and utility vehicles, built to handle heavy loads and continuous movement.</a> */}
                                        </div>
                                    </div>
                                    <div className="rs-services-text-btn">
                                        <a className="rs-btn has-theme-light-blue has-icon has-bg" href="/portfolio">See
                                            More
                                            Works
                                            <span className="icon-box">
                                                <svg className="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32">
                                                    <path
                                                        d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                    </path>
                                                </svg>
                                                <svg className="icon-second" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32">
                                                    <path
                                                        d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="rs-portfolio-item">
                                    <div className="rs-portfolio-thumb">
                                        <img src="/assets/images/Main-images/Vehicle/Tractor.jpg" alt="image" />
                                    </div>
                                    <div className="rs-portfolio-content">
                                        <h5 className="rs-portfolio-title underline has-white"> <a
                                                href="/portfolio-details">Tractor </a></h5>
                                        <div className="rs-portfolio-tag">
                                            {/* <a href="/portfolio-details">Bearings engineered for rotavators, super seeders, and planters, offering strength, shock resistance, and smooth rotational accuracy.</a> */}
                                        </div>
                                    </div>
                                    <div className="rs-services-text-btn">
                                        <a className="rs-btn has-theme-light-blue has-icon has-bg" href="/portfolio">See
                                            More
                                            Works
                                            <span className="icon-box">
                                                <svg className="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32">
                                                    <path
                                                        d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                    </path>
                                                </svg>
                                                <svg className="icon-second" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32">
                                                    <path
                                                        d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="rs-portfolio-item">
                                    <div className="rs-portfolio-thumb">
                                        <img src="/assets/images/Main-images/Vehicle/Harvestor.jpg" alt="image" />
                                    </div>
                                    <div className="rs-portfolio-content">
                                        <h5 className="rs-portfolio-title underline has-white"> <a
                                                href="/portfolio-details">
                                                Harvester </a></h5>
                                        <div className="rs-portfolio-tag">
                                            {/* <a href="/portfolio-details">Reliable bearings designed for harvesters, ensuring precision motion, reduced friction, and consistent performance in tough field conditions.</a> */}
                                        </div>
                                    </div>
                                    <div className="rs-services-text-btn">
                                        <a className="rs-btn has-theme-light-blue has-icon has-bg" href="/portfolio">See
                                            More
                                            Works
                                            <span className="icon-box">
                                                <svg className="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32">
                                                    <path
                                                        d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                    </path>
                                                </svg>
                                                <svg className="icon-second" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32">
                                                    <path
                                                        d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* portfolio area end */}

        {/* international market area start */}
        <section className="rs-services-area section-space rs-services-six">
            <div className="container has-large">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-section-subtitle-wrapper">
                            <span className="rs-section-subtitle has-theme-light-blue justify-content-start">
                                International Market
                            </span>
                            <div className="rs-section-border-line"></div>
                                </div>
                            </div>
                        </div>
                <div className="row g-5 section-title-space align-items-center">
                    <div className="col-xl-12">
                        <div className="rs-section-title-wrapper">
                            <h2 className="rs-section-title has-theme-light-blue rs-split-text-enable split-in-fade">
                                Global Presence & Export Excellence
                            </h2>
                    </div>
                                </div>
                            </div>
                <div className="row g-5 align-items-center mt-50">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="rs-world-map-wrapper wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="1s">
                            <div className="rs-world-map-thumb" style={{ 
                                position: 'relative', 
                                padding: '30px', 
                                background: 'linear-gradient(135deg, rgba(0,123,255,0.05) 0%, rgba(0,123,255,0.02) 100%)', 
                                borderRadius: '20px', 
                                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '-50px',
                                    right: '-50px',
                                    width: '200px',
                                    height: '200px',
                                    background: 'radial-gradient(circle, rgba(0,123,255,0.1) 0%, transparent 70%)',
                                    borderRadius: '50%'
                                }}></div>
                                <img src="/assets/images/Main-images/WORLD-MAP.png" alt="World Map" style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    borderRadius: '12px',
                                    position: 'relative',
                                    zIndex: 1,
                                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                                }} />
                        </div>
                    </div>
                                </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="rs-international-content wow fadeInRight" data-wow-delay=".5s" data-wow-duration="1s">
                            <div style={{ 
                                paddingLeft: '20px',
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    left: '0',
                                    top: '0',
                                    width: '4px',
                                    height: '100%',
                                    background: 'linear-gradient(180deg, #007bff 0%, #0056b3 100%)',
                                    borderRadius: '2px'
                                }}></div>
                                <h3 style={{ 
                                    fontSize: '32px', 
                                    fontWeight: '700', 
                                    color: '#1f1f1f', 
                                    marginBottom: '25px',
                                    lineHeight: '1.3'
                                }}>
                                    Reaching Every Corner of the Globe
                                </h3>
                                <p style={{ 
                                    fontSize: '22px', 
                                    lineHeight: '1.9', 
                                    color: '#555',
                                    marginBottom: '20px'
                                }}>
                                    Western Bearing has a strong global presence, exporting to 30+ countries across multiple regions. Supported by a reliable global shipping network, we ensure timely deliveries worldwide with 24/7 customer support.
                                </p>
                                <p style={{ 
                                    fontSize: '22px', 
                                    lineHeight: '1.9', 
                                    color: '#555',
                                    marginBottom: '0'
                                }}>
                                    Our products undergo strict quality assurance testing and are supplied with export-quality packaging, ensuring consistent performance and safe delivery in international markets.
                                </p>
                                <div style={{ 
                                    marginTop: '30px',
                                    display: 'flex',
                                    gap: '30px',
                                    flexWrap: 'wrap'
                                }}>
                                    <div>
                                        <div style={{ 
                                            fontSize: '36px', 
                                            fontWeight: '700', 
                                            color: '#007bff',
                                            lineHeight: '1'
                                        }}>30+</div>
                                        <div style={{ 
                                            fontSize: '14px', 
                                            color: '#777',
                                            marginTop: '5px',
                                            fontWeight: '500'
                                        }}>Countries</div>
                            </div>
                                    <div>
                                        <div style={{ 
                                            fontSize: '36px', 
                                            fontWeight: '700', 
                                            color: '#007bff',
                                            lineHeight: '1'
                                        }}>24/7</div>
                                        <div style={{ 
                                            fontSize: '14px', 
                                            color: '#777',
                                            marginTop: '5px',
                                            fontWeight: '500'
                                        }}>Support</div>
                        </div>
                                    <div>
                                        <div style={{ 
                                            fontSize: '36px', 
                                            fontWeight: '700', 
                                            color: '#007bff',
                                            lineHeight: '1'
                                        }}>100%</div>
                                        <div style={{ 
                                            fontSize: '14px', 
                                            color: '#777',
                                            marginTop: '5px',
                                            fontWeight: '500'
                                        }}>Quality</div>
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-xl-12">
                        <div className="rs-countries-flags-wrapper">
                            <h4 className="rs-countries-title text-center mb-40" style={{ fontSize: '28px', fontWeight: '600', color: '#1f1f1f', marginTop:'30px' }}>Exporting to 30+ Countries Worldwide</h4>
                            <div className="rs-flags-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '25px', maxWidth: '1400px', margin: '0 auto', padding: '20px', contain: 'layout style paint' }}>
                                {/* Country Flags - mapped from flags array */}
                                {flags.map((flag, index) => (
                                    <div 
                                        key={flag.name} 
                                        className="rs-flag-item text-center" 
                                        style={{ 
                                            padding: '0', 
                                            background: '#fff', 
                                            borderRadius: '10px', 
                                            border: '1px solid #e0e0e0',
                                            minWidth: '140px',
                                            width: '100%',
                                            height: '100px',
                                            overflow: 'hidden',
                                            transform: 'translateZ(0)',
                                            contain: 'layout style paint'
                                        }}
                                    >
                                        <div className="rs-flag-icon" style={{ width: '100%', height: '100%', margin: '0', padding: '0', borderRadius: '10px', overflow: 'hidden', border: 'none' }}>
                                            <img 
                                                src={`/assets/images/Main-images/Flags/${flag.image}`} 
                                                alt={flag.name} 
                                                loading="lazy"
                                                decoding="async"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', margin: '0', padding: '0' }} 
                                            />
            </div>
        </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* international market area end */}

        {/* counter area start */}
        <div className="rs-counter-area rs-counter-one section-space-bottom has-theme-blue">
            <div className="container has-large">
                <div className="row g-5 justify-content-center">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="rs-counter-item text-center">
                            <div className="rs-counter-inner">
                                <div className="rs-counter-number-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <span className="rs-counter-number odometer" data-count="24">0</span>
                                    <span className="prefix">L+</span>
                                </div>
                                <span className="rs-counter-title">Annual Production of Bearings</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="rs-counter-item text-center">
                            <div className="rs-counter-inner">
                                <div className="rs-counter-number-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <span className="rs-counter-number odometer" data-count="98">0</span>
                                    <span className="prefix">%</span>
                                </div>
                                <span className="rs-counter-title">Clients Satisfaction</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="rs-counter-item text-center">
                            <div className="rs-counter-inner">
                                <div className="rs-counter-number-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <span className="rs-counter-number odometer" data-count="40">0</span>
                                    <span className="prefix">+</span>
                                </div>
                                <span className="rs-counter-title">Years of Excellence</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="rs-counter-item text-center">
                            <div className="rs-counter-inner">
                                <div className="rs-counter-number-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <span className="rs-counter-number odometer" data-count="30">0</span>
                                    <span className="prefix">+</span>
                                </div>
                                <span className="rs-counter-title">Countries Served</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* counter area end */}

        {/* testimonial area start */}
        {/* <section className="rs-testimonial-area section-space-bottom rs-testimonial-four rs-swiper">
            <div className="container has-large">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-section-subtitle-wrapper">
                            <span className="rs-section-subtitle has-theme-light-blue justify-content-start">
                                Testimonials
                            </span>
                            <div className="rs-section-border-line"></div>
                        </div>
                    </div>
                </div>
                <div className="row  g-5 section-title-space align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="rs-section-title-wrapper">
                            <h2 className="rs-section-title has-theme-light-blue rs-split-text-enable split-in-fade">What
                                client
                                say about Western Bearing</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="rs-testimonial-btn">
                            <a className="rs-btn has-theme-light-blue has-icon has-bg" href="/contact">View More Reviews
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
                <div className="row">
                    <div className="rs-testimonial-slider-wrapper">
                        <div className="swiper" data-clone-slides="false" data-loop="true" data-speed="1500"
                            data-autoplay="false" data-dots-dynamic="false" data-center-mode="true"
                            data-hover-pause="true" data-effect="false" data-delay="1500" data-item="3" data-item-xl="3"
                            data-item-lg="3" data-item-md="2" data-item-sm="1" data-item-xs="1" data-item-mobile="1"
                            data-margin="30" data-margin-xl="30" data-margin-lg="30" data-margin-md="30"
                            data-margin-sm="30" data-margin-xs="30" data-margin-mobile="30">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="rs-testimonial-item">
                                        <div className="rs-testimonial-quote">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="39"
                                                viewBox="0 0 96 39" fill="none">
                                                <g opacity="0.06">
                                                    <path
                                                        d="M0 29.2815H21.4286L7.14275 0.190567H28.5713L42.8572 29.2815V72.918H0V29.2815Z"
                                                        fill="#023B4A"></path>
                                                    <path
                                                        d="M52.8574 72.918V29.2815H74.286L60.0002 0.190567H81.4288L95.7146 29.2815V72.918H52.8574Z"
                                                        fill="#023B4A"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="rs-testimonial-content">
                                            <div className="rs-testimonial-top">
                                                <div className="rs-testimonial-avater-wrapper">
                                                    <div className="rs-testimonial-avater-thumb">
                                                        <img src="/assets/images/user/user-thumb-01.png" alt="image" />
                                                    </div>
                                                    <div className="rs-testimonial-avater-info">
                                                        <h5 className="rs-testimonial-title">Best Company!</h5>
                                                        <div className="rs-testimonial-rating">
                                                            <div className="rs-rating">
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-half-line"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rs-testimonial-description">
                                                <p> Hampden-Sydney College in Virginia, looked up one of the more
                                                    obscure latin
                                                    words consectetur.</p>
                                            </div>
                                            <div className="rs-testimonial-desig-info">
                                                <h6 className="rs-testimonial-avater-title">Abdur Rashid</h6>
                                                <div className="rs-testimonial-separator">/</div>
                                                <span className="rs-testimonial-avater-designation">Founder &amp; CEO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="rs-testimonial-item">
                                        <div className="rs-testimonial-quote">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="39"
                                                viewBox="0 0 96 39" fill="none">
                                                <g opacity="0.06">
                                                    <path
                                                        d="M0 29.2815H21.4286L7.14275 0.190567H28.5713L42.8572 29.2815V72.918H0V29.2815Z"
                                                        fill="#023B4A"></path>
                                                    <path
                                                        d="M52.8574 72.918V29.2815H74.286L60.0002 0.190567H81.4288L95.7146 29.2815V72.918H52.8574Z"
                                                        fill="#023B4A"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="rs-testimonial-content">
                                            <div className="rs-testimonial-top">
                                                <div className="rs-testimonial-avater-wrapper">
                                                    <div className="rs-testimonial-avater-thumb">
                                                        <img src="/assets/images/user/user-thumb-02.png" alt="image" />
                                                    </div>
                                                    <div className="rs-testimonial-avater-info">
                                                        <h5 className="rs-testimonial-title">Popular Industry! </h5>
                                                        <div className="rs-testimonial-rating">
                                                            <div className="rs-rating">
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-half-line"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rs-testimonial-description">
                                                <p> Hampden-Sydney College in Virginia, looked up one of the more
                                                    obscure latin
                                                    words consectetur.</p>
                                            </div>
                                            <div className="rs-testimonial-desig-info">
                                                <h6 className="rs-testimonial-avater-title">Christopher</h6>
                                                <div className="rs-testimonial-separator">/</div>
                                                <span className="rs-testimonial-avater-designation">Engineer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="rs-testimonial-item">
                                        <div className="rs-testimonial-quote">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="39"
                                                viewBox="0 0 96 39" fill="none">
                                                <g opacity="0.06">
                                                    <path
                                                        d="M0 29.2815H21.4286L7.14275 0.190567H28.5713L42.8572 29.2815V72.918H0V29.2815Z"
                                                        fill="#023B4A"></path>
                                                    <path
                                                        d="M52.8574 72.918V29.2815H74.286L60.0002 0.190567H81.4288L95.7146 29.2815V72.918H52.8574Z"
                                                        fill="#023B4A"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="rs-testimonial-content">
                                            <div className="rs-testimonial-top">
                                                <div className="rs-testimonial-avater-wrapper">
                                                    <div className="rs-testimonial-avater-thumb">
                                                        <img src="/assets/images/user/user-thumb-03.png" alt="image" />
                                                    </div>
                                                    <div className="rs-testimonial-avater-info">
                                                        <h5 className="rs-testimonial-title">Best Company!</h5>
                                                        <div className="rs-testimonial-rating">
                                                            <div className="rs-rating">
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-half-line"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rs-testimonial-description">
                                                <p> Hampden-Sydney College in Virginia, looked up one of the more
                                                    obscure latin
                                                    words consectetur.</p>
                                            </div>
                                            <div className="rs-testimonial-desig-info">
                                                <h6 className="rs-testimonial-avater-title">Nayeem</h6>
                                                <div className="rs-testimonial-separator">/</div>
                                                <span className="rs-testimonial-avater-designation">Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="rs-testimonial-item">
                                        <div className="rs-testimonial-quote">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="39"
                                                viewBox="0 0 96 39" fill="none">
                                                <g opacity="0.06">
                                                    <path
                                                        d="M0 29.2815H21.4286L7.14275 0.190567H28.5713L42.8572 29.2815V72.918H0V29.2815Z"
                                                        fill="#023B4A"></path>
                                                    <path
                                                        d="M52.8574 72.918V29.2815H74.286L60.0002 0.190567H81.4288L95.7146 29.2815V72.918H52.8574Z"
                                                        fill="#023B4A"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="rs-testimonial-content">
                                            <div className="rs-testimonial-top">
                                                <div className="rs-testimonial-avater-wrapper">
                                                    <div className="rs-testimonial-avater-thumb">
                                                        <img src="/assets/images/user/user-thumb-04.png" alt="image" />
                                                    </div>
                                                    <div className="rs-testimonial-avater-info">
                                                        <h5 className="rs-testimonial-title">Best Company!</h5>
                                                        <div className="rs-testimonial-rating">
                                                            <div className="rs-rating">
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-fill"></i></span>
                                                                <span><i className="ri-star-half-line"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rs-testimonial-description">
                                                <p> Hampden-Sydney College in Virginia, looked up one of the more
                                                    obscure latin
                                                    words consectetur.</p>
                                            </div>
                                            <div className="rs-testimonial-desig-info">
                                                <h6 className="rs-testimonial-avater-title">Joshua Pul</h6>
                                                <div className="rs-testimonial-separator">/</div>
                                                <span className="rs-testimonial-avater-designation">CEO Industry</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination rs-pagination"></div>
                    </div>
                </div>
            </div>
        </section> */}
        {/* testimonial area start */}

        {/* brand area start */}
        <div className="rs-brand-area section-space-bottom rs-brand-two has-theme-light-blue">
            <div className="rs-brand-shape-thumb rs-image scroll_reveal reveal_left reveal-active">
                <img decoding="async" src="/assets/images/bg/brand-bg-01.png" alt="image" />
            </div>
            <div className="rs-brand-circle-shape">
                <img src="/assets/images/shape/circle-shape.png" alt="image" />
            </div>
            <div className="container has-large">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-section-subtitle-wrapper">
                            <span className="rs-section-subtitle has-theme-light-blue justify-content-start">
                                Company
                            </span>
                            <div className="rs-section-border-line"></div>
                        </div>
                    </div>
                </div>
                <div className="row  g-5 section-title-space">
                    <div className="col-12">
                        <div className="rs-brand-wrapper">
                            <div className="rs-section-title-wrapper">
                                <h2
                                    className="rs-section-title has-theme-light-blue rs-split-text-enable split-in-fade mb-20">
                                    WE ARE AN ESTEEMED MEMBER 
                                </h2>
                                <p className="descrip" style={{ fontSize: '19px', lineHeight: '1.7' }}>Western Bearing is an active and recognized member of 7+ leading national industry and government organizations, including MSME, CII, GeM, ACMA, FIEO, Rajasthan Ball Bearing Merchant Association, and Marudhara Industries Association. These memberships reflect our strong industry compliance, export readiness, and commitment to quality, credibility, and ethical business practices.</p>
                            </div>


                            <div className="rs-brand-item-wrapper">
                                <div className="rs-brand-item wow fadeIn" data-wow-delay=".3s" data-wow-duration="1s">
                                    <div className="rs-brand-thumb">
                                        <img src="/assets/images/Main-images/Company/1.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="rs-brand-item wow fadeIn" data-wow-delay=".4s" data-wow-duration="1s">
                                    <div className="rs-brand-thumb">
                                        <img src="/assets/images/Main-images/Company/2.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="rs-brand-item wow fadeIn" data-wow-delay=".5s" data-wow-duration="1s">
                                    <div className="rs-brand-thumb">
                                        <img src="/assets/images/Main-images/Company/3.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="rs-brand-item wow fadeIn" data-wow-delay=".6s" data-wow-duration="1s">
                                    <div className="rs-brand-thumb">
                                        <img src="/assets/images/Main-images/Company/4.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="rs-brand-item wow fadeIn" data-wow-delay=".7s" data-wow-duration="1s">
                                    <div className="rs-brand-thumb">
                                        <img src="/assets/images/Main-images/Company/5.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="rs-brand-item wow fadeIn" data-wow-delay=".8s" data-wow-duration="1s">
                                    <div className="rs-brand-thumb">
                                        <img src="/assets/images/Main-images/Company/6.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="rs-brand-item wow fadeIn" data-wow-delay=".9s" data-wow-duration="1s">
                                    <div className="rs-brand-thumb">
                                        <img src="/assets/images/Main-images/Company/7.jpg" alt="image" />
                                    </div>
                                </div>
                                <div className="rs-brand-item wow fadeIn" data-wow-delay="1s" data-wow-duration="1s">
                                    <div className="rs-brand-thumb">
                                        <img src="/assets/images/Main-images/Company/8.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* brand area end */}

        {/* team area start */}
        <section className="rs-team-area rs-team-one has-theme-light-blue">
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
                                    <a href="/team-details"><img src="/assets/images/Main-images/Team/1.jpg"
                                            alt="image" /></a>
                                    {/* <div className="rs-theme-social rs-team-social has-transparent">
                                        <a href="#"><i className="ri-twitter-x-line"></i></a>
                                        <a href="#"><i className="ri-facebook-fill"></i></a>
                                        <a href="#"><i className="ri-linkedin-fill"></i></a>
                                </div> */}
                                </div>
                                <div className="rs-team-content-wrapper">
                                    <div className="rs-team-content-box">
                                        <h5 className="rs-team-title"><a href="/team-details">Mr.Aziz Belim</a></h5>
                                        <span className="rs-team-designation">FOUNDER</span>
                            </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="rs-team-item wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                                <div className="rs-team-thumb has-clip">
                                    <a href="/team-details"><img src="/assets/images/Main-images/Team/2.jpg"
                                            alt="image" /></a>
                                    {/* <div className="rs-theme-social rs-team-social has-transparent">
                                        <a href="#"><i className="ri-twitter-x-line"></i></a>
                                        <a href="#"><i className="ri-facebook-fill"></i></a>
                                        <a href="#"><i className="ri-linkedin-fill"></i></a>
                                </div> */}
                    </div>
                                <div className="rs-team-content-wrapper">
                                    <div className="rs-team-content-box">
                                        <h5 className="rs-team-title"><a href="/team-details">Mr.Waheed Belim</a></h5>
                                        <span className="rs-team-designation">MANAGING DIRECTOR </span>
                                </div>
                            </div>
                                </div>
                            </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="rs-team-item wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                                <div className="rs-team-thumb has-clip">
                                    <a href="/team-details"><img src="/assets/images/Main-images/Team/3.jpg"
                                            alt="image" /></a>
                                    {/* <div className="rs-theme-social rs-team-social has-transparent">
                                        <a href="#"><i className="ri-twitter-x-line"></i></a>
                                        <a href="#"><i className="ri-facebook-fill"></i></a>
                                        <a href="#"><i className="ri-linkedin-fill"></i></a>
                                </div> */}
                        </div>
                                <div className="rs-team-content-wrapper">
                                    <div className="rs-team-content-box">
                                        <h5 className="rs-team-title"><a href="/team-details">Mr.Maheed Belim</a></h5>
                                        <span className="rs-team-designation">EXECUTIVE DIRECTOR</span>
                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* team area end */}

        {/* blog area start */}
        {/* <section className="rs-blog-area section-space rs-blog-one has-theme-light-blue">
            <div className="container has-large">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="rs-section-subtitle-wrapper">
                            <span className="rs-section-subtitle has-theme-light-blue justify-content-start">
                                Current Affairs
                            </span>
                            <div className="rs-section-border-line"></div>
                        </div>
                    </div>
                </div>
                <div className="row  g-5 section-title-space align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="rs-section-title-wrapper">
                            <h2 className="rs-section-title has-theme-light-blue rs-split-text-enable split-in-fade"> Latest
                                News
                                and Blog</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="rs-blog-btn">
                            <a className="rs-btn has-theme-light-blue has-icon has-bg" href="/blog">Read More Post
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
                <div className="row g-5">
                    <div className="col-xl-6 col-lg-6">
                        <div className="rs-blog-item has-thumb-height wow fadeInLeft" data-wow-delay=".3s"
                            data-wow-duration="1s">
                            <div className="has-bg rs-blog-bg-thumb" data-background="/assets/images/blog/blog-thumb-11.png">
                            </div>
                            <div className="rs-blog-content has-position">
                                <div className="rs-blog-meta">
                                    <div className="rs-blog-meta-item has-white">
                                        <span>
                                            By
                                            <a className="rs-blog-meta-author" href="#"> Nayeem</a>
                                        </span>
                                    </div>
                                    <div className="rs-blog-meta-item has-white">
                                        <span>
                                            Feb 8, 2024
                                        </span>
                                    </div>
                                </div>
                                <h3 className="rs-blog-title has-white has-big underline"> <a
                                        href="/blog-details">Construction
                                        of a new high tech plant in
                                        washingtons</a></h3>
                                <p className="rs-blog-description has-white">Industry's standard dummy text ever since the
                                    1500s,
                                    when an unknown printer took a galley of
                                    type and...</p>
                                <div className="rs-blog-tag has-white has-theme-blue">
                                    <a href="/blog-details">Company</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="row g-5 wow fadeInRight" data-wow-delay=".3s" data-wow-duration="1s">
                            <div className="col-12">
                                <div className="rs-blog-item has-grid">
                                    <div className="rs-blog-content has-padding order-1 order-sm-0">
                                        <div className="rs-blog-meta">
                                            <div className="rs-blog-meta-item">
                                                <span>
                                                    By
                                                    <a className="rs-blog-meta-author" href="#"> Nayeem</a>
                                                </span>
                                            </div>
                                            <div className="rs-blog-meta-item">
                                                <span>
                                                    Feb 8, 2024
                                                </span>
                                            </div>
                                        </div>
                                        <h5 className="rs-blog-title underline has-black"> <a
                                                href="/blog-details">Building
                                                resilient supply
                                                chains for</a></h5>
                                        <p className="rs-blog-description">Industry's standard dummy text ever....</p>
                                        <div className="rs-blog-tag has-theme-blue">
                                            <a href="/blog-details">Oil Factory</a>
                                        </div>
                                    </div>
                                    <div className="rs-blog-thumb order-0 order-sm-1">
                                        <a href="/blog-details">
                                            <img src="/assets/images/blog/blog-thumb-12.png" alt="image" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="rs-blog-item has-grid">
                                    <div className="rs-blog-content has-padding order-1 order-sm-0">
                                        <div className="rs-blog-meta">
                                            <div className="rs-blog-meta-item">
                                                <span>
                                                    By
                                                    <a className="rs-blog-meta-author" href="#"> Nayeem</a>
                                                </span>
                                            </div>
                                            <div className="rs-blog-meta-item">
                                                <span>
                                                    Feb 8, 2024
                                                </span>
                                            </div>
                                        </div>
                                        <h5 className="rs-blog-title underline has-black"> <a
                                                href="/blog-details">Factories
                                                technologies in
                                                interactive and</a></h5>
                                        <p className="rs-blog-description">Industry's standard dummy text ever....</p>
                                        <div className="rs-blog-tag has-theme-blue">
                                            <a href="/blog-details">Manufacture</a>
                                        </div>
                                    </div>
                                    <div className="rs-blog-thumb order-0 order-sm-1">
                                        <a href="/blog-details">
                                            <img src="/assets/images/blog/blog-thumb-13.png" alt="image" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/* blog area end */}

        {/* cta area start */}
                                                                                                                                                    <section className="rs-cta-area rs-cta-three">
                                                                                                                                                        <div className="container has-large">
                                                                                                                                                            <div className="rs-cta-wrapper">
                                                                                                                                                                <div className="rs-cta-bg-thumb" data-background="/assets/images/bg/cta-bg-03.png"></div>
                                                                                                                                                                <div className="row align-items-center g-5">
                                                                                                                                                                    <div className="col-xxl-10 col-xl-9 col-lg-9">
                                                                                                                                                                        <div className="rs-cta-content">
                                                                                                                                                                            <div className="rs-cta-icon">
                                                                                                                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"
                                                                                                                                                                                    fill="none">
                                                                                                                                                                                    <path
                                                                                                                                                                                        d="M1.57485 80H78.4254C78.843 80 79.2435 79.8316 79.5388 79.5319C79.8341 79.2322 80 78.8258 80 78.4019V33.4824C79.9921 33.2159 79.9268 32.9543 79.8087 32.7161C79.6906 32.4778 79.5224 32.2688 79.3162 32.1035L75.1412 28.4508V7.54803C75.1341 7.12896 74.9651 6.72949 74.6705 6.43569C74.376 6.14189 73.9795 5.97729 73.5666 5.97735H49.0924L43.8917 1.41143C42.7959 0.498805 41.4222 0 40.0046 0C38.5871 0 37.2134 0.498805 36.1175 1.41143L30.9078 5.97735H6.43368C6.0207 5.97729 5.62423 6.14189 5.32969 6.43569C5.03516 6.72949 4.86614 7.12896 4.85906 7.54803V28.4965L0.729053 32.067C0.500819 32.2225 0.314558 32.4334 0.187254 32.6806C0.05995 32.9279 -0.00434623 33.2035 0.000228081 33.4824V78.4019C0.000228081 78.8258 0.166125 79.2322 0.461424 79.5319C0.756723 79.8316 1.15723 80 1.57485 80ZM25.0142 55.828L3.17646 74.8223V36.9343L25.0142 55.828ZM76.8148 36.8886V74.9318L54.95 55.8372L76.8148 36.8886ZM51.9627 57.4626L74.1334 76.8039H5.74985L27.9565 57.4626H51.9627ZM75.978 33.3729L75.1412 34.0943V32.6971L75.978 33.3729ZM38.1601 3.87703C38.6888 3.46384 39.3373 3.23977 40.0046 3.23977C40.6719 3.23977 41.3205 3.46384 41.8492 3.87703L44.2426 5.97735H35.7666L38.1601 3.87703ZM8.0083 9.1461H71.9919V36.8247L51.8908 54.2665H28.0555L7.95432 36.8612C7.99051 36.7305 8.00868 36.5952 8.0083 36.4594V9.1461ZM4.85906 34.1856L3.95928 33.4368L4.85906 32.688V34.1856Z"
                                                                                                                                                                                        fill="white"></path>
                                                                                                                                                                                    <path
                                                                                                                                                                                        d="M35.4662 44.5894C39.4438 45.6991 43.6848 45.283 47.3793 43.4206C47.7516 43.228 48.0333 42.8933 48.1624 42.49C48.2915 42.0867 48.2574 41.6478 48.0677 41.27C47.878 40.8922 47.5481 40.6063 47.1507 40.4753C46.7534 40.3443 46.321 40.3789 45.9487 40.5714C42.9985 42.0471 39.6273 42.4096 36.438 41.5942C27.809 38.2428 30.1395 28.9192 30.2115 28.5265C30.9043 25.8783 34.3145 19.1573 41.8187 19.7326C50.2497 20.3992 50.2227 28.2982 50.1327 29.8781C49.9437 33.1655 48.0812 35.6585 46.5875 35.6585H46.5336C46.4124 35.6662 46.291 35.6474 46.1777 35.6033C46.0644 35.5591 45.9617 35.4908 45.8767 35.4028C45.5194 34.7793 45.368 34.0561 45.4448 33.339L46.5066 24.7916C46.5066 24.7186 46.5066 24.6546 46.5066 24.5907C46.5107 24.195 46.3699 23.8118 46.1117 23.5153C45.8534 23.2189 45.4959 23.0302 45.1084 22.9859C44.7209 22.9416 44.331 23.0447 44.0142 23.2754C43.6973 23.5061 43.4761 23.8479 43.3933 24.2346C42.4698 23.4778 41.331 23.0424 40.1451 22.9927H40.0101C36.8069 22.9927 33.1088 25.577 32.4339 30.4625C32.0981 32.1881 32.4385 33.9786 33.3827 35.4536C34.3269 36.9286 35.8007 37.9718 37.4907 38.3615C38.4704 38.5292 39.4738 38.4867 40.4362 38.2366C41.3986 37.9865 42.2987 37.5344 43.0784 36.9096C43.2032 37.113 43.3447 37.3055 43.5013 37.4849C43.8634 37.9079 44.3095 38.2486 44.8103 38.4846C45.3112 38.7207 45.8554 38.8468 46.4076 38.8547C49.8897 39.019 52.994 35.0467 53.2819 30.0607C53.6328 23.7963 50.3036 17.1939 42.0526 16.5456C33.4507 15.8698 28.4299 22.8557 27.1702 27.7138C24.6148 37.5397 31.1292 42.9274 35.4662 44.5894ZM42.3406 32.7181C42.0171 33.553 41.4252 34.2527 40.6609 34.7035C39.8965 35.1544 39.0046 35.33 38.1296 35.2019C37.2263 34.9707 36.449 34.3879 35.9657 33.5796C35.4825 32.7713 35.3321 31.8025 35.5472 30.8826C36.0331 27.4216 38.5075 26.1614 40.0461 26.1614H40.1091C41.5038 26.1614 42.5385 27.8508 42.5655 27.8873C42.658 28.052 42.7801 28.1975 42.9254 28.3165L42.3406 32.7181Z"
                                                                                                                                                                                        fill="white"></path>
                                                                                                                                                                                </svg>
                                                                                                                                                                            </div>
                                                                                                                                                                            <div className="rs-section-title-wrapper">
                                                                                                                                                                                <h2 className="rs-section-title rs-split-text-enable split-in-fade">Your Trust, Our Identity</h2>
                                                                                                                                                                                <p className="rs-cta-description">
                                                                                                                                                                                    Since 1985, Western Bearing delivers ISO-certified, OEM-standard bearings trusted across industries and global markets.
                                                                                                                                                                                </p>
                                                                                                                                                                            </div>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                    <div className="col-xxl-2 col-xl-3 col-lg-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                                                                                                                        <div className="rs-cta-form text-center" style={{ 
                                                                                                                                                                            width: '100%', 
                                                                                                                                                                            display: 'flex', 
                                                                                                                                                                            justifyContent: 'center', 
                                                                                                                                                                            alignItems: 'center'
                                                                                                                                                                        }}>
                                                                                                                                                                            <Link to="/contact" className="rs-btn has-icon" style={{ 
                                                                                                                                                                                display: 'inline-flex', 
                                                                                                                                                                                alignItems: 'center', 
                                                                                                                                                                                gap: '10px',
                                                                                                                                                                                backgroundColor: '#fff',
                                                                                                                                                                                color: '#1f1f1f',
                                                                                                                                                                                border: '1px solid #fff',
                                                                                                                                                                                position: 'relative',
                                                                                                                                                                                margin: '0 auto'
                                                                                                                                                                            }}>
                                                                                                                                                                                Contact Us
                                                                                                                                                                                <span className="icon-box">
                                                                                                                                                                                    <svg className="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                                                                                                                                                                viewBox="0 0 32 32">
                                                                                                                                                                                                <path
                                                                                                                                                                                                    d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"
                                                                                                                                                                                                    fill="#1f1f1f">
                                                                                                                                                                                                </path>
                                                                                                                                                                                            </svg>
                                                                                                                                                                                    <svg className="icon-second" xmlns="http://www.w3.org/2000/svg"
                                                                                                                                                                                                viewBox="0 0 32 32">
                                                                                                                                                                                                <path
                                                                                                                                                                                                    d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"
                                                                                                                                                                                                    fill="#1f1f1f">
                                                                                                                                                                                                </path>
                                                                                                                                                                                            </svg>
                                                                                                                                                                                        </span>
                                                                                                                                                                            </Link>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div>
                                                                                                                                                                </div>
                                                                                                                                                            </div>
                                                                                                                                                        </div>
                                                                                                                                                    </section>
        {/* cta area end */}

    </>
  )
}

export default Laboratory
