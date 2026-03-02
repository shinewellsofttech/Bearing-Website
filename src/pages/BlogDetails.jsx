import { useEffect } from 'react'
import CtaSection from '../components/CtaSection'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function BlogDetails() {
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
                                <h1 class="rs-breadcrumb-title">Blog Details</h1>
                            </div>
                            <div class="rs-breadcrumb-menu">
                                <nav>
                                    <ul>
                                        <li><span><a href="index.html">Home</a></span></li>
                                        <li><span>Blog Details</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- breadcrumb area end -->

        <!-- postbox area start -->
        <section class="rs-postbox-area section-space">
            <div class="container">
                <div class="row g-5">
                    <div class="col-xl-8 col-lg-8">
                        <div class="rs-postbox-details-wrapper">
                            <div class="rs-postbox-details-thumb">
                                <img src="assets/images/blog/details/blog-details-01.png" alt="image">
                            </div>
                            <div class="rs-postbox-content">
                                <div class="rs-postbox-meta-list">
                                    <div class="rs-postbox-meta-item">
                                        <span class="rs-meta-text">By<a class="meta-author" href="blog-details.html">
                                                Western Bearning</a></span>
                                    </div>
                                    <div class="rs-postbox-meta-item">
                                        <span class="rs-postbox-meta-text">February 8, 2025</span>
                                    </div>
                                </div>
                                <h3 class="rs-postbox-details-title">
                                    Construction of a new high tech plant in washingtons
                                </h3>
                            </div>
                            <div class="rs-postbox-details-content">
                                <p>Industryâ€™s standard dummy text ever since the 1500s, when an unknown printer took a
                                    galley of
                                    type and scrambled it to make a type specimen book et iusto odio dignissimos
                                    ducimus.</p>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati
                                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
                                    animi, id est
                                    laborum et dolorum fuga harum quidem rerum facilis est et expedita distinctio.</p>
                                <div class="rs-postbox-quote quote-two">
                                    <blockquote>
                                        <p>â€œWe can easily manage if we will only take, each day, the burden appointed to
                                            it. But
                                            the load will be too heavy for us if we carry yesterdayâ€™s burden over again
                                            today, and
                                            then add the burden of the morrow before we are required to bear it
                                            factorial non.â€</p>
                                        <cite>Robert Calibo</cite>
                                    </blockquote>
                                </div>
                                <h3 class="rs-postbox-details-feature-title mb-20">Growth and meaning of mechanical
                                    technology
                                </h3>
                                <p>Industryâ€™s standard dummy text ever since the when an unknown printer took a galley
                                    of type
                                    and scrambled it to make a type specimen book. It was popularised in the 1960s with
                                    the
                                    release of Letraset sheets containing Lorem Ipsum passages.</p>
                                <div class="rs-postbox-details-thumb-wrapper mb-30">
                                    <div class="row g-5">
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <div class="rs-postbox-details-thumb">
                                                <img src="assets/images/blog/details/blog-details-02.png" alt="image">
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <div class="rs-postbox-details-thumb">
                                                <img src="assets/images/blog/details/blog-details-03.png" alt="image">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="rs-postbox-details-feature-title mb-20">Engineering and mechanics money for a
                                    better
                                    future.
                                </h3>
                                <p>Industryâ€™s standard dummy text ever since the when an unknown printer took a galley
                                    of type
                                    and scrambled it to make a type specimen book. It was popularised in the 1960s with
                                    the
                                    release of Letraset sheets containing Lorem Ipsum passages.</p>
                                <div class="rs-postbox-details-feature">
                                    <ul>
                                        <li>Prepare Documentation </li>
                                        <li>Industry Standard Dummy </li>
                                        <li>Brand Consistency </li>
                                    </ul>
                                </div>
                                <div class="rs-postbox-details-video">
                                    <div class="rs-postbox-details-bg-thumb"
                                        data-background="assets/images/bg/video-bg-07.png">
                                        <div class="container">
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
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati
                                    cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
                                    animi. </p>

                                <div class="rs-postbox-details-tags tagcloud">
                                    <span>Tags:</span>
                                    <a href="#">Factory</a>
                                    <a href="#">Gas</a>
                                    <a href="#">Manufacture</a>
                                    <a href="#">Robotic</a>
                                </div>



                                <div class="rs-postbox-details-comment-wrapper">
                                    <h5 class="rs-postbox-details-comment-title">3 comments on â€œConstruction of a new
                                        high tech plant in washingtonsâ€ </h5>
                                    <div class="rs-postbox-details-comment-inner">
                                        <ul>
                                            <li>
                                                <div class="rs-postbox-details-comment-box">
                                                    <div class="rs-postbox-details-comment-thumb">
                                                        <img src="assets/images/user/user-thumb-01.png" alt="">
                                                    </div>
                                                    <div class="rs-postbox-details-comment-content">
                                                        <div
                                                            class="rs-postbox-details-comment-top d-flex justify-content-between align-items-start">
                                                            <div class="rs-postbox-details-comment-avater">
                                                                <h6 class="rs-postbox-details-comment-avater-title">
                                                                    Lance Bogrol</h6>
                                                                <span class="rs-postbox-details-avater-meta">12 April,
                                                                    2023 at
                                                                    3.50pm</span>
                                                            </div>
                                                        </div>
                                                        <p>Accusamus iusto odio dignissimos ducimus blanditiis
                                                            praesentium voluptatum deleniti atque corrupti quos dolores
                                                        </p>
                                                        <div class="rs-postbox-details-comment-reply">
                                                            <a href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul class="children">
                                                    <li>
                                                        <div class="rs-postbox-details-comment-box">
                                                            <div class="rs-postbox-details-comment-thumb">
                                                                <img src="assets/images/user/user-thumb-02.png" alt="">
                                                            </div>
                                                            <div class="rs-postbox-details-comment-content">
                                                                <div
                                                                    class="rs-postbox-details-comment-top d-flex justify-content-between align-items-start">
                                                                    <div class="rs-postbox-details-comment-avater">
                                                                        <h6
                                                                            class="rs-postbox-details-comment-avater-title">
                                                                            Dasy Lily</h6>
                                                                        <span class="rs-postbox-details-avater-meta">12
                                                                            April, 2023 at
                                                                            3.50pm</span>
                                                                    </div>
                                                                </div>
                                                                <p>Deleniti atque corrupti blanditiis iusto odio
                                                                    dignissimos ducimus blanditiis praesentium
                                                                    voluptatum deleniti atque corrupti quos dolores</p>
                                                                <div class="rs-postbox-details-comment-reply">
                                                                    <a href="#">Reply</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div class="rs-postbox-details-comment-box">
                                                    <div class="rs-postbox-details-comment-thumb">
                                                        <img src="assets/images/user/user-thumb-03.png" alt="">
                                                    </div>
                                                    <div class="rs-postbox-details-comment-content">
                                                        <div
                                                            class="rs-postbox-details-comment-top d-flex justify-content-between align-items-start">
                                                            <div class="rs-postbox-details-comment-avater">
                                                                <h6 class="rs-postbox-details-comment-avater-title">
                                                                    Jeremy C. Irizarry
                                                                </h6>
                                                                <span class="rs-postbox-details-avater-meta">12 April,
                                                                    2023 at
                                                                    3.50pm</span>
                                                            </div>
                                                        </div>
                                                        <p>Ducimus blanditiis iusto odio dignissimos ducimus blanditiis
                                                            praesentium voluptatum deleniti atque corrupti quos dolores
                                                        </p>
                                                        <div class="rs-postbox-details-comment-reply">
                                                            <a href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="rs-postbox-comment-form">
                                    <div class="rs-postbox-comments-title mt-45 mb-30">
                                        <h4 class="mb-15">Leave a Comment</h4>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <form>
                                        <div class="row g-4">
                                            <div class="col-xl-6">
                                                <div class="input-box">
                                                    <input type="text" placeholder="Name">
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <div class="input-box">
                                                    <div class="input-box">
                                                        <input type="email" placeholder="Email">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="input-box">
                                                    <textarea cols="30" rows="10"
                                                        placeholder="Type Comment here"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="rs-postbox-comment-btn">
                                                    <button class="rs-btn has-theme-orange" type="submit">Post
                                                        Comment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="rs-sidebar-wrapper rs-sidebar-sticky">
                            <div class="sidebar-widget mb-30">
                                <div class="sidebar-search">
                                    <form action="#">
                                        <div class="sidebar-search-input">
                                            <input type="text" placeholder="Searching...">
                                            <button type="submit">
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"></path>
                                                    <path d="M16.9995 17L13.1328 13.1333" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="sidebar-widget widget-categories-two mb-30">
                                <h5 class="sidebar-widget-title">Categories</h5>
                                <div class="sidebar-widget-content">
                                    <div class="list">
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
                                </div>
                            </div>
                            <div class="sidebar-widget mb-30">
                                <h5 class="sidebar-widget-title">Recent Posts</h5>
                                <div class="sidebar-widget-content">
                                    <div class="sidebar-blog-item-wrapper">
                                        <div class="sidebar-blog-item">
                                            <div class="sidebar-blog-thumb">
                                                <a href="blog-details.html">
                                                    <img src="assets/images/blog/sidebar/blog-sm-01.png" alt="image">
                                                </a>
                                            </div>
                                            <div class="sidebar-blog-content">
                                                <h6 class="sidebar-blog-title">
                                                    <a href="blog-details.html"> Construction of a new high tech
                                                        plant</a>
                                                </h6>
                                                <div class="sidebar-blog-meta">
                                                    <i class="ri-calendar-line"></i>
                                                    <span>May 20, 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sidebar-blog-item">
                                            <div class="sidebar-blog-thumb">
                                                <a href="blog-details.html">
                                                    <img src="assets/images/blog/sidebar/blog-sm-02.png" alt="image">
                                                </a>
                                            </div>
                                            <div class="sidebar-blog-content">
                                                <h6 class="sidebar-blog-title">
                                                    <a href="blog-details.html">
                                                        Building resilient supply chains for Western Bearnings </a>
                                                </h6>
                                                <div class="sidebar-blog-meta">
                                                    <i class="ri-calendar-line"></i>
                                                    <span>May 20, 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sidebar-blog-item">
                                            <div class="sidebar-blog-thumb">
                                                <a href="blog-details.html">
                                                    <img src="assets/images/blog/sidebar/blog-sm-03.png" alt="image">
                                                </a>
                                            </div>
                                            <div class="sidebar-blog-content">
                                                <h6 class="sidebar-blog-title">
                                                    <a href="blog-details.html">
                                                        Factories technologies in interactive and plants </a>
                                                </h6>
                                                <div class="sidebar-blog-meta">
                                                    <i class="ri-calendar-line"></i>
                                                    <span>May 20, 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sidebar-blog-item">
                                            <div class="sidebar-blog-thumb">
                                                <a href="blog-details.html">
                                                    <img src="assets/images/blog/sidebar/blog-sm-01.png" alt="image">
                                                </a>
                                            </div>
                                            <div class="sidebar-blog-content">
                                                <h6 class="sidebar-blog-title">
                                                    <a href="blog-details.html">
                                                        Building resilient supply for Western Bearnings and factorie </a>
                                                </h6>
                                                <div class="sidebar-blog-meta">
                                                    <i class="ri-calendar-line"></i>
                                                    <span>May 20, 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sidebar-widget">
                                <h5 class="sidebar-widget-title">Popular Tags</h5>
                                <div class="sidebar-widget-content tagcloud">
                                    <a href="#">Construction</a>
                                    <a href="#">Factory</a>
                                    <a href="#">Gas</a>
                                    <a href="#">Industry</a>
                                    <a href="#">Manufacture</a>
                                    <a href="#">Metallurgy</a>
                                    <a href="#">Oil</a>
                                    <a href="#">Robotic</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- rs-postbox area end -->

    `

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: processHTML(htmlContent) }} />
      <CtaSection />
    </>
  )
}

export default BlogDetails
