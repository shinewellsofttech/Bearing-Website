import { useEffect } from 'react'
import CtaSection from '../components/CtaSection'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function Blog() {
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
                                <h1 class="rs-breadcrumb-title">Blog</h1>
                            </div>
                            <div class="rs-breadcrumb-menu">
                                <nav>
                                    <ul>
                                        <li><span><a href="index.html">Home</a></span></li>
                                        <li><span>Blog</span></li>
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
                        <div class="rs-postbox-wrapper">
                            <article class="rs-postbox-item">
                                <div class="rs-postbox-thumb">
                                    <a href="blog-details.html">
                                        <img src="assets/images/blog/post/blog-post-01.png" alt="image">
                                    </a>
                                    <div class="rs-postbox-tag">
                                        <a href="blog-details.html">Company</a>
                                    </div>
                                </div>
                                <div class="rs-postbox-content">
                                    <div class="rs-postbox-meta-list">
                                        <div class="rs-postbox-meta-item">
                                            <span class="rs-meta-text">By<a class="meta-author"
                                                    href="blog-details.html">
                                                    Western Bearning</a></span>
                                        </div>
                                        <div class="rs-postbox-meta-item">
                                            <span class="rs-postbox-meta-text"><a href="blog-details.html">February 8,
                                                    2025</a></span>
                                        </div>
                                    </div>
                                    <h3 class="rs-postbox-title">
                                        <a href="blog-details.html">Construction of a new high tech plant in washingtons
                                        </a>
                                    </h3>
                                    <div class="rs-postbox-text">
                                        <p>Industryâ€™s standard dummy text ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. At vero
                                            eos et accusamus et iusto odio.</p>
                                    </div>
                                    <div class="rs-postbox-btn">
                                        <a class="rs-btn has-theme-orange has-icon has-bg"
                                            href="blog-details.html">Continue Reading
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
                            </article>
                            <article class="rs-postbox-item">
                                <div class="rs-postbox-thumb">
                                    <a href="blog-details.html">
                                        <img src="assets/images/blog/post/blog-post-02.png" alt="image">
                                    </a>
                                    <div class="rs-postbox-tag">
                                        <a href="blog-details.html">Oil Factory</a>
                                    </div>
                                </div>
                                <div class="rs-postbox-content">
                                    <div class="rs-postbox-meta-list">
                                        <div class="rs-postbox-meta-item has-separator">
                                            <span class="rs-meta-text">By<a class="meta-author"
                                                    href="blog-details.html">
                                                    Western Bearning</a></span>
                                        </div>
                                        <div class="rs-postbox-meta-item">
                                            <span class="rs-postbox-meta-text"><a href="blog-details.html">June 12,
                                                    2023</a></span>
                                        </div>
                                    </div>
                                    <h3 class="rs-postbox-title">
                                        <a href="blog-details.html"> Building resilient supply chains for Western Bearnings
                                        </a>
                                    </h3>
                                    <div class="rs-postbox-text">
                                        <p>ndustryâ€™s standard dummy text ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. At vero
                                            eos et accusamus et iusto odio.</p>
                                    </div>
                                    <div class="rs-postbox-btn">
                                        <a class="rs-btn has-theme-orange has-icon has-bg"
                                            href="blog-details.html">Continue Reading
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
                            </article>
                            <article class="rs-postbox-item">
                                <div class="rs-postbox-thumb">
                                    <a href="blog-details.html">
                                        <img src="assets/images/blog/post/blog-post-03.png" alt="image">
                                    </a>
                                    <div class="rs-postbox-tag">
                                        <a href="blog-details.html">Manufacture</a>
                                    </div>
                                </div>
                                <div class="rs-postbox-content">
                                    <div class="rs-postbox-meta-list">
                                        <div class="rs-postbox-meta-item has-separator">
                                            <span class="rs-meta-text">By<a class="meta-author"
                                                    href="blog-details.html">
                                                    Western Bearning</a></span>
                                        </div>
                                        <div class="rs-postbox-meta-item">
                                            <span class="rs-postbox-meta-text"><a href="blog-details.html">June 12,
                                                    2023</a></span>
                                        </div>
                                    </div>
                                    <h3 class="rs-postbox-title">
                                        <a href="blog-details.html">Factories technologies in interactive and plants
                                        </a>
                                    </h3>
                                    <div class="rs-postbox-text">
                                        <p>Industryâ€™s standard dummy text ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. At vero
                                            eos et accusamus et iusto odio.</p>
                                    </div>
                                    <div class="rs-postbox-btn">
                                        <a class="rs-btn has-theme-orange has-icon has-bg"
                                            href="blog-details.html">Continue Reading
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
                            </article>
                            <article class="rs-postbox-item">
                                <div class="rs-postbox-thumb">
                                    <a href="blog-details.html">
                                        <img src="assets/images/blog/post/blog-post-04.png" alt="image">
                                    </a>
                                    <div class="rs-postbox-tag">
                                        <a href="blog-details.html">Industry</a>
                                    </div>
                                </div>
                                <div class="rs-postbox-content">
                                    <div class="rs-postbox-meta-list">
                                        <div class="rs-postbox-meta-item has-separator">
                                            <span class="rs-meta-text">By<a class="meta-author"
                                                    href="blog-details.html">
                                                    Western Bearning</a></span>
                                        </div>
                                        <div class="rs-postbox-meta-item">
                                            <span class="rs-postbox-meta-text"><a href="blog-details.html">June 12,
                                                    2023</a></span>
                                        </div>
                                    </div>
                                    <h3 class="rs-postbox-title">
                                        <a href="blog-details.html">Building resilient supply for Western Bearnings and
                                            factorie </a>
                                    </h3>
                                    <div class="rs-postbox-text">
                                        <p>Industryâ€™s standard dummy text ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. At vero
                                            eos et accusamus et iusto odio.</p>
                                    </div>
                                    <div class="rs-postbox-btn">
                                        <a class="rs-btn has-theme-orange has-icon has-bg"
                                            href="blog-details.html">Continue Reading
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
                            </article>
                            <article class="rs-postbox-item">
                                <div class="rs-postbox-thumb">
                                    <a href="blog-details.html">
                                        <img src="assets/images/blog/post/blog-post-01.png" alt="image">
                                    </a>
                                    <div class="rs-postbox-tag">
                                        <a href="blog-details.html">Manufacture</a>
                                    </div>
                                </div>
                                <div class="rs-postbox-content">
                                    <div class="rs-postbox-meta-list">
                                        <div class="rs-postbox-meta-item has-separator">
                                            <span class="rs-meta-text">By<a class="meta-author"
                                                    href="blog-details.html">
                                                    Western Bearning</a></span>
                                        </div>
                                        <div class="rs-postbox-meta-item">
                                            <span class="rs-postbox-meta-text"><a href="blog-details.html">June 12,
                                                    2023</a></span>
                                        </div>
                                    </div>
                                    <h3 class="rs-postbox-title">
                                        <a href="blog-details.html">Construction of a new high tech plant in Washington
                                        </a>
                                    </h3>
                                    <div class="rs-postbox-text">
                                        <p>Industryâ€™s standard dummy text ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. At vero
                                            eos et accusamus et iusto odio.</p>
                                    </div>
                                    <div class="rs-postbox-btn">
                                        <a class="rs-btn has-theme-orange has-icon has-bg"
                                            href="blog-details.html">Continue Reading
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
                            </article>
                            <article class="rs-postbox-item">
                                <div class="rs-postbox-thumb">
                                    <a href="blog-details.html">
                                        <img src="assets/images/blog/post/blog-post-02.png" alt="image">
                                    </a>
                                    <div class="rs-postbox-tag">
                                        <a href="blog-details.html">Oil Factory</a>
                                    </div>
                                </div>
                                <div class="rs-postbox-content">
                                    <div class="rs-postbox-meta-list">
                                        <div class="rs-postbox-meta-item has-separator">
                                            <span class="rs-meta-text">By<a class="meta-author"
                                                    href="blog-details.html">
                                                    Western Bearning</a></span>
                                        </div>
                                        <div class="rs-postbox-meta-item">
                                            <span class="rs-postbox-meta-text"><a href="blog-details.html">June 12,
                                                    2023</a></span>
                                        </div>
                                    </div>
                                    <h3 class="rs-postbox-title">
                                        <a href="blog-details.html">Interactive technologies in factories and plants
                                        </a>
                                    </h3>
                                    <div class="rs-postbox-text">
                                        <p>Industryâ€™s standard dummy text ever since the 1500s, when an unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. At vero
                                            eos et accusamus et iusto odio.</p>
                                    </div>
                                    <div class="rs-postbox-btn">
                                        <a class="rs-btn has-theme-orange has-icon has-bg"
                                            href="blog-details.html">Continue Reading
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
                            </article>
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
                <!-- pagination style -->
                <div class="row">
                    <div class="col-xl-6">
                        <div class="pagination-wrapper mt-40">
                            <div class="common-pagination text-start">
                                <nav>
                                    <ul>
                                        <li><a class="current">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">â†’</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- pagination style end -->
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

export default Blog
