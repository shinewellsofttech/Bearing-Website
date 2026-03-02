import { useEffect, useRef } from 'react'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function Team() {
  const contentRef = useRef(null)
  useSwiper()
  useScripts()

  // Apply data-background and theme scripts after content is in DOM (so CSS/backgrounds work)
  useEffect(() => {
    const wrapper = contentRef.current
    if (!wrapper) return
    wrapper.querySelectorAll('[data-background]').forEach((el) => {
      const bg = el.getAttribute('data-background')
      if (bg) el.style.backgroundImage = `url(${bg})`
    })
  }, [])

  // Process HTML content for React
  const processHTML = (html) => {
    if (!html) return ''
    
    return html
      // Keep 'class' - raw HTML in dangerouslySetInnerHTML uses class, not className
      // Convert image paths
      .replace(/src="assets\//g, 'src="/assets/')
      .replace(/href="assets\//g, 'href="/assets/')
      // Convert data-background paths
      .replace(/data-background="assets\//g, 'data-background="/assets/')
      // Convert href links to React Router paths
      .replace(/href="([^"]+\.html)"/g, (match, path) => {
        const route = path.replace('.html', '').replace('index', '')
        const slug = route ? `/${route}` : '/'
        return `href="${slug}"`
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
                                <h1 class="rs-breadcrumb-title">Team</h1>
                            </div>
                            <div class="rs-breadcrumb-menu">
                                <nav>
                                    <ul>
                                        <li><span><a href="index.html">Western Bearning</a></span></li>
                                        <li><span>Team</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- breadcrumb area end -->

        <!-- team area start -->
        <section class="rs-team-area section-space rs-team-one">
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="rs-team-item">
                            <div class="rs-team-thumb has-clip">
                                <a href="team-details.html"><img src="assets/images/team/team-thumb-01.png"
                                        alt="image"></a>
                                <div class="rs-theme-social rs-team-social has-transparent">
                                    <a href="#"><i class="ri-twitter-x-line"></i></a>
                                    <a href="#"><i class="ri-facebook-fill"></i></a>
                                    <a href="#"><i class="ri-linkedin-fill"></i></a>
                                </div>
                            </div>
                            <div class="rs-team-content-wrapper">
                                <div class="rs-team-content-box">
                                    <h5 class="rs-team-title"><a href="team-details.html">Peter Hase</a></h5>
                                    <span class="rs-team-designation">Sr. Engineer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="rs-team-item">
                            <div class="rs-team-thumb has-clip">
                                <a href="team-details.html"> <img src="assets/images/team/team-thumb-02.png"
                                        alt="image"></a>
                                <div class="rs-theme-social rs-team-social has-transparent">
                                    <a href="#"><i class="ri-twitter-x-line"></i></a>
                                    <a href="#"><i class="ri-facebook-fill"></i></a>
                                    <a href="#"><i class="ri-linkedin-fill"></i></a>
                                </div>
                            </div>
                            <div class="rs-team-content-wrapper">
                                <div class="rs-team-content-box">
                                    <h5 class="rs-team-title"><a href="team-details.html">Jack Peter</a></h5>
                                    <span class="rs-team-designation">Four Man</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="rs-team-item">
                            <div class="rs-team-thumb has-clip">
                                <a href="team-details.html"><img src="assets/images/team/team-thumb-03.png"
                                        alt="image"></a>
                                <div class="rs-theme-social rs-team-social has-transparent">
                                    <a href="#"><i class="ri-twitter-x-line"></i></a>
                                    <a href="#"><i class="ri-facebook-fill"></i></a>
                                    <a href="#"><i class="ri-linkedin-fill"></i></a>
                                </div>
                            </div>
                            <div class="rs-team-content-wrapper">
                                <div class="rs-team-content-box">
                                    <h5 class="rs-team-title"><a href="team-details.html">Bradley Roy</a></h5>
                                    <span class="rs-team-designation">Sr. Engineer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="rs-team-item">
                            <div class="rs-team-thumb has-clip">
                                <a href="team-details.html"><img src="assets/images/team/team-thumb-09.png"
                                        alt="image"></a>
                                <div class="rs-theme-social rs-team-social has-transparent">
                                    <a href="#"><i class="ri-twitter-x-line"></i></a>
                                    <a href="#"><i class="ri-facebook-fill"></i></a>
                                    <a href="#"><i class="ri-linkedin-fill"></i></a>
                                </div>
                            </div>
                            <div class="rs-team-content-wrapper">
                                <div class="rs-team-content-box">
                                    <h5 class="rs-team-title"><a href="team-details.html">John Maxwell</a></h5>
                                    <span class="rs-team-designation">Sr. Engineer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="rs-team-item">
                            <div class="rs-team-thumb has-clip">
                                <a href="team-details.html"><img src="assets/images/team/team-thumb-10.png"
                                        alt="image"></a>
                                <div class="rs-theme-social rs-team-social has-transparent">
                                    <a href="#"><i class="ri-twitter-x-line"></i></a>
                                    <a href="#"><i class="ri-facebook-fill"></i></a>
                                    <a href="#"><i class="ri-linkedin-fill"></i></a>
                                </div>
                            </div>
                            <div class="rs-team-content-wrapper">
                                <div class="rs-team-content-box">
                                    <h5 class="rs-team-title"><a href="team-details.html">Bradley Roy</a></h5>
                                    <span class="rs-team-designation">Sr. Engineer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="rs-team-item">
                            <div class="rs-team-thumb has-clip">
                                <a href="team-details.html"><img src="assets/images/team/team-thumb-01.png"
                                        alt="image"></a>
                                <div class="rs-theme-social rs-team-social has-transparent">
                                    <a href="#"><i class="ri-twitter-x-line"></i></a>
                                    <a href="#"><i class="ri-facebook-fill"></i></a>
                                    <a href="#"><i class="ri-linkedin-fill"></i></a>
                                </div>
                            </div>
                            <div class="rs-team-content-wrapper">
                                <div class="rs-team-content-box">
                                    <h5 class="rs-team-title"><a href="team-details.html">Joshua sendu</a></h5>
                                    <span class="rs-team-designation">Sr. Engineer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- team area end -->


    `

  return (
    <div ref={contentRef} className="rs-team-page rs-main" dangerouslySetInnerHTML={{ __html: processHTML(htmlContent) }} />
  )
}

export default Team
