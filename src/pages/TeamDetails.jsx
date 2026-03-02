import { useEffect } from 'react'
import CtaSection from '../components/CtaSection'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function TeamDetails() {
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

        <!-- breadcrumb area start -->
        <section class="rs-breadcrumb-area rs-breadcrumb-one p-relative">
            <div class="rs-breadcrumb-bg" data-background="assets/images/bg/breadcrumb-bg-01.png"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xxl-6 col-xl-8 col-lg-8">
                        <div class="rs-breadcrumb-content-wrapper">
                            <div class="rs-breadcrumb-title-wrapper">
                                <h1 class="rs-breadcrumb-title">Team Details</h1>
                            </div>
                            <div class="rs-breadcrumb-menu">
                                <nav>
                                    <ul>
                                        <li><span><a href="index.html">Western Bearning</a></span></li>
                                        <li><span>Team Details</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- breadcrumb area end -->

        <!-- team details area start -->
        <section class="rs-team-details-area section-space-top rs-team-details">
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-6 col-lg-6">
                        <div class="rs-team-details-thumb">
                            <img src="assets/images/team/details/team-details-thumb-01.png" alt="image">
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="rs-team-details-content">
                            <span class="rs-team-details-subtitle">Hello i'm</span>
                            <h2 class="rs-team-details-title">Joshua sendu</h2>
                            <span class="rs-team-details-desig">CEO of Western Bearning</span>
                            <div class="rs-team-details-info-wrapper">
                                <div class="rs-team-details-info-item">
                                    <span class="rs-team-details-info-title">
                                        Department:
                                    </span>
                                    <span class="rs-team-details-info-content">
                                        Engineer
                                    </span>
                                </div>
                                <div class="rs-team-details-info-item">
                                    <span class="rs-team-details-info-title">
                                        Experience:
                                    </span>
                                    <span class="rs-team-details-info-content">
                                        10 Years
                                    </span>
                                </div>
                                <div class="rs-team-details-info-item">
                                    <span class="rs-team-details-info-title">
                                        Email:
                                    </span>
                                    <span class="rs-team-details-info-content">
                                        sales@westernbearing.in
                                    </span>
                                </div>
                                <div class="rs-team-details-info-item">
                                    <span class="rs-team-details-info-title">
                                        Phone:
                                    </span>
                                    <span class="rs-team-details-info-content">
                                        +855 (2669) 1234
                                    </span>
                                </div>
                            </div>
                            <div class="rs-team-details-social">
                                <div class="rs-theme-social has-theme-orange">
                                    <a href="#"><i class="ri-twitter-x-line"></i></a>
                                    <a href="#"><i class="ri-facebook-fill"></i></a>
                                    <a href="#"><i class="ri-linkedin-fill"></i></a>
                                    <a href="#"><i class="ri-instagram-line"></i></a>
                                </div>
                            </div>
                            <div class="rs-team-details-bio">
                                <h3>Biography</h3>
                                <p>Hello there, my name is Jhon Maxwell. I am a Engineer of industry. Collaborative
                                    administrate
                                    empowered markets via plug-and-play networks. Proactively envisioned multimedia
                                    based
                                    expertise and cross-media growth strategies seamlessly visualize quality
                                    intellectual capital
                                    without superior.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- team details area end -->

        <!-- experience area start -->
        <section class="rs-experience-area section-space-bottom rs-experience-one">
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-6 col-lg-6">
                        <div class="rs-contact-form rs-contact-four">
                            <div class="rs-contact-form-bg-thumb" data-background="assets/images/bg/contact-bg-03.png">
                            </div>
                            <h3 class="rs-contact-form-title">Letâ€™s Get in Touch</h3>
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
                                            <button type="submit" class="rs-btn white-bg w-100">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div id="form-messages"></div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="rs-experience-content">
                            <h3 class="rs-experience-title mb-30">Education &amp; Guidelines</h3>
                            <div class="rs-experience-list-wrapper">
                                <div class="rs-experience-list">
                                    <div class="rs-experience-icon">
                                        <img src="assets/images/icon/feature-icon-13.png" alt="image">
                                    </div>
                                    <div class="rs-experience-info">
                                        <h5>Google Company</h5>
                                        <span> Sr. Engineer in 2010 </span>
                                    </div>
                                </div>
                                <div class="rs-experience-list">
                                    <div class="rs-experience-icon">
                                        <img src="assets/images/icon/feature-icon-14.png" alt="image">
                                    </div>
                                    <div class="rs-experience-info">
                                        <h5>Spotify Company</h5>
                                        <span> Lead Team in 2017 </span>
                                    </div>
                                </div>
                                <div class="rs-experience-list">
                                    <div class="rs-experience-icon">
                                        <img src="assets/images/icon/feature-icon-15.png" alt="image">
                                    </div>
                                    <div class="rs-experience-info">
                                        <h5>2001 - 2003</h5>
                                        <span>BS, engineering, (UK)</span>
                                    </div>
                                </div>
                                <div class="rs-experience-list">
                                    <div class="rs-experience-icon">
                                        <img src="assets/images/icon/feature-icon-16.png" alt="image">
                                    </div>
                                    <div class="rs-experience-info">
                                        <h5>2004 - 2007</h5>
                                        <span> BS, engineering, (NYC) </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rs-experience-counter-wrapper">
                            <h3 class="rs-experience-title mb-10">Professional Skills</h3>
                            <p class="descrip">Proactively envisioned multimedia-based expertise and cross-media growth
                                strategies. Seamlessly visualize quality intellectual capital.</p>
                            <div class="rs-experience-counter-item-wrapper">
                                <div class="single-progress">
                                    <div class="progress-top">
                                        <h6 class="progress-title">Successful Project Completed</h6>
                                        <span class="progress-number">89%</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft" data-wow-duration="0.8s"
                                            data-wow-delay=".3s" role="progressbar" style="width: 89%"
                                            aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                                <div class="single-progress">
                                    <div class="progress-top">
                                        <h6 class="progress-title">Business Growth</h6>
                                        <span class="progress-number">97%</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft" data-wow-duration="0.8s"
                                            data-wow-delay=".3s" role="progressbar" style="width: 97%"
                                            aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                                <div class="single-progress">
                                    <div class="progress-top">
                                        <h6 class="progress-title">Satisfied Customer</h6>
                                        <span class="progress-number">91%</span>
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar wow fadeInLeft" data-wow-duration="0.8s"
                                            data-wow-delay=".3s" role="progressbar" style="width: 91%"
                                            aria-valuenow="91" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- experience area end -->

        <!-- testimonial area start -->
        <section class="rs-testimonial-area section-space rs-testimonial-five rs-swiper has-theme-orange">
            <div class="rs-testimonial-bg-thumb" data-background="assets/images/bg/testimonials-bg-07.png"></div>
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-6 col-lg-6">
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
                                    Client Reviews
                                </span>
                                <h2 class="rs-section-title rs-split-text-enable split-in-fade">What people saying <br>
                                    about our work</h2>
                                <p class="descrip">We solve worldwide industrial every problem the heart of global. </p>
                            </div>
                            <!-- If we need navigation buttons -->
                            <div class=" rs-testimonial-navigation">
                                <button class="swiper-button-prev rs-swiper-btn has-bg-white hover-orange"><i
                                        class="fa-regular fa-arrow-left"></i></button>
                                <button class="swiper-button-next rs-swiper-btn has-bg-white hover-orange"><i
                                        class="fa-regular fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="rs-testimonial-slider-wrapper">
                            <div class="swiper" data-clone-slides="false" data-loop="true" data-speed="2000"
                                data-autoplay="true" data-dots-dynamic="false" data-hover-pause="true"
                                data-effect="false" data-delay="1500" data-item="1" data-margin="30">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="rs-testimonial-item">
                                            <div class="rs-testimonial-quote">
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
                                            <div class="rs-testimonial-content">
                                                <div class="rs-testimonial-top">
                                                    <div class="rs-testimonial-avater-wrapper">
                                                        <div class="rs-testimonial-avater-thumb">
                                                            <img src="assets/images/user/user-thumb-01.png" alt="image">
                                                        </div>
                                                        <div class="rs-testimonial-avater-info">
                                                            <h6 class="rs-testimonial-avater-title">Abdur Rashid</h6>
                                                            <span
                                                                class="rs-testimonial-avater-designation">Founder</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="rs-testimonial-description">
                                                    <p> At the heart of the global landscape, the industry stands there
                                                        multidimensional force of progress driving.</p>
                                                </div>
                                                <div class="rs-testimonial-icon">
                                                    <img src="assets/images/brand/brand-thumb-40.png" alt="image">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="rs-testimonial-item">
                                            <div class="rs-testimonial-quote">
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
                                            <div class="rs-testimonial-content">
                                                <div class="rs-testimonial-top">
                                                    <div class="rs-testimonial-avater-wrapper">
                                                        <div class="rs-testimonial-avater-thumb">
                                                            <img src="assets/images/user/user-thumb-02.png" alt="image">
                                                        </div>
                                                        <div class="rs-testimonial-avater-info">
                                                            <h6 class="rs-testimonial-avater-title">Nayeem</h6>
                                                            <span
                                                                class="rs-testimonial-avater-designation">Employee</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="rs-testimonial-description">
                                                    <p> It is a long established fact that a reader content of a page
                                                        when looking at
                                                        its of oflayout the point of using. </p>
                                                </div>
                                                <div class="rs-testimonial-icon">
                                                    <img src="assets/images/brand/brand-thumb-40.png" alt="image">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="rs-testimonial-item">
                                            <div class="rs-testimonial-quote">
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
                                            <div class="rs-testimonial-content">
                                                <div class="rs-testimonial-top">
                                                    <div class="rs-testimonial-avater-wrapper">
                                                        <div class="rs-testimonial-avater-thumb">
                                                            <img src="assets/images/user/user-thumb-01.png" alt="image">
                                                        </div>
                                                        <div class="rs-testimonial-avater-info">
                                                            <h6 class="rs-testimonial-avater-title">Abdur Rashid</h6>
                                                            <span
                                                                class="rs-testimonial-avater-designation">Founder</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="rs-testimonial-description">
                                                    <p> At the heart of the global landscape, the industry stands there
                                                        multidimensional force of progress driving.</p>
                                                </div>
                                                <div class="rs-testimonial-icon">
                                                    <img src="assets/images/brand/brand-thumb-40.png" alt="image">
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
        <!-- testimonial area end -->

    `

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: processHTML(htmlContent) }} />
      <CtaSection />
    </>
  )
}

export default TeamDetails
