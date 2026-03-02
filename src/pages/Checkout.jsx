import { useEffect } from 'react'
import CtaSection from '../components/CtaSection'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function Checkout() {
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
                                <h1 class="rs-breadcrumb-title">Checkout</h1>
                            </div>
                            <div class="rs-breadcrumb-menu">
                                <nav>
                                    <ul>
                                        <li><span><a href="index.html">Western Bearning</a></span></li>
                                        <li><span>Checkout</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- breadcrumb area end -->

        <!-- Coupon area start -->
        <div class="rs-coupon-area section-space-top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="coupon-accordion">
                            <div class="checkout-verify-item">
                                <p class="checkout-verify-reveal">Have a coupon? <button type="button"
                                        class="checkout-login-form-reveal-btn">Click here to enter your code</button>
                                </p>
                                <div id="checkout-coupon" class="coupon-content">
                                    <div class="coupon-inner">
                                        <div class="coupon-info">
                                            <p>If you have a coupon code, please apply it below.</p>
                                            <form action="#">
                                                <p class="checkout-coupon-form">
                                                    <input type="text" placeholder="Coupon Code">
                                                    <button class="rs-btn has-theme-orange" type="submit">Apply
                                                        Coupon</button>
                                                </p>
                                            </form>
                                        </div>
                                        <div class="coupon-info">
                                            <form action="#">
                                                <p class="checkout-form">
                                                    <label>Username or email <span class="required">*</span></label>
                                                    <input type="text">
                                                </p>
                                                <p class="checkout-form">
                                                    <label>Password <span class="required">*</span></label>
                                                    <input type="text">
                                                </p>
                                                <p class="checkout-form-btn">
                                                    <button class="rs-btn has-theme-orange" type="submit">Login</button>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--Coupon area end -->

        <!-- checkout area start -->
        <div class="checkout-bill-area">
            <div class="container">
                <div class="checkout-bill-inner">
                    <div class="row g-5">
                        <div class="col-xl-6 col-lg-6">
                            <h3 class="checkout-bill-title">Billing Details</h3>
                            <div class="checkout-bill-form">
                                <form action="#">
                                    <div class="col-md-12">
                                        <div class="checkout-input">
                                            <label>Company name <span>*</span></label>
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-input">
                                            <label>Country / Region<span>*</span></label>
                                            <select class="checkout-country country-list">
                                                <option>United State</option>
                                                <option>Vietnam</option>
                                                <option>France</option>
                                                <option>Japan</option>
                                                <option>Maldives</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-input">
                                            <label>Street address <span>*</span></label>
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-input">
                                            <label>Town city <span>*</span></label>
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-input">
                                            <label>State<span>*</span></label>
                                            <select class="checkout-country country-list">
                                                <option>Alabama</option>
                                                <option>Alaska</option>
                                                <option>Arizona</option>
                                                <option>Arkansas</option>
                                                <option>California</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-input">
                                            <label>Town city <span>*</span></label>
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-input">
                                            <label>Phone <span>*</span></label>
                                            <input id="email" name="email" type="email">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-input">
                                            <label>Email address <span>*</span></label>
                                            <input id="phone" name="phone" type="text">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <h3 class="checkout-bill-title">Additional information</h3>
                            <div class="checkout-bill-form">
                                <form action="#">
                                    <textarea id="message" name="message"
                                        placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- checkout area end -->

        <!-- checkout place order area -->
        <section class="checkout-place-order section-space-bottom pt-40">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="checkout-place-total">
                            <h3 class="checkout-place-order-title mb-25">Your order</h3>
                            <ul class="mb-20">
                                <li>Product <span>Subtotal</span></li>
                                <li>Adjustable Wrentch Ã— 1 <span>$12.00</span></li>
                                <li>Subtotal <span>$12.00</span></li>
                                <li>Total <span>$12.00</span></li>
                            </ul>
                            <p class="checkout-place-order-btn">
                                <button class="rs-btn has-theme-orange" type="submit">Place Order</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- checkout place order end -->

    `

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: processHTML(htmlContent) }} />
      <CtaSection />
    </>
  )
}

export default Checkout
