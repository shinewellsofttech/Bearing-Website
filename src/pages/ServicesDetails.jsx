import { useEffect } from 'react'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function ServicesDetails() {
  useSwiper()
  useScripts()

  // Process HTML content for React
  const processHTML = (html) => {
    if (!html) return ''
    
    return html
      // Convert class to className
      .replace(/\sclass=/g, ' className=')
      // Convert image paths
      .replace(/src="assets\//g, 'src="/assets/')
      .replace(/href="assets\//g, 'href="/assets/')
      // Convert data-background paths
      .replace(/data-background="assets\//g, 'data-background="/assets/')
      // Convert href links
      .replace(/href="([^"]+\.html)"/g, (match, path) => {
        const route = path.replace('.html', '').replace('index', '')
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
                                <h1 class="rs-breadcrumb-title">Services Details</h1>
                            </div>
                            <div class="rs-breadcrumb-menu">
                                <nav>
                                    <ul>
                                        <li><span><a href="index.html">Western Bearning</a></span></li>
                                        <li><span>Services</span></li>
                                        <li><span>Services Details</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- breadcrumb area end -->

        <!-- services details area start -->
        <section class="rs-services-area section-space ">
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-8 col-lg-8">
                        <div class="rs-services-details-wrapper">
                            <div class="rs-services-details-thumb">
                                <img src="assets/images/services/details/services-details-01.png" alt="image">
                            </div>
                            <h3 class="rs-services-details-title">Best innovations in metallurgy</h3>
                            <p class="mb-25 mt-15"><strong>At vero eos et accusamus et iusto odio dignissimos ducimus
                                    qui
                                    blanditiis praesentium voluptatum
                                    deleniti atque corrupti quos dolores et quas molestias excepturi.</strong></p>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum
                                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non
                                provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum
                                et
                                dolorum fuga harum quidem rerum facilis est et expedita distinctio. </p>
                            <h3 class="rs-services-details-title">Planning &amp; Strategy</h3>
                            <p class="mt-20 mb-20">Demoralized voluptatum deleniti atque corrupti dolores quas molestias
                                excepturi sint occaecati.</p>
                            <div class="rs-services-details-feature-list">
                                <div class="rs-list-item has-theme-orange">
                                    <ul>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor">
                                                <path
                                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z">
                                                </path>
                                            </svg>
                                            Prepare Documentation
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor">
                                                <path
                                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z">
                                                </path>
                                            </svg>
                                            Brand Consistency
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor">
                                                <path
                                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z">
                                                </path>
                                            </svg>
                                            Industry Standard Dummy
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor">
                                                <path
                                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z">
                                                </path>
                                            </svg>
                                            Quality Control System
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor">
                                                <path
                                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z">
                                                </path>
                                            </svg>
                                            Prepare Documentation
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                fill="currentColor">
                                                <path
                                                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z">
                                                </path>
                                            </svg>
                                            Prepare Documentation
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="rs-services-details-video rs-video-one">
                                <div class="rs-video-bg-thumb" data-background="assets/images/bg/video-bg-06.png">
                                </div>
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-7 col-lg-8 col-md-10">
                                            <div class="rs-video-content text-center">
                                                <div class="rs-video-play-btn">
                                                    <a href="https://www.youtube.com/watch?v=go7QYaQR494"
                                                        class="rs-play-btn popup-video"><i
                                                            class="fa-duotone fa-play"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p class="mb-20"> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.
                            </p>
                            <h3 class="rs-services-details-title mb-15">Planning &amp; Strategy</h3>
                            <p class="mb-55">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                                praesentium voluptatum
                                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate. </p>
                            <h3 class="rs-services-details-title mb-15">Stats &amp; Charts</h3>
                            <div class="rs-services-details-chart-wrapper">
                                <p class="mb-0"> At vero eos et accusamus et iusto odio digmos ducimus qui blanditiis
                                    praesentium voluptatum
                                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati .
                                </p>
                                <div class="rs-services-details-chart">
                                    <canvas id="pie-chart"></canvas>
                                </div>
                            </div>
                            <div class="has-border-line"></div>
                            <h3 class="rs-services-details-title mb-20">Questions? Youâ€™re covered</h3>
                            <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati
                                cupiditate. </p>
                            <div class="rs-services-details-faq">
                                <div class="rs-faq-content rs-accordion-one">
                                    <div class="accordion-wrapper">
                                        <div class="accordion" id="accordionExampleOne">
                                            <div class="rs-accordion-item">
                                                <h4 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                        aria-expanded="true" aria-controls="collapseOne">
                                                        01. Why is sand important for industry?
                                                        <span class="accordion-btn"></span>
                                                    </button>
                                                </h4>
                                                <div id="collapseOne" class="accordion-collapse collapse show"
                                                    data-bs-parent="#accordionExampleOne">
                                                    <div class="accordion-body"> Randomised words which donâ€™t look even
                                                        slightly
                                                        believable. If you are going to use a passage of Lorem Ipsum,
                                                        you need to be
                                                        sure
                                                        there isnâ€™t anything.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="rs-accordion-item">
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
                                                        believable. If you are going to use a passage of Lorem Ipsum,
                                                        you need to be
                                                        sure
                                                        there isnâ€™t anything.</div>
                                                </div>
                                            </div>
                                            <div class="rs-accordion-item">
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
                                                        believable. If you are going to use a passage of Lorem Ipsum,
                                                        you need to be
                                                        sure
                                                        there isnâ€™t anything.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rs-services-details-cta">
                                <div class="rs-services-details-cta-bg-thumb"
                                    data-background="assets/images/bg/cta-bg-08.png">
                                </div>
                                <div class="rs-services-details-cta-content">
                                    <h3 class="rs-services-details-title mb-40">We are always ready to help you and
                                        answer your
                                        questions</h3>
                                    <div class="rs-services-details-btn">
                                        <a class="rs-btn has-theme-orange has-icon has-bg" href="contact.html">Explore
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
                                <div class="rs-services-details-cta-thumb">
                                    <img src="assets/images/services/details/services-details-02.png" alt="image">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="rs-sidebar-wrapper rs-sidebar-sticky">
                            <div class="sidebar-widget widget-categories-two has-content-none mb-30">
                                <h5 class="mb-25 sidebar-widget-title">Our Services</h5>
                                <ul>
                                    <li>
                                        <a href="#">
                                            Bridge Construction
                                            <i class="ri-arrow-right-line"></i></a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            High regulation industry
                                            <i class="ri-arrow-right-line"></i></a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Industrial Construction
                                            <i class="ri-arrow-right-line"></i></a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Mechanical Engineering
                                            <i class="ri-arrow-right-line"></i></a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Oil &amp; Gas Energy
                                            <i class="ri-arrow-right-line"></i></a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Manufacturing solutions
                                            <i class="ri-arrow-right-line"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="sidebar-widget widget-cta mb-30">
                                <div class="sidebar-widget-cta-thumb" data-background="assets/images/bg/cta-bg-09.png">
                                </div>
                                <div class="sidebar-widget-content">
                                    <h3 class="sidebar-widget-title has-large has-border">Have a <br> project in <br>
                                        mind?</h3>
                                    <div class="sidebar-widget-btn">
                                        <a class="rs-btn has-theme-orange has-icon has-bg" href="contact.html">Letâ€™s
                                            Talk
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
                            <div class="sidebar-widget widget-download mb-30">
                                <h5 class="mb-25 sidebar-widget-title">Download Brochures</h5>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <div class="left">
                                                <span><img src="assets/images/icon/docs.svg" alt="#"></span>
                                                Report 2023-24
                                            </div>
                                            <span><img src="assets/images/icon/download-01.svg" alt="#"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="left">
                                                <span><img src="assets/images/icon/pdf.svg" alt="#"></span>
                                                Download PDF
                                            </div>
                                            <span><img src="assets/images/icon/download-02.svg" alt="#"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- services details area end -->

    `

  return (
    <div dangerouslySetInnerHTML={{ __html: processHTML(htmlContent) }} />
  )
}

export default ServicesDetails
