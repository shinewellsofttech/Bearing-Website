import { useEffect } from 'react'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function ArchitectureOnePage() {
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

        <!-- border line area start -->
        <div class="rs-common-line d-none d-sm-block">
            <div class="container">
                <div class="line__wrap">
                    <div class="line__item"></div>
                </div>
                <div class="line__wrap-two">
                    <div class="line__item-two"></div>
                </div>
            </div>
        </div>
        <!-- border line area start -->



        <!-- banner area start -->
        <section id="home" class="rs-banner-area rs-banner-eleven rs-swiper">
            <span class="rs-banner-stroke-text">Architect</span>
            <span class="rs-banner-meta-text">Contact Info â†’ Scroll Down </span>
            <div class="rs-banner-slider-wrapper">
                <div class="swiper" data-clone-slides="false" data-loop="true" data-speed="2000" data-autoplay="true"
                    data-dots-dynamic="false" data-hover-pause="true" data-effect="fade" data-delay="1000" data-item="1"
                    data-item-xl="1" data-item-lg="1" data-item-md="1" data-item-sm="1" data-item-xs="1"
                    data-item-mobile="1" data-margin="30" data-margin-xl="30" data-margin-lg="30" data-margin-md="30"
                    data-margin-sm="30" data-margin-xs="30" data-margin-mobile="30">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="rs-banner-item-wrapper">
                                <div class="rs-banner-bg-thumb" data-background="assets/images/bg/banner-bg-18.png">
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-6 col-xl-8 col-lg-8">
                                            <div class="rs-banner-item">
                                                <div class="rs-banner-content">
                                                    <h1 class="rs-banner-title">We're in Business to Make Industrial
                                                        Factory
                                                    </h1>
                                                    <div class="rs-banner-descrip">
                                                        <p>At the heart of the global landscape the industry stands as
                                                            multidimensional force of progress. </p>
                                                    </div>
                                                    <div class="rs-banner-btn">
                                                        <a class="rs-btn has-theme-deep-blue has-icon has-bg"
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
                        <div class="swiper-slide">
                            <div class="rs-banner-item-wrapper">
                                <div class="rs-banner-bg-thumb" data-background="assets/images/bg/banner-bg-19.png">
                                </div>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-xxl-6 col-xl-8 col-lg-8">
                                            <div class="rs-banner-item">
                                                <div class="rs-banner-content">
                                                    <h1 class="rs-banner-title">architecture For manufacturing factories
                                                    </h1>
                                                    <div class="rs-banner-descrip">
                                                        <p>At the heart of the global landscape the industry stands as
                                                            multidimensional force of progress. </p>
                                                    </div>
                                                    <div class="rs-banner-btn">
                                                        <a class="rs-btn has-theme-deep-blue has-icon has-bg"
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
                    <!-- If we need navigation buttons -->
                    <div class="rs-banner-navigation">
                        <button class="swiper-button-prev rs-swiper-btn has-theme-deep-blue"><i
                                class="fa-regular fa-arrow-left"></i></button>
                        <button class="swiper-button-next rs-swiper-btn has-theme-deep-blue"><i
                                class="fa-regular fa-arrow-right"></i></button>
                    </div>
                    <!-- if we need pagination -->
                    <div class="rs-banner-pagination d-block d-md-none">
                        <div class="swiper-pagination rs-pagination has-theme-deep-blue"></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- banner area end -->

        <!-- contact area start -->
        <section class="rs-contact-area rs-contact-two">
            <!-- <div class="rs-contact-bg-thumb" data-background="assets/images/bg/contact-bg-08.png"></div> -->
            <div class="container">
                <div class="row align-items-center g-5">
                    <div class="col-xl-4 col-lg-4">
                        <div class="rs-award-item">
                            <div class="rs-award-item-thumb" data-background="assets/images/bg/award-bg-01.png"></div>
                            <div class="rs-award-content">
                                <div class="rs-award-icon">
                                    <img src="assets/images/icon/award-icon-01.png" alt="image">
                                </div>
                                <h5 class="rs-award-title">We're Award Winning Company</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-8">
                        <div class="rs-contact-wrapper">
                            <div class="rs-contact-bg-thumb" data-background="assets/images/bg/contact-bg-08.png"></div>
                            <div class="rs-contact-inner">
                                <div class="rs-contact-item wow fadeIn" data-wow-delay=".3s">
                                    <div class="rs-contact-icon">
                                        <img src="assets/images/icon/contact-icon-01.png" alt="image">
                                    </div>
                                    <div class="rs-contact-content">
                                        <span>Working Hour</span>
                                        <p class="">Mon - Sat 07:00 - 22:00</p>
                                    </div>
                                </div>
                                <div class="rs-contact-item wow fadeIn" data-wow-delay=".5s">
                                    <div class="rs-contact-icon">
                                        <img src="assets/images/icon/contact-icon-02.png" alt="image">
                                    </div>
                                    <div class="rs-contact-content">
                                        <span>Call Any Time</span>
                                        <h6><a href="tel:+91 982 902 3064">+91 982 902 3064</a></h6>
                                    </div>
                                </div>
                                <div class="rs-contact-item wow fadeIn" data-wow-delay=".7s">
                                    <div class="rs-contact-icon">
                                        <img src="assets/images/icon/contact-icon-03.png" alt="image">
                                    </div>
                                    <div class="rs-contact-content">
                                        <span>Say Something</span>
                                        <h6><a href="mailto:westernbearing1988@gmail.com">westernbearing1988@gmail.com</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- contact area end -->

        <!-- feature area start -->
        <section class="rs-feature-area rs-feature-seven section-space">
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="rs-feature-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                            <div class="rs-feature-icon">
                                <img src="assets/images/icon/feature-icon-10.png" alt="image">
                            </div>
                            <h3 class="rs-feature-title">Buildings </h3>
                            <div class="rs-feature-descrip">
                                <p>Many desktop publishing packages and web page editors now use Lorem as their default
                                    model
                                    text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="rs-feature-item wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                            <div class="rs-feature-icon">
                                <img src="assets/images/icon/feature-icon-11.png" alt="image">
                            </div>
                            <h3 class="rs-feature-title">Civil Infrastructure</h3>
                            <div class="rs-feature-descrip">
                                <p>Many desktop publishing packages and web page editors now use Lorem as their default
                                    model
                                    text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="rs-feature-item wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                            <div class="rs-feature-icon">
                                <img src="assets/images/icon/feature-icon-12.png" alt="image">
                            </div>
                            <h3 class="rs-feature-title">Multipurpose</h3>
                            <div class="rs-feature-descrip">
                                <p>Many desktop publishing packages and web page editors now use Lorem as their default
                                    model
                                    text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- feature area start -->

        <!-- about area start -->
        <section id="homeabout" class="rs-about-area section-space-bottom rs-about-eleven">
            <div class="rs-about-shape">
                <img src="assets/images/shape/about-shape-05.png" alt="image">
            </div>
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-7 col-lg-7 order-1 order-lg-0">
                        <div class="rs-about-wrapper">
                            <div class="rs-about-content-wrapper">
                                <div class="rs-section-title-wrapper">
                                    <span class="rs-section-subtitle has-theme-deep-blue justify-content-start">
                                        About Western Bearning
                                    </span>
                                    <h2 class="rs-section-title rs-split-text-enable split-in-fade">We have working for
                                        <span class="rs-theme-deep-blue">25</span> <br>
                                        years around the worldwide </h2>
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
                                                <div class="rs-about-feature-list">
                                                    <div class="rs-list-item has-theme-deep-blue">
                                                        <ul>
                                                            <li>
                                                                <i class="fa-regular fa-check"></i>
                                                                Quality Control System
                                                            </li>
                                                            <li>
                                                                <i class="fa-regular fa-check"></i>
                                                                Building Quality Industrial
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
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
                                                <div class="rs-about-feature-list">
                                                    <div class="rs-list-item has-theme-deep-blue">
                                                        <ul>
                                                            <li>
                                                                <i class="fa-regular fa-check"></i>
                                                                Quality Control System
                                                            </li>
                                                            <li>
                                                                <i class="fa-regular fa-check"></i>
                                                                Building Quality Industrial
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
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
                                                <div class="rs-about-feature-list">
                                                    <div class="rs-list-item has-theme-deep-blue">
                                                        <ul>
                                                            <li>
                                                                <i class="fa-regular fa-check"></i>
                                                                Quality Control System
                                                            </li>
                                                            <li>
                                                                <i class="fa-regular fa-check"></i>
                                                                Building Quality Industrial
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="rs-about-btn">
                                    <a class="rs-btn has-theme-deep-blue has-icon has-bg" href="about.html">Explore More
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
                    <div class="col-xl-5 col-lg-5 order-0 order-lg-1">
                        <div class="rs-about-thumb-wrapper">
                            <div class="rs-about-thumb rs-image scroll_reveal reveal_left reveal-active">
                                <img decoding="async" src="assets/images/about/about-thumb-14.png" alt="image">
                            </div>
                            <div class="rs-about-small-thumb">
                                <img src="assets/images/about/about-thumb-15.png" alt="image">
                                <div class="rs-about-btn">
                                    <a href="https://www.youtube.com/watch?v=Yue48fUXuqI"
                                        class="rs-play-btn popup-video has-theme-deep-blue"><i
                                            class="ri-play-fill"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- about area end -->

        <!-- services-area start -->
        <section id="homeservices" class="rs-services-area section-space-bottom rs-services-ten">
            <div class="container">
                <div class="row  g-5 justify-content-center section-title-space align-items-center">
                    <div class="col-xl-7 col-lg-7 col-md-8 col-sm-10">
                        <div class="rs-section-title-wrapper text-center">
                            <span class="rs-section-subtitle has-theme-deep-blue">
                                What We Do
                            </span>
                            <h2 class="rs-section-title rs-split-text-enable split-in-fade">We provide our services all
                                over
                                world</h2>
                        </div>
                    </div>
                </div>
                <div class="rs-services-tab-wrapper auto-switch">
                    <div class="row align-items-center g-5">
                        <div class="col-xl-4 col-lg-4">
                            <div class="rs-services-tab">
                                <ul class="nav nav-pills" id="pills-tab2" role="tablist">
                                    <li class="nav-item active" role="presentation">
                                        <span class="rs-services-tab-number">01</span>
                                        <button class="nav-link active" id="pills-item-four-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-item-four" type="button" role="tab"
                                            aria-controls="pills-item-one" aria-selected="true">
                                            Architecture <span class="rs-services-icon"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="51" height="12"
                                                    viewBox="0 0 51 12" fill="none">
                                                    <path
                                                        d="M50.5303 6.53033C50.8232 6.23744 50.8232 5.76256 50.5303 5.46967L45.7574 0.696699C45.4645 0.403806 44.9896 0.403806 44.6967 0.696699C44.4038 0.989593 44.4038 1.46447 44.6967 1.75736L48.9393 6L44.6967 10.2426C44.4038 10.5355 44.4038 11.0104 44.6967 11.3033C44.9896 11.5962 45.4645 11.5962 45.7574 11.3033L50.5303 6.53033ZM0 6.75H50V5.25H0V6.75Z"
                                                        fill="#3B37FD"></path>
                                                </svg></span>
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <span class="rs-services-tab-number">02</span>
                                        <button class="nav-link" id="pills-item-five-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-item-five" type="button" role="tab"
                                            aria-controls="pills-item-two" aria-selected="false"> Construction <span
                                                class="rs-services-icon"><svg xmlns="http://www.w3.org/2000/svg"
                                                    width="51" height="12" viewBox="0 0 51 12" fill="none">
                                                    <path
                                                        d="M50.5303 6.53033C50.8232 6.23744 50.8232 5.76256 50.5303 5.46967L45.7574 0.696699C45.4645 0.403806 44.9896 0.403806 44.6967 0.696699C44.4038 0.989593 44.4038 1.46447 44.6967 1.75736L48.9393 6L44.6967 10.2426C44.4038 10.5355 44.4038 11.0104 44.6967 11.3033C44.9896 11.5962 45.4645 11.5962 45.7574 11.3033L50.5303 6.53033ZM0 6.75H50V5.25H0V6.75Z"
                                                        fill="#3B37FD"></path>
                                                </svg></span>
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <span class="rs-services-tab-number">03</span>
                                        <button class="nav-link" id="pills-item-six-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-item-six" type="button" role="tab"
                                            aria-controls="pills-item-three" aria-selected="false">
                                            Interior design<span class="rs-services-icon"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="51" height="12"
                                                    viewBox="0 0 51 12" fill="none">
                                                    <path
                                                        d="M50.5303 6.53033C50.8232 6.23744 50.8232 5.76256 50.5303 5.46967L45.7574 0.696699C45.4645 0.403806 44.9896 0.403806 44.6967 0.696699C44.4038 0.989593 44.4038 1.46447 44.6967 1.75736L48.9393 6L44.6967 10.2426C44.4038 10.5355 44.4038 11.0104 44.6967 11.3033C44.9896 11.5962 45.4645 11.5962 45.7574 11.3033L50.5303 6.53033ZM0 6.75H50V5.25H0V6.75Z"
                                                        fill="#3B37FD"></path>
                                                </svg></span>
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <span class="rs-services-tab-number">04</span>
                                        <button class="nav-link" id="pills-item-seven-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-item-seven" type="button" role="tab"
                                            aria-controls="pills-item-four" aria-selected="false">
                                            Consultancy<span class="rs-services-icon"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="51" height="12"
                                                    viewBox="0 0 51 12" fill="none">
                                                    <path
                                                        d="M50.5303 6.53033C50.8232 6.23744 50.8232 5.76256 50.5303 5.46967L45.7574 0.696699C45.4645 0.403806 44.9896 0.403806 44.6967 0.696699C44.4038 0.989593 44.4038 1.46447 44.6967 1.75736L48.9393 6L44.6967 10.2426C44.4038 10.5355 44.4038 11.0104 44.6967 11.3033C44.9896 11.5962 45.4645 11.5962 45.7574 11.3033L50.5303 6.53033ZM0 6.75H50V5.25H0V6.75Z"
                                                        fill="#3B37FD"></path>
                                                </svg></span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-8 col-lg-8">
                            <div class="tab-content rs-services-tab-anim" id="pills-tabContent2">
                                <div class="tab-pane fade show active" id="pills-item-four" role="tabpanel"
                                    aria-labelledby="pills-item-four-tab" tabindex="0">
                                    <div class="rs-services-tab-item">
                                        <div class="rs-services-bg-thumb"
                                            data-background="assets/images/services/services-thumb-27.png"></div>
                                        <div class="rs-services-tab-content">
                                            <div class="rs-services-descrip">
                                                <p> we have been empowering Western Bearnings and driving progress for over 30
                                                    years. </p>
                                            </div>
                                            <div class="rs-services-tab-btn">
                                                <a class="rs-btn has-theme-deep-blue has-icon has-bg"
                                                    href="services.html">Explore
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
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-item-five" role="tabpanel"
                                    aria-labelledby="pills-item-five-tab" tabindex="0">
                                    <div class="rs-services-tab-item">
                                        <div class="rs-services-bg-thumb"
                                            data-background="assets/images/services/services-thumb-28.png"></div>
                                        <div class="rs-services-tab-content">
                                            <div class="rs-services-descrip">
                                                <p> we have been empowering Western Bearnings and driving progress for over 30
                                                    years. </p>
                                            </div>
                                            <div class="rs-services-tab-btn">
                                                <a class="rs-btn has-theme-deep-blue has-icon has-bg"
                                                    href="services.html">Explore
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
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-item-six" role="tabpanel"
                                    aria-labelledby="pills-item-six-tab" tabindex="0">
                                    <div class="rs-services-tab-item">
                                        <div class="rs-services-bg-thumb"
                                            data-background="assets/images/services/services-thumb-29.png"></div>
                                        <div class="rs-services-tab-content">
                                            <div class="rs-services-descrip">
                                                <p> we have been empowering Western Bearnings and driving progress for over 30
                                                    years. </p>
                                            </div>
                                            <div class="rs-services-tab-btn">
                                                <a class="rs-btn has-theme-deep-blue has-icon has-bg"
                                                    href="services.html">Explore
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
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-item-seven" role="tabpanel"
                                    aria-labelledby="pills-item-seven-tab" tabindex="0">
                                    <div class="rs-services-tab-item">
                                        <div class="rs-services-bg-thumb"
                                            data-background="assets/images/services/services-thumb-30.png"></div>
                                        <div class="rs-services-tab-content">
                                            <div class="rs-services-descrip">
                                                <p> we have been empowering Western Bearnings and driving progress for over 30
                                                    years. </p>
                                            </div>
                                            <div class="rs-services-tab-btn">
                                                <a class="rs-btn has-theme-deep-blue has-icon has-bg"
                                                    href="services.html">Explore
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- services-area end -->

        <!-- why choose area start -->
        <section class="rs-why-choose-area section-space rs-why-choose-four">
            <div class="rs-why-choose-bg-thumb" data-background="assets/images/bg/why-choose-bg-02.png">
            </div>
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-xl-7 col-lg-8 col-md-10">
                        <div class="rs-why-choose-wrapper">
                            <div class="rs-why-choose-content-wrapper">
                                <div class="rs-section-title-wrapper">
                                    <span class="rs-section-subtitle has-theme-deep-blue justify-content-start">
                                        Why Choose Us
                                    </span>
                                    <h2 class="rs-section-title rs-split-text-enable split-in-fade section-title-space">
                                        Solution
                                        that inspire progress </h2>
                                </div>
                                <div class="rs-why-choose-tab">
                                    <ul class="nav nav-pills" id="pills-tab3" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="pills-item-eight-tab"
                                                data-bs-toggle="pill" data-bs-target="#pills-item-eight" type="button"
                                                role="tab" aria-controls="pills-item-one" aria-selected="true">
                                                Expertise
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-item-nine-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-item-nine" type="button" role="tab"
                                                aria-controls="pills-item-two" aria-selected="false"> Result
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-item-ten-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-item-ten" type="button" role="tab"
                                                aria-controls="pills-item-three" aria-selected="false">
                                                Quality
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div class="rs-aobut-tab-content-wrapper">
                                    <div class="tab-content rs-why-choose-tab-anim" id="pills-tabContent3">
                                        <div class="tab-pane fade show active" id="pills-item-eight" role="tabpanel"
                                            aria-labelledby="pills-item-eight-tab" tabindex="0">
                                            <div class="rs-why-choose-tab-content">
                                                <p>Welcome to Western Bearning, a leading industry innovator with a rich
                                                    history of
                                                    excellence
                                                    with a passion make also for precision we have been empowering
                                                    Western Bearnings and
                                                    driving progress for</p>
                                                <div class="rs-why-choose-feature-list">
                                                    <div class="rs-list-item has-theme-deep-blue">
                                                        <ul>
                                                            <li>
                                                                <i class="fa-regular fa-check"></i>
                                                                Quality Control System
                                                            </li>
                                                            <li>
                                                                <i class="fa-regular fa-check"></i>
                                                                Building Quality Industrial
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-item-nine" role="tabpanel"
                                            aria-labelledby="pills-item-nine-tab" tabindex="0">
                                            <div class="rs-why-choose-tab-content">
                                                <p>Welcome to Western Bearning, a leading industry innovator with a rich
                                                    history of
                                                    excellence
                                                    with a passion make also for precision we have been empowering
                                                    Western Bearnings and
                                                    driving progress for</p>
                                                <div class="rs-why-choose-feature-list">
                                                    <div class="rs-list-item has-theme-deep-blue">
                                                        <ul>
                                                            <li>
                                                                <i class="fa-regular fa-check"></i>
                                                                Quality Control System
                                                            </li>
                                                            <li>
                                                                <i class="fa-regular fa-check"></i>
                                                                Building Quality Industrial
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-item-ten" role="tabpanel"
                                            aria-labelledby="pills-item-ten-tab" tabindex="0">
                                            <div class="rs-why-choose-tab-content">
                                                <p>Welcome to Western Bearning, a leading industry innovator with a rich
                                                    history of
                                                    excellence
                                                    with a passion make also for precision we have been empowering
                                                    Western Bearnings and
                                                    driving progress for</p>
                                                <div class="rs-why-choose-feature-list">
                                                    <div class="rs-list-item has-theme-deep-blue">
                                                        <ul>
                                                            <li>
                                                                <i class="fa-regular fa-check"></i>
                                                                Quality Control System
                                                            </li>
                                                            <li>
                                                                <i class="fa-regular fa-check"></i>
                                                                Building Quality Industrial
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="rs-why-choose-btn">
                                    <a class="rs-btn has-theme-deep-blue has-icon has-bg" href="about.html">Explore More
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
        </section>
        <!-- why choose area end -->

        <!-- portfolio area start -->
        <section id="homeportfolio"
            class="rs-portfolio-area section-space rs-portfolio-tooltip rs-portfolio-four rs-swiper">
            <div class="container">
                <div class="row  g-5 section-title-space align-items-end">
                    <div class="col-xl-6 col-lg-6">
                        <div class="rs-section-title-wrapper">
                            <span class="rs-section-subtitle has-theme-deep-blue justify-content-start">
                                Our Work
                            </span>
                            <h2 class="rs-section-title">Architecture heavy project Solution</h2>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <!-- If we need navigation buttons -->
                        <div class="rs-common-navigation rs-portfolio-navigation">
                            <button class="swiper-button-prev rs-swiper-btn has-theme-deep-blue"><i
                                    class="fa-regular fa-arrow-left"></i></button>
                            <button class="swiper-button-next rs-swiper-btn has-theme-deep-blue"><i
                                    class="fa-regular fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div class="row g-5">
                    <div class="rs-portfolio-slider-wrapper">
                        <div class="swiper" data-clone-slides="false" data-loop="true" data-speed="2000"
                            data-autoplay="true" data-dots-dynamic="false" data-hover-pause="true" data-effect="false"
                            data-delay="3000" data-item="3" data-item-xl="3" data-item-lg="3" data-item-md="2"
                            data-item-sm="1" data-item-xs="1" data-item-mobile="1" data-margin="30" data-margin-xl="30">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="rs-portfolio-item rs-portfolio-tooltip-item">
                                        <div class="rs-portfolio-thumb">
                                            <img src="assets/images/portfolio/portfolio-thumb-32.png" alt="image">
                                            <div class="rs-portfolio-btn-wrapper has-theme-deep-blue">
                                                <div class="rs-portfolio-icon-btn">
                                                    <a class="rs-square-btn has-icon has-theme-deep-blue"
                                                        href="portfolio-details.html">
                                                        <span class="icon-box">
                                                            <svg class="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                                width="19" height="12" viewBox="0 0 19 12" fill="none">
                                                                <path
                                                                    d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696698C13.4645 0.403805 12.9896 0.403805 12.6967 0.696698C12.4038 0.989591 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM6.55671e-08 6.75L18 6.75L18 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                                    fill="white"></path>
                                                            </svg>
                                                            <svg class="icon-second" xmlns="http://www.w3.org/2000/svg"
                                                                width="19" height="12" viewBox="0 0 19 12" fill="none">
                                                                <path
                                                                    d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696698C13.4645 0.403805 12.9896 0.403805 12.6967 0.696698C12.4038 0.989591 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM6.55671e-08 6.75L18 6.75L18 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                                    fill="white"></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div class="rs-portfolio-text-btn">
                                                    <a class="rs-btn has-theme-deep-blue"
                                                        href="portfolio-details.html">Read Details</a>
                                                </div>
                                            </div>
                                            <div class="rs-portfolio-content rs-portfolio-tooltip-content">
                                                <h3 class="rs-portfolio-title">Metal Industry</h3>
                                                <span class="rs-portfolio-category">Architecture</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="rs-portfolio-item rs-portfolio-tooltip-item">
                                        <div class="rs-portfolio-thumb">
                                            <img src="assets/images/portfolio/portfolio-thumb-33.png" alt="image">
                                            <div class="rs-portfolio-btn-wrapper has-theme-deep-blue">
                                                <div class="rs-portfolio-icon-btn">
                                                    <a class="rs-square-btn has-icon has-theme-deep-blue"
                                                        href="portfolio-details.html">
                                                        <span class="icon-box">
                                                            <svg class="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                                width="19" height="12" viewBox="0 0 19 12" fill="none">
                                                                <path
                                                                    d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696698C13.4645 0.403805 12.9896 0.403805 12.6967 0.696698C12.4038 0.989591 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM6.55671e-08 6.75L18 6.75L18 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                                    fill="white"></path>
                                                            </svg>
                                                            <svg class="icon-second" xmlns="http://www.w3.org/2000/svg"
                                                                width="19" height="12" viewBox="0 0 19 12" fill="none">
                                                                <path
                                                                    d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696698C13.4645 0.403805 12.9896 0.403805 12.6967 0.696698C12.4038 0.989591 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM6.55671e-08 6.75L18 6.75L18 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                                    fill="white"></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div class="rs-portfolio-text-btn">
                                                    <a class="rs-btn has-theme-deep-blue"
                                                        href="portfolio-details.html">Read Details</a>
                                                </div>
                                            </div>
                                            <div class="rs-portfolio-content rs-portfolio-tooltip-content">
                                                <h3 class="rs-portfolio-title">Office Building</h3>
                                                <span class="rs-portfolio-category">Architecture</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="rs-portfolio-item rs-portfolio-tooltip-item">
                                        <div class="rs-portfolio-thumb">
                                            <img src="assets/images/portfolio/portfolio-thumb-34.png" alt="image">
                                            <div class="rs-portfolio-btn-wrapper has-theme-deep-blue">
                                                <div class="rs-portfolio-icon-btn">
                                                    <a class="rs-square-btn has-icon has-theme-deep-blue"
                                                        href="portfolio-details.html">
                                                        <span class="icon-box">
                                                            <svg class="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                                width="19" height="12" viewBox="0 0 19 12" fill="none">
                                                                <path
                                                                    d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696698C13.4645 0.403805 12.9896 0.403805 12.6967 0.696698C12.4038 0.989591 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM6.55671e-08 6.75L18 6.75L18 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                                    fill="white"></path>
                                                            </svg>
                                                            <svg class="icon-second" xmlns="http://www.w3.org/2000/svg"
                                                                width="19" height="12" viewBox="0 0 19 12" fill="none">
                                                                <path
                                                                    d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696698C13.4645 0.403805 12.9896 0.403805 12.6967 0.696698C12.4038 0.989591 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM6.55671e-08 6.75L18 6.75L18 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                                    fill="white"></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div class="rs-portfolio-text-btn">
                                                    <a class="rs-btn has-theme-deep-blue"
                                                        href="portfolio-details.html">Read Details</a>
                                                </div>
                                            </div>
                                            <div class="rs-portfolio-content rs-portfolio-tooltip-content">
                                                <h3 class="rs-portfolio-title">Factories &amp; plants</h3>
                                                <span class="rs-portfolio-category">Architecture</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="rs-portfolio-item rs-portfolio-tooltip-item">
                                        <div class="rs-portfolio-thumb">
                                            <img src="assets/images/portfolio/portfolio-thumb-34.png" alt="image">
                                            <div class="rs-portfolio-btn-wrapper has-theme-deep-blue">
                                                <div class="rs-portfolio-icon-btn">
                                                    <a class="rs-square-btn has-icon has-theme-deep-blue"
                                                        href="portfolio-details.html">
                                                        <span class="icon-box">
                                                            <svg class="icon-first" xmlns="http://www.w3.org/2000/svg"
                                                                width="19" height="12" viewBox="0 0 19 12" fill="none">
                                                                <path
                                                                    d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696698C13.4645 0.403805 12.9896 0.403805 12.6967 0.696698C12.4038 0.989591 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM6.55671e-08 6.75L18 6.75L18 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                                    fill="white"></path>
                                                            </svg>
                                                            <svg class="icon-second" xmlns="http://www.w3.org/2000/svg"
                                                                width="19" height="12" viewBox="0 0 19 12" fill="none">
                                                                <path
                                                                    d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696698C13.4645 0.403805 12.9896 0.403805 12.6967 0.696698C12.4038 0.989591 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM6.55671e-08 6.75L18 6.75L18 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z"
                                                                    fill="white"></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div class="rs-portfolio-text-btn">
                                                    <a class="rs-btn has-theme-deep-blue"
                                                        href="portfolio-details.html">Read Details</a>
                                                </div>
                                            </div>
                                            <div class="rs-portfolio-content rs-portfolio-tooltip-content">
                                                <h3 class="rs-portfolio-title">Manufacture</h3>
                                                <span class="rs-portfolio-category">Construction</span>
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

        <!-- counter area start -->
        <div class="rs-counter-area rs-counter-one section-space-bottom p-relative">
            <div class="rs-counter-shape">
                <img src="assets/images/shape/robot-shape-01.png" alt="">
            </div>
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

        <!-- testimonial area start -->
        <section class="rs-testimonial-area rs-testimonial-six section-space-top">
            <div class="rs-testimonial-bg-thumb" data-background="assets/images/bg/testimonials-bg-04.png"></div>
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-6 col-lg-5">
                        <div class="rs-faq-item rs-faq-four">
                            <h3 class="rs-faq-title">Have you any questions?</h3>
                            <p class="descrip">Podcasting operational change management inside of making this the first
                                true
                                generator.</p>
                            <div class="rs-faq-btn">
                                <a class="rs-btn has-theme-deep-blue has-icon has-bg" href="faq.html">view Your Question
                                    <span class="icon-box">
                                        <svg class="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                            <path
                                                d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                            </path>
                                        </svg>
                                        <svg class="icon-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                            <path
                                                d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z">
                                            </path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-7">
                        <div class="rs-testimonial-wrapper rs-testimonial-two rs-swiper has-theme-deep-blue">
                            <div class="rs-section-title-wrapper section-title-space">
                                <span class="rs-section-subtitle justify-content-start">
                                    Testimonials
                                </span>
                                <h2 class="rs-section-title rs-split-text-enable split-in-fade">Customer Feedback</h2>
                            </div>
                            <div class="rs-testimonial-slider-wrapper">
                                <div class="swiper" data-clone-slides="false" data-loop="true" data-speed="2000"
                                    data-autoplay="true" data-dots-dynamic="false" data-hover-pause="true"
                                    data-effect="false" data-delay="3000" data-item="1" data-item-xl="1"
                                    data-item-lg="1" data-item-md="1" data-item-sm="1" data-item-xs="1"
                                    data-item-mobile="1" data-margin="30" data-margin-xl="30" data-margin-lg="30"
                                    data-margin-md="30" data-margin-sm="30" data-margin-xs="30" data-margin-mobile="30">
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
                                    <div class="rs-common-navigation rs-testimonial-navigation">
                                        <button class="swiper-button-prev rs-swiper-btn has-theme-deep-blue"><i
                                                class="fa-regular fa-arrow-left"></i></button>
                                        <button class="swiper-button-next rs-swiper-btn has-theme-deep-blue"><i
                                                class="fa-regular fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- testimonial area end -->

        <!-- blog area start -->
        <section id="homeblog" class="rs-blog-area section-space rs-blog-two has-theme-deep-blue">
            <div class="container">
                <div class="row  g-5 justify-content-center section-title-space align-items-center">
                    <div class="col-xl-7 col-lg-7 col-md-8">
                        <div class="rs-section-title-wrapper text-center">
                            <span class="rs-section-subtitle has-theme-deep-blue">
                                Journal
                            </span>
                            <h2 class="rs-section-title rs-split-text-enable split-in-fade">News and Article</h2>
                        </div>
                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="rs-blog-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                            <div class="rs-blog-thumb">
                                <a href="blog-details.html"> <img src="assets/images/blog/blog-thumb-19.png"
                                        alt="image"></a>
                            </div>
                            <div class="rs-blog-content">
                                <div class="rs-blog-tag has-theme-deep-blue">
                                    <a href="blog-details.html">Architecture</a>
                                </div>
                                <h5 class="rs-blog-title underline has-black"> <a href="blog-details.html"> Factories
                                        technologies in interactive and plants</a></h5>
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
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="rs-blog-item wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                            <div class="rs-blog-thumb">
                                <a href="blog-details.html"> <img src="assets/images/blog/blog-thumb-20.png"
                                        alt="image"></a>
                            </div>
                            <div class="rs-blog-content">
                                <div class="rs-blog-tag has-theme-deep-blue">
                                    <a href="blog-details.html">Architecture</a>
                                </div>
                                <h5 class="rs-blog-title underline has-black"> <a href="blog-details.html"> Building
                                        resilient
                                        supply chains for Western Bearnings</a></h5>
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
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="rs-blog-item wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                            <div class="rs-blog-thumb">
                                <a href="blog-details.html"> <img src="assets/images/blog/blog-thumb-21.png"
                                        alt="image"></a>
                            </div>
                            <div class="rs-blog-content">
                                <div class="rs-blog-tag has-theme-deep-blue">
                                    <a href="blog-details.html">Architecture</a>
                                </div>
                                <h5 class="rs-blog-title underline has-black"> <a href="blog-details.html"> Construction
                                        of a
                                        new high tech plant in washingtons</a></h5>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- blog area end -->

        <div class="rs-brand-thumb-wrapper">
            <div class="rs-brand-bg-thumb" data-background="assets/images/bg/brand-bg-02.png"></div>
            <!-- brand area start -->
            <div class="rs-brand-area rs-brand-one section-space rs-swiper has-space">
                <div class="rs-brand-bg-thumb" data-background="assets/images/bg/brand-bg-03.png"></div>
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
                                                <span class="rs-brand-shape"></span>
                                                <div class="rs-brand-thumb">
                                                    <img src="assets/images/brand/brand-thumb-41.png" alt="image">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="rs-brand-item">
                                                <span class="rs-brand-shape"></span>
                                                <div class="rs-brand-thumb">
                                                    <img src="assets/images/brand/brand-thumb-42.png" alt="image">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="rs-brand-item">
                                                <span class="rs-brand-shape"></span>
                                                <div class="rs-brand-thumb">
                                                    <img src="assets/images/brand/brand-thumb-43.png" alt="image">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="rs-brand-item">
                                                <span class="rs-brand-shape"></span>
                                                <div class="rs-brand-thumb">
                                                    <img src="assets/images/brand/brand-thumb-44.png" alt="image">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="rs-brand-item">
                                                <span class="rs-brand-shape"></span>
                                                <div class="rs-brand-thumb">
                                                    <img src="assets/images/brand/brand-thumb-45.png" alt="image">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="rs-brand-item">
                                                <span class="rs-brand-shape"></span>
                                                <div class="rs-brand-thumb">
                                                    <img src="assets/images/brand/brand-thumb-46.png" alt="image">
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

            <!-- cta area start -->
            <section id="homecontact" class="rs-cta-area rs-cta-two has-theme-deep-blue">
                <div class="container">
                    <div class="rs-cta-wrapper">
                        <div class="rs-cta-bg-thumb" data-background="assets/images/bg/cta-bg-07.png"></div>
                        <div class="row align-items-center">
                            <div class="col-xl-5 col-lg-5">
                                <div class="rs-cta-thumb">
                                    <img src="assets/images/cta/cta-thumb-02.png" alt="image">
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-7">
                                <div class="rs-cta-content-wrapper">
                                    <h3 class="rs-cta-title"> Sign up to get the latest updates! </h3>
                                    <div class="rs-cta-form">
                                        <form action="#">
                                            <div class="rs-cta-input">
                                                <input id="name" name="name" type="text" placeholder="Enter Your Email">
                                                <button type="submit"
                                                    class="rs-btn black-bg has-theme-deep-blue has-icon">
                                                    Subscribe Now
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
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- cta area end -->
        </div>

    `

  return (
    <div dangerouslySetInnerHTML={{ __html: processHTML(htmlContent) }} />
  )
}

export default ArchitectureOnePage

