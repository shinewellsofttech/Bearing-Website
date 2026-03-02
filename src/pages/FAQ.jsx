import { useEffect } from 'react'
import CtaSection from '../components/CtaSection'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function FAQ() {
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
                                <h1 class="rs-breadcrumb-title">Faq</h1>
                            </div>
                            <div class="rs-breadcrumb-menu">
                                <nav>
                                    <ul>
                                        <li><span><a href="index.html">Western Bearning</a></span></li>
                                        <li><span>Faq</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- breadcrumb area end -->

        <!-- faq area start -->
        <section class="rs-faq-area section-space">
            <div class="container">
                <div class="row  g-5 justify-content-center section-title-space align-items-center">
                    <div class="col-xxl-8 col-xl-8 col-lg-9 col-md-10">
                        <div class="rs-section-title-wrapper text-center">
                            <span class="rs-section-subtitle has-theme-orange">
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15"
                                    fill="none">
                                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                                        fill="#0C7BC7"></path>
                                </svg>
                                Question
                            </span>
                            <h2 class="rs-section-title rs-split-text-enable split-in-fade">Any questions for our
                                company</h2>
                        </div>
                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-xl-6 col-lg-6">
                        <div class="rs-faq-content rs-accordion-one">
                            <div class="accordion-wrapper">
                                <div class="accordion" id="accordionExampleOne">
                                    <div class="rs-accordion-item">
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
                                            <div class="accordion-body"> Randomised words which donâ€™t look even slightly
                                                believable. If you are going to use a passage of Lorem Ipsum, you need
                                                to be sure
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
                                            <div class="accordion-body">Randomised words which donâ€™t look even slightly
                                                believable. If you are going to use a passage of Lorem Ipsum, you need
                                                to be sure
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
                                            <div class="accordion-body">Randomised words which donâ€™t look even slightly
                                                believable. If you are going to use a passage of Lorem Ipsum, you need
                                                to be sure
                                                there isnâ€™t anything.</div>
                                        </div>
                                    </div>
                                    <div class="rs-accordion-item">
                                        <h6 class="accordion-header" id="headingFour">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseFour">
                                                04. How do i get started with green energy?
                                                <span class="accordion-btn"></span>
                                            </button>
                                        </h6>
                                        <div id="collapseFour" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionExampleOne">
                                            <div class="accordion-body">Randomised words which donâ€™t look even slightly
                                                believable. If you are going to use a passage of Lorem Ipsum, you need
                                                to be sure
                                                there isnâ€™t anything.</div>
                                        </div>
                                    </div>
                                    <div class="rs-accordion-item">
                                        <h6 class="accordion-header" id="headingFive">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                aria-expanded="false" aria-controls="collapseFive">
                                                05. Can i use green energy in my home or business?
                                                <span class="accordion-btn"></span>
                                            </button>
                                        </h6>
                                        <div id="collapseFive" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionExampleOne">
                                            <div class="accordion-body">Randomised words which donâ€™t look even slightly
                                                believable. If you are going to use a passage of Lorem Ipsum, you need
                                                to be sure
                                                there isnâ€™t anything.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="rs-faq-content rs-accordion-one">
                            <div class="accordion-wrapper">
                                <div class="accordion" id="accordionExampleTwo">
                                    <div class="rs-accordion-item">
                                        <h4 class="accordion-header" id="headingSix">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix" aria-expanded="true"
                                                aria-controls="collapseSix">
                                                06. Why is sand important for industry?
                                                <span class="accordion-btn"></span>
                                            </button>
                                        </h4>
                                        <div id="collapseSix" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionExampleTwo">
                                            <div class="accordion-body"> Randomised words which donâ€™t look even slightly
                                                believable. If you are going to use a passage of Lorem Ipsum, you need
                                                to be sure
                                                there isnâ€™t anything.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="rs-accordion-item">
                                        <h6 class="accordion-header" id="headingSeven">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseSeven"
                                                aria-expanded="false" aria-controls="collapseSeven">
                                                07. Can I switch to a different plan?
                                                <span class="accordion-btn"></span>
                                            </button>
                                        </h6>
                                        <div id="collapseSeven" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionExampleTwo">
                                            <div class="accordion-body">Randomised words which donâ€™t look even slightly
                                                believable. If you are going to use a passage of Lorem Ipsum, you need
                                                to be sure
                                                there isnâ€™t anything.</div>
                                        </div>
                                    </div>
                                    <div class="rs-accordion-item">
                                        <h6 class="accordion-header" id="headingEight">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseEight"
                                                aria-expanded="false" aria-controls="collapseEight">
                                                08. What should I wear for an industry treatment?
                                                <span class="accordion-btn"></span>
                                            </button>
                                        </h6>
                                        <div id="collapseEight" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionExampleTwo">
                                            <div class="accordion-body">Randomised words which donâ€™t look even slightly
                                                believable. If you are going to use a passage of Lorem Ipsum, you need
                                                to be sure
                                                there isnâ€™t anything.</div>
                                        </div>
                                    </div>
                                    <div class="rs-accordion-item">
                                        <h6 class="accordion-header" id="headingNine">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseNine"
                                                aria-expanded="false" aria-controls="collapseNine">
                                                09. How do i get started with green energy?
                                                <span class="accordion-btn"></span>
                                            </button>
                                        </h6>
                                        <div id="collapseNine" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionExampleTwo">
                                            <div class="accordion-body">Randomised words which donâ€™t look even slightly
                                                believable. If you are going to use a passage of Lorem Ipsum, you need
                                                to be sure
                                                there isnâ€™t anything.</div>
                                        </div>
                                    </div>
                                    <div class="rs-accordion-item">
                                        <h6 class="accordion-header" id="headingTen">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTen"
                                                aria-expanded="false" aria-controls="collapseTen">
                                                10. Can i use green energy in my home or business?
                                                <span class="accordion-btn"></span>
                                            </button>
                                        </h6>
                                        <div id="collapseTen" class="accordion-collapse collapse  show"
                                            data-bs-parent="#accordionExampleTwo">
                                            <div class="accordion-body">Randomised words which donâ€™t look even slightly
                                                believable. If you are going to use a passage of Lorem Ipsum, you need
                                                to be sure
                                                there isnâ€™t anything.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- faq area end -->

        <!-- faq area two start -->
        <section class="rs-faq-area section-space-bottom rs-faq-five">
            <div class="container">
                <div class="row align-items-center g-5">
                    <div class="col-xl-7 col-lg-7">
                        <div class="rs-faq-content-wrapper">
                            <div class="rs-section-title-wrapper">
                                <span class="rs-section-subtitle has-theme-orange justify-content-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15"
                                        fill="none">
                                        <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                                            fill="#0C7BC7"></path>
                                    </svg>
                                    Question
                                </span>
                                <h2 class="rs-section-title rs-split-text-enable split-in-fade">Do you have
                                    questions for our services</h2>
                                <p class="descrip">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod
                                    tempor
                                    incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div class="rs-faq-content rs-accordion-one has-white">
                                <div class="accordion-wrapper">
                                    <div class="accordion" id="accordionExampleThree">
                                        <div class="rs-accordion-item">
                                            <h4 class="accordion-header" id="headingEleven">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseEleven" aria-expanded="true"
                                                    aria-controls="collapseEleven">
                                                    01. Why is sand important for industry?
                                                    <span class="accordion-btn"></span>
                                                </button>
                                            </h4>
                                            <div id="collapseEleven" class="accordion-collapse collapse show"
                                                data-bs-parent="#accordionExampleThree">
                                                <div class="accordion-body"> Randomised words which donâ€™t look even
                                                    slightly
                                                    believable. If you are going to use a passage of Lorem Ipsum, you
                                                    need to be sure
                                                    there isnâ€™t anything.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="rs-accordion-item">
                                            <h6 class="accordion-header" id="headingTwelve">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTwelve"
                                                    aria-expanded="false" aria-controls="collapseTwelve">
                                                    02. Can I switch to a different plan?
                                                    <span class="accordion-btn"></span>
                                                </button>
                                            </h6>
                                            <div id="collapseTwelve" class="accordion-collapse collapse"
                                                data-bs-parent="#accordionExampleThree">
                                                <div class="accordion-body">Randomised words which donâ€™t look even
                                                    slightly
                                                    believable. If you are going to use a passage of Lorem Ipsum, you
                                                    need to be sure
                                                    there isnâ€™t anything.</div>
                                            </div>
                                        </div>
                                        <div class="rs-accordion-item">
                                            <h6 class="accordion-header" id="headingThirteen">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseThirteen"
                                                    aria-expanded="false" aria-controls="collapseThirteen">
                                                    03. What should I wear for an industry treatment?
                                                    <span class="accordion-btn"></span>
                                                </button>
                                            </h6>
                                            <div id="collapseThirteen" class="accordion-collapse collapse"
                                                data-bs-parent="#accordionExampleThree">
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
                    </div>
                    <div class="col-xl-5 col-lg-5">
                        <div class="rs-contact-form rs-contact-one has-black">
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
        <!-- faq area two end -->

    `

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: processHTML(htmlContent) }} />
      <CtaSection />
    </>
  )
}

export default FAQ
