import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSwiper } from '../hooks/useSwiper'
import { useScripts } from '../hooks/useScripts'
import { products } from './Shop'

function ShopDetails() {
  const { id } = useParams()
  useSwiper()
  useScripts()

  // Find the product by ID
  const product = products.find(p => p.id === id) || products[0]

  // Get related products (exclude current product)
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 3)

  return (
    <>
      {/* breadcrumb area start */}
      <section className="rs-breadcrumb-area rs-breadcrumb-one p-relative">
        <div className="rs-breadcrumb-bg" data-background="/assets/images/bg/breadcrumb-bg-01.png"></div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-8 col-lg-8">
              <div className="rs-breadcrumb-content-wrapper">
                <div className="rs-breadcrumb-title-wrapper">
                  <h1 className="rs-breadcrumb-title">Shop Details</h1>
                </div>
                <div className="rs-breadcrumb-menu">
                  <nav>
                    <ul>
                      <li><span><Link to="/">Western Bearning</Link></span></li>
                      <li><span>Shop Details</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb area end */}

      {/* shop area start */}
      <section className="rs-shop-area section-space">
        <div className="container">
          <div className="row align-items-lg-center g-5">
            <div className="col-md-6">
              <div className="product-details-thumb-wrap">
                <div className="product-details-thumb-top mb-10">
                  <div className="swiper product-details-active p-relative">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="product-details-thumb">
                          <img src={product.image} alt={product.name} />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product-details-thumb">
                          <img src={product.image} alt={product.name} />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="product-details-thumb">
                          <img src={product.image} alt={product.name} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-details-thumb-bottom">
                  <div className="product-details-slider-dot">
                    <div className="swiper product-details-nav">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <button className="custom-button"><img src={product.image} alt={product.name} /></button>
                        </div>
                        <div className="swiper-slide">
                          <button className="custom-button"><img src={product.image} alt={product.name} /></button>
                        </div>
                        <div className="swiper-slide">
                          <button className="custom-button"><img src={product.image} alt={product.name} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-details-wrapper shop-details">
                <h3 className="product-details-title mb-10">{product.name}</h3>
                <div className="product-details-rating d-flex align-items-center mb-10">
                  <div className="product-rating rating-color d-flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="product-details-rating-count">
                    <span>(06 review)</span>
                  </div>
                </div>
                <p className="mb-15">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu
                  fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt
                  mollit anim id est laborum.</p>
                <div className="product-details-price mb-25">
                  <h6 className="product-details-old-price">$100.00</h6>
                  <h6 className="product-details-current-price">{product.price}</h6>
                </div>
                <div className="product-details-count-wrap d-flex flex-wrap gap-20 align-items-center mb-25">
                  <div className="product-details-quantity">
                    <div className="rs-product-quantity">
                      <span className="rs-cart-minus">
                        <i className="fa-sharp fa-regular fa-minus"></i>
                      </span>
                      <input className="rs-cart-input" type="text" defaultValue="1" />
                      <span className="rs-cart-plus">
                        <i className="fa-sharp fa-regular fa-plus"></i>
                      </span>
                    </div>
                  </div>
                  <div className="product-details-action d-flex flex-wrap align-items-center">
                    <button className="rs-btn" type="button">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M3.54431 4.80484L4.08701 11.2487C4.12661 11.7447 4.53251 12.1167 5.02841 12.1167H5.03201H14.8519H14.8537C15.3227 12.1167 15.7232 11.7681 15.7898 11.3053L16.6448 5.41221C16.6646 5.27205 16.6295 5.13189 16.544 5.01868C16.4594 4.90457 16.3352 4.8309 16.1948 4.81113C16.0067 4.81832 8.20092 4.80754 3.54431 4.80484ZM5.02647 13.4642C3.84117 13.4642 2.83766 12.5405 2.74136 11.359L1.91696 1.57098L0.560653 1.33738C0.192551 1.27269 -0.0531497 0.924974 0.00985058 0.557495C0.0746508 0.190017 0.430152 -0.0489788 0.790154 0.00852392L2.66216 0.331977C2.96366 0.384987 3.19316 0.634765 3.21926 0.940248L3.43076 3.45689C16.2792 3.46228 16.3206 3.46857 16.3827 3.47576C16.884 3.54854 17.325 3.80999 17.6256 4.21251C17.9262 4.61413 18.0522 5.1092 17.9802 5.60516L17.1261 11.4974C16.965 12.6187 15.9894 13.4642 14.8554 13.4642H14.8509H5.03367H5.02647Z"
                          fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M13.4079 8.12567H10.9131C10.5396 8.12567 10.2381 7.82379 10.2381 7.45181C10.2381 7.07984 10.5396 6.77795 10.9131 6.77795H13.4079C13.7805 6.77795 14.0829 7.07984 14.0829 7.45181C14.0829 7.82379 13.7805 8.12567 13.4079 8.12567Z"
                          fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M4.63943 15.9048C4.91033 15.9048 5.12903 16.1235 5.12903 16.3944C5.12903 16.6653 4.91033 16.8849 4.63943 16.8849C4.36763 16.8849 4.14893 16.6653 4.14893 16.3944C4.14893 16.1235 4.36763 15.9048 4.63943 15.9048Z"
                          fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M4.63859 16.2097C4.53689 16.2097 4.45409 16.2925 4.45409 16.3942C4.45409 16.5985 4.82399 16.5985 4.82399 16.3942C4.82399 16.2925 4.74029 16.2097 4.63859 16.2097ZM4.6386 17.5569C3.996 17.5569 3.474 17.0349 3.474 16.3933C3.474 15.7518 3.996 15.2307 4.6386 15.2307C5.28121 15.2307 5.80411 15.7518 5.80411 16.3933C5.80411 17.0349 5.28121 17.5569 4.6386 17.5569Z"
                          fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M14.7918 15.9048C15.0627 15.9048 15.2823 16.1235 15.2823 16.3944C15.2823 16.6653 15.0627 16.8849 14.7918 16.8849C14.52 16.8849 14.3013 16.6653 14.3013 16.3944C14.3013 16.1235 14.52 15.9048 14.7918 15.9048Z"
                          fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M14.7906 16.2098C14.6898 16.2098 14.607 16.2926 14.607 16.3943C14.6079 16.6004 14.9769 16.5986 14.976 16.3943C14.976 16.2926 14.8923 16.2098 14.7906 16.2098ZM14.7909 17.5569C14.1483 17.5569 13.6263 17.0349 13.6263 16.3933C13.6263 15.7518 14.1483 15.2307 14.7909 15.2307C15.4344 15.2307 15.9573 15.7518 15.9573 16.3933C15.9573 17.0349 15.4344 17.5569 14.7909 17.5569Z"
                          fill="currentColor"></path>
                      </svg>
                      Add to cart</button>
                  </div>
                </div>
                <div className="product-details-categories product-details-more mb-5">
                  <p>Categories:</p>
                  <span>
                    <a href="#">Industry</a>
                  </span>
                </div>
                <div className="product-details-tags">
                  <span>Tags:</span>
                  <a href="#">Bearing,</a>
                  <a href="#">Industrial,</a>
                  <a href="#">Manufacturing,</a>
                  <a href="#">Equipment</a>
                </div>
              </div>
            </div>
          </div>
          <div className="product-information mt-50">
            <div className="row g-5 justify-content-center">
              <div className="col-xxl-12 col-xl-12 col-lg-12">
                <div className="product-information-tab">
                  <ul className="nav nav-pills mb-35 flex-wrap gap-10 has-border" id="pills-tab"
                    role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-information-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-information" type="button" role="tab"
                        aria-controls="pills-information" aria-selected="true">Description</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-review-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-review" type="button" role="tab"
                        aria-controls="pills-review" aria-selected="false">Review (02)</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-information" role="tabpanel"
                      aria-labelledby="pills-information-tab" tabIndex="0">
                      <div className="information-wrapper">
                        <p>It is a long established fact that a reader will be distracted by the
                          readable
                          content of a page when looking at its layout. The point of using Lorem
                          Ipsum is that
                          it has a more-or-less normal distribution of letters, as opposed to
                          using 'Content
                          here, content here', making it look like readable English. Many desktop
                          publishing
                          packages and web page editors now use Lorem Ipsum as their default model
                          text, and a
                          search for 'lorem ipsum' will uncover many web sites still in their
                          infancy. vel
                          illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                        <div className="product-wrapper">
                          <h4 className="mb-30">Related products</h4>
                          <div className="row g-5">
                            {relatedProducts.map((relatedProduct) => (
                              <div key={relatedProduct.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                <div className="rs-product-item">
                                  <div className="rs-product-thumb">
                                    <Link to={`/shop-details/${relatedProduct.id}`}>
                                      <img src={relatedProduct.image} alt={relatedProduct.name} />
                                    </Link>
                                    <div className="rs-product-btn">
                                      <Link className="rs-btn" to={`/shop-details/${relatedProduct.id}`}>View Details</Link>
                                    </div>
                                  </div>
                                  <div className="rs-product-content">
                                    <h6 className="rs-product-title">
                                      <Link to={`/shop-details/${relatedProduct.id}`}>{relatedProduct.name}</Link>
                                    </h6>
                                    <div className="rs-product-price">
                                      <span className="rs-current-price">{relatedProduct.price}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="pills-review" role="tabpanel"
                      aria-labelledby="pills-review-tab" tabIndex="0">
                      <div className="product-details-reviews-wrapper">
                        <div className="product-details-review-list">
                          <div className="product-review-item">
                            <div className="product-review-avater">
                              <div className="product-review-avater-thumb">
                                <img src="/assets/images/user/user-thumb-01.png" alt="image" />
                              </div>
                              <div className="product-review-avater-info">
                                <h6 className="product-review-avater-title">John Miller</h6>
                              </div>
                            </div>
                            <div
                              className="product-review-rating d-flex align-items-center mt-15 mb-15">
                              <div className="product-rating rating-color d-flex">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <div className="product-review-rating-date">
                                <span>April 10, 2024</span>
                              </div>
                            </div>
                            <p>Podcasting operational change management inside of workflows to
                              establish a
                              framework Taking seamless key performance indicators.</p>
                          </div>
                          <div className="product-review-item">
                            <div className="product-review-avater">
                              <div className="product-review-avater-thumb">
                                <img src="/assets/images/user/user-thumb-02.png" alt="image" />
                              </div>
                              <div className="product-review-avater-info">
                                <h6 className="product-review-avater-title">Joshua Sendu</h6>
                              </div>
                            </div>
                            <div
                              className="product-review-rating d-flex align-items-center mt-15 mb-15">
                              <div className="product-rating rating-color d-flex">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <div className="product-review-rating-date">
                                <span>Feb 2, 2025</span>
                              </div>
                            </div>
                            <p>Podcasting operational change management inside of workflows to
                              establish a
                              framework Taking seamless key performance indicators.</p>
                          </div>
                        </div>
                      </div>
                      <div className="product-review-form">
                        <h5 className="product-review-form-title">Add a review</h5>
                        <p>Your email address will not be published. Required fields are marked *
                        </p>
                        <form action="#">
                          <div className="product-review-form-rating  mb-25">
                            <h5 className="rate-title">Rate this product:</h5>
                            <div className="product-review-rating-wrapper d-flex">
                              <span>
                                <i className="icon_star"></i>
                              </span>
                              <span>
                                <i className="icon_star"></i>
                              </span>
                              <span>
                                <i className="icon_star"></i>
                              </span>
                              <span>
                                <i className="icon_star"></i>
                              </span>
                              <span>
                                <i className="icon_star_alt"></i>
                              </span>
                            </div>
                          </div>
                          <div className="row g-5">
                            <div className="col-lg-6">
                              <div className="product-review-input">
                                <input type="text" placeholder="Name" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="product-review-input">
                                <input type="email" placeholder="Email" />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="product-review-input is-textarea">
                                <textarea placeholder="Your Review Here..."></textarea>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="product-review-btn">
                                <button className="rs-btn has-theme-orange" type="submit">Submit
                                  Review</button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* shop area end */}
    </>
  )
}

export default ShopDetails
