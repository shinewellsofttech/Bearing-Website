import { useEffect } from 'react'
import CtaSection from '../components/CtaSection'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function Factory() {
  useSwiper()
  useScripts()

  // Process HTML content for React
  // Note: Keep 'class' as is for dangerouslySetInnerHTML (raw HTML, not JSX)
  const processHTML = (html) => {
    if (!html) return ''
    
    return html
      // Convert image paths
      .replace(/src="assets\//g, 'src="/assets/')
      .replace(/href="assets\//g, 'href="/assets/')
      // Convert data-background paths
      .replace(/data-background="assets\//g, 'data-background="/assets/')
      // Convert href links to React Router paths
      .replace(/href="([^"]+\.html)"/g, (match, path) => {
        let route = path.replace('.html', '')
        if (route === 'index') route = ''
        return `href="${route || '/'}"`
      })
      // Remove script tags
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      // Remove style tags
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  }

  const htmlContent = `

        <!-- banner area start -->
        <section class="rs-banner-area rs-banner-nine rs-swiper">
            <div class="rs-banner-slider-wrapper">
                <div class="swiper" data-clone-slides="false" data-loop="true" data-speed="2000" data-autoplay="true"
                    data-dots-dynamic="false" data-hover-pause="true" data-effect="fade" data-delay="3000" data-item="1"
                    data-margin="30">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="rs-banner-item-wrapper">
                                <div class="rs-banner-bg-thumb" data-background="assets/images/bg/banner-bg-14.png">
                                </div>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-xxl-8 col-xl-9 col-lg-10 col-md-10">
                                            <div class="rs-banner-wrapper">
                                                <span class="rs-banner-stroke-text">
                                                    Western Bearning
                                                </span>
                                                <div class="rs-banner-content">
                                                    <h1 class="rs-banner-title">Industrial production in factories
                                                        occurs worldwide
                                                    </h1>
                                                    <div class="rs-banner-descrip">
                                                        <p>Western Bearning has consistently embraced innovation to provide a
                                                            superior level
                                                            of excellence </p>
                                                    </div>
                                                    <div class="rs-banner-btn">
                                                        <a class="rs-btn has-theme-orange has-icon has-bg"
                                                            href="contact.html">Explore
                                                            More
                                                            <span class="icon-box">
                                                                <svg class="icon-first"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 32 32">
                                                                    <path
                                                                        d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                                    </path>
                                                                </svg>
                                                                <svg class="icon-second"
                                                                    xmlns="http://www.w3.org/2000/svg"
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
                        </div>
                        <div class="swiper-slide">
                            <div class="rs-banner-item-wrapper">
                                <div class="rs-banner-bg-thumb" data-background="assets/images/bg/banner-bg-15.png">
                                </div>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-xxl-8 col-xl-9 col-lg-10 col-md-10">
                                            <div class="rs-banner-wrapper">
                                                <span class="rs-banner-stroke-text">
                                                    Western Bearning
                                                </span>
                                                <div class="rs-banner-content">
                                                    <h1 class="rs-banner-title">Factory industrial production around the
                                                        world
                                                    </h1>
                                                    <div class="rs-banner-descrip">
                                                        <p>Western Bearning has consistently embraced innovation to provide a
                                                            superior level
                                                            of excellence </p>
                                                    </div>
                                                    <div class="rs-banner-info-btn">
                                                        <div class="rs-banner-btn">
                                                            <a class="rs-btn has-theme-orange has-icon has-bg"
                                                                href="contact.html">Explore More
                                                                <span class="icon-box">
                                                                    <svg class="icon-first"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 32 32">
                                                                        <path
                                                                            d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                                        </path>
                                                                    </svg>
                                                                    <svg class="icon-second"
                                                                        xmlns="http://www.w3.org/2000/svg"
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
                            </div>
                        </div>
                    </div>
                    <!-- If we need navigation buttons -->
                    <div class="rs-banner-navigation">
                        <button class="swiper-button-prev rs-swiper-btn has-light-orange"><i
                                class="fa-regular fa-arrow-left"></i></button>
                        <button class="swiper-button-next rs-swiper-btn has-light-orange"><i
                                class="fa-regular fa-arrow-right"></i></button>
                    </div>
                    <!-- if we need pagination -->
                    <div class="rs-banner-pagination d-block d-md-none">
                        <div class="swiper-pagination rs-pagination has-theme-orange"></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- banner area end -->


        <!-- about area start -->
        <section class="rs-about-area section-space rs-about-nine">
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-7 col-lg-7 order-1 order-lg-0">
                        <div class="rs-about-wrapper">
                            <div class="rs-about-content-wrapper">
                                <div class="rs-section-title-wrapper">
                                    <span class="rs-section-subtitle has-theme-orange justify-content-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15"
                                            viewBox="0 0 11 15" fill="none">
                                            <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7">
                                            </path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                                                fill="#0C7BC7"></path>
                                        </svg>
                                        About Western Bearning
                                    </span>
                                    <h2 class="rs-section-title rs-split-text-enable split-in-fade">We work for you
                                        <span class="rs-theme-orange">since 1989</span> Industrial around the world
                                    </h2>
                                    <p class="descrip"> Welcome to Western Bearning, a leading industry innovator with a rich
                                        history of
                                        excellence.</p>
                                </div>
                                <div class="rs-about-tab">
                                    <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="pills-item-one-tab"
                                                data-bs-toggle="pill" data-bs-target="#pills-item-one" type="button"
                                                role="tab" aria-controls="pills-item-one" aria-selected="true">
                                                Our History
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-item-two-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-item-two" type="button" role="tab"
                                                aria-controls="pills-item-two" aria-selected="false"> Our Mission
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-item-three-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-item-three" type="button" role="tab"
                                                aria-controls="pills-item-three" aria-selected="false">
                                                Our Vision
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="rs-aobut-tab-content-wrapper">
                                    <div class="tab-content rs-about-tab-anim" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-item-one" role="tabpanel"
                                            aria-labelledby="pills-item-one-tab" tabindex="0">
                                            <div class="rs-about-tab-content">
                                                <p>Welcome to Western Bearning, a leading industry innovator with a rich
                                                    history of
                                                    excellence
                                                    with a passion make also for precision we have been empowering
                                                    Western Bearnings and
                                                    driving progress for</p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-item-two" role="tabpanel"
                                            aria-labelledby="pills-item-two-tab" tabindex="0">
                                            <div class="rs-about-tab-content">
                                                <p>Welcome to Western Bearning, a leading industry innovator with a rich
                                                    history of
                                                    excellence
                                                    with a passion make also for precision we have been empowering
                                                    Western Bearnings and
                                                    driving progress for</p>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-item-three" role="tabpanel"
                                            aria-labelledby="pills-item-three-tab" tabindex="0">
                                            <div class="rs-about-tab-content">
                                                <p>Welcome to Western Bearning, a leading industry innovator with a rich
                                                    history of
                                                    excellence
                                                    with a passion make also for precision we have been empowering
                                                    Western Bearnings and
                                                    driving progress for</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="rs-about-author-info">
                                    <div class="rs-about-btn">
                                        <a class="rs-btn has-theme-orange has-icon has-bg" href="about.html">Explore
                                            More
                                            <span class="icon-box">
                                                <svg class="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32">
                                                    <path
                                                        d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                    </path>
                                                </svg>
                                                <svg class="icon-second" xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 32 32">
                                                    <path
                                                        d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                    <div class="rs-about-author">
                                        <div class="rs-about-author-thumb">
                                            <img src="assets/images/user/user-thumb-04.png" alt="image">
                                        </div>
                                        <div class="rs-about-author-sign-thumb">
                                            <img src="assets/images/shape/sign-shape.png" alt="image">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-5 order-0 order-lg-1">
                        <div class="rs-about-thumb-wrapper">
                            <div class="rs-about-thumb rs-image scroll_reveal reveal_left reveal-active">
                                <img decoding="async" src="assets/images/about/about-thumb-14.png" alt="image">
                            </div>
                            <div class="rs-about-small-thumb">
                                <img src="assets/images/about/about-thumb-15.png" alt="image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- about area end -->

        <!-- services area start -->
        <section class="rs-services-area rs-services-two section-space-top primary-bg has-theme-orange rs-swiper">
            <div class="rs-services-bg-thumb" data-background="assets/images/bg/services-bg-01.png"></div>
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-3 col-lg-3">
                        <div class="rs-services-content-wrapper">
                            <div class="rs-section-title-wrapper">
                                <span class="rs-section-subtitle has-theme-orange justify-content-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15"
                                        fill="none">
                                        <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                                            fill="#0C7BC7"></path>
                                    </svg>
                                    Services
                                </span>
                                <h2 class="rs-section-title rs-split-text-enable split-in-fade">Providing solutions of
                                    every
                                    kind</h2>
                                <p class="descrip">Engines prime movers and exhaust gas turbochargers. </p>
                                <h6 class="rs-services-text-link">
                                    <a href="contact.html">Start your next gain project</a>
                                </h6>
                            </div>
                            <!-- If we need navigation buttons -->
                            <div class=" rs-services-navigation">
                                <button class="swiper-button-prev rs-swiper-btn has-bg-white has-small hover-orange"><i
                                        class="fa-regular fa-arrow-left"></i></button>
                                <button class="swiper-button-next rs-swiper-btn has-bg-white has-small hover-orange"><i
                                        class="fa-regular fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-9">
                        <div class="rs-services-slide-wrapper">
                            <div class="swiper" data-clone-slides="false" data-loop="true" data-speed="1500"
                                data-autoplay="true" data-dots-dynamic="false" data-hover-pause="true"
                                data-effect="false" data-delay="2500" data-item="3" data-item-xl="2" data-item-lg="2"
                                data-item-md="2" data-item-sm="1" data-item-xs="1" data-item-mobile="1" data-margin="30"
                                data-margin-xl="30">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="rs-services-item">
                                            <div class="rs-services-thumb">
                                                <a href="services-details.html"> <img
                                                        src="assets/images/services/services-thumb-07.png"
                                                        alt="image"></a>
                                            </div>
                                            <div class="rs-services-content">
                                                <h5 class="rs-services-title"><a href="services-details.html">Fuel &amp;
                                                        Gas
                                                        management</a></h5>
                                                <p class="descrip">Consectetur ipiscing elit tellus ullam corper mattis
                                                </p>
                                                <div class="rs-services-btn-wrapper">
                                                    <div class="rs-services-text-btn underline">
                                                        <a class="rs-text-btn has-theme-red"
                                                            href="services-details.html">View
                                                            Details</a>
                                                    </div>
                                                    <div class="rs-services-btn">
                                                        <a class="rs-square-btn has-icon has-light-bg"
                                                            href="services-details.html">
                                                            <span class="icon-box">
                                                                <svg class="icon-first"
                                                                    xmlns="http://www.w3.org/2000/svg" width="12"
                                                                    height="10" viewBox="0 0 12 10" fill="none">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M0 5C0 4.60551 0.319797 4.28571 0.714286 4.28571L8.98985 4.28571L5.92349 1.21936C5.64455 0.940417 5.64455 0.488155 5.92349 0.209209C6.20244 -0.0697365 6.6547 -0.0697365 6.93365 0.209209L11.2194 4.49492C11.4983 4.77387 11.4983 5.22613 11.2194 5.50508L6.93365 9.79079C6.6547 10.0697 6.20244 10.0697 5.92349 9.79079C5.64455 9.51184 5.64455 9.05958 5.92349 8.78064L8.98985 5.71429L0.714286 5.71429C0.319797 5.71429 0 5.39449 0 5Z"
                                                                        fill="#616161"></path>
                                                                </svg>
                                                                <svg class="icon-second"
                                                                    xmlns="http://www.w3.org/2000/svg" width="12"
                                                                    height="10" viewBox="0 0 12 10" fill="none">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M0 5C0 4.60551 0.319797 4.28571 0.714286 4.28571L8.98985 4.28571L5.92349 1.21936C5.64455 0.940417 5.64455 0.488155 5.92349 0.209209C6.20244 -0.0697365 6.6547 -0.0697365 6.93365 0.209209L11.2194 4.49492C11.4983 4.77387 11.4983 5.22613 11.2194 5.50508L6.93365 9.79079C6.6547 10.0697 6.20244 10.0697 5.92349 9.79079C5.64455 9.51184 5.64455 9.05958 5.92349 8.78064L8.98985 5.71429L0.714286 5.71429C0.319797 5.71429 0 5.39449 0 5Z"
                                                                        fill="#616161"></path>
                                                                </svg>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="rs-services-item">
                                            <div class="rs-services-thumb">
                                                <a href="services-details.html"><img
                                                        src="assets/images/services/services-thumb-08.png"
                                                        alt="image"></a>
                                            </div>
                                            <div class="rs-services-content">
                                                <h5 class="rs-services-title"><a href="services-details.html">Oil
                                                        Construction &amp;
                                                        Gas
                                                        Production</a></h5>
                                                <p class="descrip">Consectetur ipiscing elit tellus ullam corper mattis
                                                </p>
                                                <div class="rs-services-btn-wrapper">
                                                    <div class="rs-services-text-btn underline">
                                                        <a class="rs-text-btn has-theme-red"
                                                            href="services-details.html">View
                                                            Details</a>
                                                    </div>
                                                    <div class="rs-services-btn">
                                                        <a class="rs-square-btn has-icon has-light-bg"
                                                            href="services-details.html">
                                                            <span class="icon-box">
                                                                <svg class="icon-first"
                                                                    xmlns="http://www.w3.org/2000/svg" width="12"
                                                                    height="10" viewBox="0 0 12 10" fill="none">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M0 5C0 4.60551 0.319797 4.28571 0.714286 4.28571L8.98985 4.28571L5.92349 1.21936C5.64455 0.940417 5.64455 0.488155 5.92349 0.209209C6.20244 -0.0697365 6.6547 -0.0697365 6.93365 0.209209L11.2194 4.49492C11.4983 4.77387 11.4983 5.22613 11.2194 5.50508L6.93365 9.79079C6.6547 10.0697 6.20244 10.0697 5.92349 9.79079C5.64455 9.51184 5.64455 9.05958 5.92349 8.78064L8.98985 5.71429L0.714286 5.71429C0.319797 5.71429 0 5.39449 0 5Z"
                                                                        fill="#616161"></path>
                                                                </svg>
                                                                <svg class="icon-second"
                                                                    xmlns="http://www.w3.org/2000/svg" width="12"
                                                                    height="10" viewBox="0 0 12 10" fill="none">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M0 5C0 4.60551 0.319797 4.28571 0.714286 4.28571L8.98985 4.28571L5.92349 1.21936C5.64455 0.940417 5.64455 0.488155 5.92349 0.209209C6.20244 -0.0697365 6.6547 -0.0697365 6.93365 0.209209L11.2194 4.49492C11.4983 4.77387 11.4983 5.22613 11.2194 5.50508L6.93365 9.79079C6.6547 10.0697 6.20244 10.0697 5.92349 9.79079C5.64455 9.51184 5.64455 9.05958 5.92349 8.78064L8.98985 5.71429L0.714286 5.71429C0.319797 5.71429 0 5.39449 0 5Z"
                                                                        fill="#616161"></path>
                                                                </svg>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="rs-services-item">
                                            <div class="rs-services-thumb">
                                                <a href="services-details.html"><img
                                                        src="assets/images/services/services-thumb-09.png"
                                                        alt="image"></a>
                                            </div>
                                            <div class="rs-services-content">
                                                <h5 class="rs-services-title"><a href="services-details.html"> Best
                                                        Innovations in
                                                        metallurgy</a></h5>
                                                <p class="descrip">Consectetur ipiscing elit tellus ullam corper mattis
                                                </p>
                                                <div class="rs-services-btn-wrapper">
                                                    <div class="rs-services-text-btn underline">
                                                        <a class="rs-text-btn has-theme-red"
                                                            href="services-details.html">View
                                                            Details</a>
                                                    </div>
                                                    <div class="rs-services-btn">
                                                        <a class="rs-square-btn has-icon has-light-bg"
                                                            href="services-details.html">
                                                            <span class="icon-box">
                                                                <svg class="icon-first"
                                                                    xmlns="http://www.w3.org/2000/svg" width="12"
                                                                    height="10" viewBox="0 0 12 10" fill="none">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M0 5C0 4.60551 0.319797 4.28571 0.714286 4.28571L8.98985 4.28571L5.92349 1.21936C5.64455 0.940417 5.64455 0.488155 5.92349 0.209209C6.20244 -0.0697365 6.6547 -0.0697365 6.93365 0.209209L11.2194 4.49492C11.4983 4.77387 11.4983 5.22613 11.2194 5.50508L6.93365 9.79079C6.6547 10.0697 6.20244 10.0697 5.92349 9.79079C5.64455 9.51184 5.64455 9.05958 5.92349 8.78064L8.98985 5.71429L0.714286 5.71429C0.319797 5.71429 0 5.39449 0 5Z"
                                                                        fill="#616161"></path>
                                                                </svg>
                                                                <svg class="icon-second"
                                                                    xmlns="http://www.w3.org/2000/svg" width="12"
                                                                    height="10" viewBox="0 0 12 10" fill="none">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                                        d="M0 5C0 4.60551 0.319797 4.28571 0.714286 4.28571L8.98985 4.28571L5.92349 1.21936C5.64455 0.940417 5.64455 0.488155 5.92349 0.209209C6.20244 -0.0697365 6.6547 -0.0697365 6.93365 0.209209L11.2194 4.49492C11.4983 4.77387 11.4983 5.22613 11.2194 5.50508L6.93365 9.79079C6.6547 10.0697 6.20244 10.0697 5.92349 9.79079C5.64455 9.51184 5.64455 9.05958 5.92349 8.78064L8.98985 5.71429L0.714286 5.71429C0.319797 5.71429 0 5.39449 0 5Z"
                                                                        fill="#616161"></path>
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- services area end -->

        <!-- video area start -->
        <div class="rs-video-area rs-video-one has-theme-orange">
            <div class="container">
                <div class="rs-video-wrapper jarallax">
                    <div class="rs-video-bg-thumb jarallax-img" data-background="assets/images/bg/video-bg-08.png">
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-7 col-lg-8 col-md-10">
                            <div class="rs-video-content text-center">
                                <div class="rs-video-play-btn">
                                    <a href="https://www.youtube.com/watch?v=go7QYaQR494"
                                        class="rs-play-btn popup-video has-theme-orange"><i
                                            class="fa-duotone fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- video area end -->

        <!-- counter area start -->
        <div class="rs-counter-area rs-counter-one section-space">
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="rs-counter-item">
                            <div class="rs-counter-inner">
                                <div class="rs-counter-number-wrapper">
                                    <span class="rs-counter-number odometer" data-count="50">00</span>
                                    <span class="prefix">+</span>
                                </div>
                                <span class="rs-counter-title">Drilling Fields</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="rs-counter-item">
                            <div class="rs-counter-inner">
                                <div class="rs-counter-number-wrapper">
                                    <span class="rs-counter-number odometer" data-count="49">00</span>
                                    <span class="prefix">%</span>
                                </div>
                                <span class="rs-counter-title">Crane Equipment</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="rs-counter-item">
                            <div class="rs-counter-inner">
                                <div class="rs-counter-number-wrapper">
                                    <span class="rs-counter-number odometer" data-count="20">00</span>
                                    <span class="prefix">m</span>
                                </div>
                                <span class="rs-counter-title">Metal Factory</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="rs-counter-item">
                            <div class="rs-counter-inner">
                                <div class="rs-counter-number-wrapper">
                                    <span class="rs-counter-number odometer" data-count="25">00</span>
                                    <span class="prefix">k</span>
                                </div>
                                <span class="rs-counter-title">Drilling Fields</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- counter area end -->

        <!-- portfolio area start -->
        <section class="rs-portfolio-area section-space rs-portfolio-one rs-swiper primary-bg">
            <div class="container">
                <div class="row  g-5 section-title-space align-items-end">
                    <div class="col-xxl-7 col-xl-8 col-lg-8">
                        <div class="rs-section-title-wrapper">
                            <span class="rs-section-subtitle has-theme-orange justify-content-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15"
                                    fill="none">
                                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                                        fill="#0C7BC7"></path>
                                </svg>
                                Recent Work
                            </span>
                            <h2 class="rs-section-title rs-split-text-enable split-in-fade">Explore Large-Scale Projects
                            </h2>
                        </div>
                    </div>
                    <div class="col-xxl-5 col-xl-4 col-lg-4">
                        <!-- If we need navigation buttons -->
                        <div class=" rs-portfolio-navigation">
                            <button class="swiper-button-prev rs-swiper-btn has-bg-white hover-orange"><i
                                    class="fa-regular fa-arrow-left"></i></button>
                            <button class="swiper-button-next rs-swiper-btn has-bg-white hover-orange"><i
                                    class="fa-regular fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-portfolio-slider-wrapper">
                            <div class="swiper has-space" data-clone-slides="false" data-loop="true" data-speed="1500"
                                data-autoplay="true" data-dots-dynamic="false" data-hover-pause="true"
                                data-effect="false" data-delay="2500" data-item="4" data-item-xl="3" data-item-lg="3"
                                data-item-md="2" data-item-sm="1" data-item-xs="1" data-item-mobile="1" data-margin="30"
                                data-margin-xl="30">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="rs-portfolio-item">
                                            <div class="rs-portfolio-thumb">
                                                <img src="assets/images/portfolio/portfolio-thumb-01.png" alt="image">
                                            </div>
                                            <div class="rs-portfolio-content">
                                                <div class="rs-portfolio-tag">
                                                    <a href="portfolio-details.html">Company</a>
                                                </div>
                                                <h4 class="rs-portfolio-title underline has-white"><a
                                                        href="portfolio-details.html">Metal
                                                        Industry</a></h4>
                                                <div class="rs-portfolio-btn">
                                                    <a href="portfolio-details.html"
                                                        class="rs-btn has-theme-orange has-circle has-icon">
                                                        <span class="icon-box">
                                                            <svg class="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 32 32">
                                                                <path
                                                                    d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                                </path>
                                                            </svg>
                                                            <svg class="icon-second" xmlns="http://www.w3.org/2000/svg"
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
                                    <div class="swiper-slide">
                                        <div class="rs-portfolio-item">
                                            <div class="rs-portfolio-thumb">
                                                <img src="assets/images/portfolio/portfolio-thumb-02.png" alt="image">
                                            </div>
                                            <div class="rs-portfolio-content">
                                                <div class="rs-portfolio-tag">
                                                    <a href="portfolio-details.html">Company</a>
                                                </div>
                                                <h4 class="rs-portfolio-title underline has-white"><a
                                                        href="portfolio-details.html">Metal
                                                        Industry</a></h4>
                                                <div class="rs-portfolio-btn">
                                                    <a href="portfolio-details.html"
                                                        class="rs-btn has-theme-orange has-circle has-icon">
                                                        <span class="icon-box">
                                                            <svg class="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 32 32">
                                                                <path
                                                                    d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                                </path>
                                                            </svg>
                                                            <svg class="icon-second" xmlns="http://www.w3.org/2000/svg"
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
                                    <div class="swiper-slide">
                                        <div class="rs-portfolio-item">
                                            <div class="rs-portfolio-thumb">
                                                <img src="assets/images/portfolio/portfolio-thumb-03.png" alt="image">
                                            </div>
                                            <div class="rs-portfolio-content">
                                                <div class="rs-portfolio-tag">
                                                    <a href="portfolio-details.html">Company</a>
                                                </div>
                                                <h4 class="rs-portfolio-title underline has-white"><a
                                                        href="portfolio-details.html">Manufacture</a></h4>
                                                <div class="rs-portfolio-btn">
                                                    <a href="portfolio-details.html"
                                                        class="rs-btn has-theme-orange has-circle has-icon">
                                                        <span class="icon-box">
                                                            <svg class="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 32 32">
                                                                <path
                                                                    d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                                </path>
                                                            </svg>
                                                            <svg class="icon-second" xmlns="http://www.w3.org/2000/svg"
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
                                    <div class="swiper-slide">
                                        <div class="rs-portfolio-item">
                                            <div class="rs-portfolio-thumb">
                                                <img src="assets/images/portfolio/portfolio-thumb-04.png" alt="image">
                                            </div>
                                            <div class="rs-portfolio-content">
                                                <div class="rs-portfolio-tag">
                                                    <a href="portfolio-details.html">Company</a>
                                                </div>
                                                <h4 class="rs-portfolio-title underline has-white"><a
                                                        href="portfolio-details.html">Oil &amp;
                                                        Gas Factory</a></h4>
                                                <div class="rs-portfolio-btn">
                                                    <a href="portfolio-details.html"
                                                        class="rs-btn has-theme-orange has-circle has-icon">
                                                        <span class="icon-box">
                                                            <svg class="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 32 32">
                                                                <path
                                                                    d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                                                </path>
                                                            </svg>
                                                            <svg class="icon-second" xmlns="http://www.w3.org/2000/svg"
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
                    </div>
                </div>
            </div>
        </section>
        <!-- portfolio area end -->

        <!-- work process area start -->
        <section class="rs-work-process-area section-space rs-work-step-two has-theme-orange-two">
            <div class="rs-work-step-bg-thumb" data-background="assets/images/bg/work-process-03.png"></div>
            <div class="container">
                <div class="row align-items-center g-5">
                    <div class="col-xl-7 col-lg-7">
                        <div class="rs-work-process-content-wrapper">
                            <div class="rs-section-title-wrapper section-title-space">
                                <span class="rs-section-subtitle has-theme-orange justify-content-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15"
                                        fill="none">
                                        <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                                            fill="#0C7BC7"></path>
                                    </svg>
                                    Work Process
                                </span>
                                <h2 class="rs-section-title rs-split-text-enable split-in-fade">How we complete work
                                </h2>
                            </div>
                            <div class="rs-work-step-wrapper">
                                <div class="rs-work-step-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                                    <span class="rs-work-step-number">01</span>
                                    <h5 class="rs-work-step-title">Product Design and Planning</h5>
                                    <div class="rs-work-step-descrip">
                                        <p>The point of using Lorem Ipsum is that it has more-or-less normal.</p>
                                    </div>
                                </div>
                                <div class="rs-work-step-item wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                                    <span class="rs-work-step-number">02</span>
                                    <h5 class="rs-work-step-title">Component Sourcing and Procurement</h5>
                                    <div class="rs-work-step-descrip">
                                        <p>Reader will be distracted by the readable content of a page when looking.</p>
                                    </div>
                                </div>
                                <div class="rs-work-step-item wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                                    <span class="rs-work-step-number">03</span>
                                    <h5 class="rs-work-step-title">Testing and Quality Control</h5>
                                    <div class="rs-work-step-descrip">
                                        <p>Packages and web page editors now use as their default model.</p>
                                    </div>
                                </div>
                                <div class="rs-work-step-item wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
                                    <span class="rs-work-step-number">04</span>
                                    <h5 class="rs-work-step-title">Final Assembly and Integration</h5>
                                    <div class="rs-work-step-descrip">
                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-md-5">
                        <div class="rs-contact-form rs-contact-one has-theme-orange-two wow fadeInRight"
                            data-wow-delay=".3s" data-wow-duration="1s">
                            <div class="rs-contact-bg-thumb" data-background="assets/images/bg/contact-bg-02.png">
                            </div>
                            <h3 class="rs-contact-form-title mb-10">Ask Us a Questionâ€¦</h3>
                            <p class="descrip">The point of using Lorem Ipsum is that it has more-or-less normal</p>
                            <form id="contact-form" action="assets/mailer.php" method="POST">
                                <div class="row g-4">
                                    <div class="col-md-12">
                                        <div class="rs-contact-input">
                                            <input id="name" name="name" type="text" placeholder="Full Name">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="rs-contact-input">
                                            <input id="email" name="email" type="email" placeholder="Email Address">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="rs-contact-input">
                                            <input id="info" name="name" type="text" placeholder="Your Inquiry">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="rs-contact-input">
                                            <textarea id="message" name="message"
                                                placeholder="Write Your Message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="rs-contact-btn">
                                            <button type="submit" class="rs-btn has-theme-orange">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div id="form-messages"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- work process area end -->

        <!-- faq area start -->
        <section class="rs-faq-area section-space rs-faq-one">
            <div class="rs-faq-bg-thumb" data-background="assets/images/bg/faq-bg-03.png"></div>
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-6 col-lg-6">
                        <!-- faq area start -->
                        <div class="rs-faq-wrapper">
                            <div class="rs-section-title-wrapper section-title-space">
                                <span class="rs-section-subtitle has-theme-orange justify-content-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15"
                                        fill="none">
                                        <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                                            fill="#0C7BC7"></path>
                                    </svg>
                                    Faq's
                                </span>
                                <h2 class="rs-section-title rs-split-text-enable split-in-fade">General Questions</h2>
                            </div>
                            <div class="rs-faq-content rs-accordion-one has-theme-orange">
                                <div class="accordion-wrapper">
                                    <div class="accordion" id="accordionExampleOne">
                                        <div class="rs-accordion-item has-border-active">
                                            <h4 class="accordion-header" id="headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                    01. Why is sand important for industry?
                                                    <span class="accordion-btn"></span>
                                                </button>
                                            </h4>
                                            <div id="collapseOne" class="accordion-collapse collapse show"
                                                data-bs-parent="#accordionExampleOne">
                                                <div class="accordion-body"> Randomised words which donâ€™t look even
                                                    slightly
                                                    believable. If you are going to use a passage of Lorem Ipsum, you
                                                    need to be sure
                                                    there isnâ€™t anything.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rs-accordion-item has-border-active">
                                            <h6 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                    aria-expanded="false" aria-controls="collapseTwo">
                                                    02. Can I switch to a different plan?
                                                    <span class="accordion-btn"></span>
                                                </button>
                                            </h6>
                                            <div id="collapseTwo" class="accordion-collapse collapse"
                                                data-bs-parent="#accordionExampleOne">
                                                <div class="accordion-body">Randomised words which donâ€™t look even
                                                    slightly
                                                    believable. If you are going to use a passage of Lorem Ipsum, you
                                                    need to be sure
                                                    there isnâ€™t anything.</div>
                                            </div>
                                        </div>
                                        <div class="rs-accordion-item has-border-active">
                                            <h6 class="accordion-header" id="headingThree">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                    aria-expanded="false" aria-controls="collapseThree">
                                                    03. What should I wear for an industry treatment?
                                                    <span class="accordion-btn"></span>
                                                </button>
                                            </h6>
                                            <div id="collapseThree" class="accordion-collapse collapse"
                                                data-bs-parent="#accordionExampleOne">
                                                <div class="accordion-body">Randomised words which donâ€™t look even
                                                    slightly
                                                    believable. If you are going to use a passage of Lorem Ipsum, you
                                                    need to be sure
                                                    there isnâ€™t anything.</div>
                                            </div>
                                        </div>
                                        <div class="rs-accordion-item has-border-active">
                                            <h6 class="accordion-header" id="headingFour">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                    aria-expanded="false" aria-controls="collapseFour">
                                                    04. Can you give tips for the stock market?
                                                    <span class="accordion-btn"></span>
                                                </button>
                                            </h6>
                                            <div id="collapseFour" class="accordion-collapse collapse"
                                                data-bs-parent="#accordionExampleOne">
                                                <div class="accordion-body">Randomised words which donâ€™t look even
                                                    slightly
                                                    believable. If you are going to use a passage of Lorem Ipsum, you
                                                    need to be sure
                                                    there isnâ€™t anything.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- faq area end -->
                    </div>
                    <!-- testimonial area start -->
                    <div class="col-xl-6 col-lg-6">
                        <div class="rs-testimonial-wrapper rs-testimonial-two rs-swiper">
                            <div class="rs-section-title-wrapper section-title-space">
                                <span class="rs-section-subtitle has-theme-red justify-content-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15"
                                        fill="none">
                                        <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                                            fill="#0C7BC7"></path>
                                    </svg>
                                    Reviews
                                </span>
                                <h2 class="rs-section-title rs-split-text-enable split-in-fade">Customer Feedback</h2>
                            </div>
                            <div class="rs-testimonial-slider-wrapper">
                                <div class="swiper" data-clone-slides="false" data-loop="true" data-speed="1500"
                                    data-autoplay="true" data-dots-dynamic="false" data-hover-pause="true"
                                    data-effect="false" data-delay="2500" data-item="1" data-item-xl="1"
                                    data-item-lg="1" data-item-md="1" data-item-sm="1" data-item-xs="1"
                                    data-item-mobile="1" data-margin="30" data-margin-xl="30">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="rs-testimonial-item">
                                                <div class="rs-testimonial-avater-thumb">
                                                    <div class="rs-testimonial-thumb">
                                                        <img src="assets/images/user/user-thumb-01.png" alt="image">
                                                    </div>
                                                    <div class="rs-testimonial-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="29"
                                                            viewBox="0 0 40 29" fill="none">
                                                            <path
                                                                d="M2.85714 29H11.4286L17.1429 17.4V0H0V17.4H8.57143L2.85714 29ZM25.7143 29H34.2857L40 17.4V0H22.8571V17.4H31.4286L25.7143 29Z"
                                                                fill="white" fill-opacity="0.4"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="rs-testimonial-content">
                                                    <h5 class="rs-testimonial-title">Best Company</h5>
                                                    <div class="rs-testimonial-description">
                                                        <p>Podcasting operational change management inside of workflows
                                                            to establish a
                                                            framework Taking seamless key performance indicators.</p>
                                                    </div>
                                                    <div class="rs-tesimonial-avater-info">
                                                        <h6 class="rs-testimonial-avater-title">Nayeem</h6>
                                                        <span class="rs-testimonial-avater-designation">Manager</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="rs-testimonial-item">
                                                <div class="rs-testimonial-avater-thumb">
                                                    <div class="rs-testimonial-thumb">
                                                        <img src="assets/images/user/user-thumb-02.png" alt="image">
                                                    </div>
                                                    <div class="rs-testimonial-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="29"
                                                            viewBox="0 0 40 29" fill="none">
                                                            <path
                                                                d="M2.85714 29H11.4286L17.1429 17.4V0H0V17.4H8.57143L2.85714 29ZM25.7143 29H34.2857L40 17.4V0H22.8571V17.4H31.4286L25.7143 29Z"
                                                                fill="white" fill-opacity="0.4"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="rs-testimonial-content">
                                                    <h5 class="rs-testimonial-title">Best Company</h5>
                                                    <div class="rs-testimonial-description">
                                                        <p>Podcasting operational change management inside of workflows
                                                            to establish a
                                                            framework Taking seamless key performance indicators.</p>
                                                    </div>
                                                    <div class="rs-tesimonial-avater-info">
                                                        <h6 class="rs-testimonial-avater-title">Abdur Rashid</h6>
                                                        <span class="rs-testimonial-avater-designation">Founder &amp;
                                                            CEO</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="rs-testimonial-item">
                                                <div class="rs-testimonial-avater-thumb">
                                                    <div class="rs-testimonial-thumb">
                                                        <img src="assets/images/user/user-thumb-03.png" alt="image">
                                                    </div>
                                                    <div class="rs-testimonial-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="29"
                                                            viewBox="0 0 40 29" fill="none">
                                                            <path
                                                                d="M2.85714 29H11.4286L17.1429 17.4V0H0V17.4H8.57143L2.85714 29ZM25.7143 29H34.2857L40 17.4V0H22.8571V17.4H31.4286L25.7143 29Z"
                                                                fill="white" fill-opacity="0.4"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div class="rs-testimonial-content">
                                                    <h5 class="rs-testimonial-title">Best Company</h5>
                                                    <div class="rs-testimonial-description">
                                                        <p>Podcasting operational change management inside of workflows
                                                            to establish a
                                                            framework Taking seamless key performance indicators.</p>
                                                    </div>
                                                    <div class="rs-tesimonial-avater-info">
                                                        <h6 class="rs-testimonial-avater-title">Tom Hanks</h6>
                                                        <span class="rs-testimonial-avater-designation">Customer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- If we need navigation buttons -->
                                    <div class=" rs-testimonial-navigation">
                                        <button
                                            class="swiper-button-prev rs-swiper-btn has-bg-white hover-black has-small"><i
                                                class="fa-regular fa-arrow-left"></i></button>
                                        <button
                                            class="swiper-button-next rs-swiper-btn has-bg-white hover-black has-small"><i
                                                class="fa-regular fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- testimonial area end -->
                </div>
            </div>
        </section>
        <!-- faq area end -->

        <!-- blog area start -->
        <section class="rs-blog-area section-space rs-blog-two has-theme-orange has-pos-none rs-swiper">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-xl-7 col-lg-8">
                        <div class="rs-section-title-wrapper text-center section-title-space">
                            <span class="rs-section-subtitle has-theme-orange">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15"
                                    fill="none">
                                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                                        fill="#0C7BC7"></path>
                                </svg>
                                News &amp; Blog
                            </span>
                            <h2 class="rs-section-title rs-split-text-enable split-in-fade">Discover the future
                                factories and
                                Western Bearnings
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="rs-blog-slider">
                    <div class="swiper" data-clone-slides="false" data-loop="true" data-speed="1500"
                        data-autoplay="true" data-dots-dynamic="false" data-hover-pause="true" data-effect="false"
                        data-delay="2500" data-item="3" data-item-xl="3" data-item-lg="3" data-item-md="2"
                        data-item-sm="1" data-item-xs="1" data-item-mobile="1" data-margin="30" data-margin-xl="30">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="rs-blog-item">
                                    <div class="rs-blog-thumb">
                                        <a href="blog-details.html"> <img src="assets/images/blog/blog-thumb-04.png"
                                                alt="image"></a>
                                    </div>
                                    <div class="rs-blog-content">
                                        <div class="rs-blog-tag has-theme-orange">
                                            <a href="blog-details.html">Company</a>
                                        </div>
                                        <h5 class="rs-blog-title underline has-black"> <a
                                                href="blog-details.html">Construction of
                                                a
                                                new high tech plant in Washington</a></h5>
                                        <div class="rs-blog-meta">
                                            <div class="rs-blog-meta-item">
                                                <span>
                                                    By
                                                    <a class="rs-blog-meta-author" href="#"> Nayeem</a>
                                                </span>
                                            </div>
                                            <div class="rs-blog-meta-item">
                                                <span>
                                                    Feb 8, 2024
                                                </span>
                                            </div>
                                        </div>
                                        <div class="rs-blog-btn-wrapper">
                                            <span class="rs-blog-meta-text">22 min read</span>
                                            <a class="rs-square-btn has-icon has-light-grey" href="blog-details.html">
                                                <span class="icon-box">
                                                    <i class="ri-arrow-right-line icon-first"></i>
                                                    <i class="ri-arrow-right-line icon-second"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="rs-blog-item">
                                    <div class="rs-blog-thumb">
                                        <a href="blog-details.html"> <img src="assets/images/blog/blog-thumb-05.png"
                                                alt="image"></a>
                                    </div>
                                    <div class="rs-blog-content">
                                        <div class="rs-blog-tag has-theme-orange">
                                            <a href="blog-details.html">industry</a>
                                        </div>
                                        <h5 class="rs-blog-title underline has-black"> <a
                                                href="blog-details.html">Building
                                                resilient supply for Western Bearnings and factorie</a></h5>
                                        <div class="rs-blog-meta">
                                            <div class="rs-blog-meta-item">
                                                <span>
                                                    By
                                                    <a class="rs-blog-meta-author" href="#"> Nayeem</a>
                                                </span>
                                            </div>
                                            <div class="rs-blog-meta-item">
                                                <span>
                                                    Feb 8, 2024
                                                </span>
                                            </div>
                                        </div>
                                        <div class="rs-blog-btn-wrapper">
                                            <span class="rs-blog-meta-text">22 min read</span>
                                            <a class="rs-square-btn has-icon has-light-grey" href="blog-details.html">
                                                <span class="icon-box">
                                                    <i class="ri-arrow-right-line icon-first"></i>
                                                    <i class="ri-arrow-right-line icon-second"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="rs-blog-item">
                                    <div class="rs-blog-thumb">
                                        <a href="blog-details.html"> <img src="assets/images/blog/blog-thumb-06.png"
                                                alt="image"></a>
                                    </div>
                                    <div class="rs-blog-content">
                                        <div class="rs-blog-tag has-theme-orange">
                                            <a href="blog-details.html">Gas &amp; Oil</a>
                                        </div>
                                        <h5 class="rs-blog-title underline has-black"> <a href="blog-details.html">
                                                Interactive
                                                technologies in factories and plants</a></h5>
                                        <div class="rs-blog-meta">
                                            <div class="rs-blog-meta-item">
                                                <span>
                                                    By
                                                    <a class="rs-blog-meta-author" href="#"> Nayeem</a>
                                                </span>
                                            </div>
                                            <div class="rs-blog-meta-item">
                                                <span>
                                                    Feb 8, 2024
                                                </span>
                                            </div>
                                        </div>
                                        <div class="rs-blog-btn-wrapper">
                                            <span class="rs-blog-meta-text">22 min read</span>
                                            <a class="rs-square-btn has-icon has-light-grey" href="blog-details.html">
                                                <span class="icon-box">
                                                    <i class="ri-arrow-right-line icon-first"></i>
                                                    <i class="ri-arrow-right-line icon-second"></i>
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
        </section>
        <!-- blog area end -->

        <!-- brand area start -->
        <div class="rs-brand-area rs-brand-five section-space-bottom rs-swiper has-pos-none">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-brand-wrapper">
                            <div class="swiper" data-clone-slides="false" data-loop="true" data-speed="1500"
                                data-autoplay="false" data-dots-dynamic="false" data-center-mode="false"
                                data-hover-pause="true" data-effect="false" data-delay="1500" data-item="6"
                                data-item-xl="4" data-item-lg="4" data-item-md="3" data-item-sm="2" data-item-xs="2"
                                data-item-mobile="1">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="rs-brand-item">
                                            <div class="rs-brand-thumb">
                                                <img src="assets/images/brand/brand-thumb-02.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="rs-brand-item">
                                            <div class="rs-brand-thumb">
                                                <img src="assets/images/brand/brand-thumb-03.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="rs-brand-item">
                                            <div class="rs-brand-thumb">
                                                <img src="assets/images/brand/brand-thumb-04.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="rs-brand-item">
                                            <div class="rs-brand-thumb">
                                                <img src="assets/images/brand/brand-thumb-05.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="rs-brand-item">
                                            <div class="rs-brand-thumb">
                                                <img src="assets/images/brand/brand-thumb-06.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="rs-brand-item">
                                            <div class="rs-brand-thumb">
                                                <img src="assets/images/brand/brand-thumb-07.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="rs-brand-item">
                                            <div class="rs-brand-thumb">
                                                <img src="assets/images/brand/brand-thumb-02.png" alt="image">
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
        <!-- brand area end -->



    `

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: processHTML(htmlContent) }} />
      <CtaSection />
    </>
  )
}

export default Factory
