import { useEffect } from 'react'
import CtaSection from '../components/CtaSection'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function ContactTwo() {
  useSwiper()
  useScripts()

  const processHTML = (html) => {
    if (!html) return ''
    
    return html
      .replace(/src="assets\//g, 'src="/assets/')
      .replace(/href="assets\//g, 'href="/assets/')
      .replace(/data-background="assets\//g, 'data-background="/assets/')
      .replace(/href="([^"]+\.html)"/g, (match, path) => {
        let route = path.replace('.html', '')
        if (route === 'index') route = ''
        return `href="${route || '/'}"`
      })
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  }

  const htmlContent = `

        <!-- breadcrumb area start -->
        <section class="rs-breadcrumb-area rs-breadcrumb-one p-relative">
            <div class="rs-breadcrumb-bg" data-background="/assets/images/Main-images/Hero/contactHero (1).jpeg" style="background-image: url('/assets/images/Main-images/Hero/contactHero (1).jpeg'); filter: brightness(0.65);"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xxl-6 col-xl-8 col-lg-8">
                        <div class="rs-breadcrumb-content-wrapper">
                            <div class="rs-breadcrumb-title-wrapper">
                                <h1 class="rs-breadcrumb-title">Contact Us</h1>
                            </div>
                            <div class="rs-breadcrumb-menu">
                                <nav>
                                    <ul>
                                        <li><span><a href="/">Western Bearing</a></span></li>
                                        <li><span>Contact Us</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- breadcrumb area end -->

        <!-- contact area start -->
        <section class="rs-contact-area rs-contact-eight section-space-top">
            <div class="container">
                <div class="row  g-5 justify-content-center section-title-space align-items-center">
                    <div class="col-xl-7 col-lg-7 col-md-8">
                        <div class="rs-section-title-wrapper text-center">
                            <span class="rs-section-subtitle has-theme-orange">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15"
                                    fill="none">
                                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                                        fill="#0C7BC7"></path>
                                </svg>
                                Global Network
                            </span>
                            <h2 class="rs-section-title rs-split-text-enable split-in-fade mb-10">Get in touch with our team</h2>
                            <p>We have the team and expertise to serve global industrial markets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- contact area end -->

        <!-- contact form area start -->
        <section class="rs-contact-form-area rs-contact-ten section-space-bottom">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-12">
                        <div class="rs-contact-form">
                            <h3 class="rs-contact-form-title">Get in Touch</h3>
                            <form id="contact-form" action="#" method="POST">
                                <div class="row g-5">
                                    <div class="col-md-4">
                                        <div class="rs-contact-input">
                                            <input id="name" name="name" type="text" placeholder="Full Name">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="rs-contact-input">
                                            <input id="email" name="email" type="email" placeholder="Email Address">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="rs-contact-input">
                                            <input id="phone" name="phone" type="text" placeholder="Phone Number">
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
        <!-- contact form area end -->

    `

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: processHTML(htmlContent) }} />
      <CtaSection />
    </>
  )
}

export default ContactTwo
