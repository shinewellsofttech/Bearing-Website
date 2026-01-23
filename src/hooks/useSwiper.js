import { useEffect } from 'react'

export function useSwiper() {
  useEffect(() => {
    // Initialize Swiper instances
    if (typeof window !== 'undefined' && window.Swiper) {
      // Initialize all swipers with data attributes
      document.querySelectorAll('.rs-swiper .swiper').forEach((swiperEl, index) => {
        const hoverAutoplay = swiperEl.dataset.hoverPause !== 'false'
        const loop = swiperEl.dataset.loop !== 'false'
        const centeredSlides = swiperEl.dataset.centerMode === 'true'
        const autoplay = swiperEl.dataset.autoplay !== 'false'
        const dynamicBullets = swiperEl.dataset.dotsDynamic !== 'false'
        const direction = swiperEl.dataset.direction === 'vertical' ? 'vertical' : 'horizontal'
        const effect = swiperEl.dataset.effect || 'slide'
        const grabCursor = swiperEl.dataset.grabCursor === 'true'
        const slidesPerView = parseInt(swiperEl.dataset.item) || 1
        const speed = parseInt(swiperEl.dataset.speed) || 500
        const gap = swiperEl.dataset.noGap === 'true' ? 0 : 30
        const margin = parseInt(swiperEl.dataset.margin) || gap

        const rsNavPrev = `rs-nav-prev-${index}`
        const rsNavNext = `rs-nav-next-${index}`
        const rsPagination = `rs-pagination-${index}`

        const swiper = new window.Swiper(swiperEl, {
          loop,
          autoplay: autoplay ? { delay: 3000 } : false,
          direction,
          effect,
          grabCursor,
          centeredSlides,
          slidesPerView,
          spaceBetween: margin,
          speed,
          pagination: {
            el: `.${rsPagination}`,
            dynamicBullets,
            clickable: true,
          },
          navigation: {
            nextEl: `.${rsNavPrev}`,
            prevEl: `.${rsNavNext}`,
          },
          breakpoints: {
            10: {
              slidesPerView: parseInt(swiperEl.dataset.itemMobile) || 1,
              spaceBetween: parseInt(swiperEl.dataset.marginMobile) || margin,
            },
            481: {
              slidesPerView: parseInt(swiperEl.dataset.itemXs) || 1,
              spaceBetween: parseInt(swiperEl.dataset.marginXs) || margin,
            },
            576: {
              slidesPerView: parseInt(swiperEl.dataset.itemSm) || 1,
              spaceBetween: parseInt(swiperEl.dataset.marginSm) || margin,
            },
            768: {
              slidesPerView: parseInt(swiperEl.dataset.itemMd) || 1,
              spaceBetween: parseInt(swiperEl.dataset.marginMd) || margin,
            },
            992: {
              slidesPerView: parseInt(swiperEl.dataset.itemLg) || 1,
              spaceBetween: parseInt(swiperEl.dataset.marginLg) || margin,
            },
            1025: {
              slidesPerView: parseInt(swiperEl.dataset.itemXl) || 1,
              spaceBetween: parseInt(swiperEl.dataset.marginXl) || margin,
            },
            1201: {
              slidesPerView,
              spaceBetween: margin,
            }
          }
        })

        if (hoverAutoplay) {
          swiperEl.addEventListener('mouseenter', () => {
            if (swiper.autoplay) swiper.autoplay.stop()
          })
          swiperEl.addEventListener('mouseleave', () => {
            if (swiper.autoplay) swiper.autoplay.start()
          })
        }
      })
    }
  }, [])
}

