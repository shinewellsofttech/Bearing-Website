import { useEffect } from 'react'
import CtaSection from '../components/CtaSection'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'

function Cart() {
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
                                <h1 class="rs-breadcrumb-title">Cart</h1>
                            </div>
                            <div class="rs-breadcrumb-menu">
                                <nav>
                                    <ul>
                                        <li><span><a href="index.html">Western Bearning</a></span></li>
                                        <li><span>Cart</span></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- breadcrumb area end -->

        <!-- Cart-area area start -->
        <section class="rs-cart-area section-space">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="rs-cart-list mb-25 mr-30">
                            <div class="shop-table-content table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Images</th>
                                            <th>Product</th>
                                            <th>Unit Price</th>
                                            <th>Quantity</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="product-thumbnail"><a href="product-details.html"><img
                                                        src="assets/images/shop/shop-thumb-01.png" alt="img"></a></td>
                                            <td><a href="product-details.html">Adjustable Wrentch</a></td>
                                            <td>$15.00</td>
                                            <td>
                                                <div class="rs-product-quantity">
                                                    <span class="rs-cart-minus">
                                                        <svg width="10" height="2" viewBox="0 0 10 2" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 1H9" stroke="currentColor" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                    <input class="rs-cart-input" type="text" value="1">
                                                    <span class="rs-cart-plus">
                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 1V9" stroke="currentColor" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M1 5H9" stroke="currentColor" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <button class="removeRow"><i class="fa fa-times"></i> Remove</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="product-thumbnail"><a href="product-details.html"><img
                                                        src="assets/images/shop/shop-thumb-02.png" alt="img"></a></td>
                                            <td><a href="product-details.html">Digital Multimeter</a></td>
                                            <td>$10.00</td>
                                            <td>
                                                <div class="rs-product-quantity">
                                                    <span class="rs-cart-minus">
                                                        <svg width="10" height="2" viewBox="0 0 10 2" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 1H9" stroke="currentColor" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                    <input class="rs-cart-input" type="text" value="1">
                                                    <span class="rs-cart-plus">
                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5 1V9" stroke="currentColor" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M1 5H9" stroke="currentColor" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <button class="removeRow"><i class="fa fa-times"></i> Remove</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="rs-cart-bottom">
                            <div class="row align-items-end g-5">
                                <div class="col-xl-7 col-md-8">
                                    <div class="rs-cart-coupon">
                                        <form action="#">
                                            <div class="rs-cart-coupon-input-box">
                                                <label>Coupon Code:</label>
                                                <div
                                                    class="rs-cart-coupon-input d-flex flex-wrap gap-15 align-items-center">
                                                    <input type="text" placeholder="Enter Coupon Code">
                                                    <button type="submit" class="rs-btn has-theme-orange">Apply Coupon
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-xl-5 col-md-4">
                                    <div class="rs-cart-update text-md-end">
                                        <button type="submit" class="rs-btn has-theme-orange">Update Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-end">
                    <div class="col-md-5">
                        <div class="cart-page-total">
                            <h5>Cart Totals</h5>
                            <ul class="mb-20">
                                <li>Subtotal <span>$50.00</span></li>
                                <li>Total <span>$50.00</span></li>
                            </ul>
                            <a class="rs-btn has-bg-transparent" href="checkout.html">Proceed to checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Cart-area area end -->

    `

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: processHTML(htmlContent) }} />
      <CtaSection />
    </>
  )
}

export default Cart
