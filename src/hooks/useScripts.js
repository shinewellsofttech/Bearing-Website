import { useEffect } from 'react'

export function useScripts() {
  useEffect(() => {
    // Initialize WOW animations
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

    // Initialize PureCounter
    if (typeof window !== 'undefined' && window.PureCounter) {
      new window.PureCounter()
      new window.PureCounter({
        filesizing: true,
        selector: '.filesizecount',
        pulse: 2,
      })
    }

    // Initialize Nice Select
    if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.niceSelect) {
      window.jQuery('select').niceSelect()
    }

    // Initialize Lenis smooth scroll if element exists
    if (typeof window !== 'undefined' && window.Lenis && document.querySelector('.rs-smoother-yes')) {
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

    // Set data-background images
    document.querySelectorAll('[data-background]').forEach((el) => {
      const bg = el.getAttribute('data-background')
      if (bg) {
        el.style.backgroundImage = `url(${bg})`
      }
    })

    // Set data-width
    document.querySelectorAll('[data-width]').forEach((el) => {
      const width = el.getAttribute('data-width')
      if (width) {
        el.style.width = width
      }
    })

    // Set data-bg-color
    document.querySelectorAll('[data-bg-color]').forEach((el) => {
      const color = el.getAttribute('data-bg-color')
      if (color) {
        el.style.backgroundColor = color
      }
    })

    // Initialize Jarallax
    if (typeof window !== 'undefined' && window.jarallax) {
      window.jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.5,
      })
    }

    // Initialize MagnificPopup for images
    if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.magnificPopup) {
      window.jQuery('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true,
        },
      })

      window.jQuery('.popup-video').magnificPopup({
        type: 'iframe',
      })
    }

    // Mobile menu initialization
    if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.meanmenu) {
      window.jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: '1199',
        meanExpand: ['<i class="fa-regular fa-plus"></i>'],
      })
    }
  }, [])
}

