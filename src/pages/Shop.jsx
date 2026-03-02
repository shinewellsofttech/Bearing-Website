import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSwiper } from '../hooks/useSwiper'
import CtaSection from '../components/CtaSection'
import { useScripts } from '../hooks/useScripts'

// Products data - exported for use in ShopDetails
export const products = [
  { id: 'tapper-roller-bearing', name: 'TAPPER ROLLER BEARING', image: '/assets/images/shop/shop-thumb-01.png', price: '$19.99' },
  { id: 'cylindrical-roller-bearing', name: 'CYLINDRICAL ROLLER BEARING', image: '/assets/images/shop/shop-thumb-02.png', price: '$19.99' },
  { id: 'ball-bearing', name: 'BALL BEARING', image: '/assets/images/shop/shop-thumb-03.png', price: '$19.99' },
  { id: 'hub-unit-bearing', name: 'HUB UNIT BEARING', image: '/assets/images/shop/shop-thumb-04.png', price: '$19.99' },
  { id: 'king-pin-bearing', name: 'King Pin Bearing', image: '/assets/images/shop/shop-thumb-05.png', price: '$19.99' },
  { id: 'agriculture-trolly-bearing', name: 'AGRICULTURE TROLLY BEARING', image: '/assets/images/shop/shop-thumb-06.png', price: '$19.99' },
  { id: 'double-raw-deep-grow-bearing', name: 'DOUBLE RAW DEEP GROW BEARING', image: '/assets/images/shop/shop-thumb-07.png', price: '$19.99' },
  { id: 'thrust-ball-bearing', name: 'THRUST BALL BEARING', image: '/assets/images/shop/shop-thumb-08.png', price: '$19.99' },
  { id: 'pillow-block-bearing', name: 'PILLOW BLOCK BEARING', image: '/assets/images/shop/shop-thumb-09.png', price: '$19.99' },
  { id: 'clutch-bearing', name: 'CLUTCH BEARING', image: '/assets/images/shop/shop-thumb-01.png', price: '$19.99' },
  { id: 'universal-joint-cross', name: 'UNIVERSAL JOINT CROSS', image: '/assets/images/shop/shop-thumb-02.png', price: '$19.99' }
]

function Shop() {
  useSwiper()
  useScripts()

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
                  <h1 className="rs-breadcrumb-title">Products</h1>
                            </div>
                <div className="rs-breadcrumb-menu">
                                <nav>
                                    <ul>
                      <li><span><a href="/">Western Bearing</a></span></li>
                                        <li><span>Products</span></li>
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
          <div className="row g-5">
            <div className="col-12">
              <div className="row g-5">
                {products.map((product) => (
                  <div key={product.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="rs-product-item">
                      <div className="rs-product-thumb">
                        <Link to={`/shop-details/${product.id}`}>
                          <img src={product.image} alt={product.name} />
                        </Link>
                        <div className="rs-product-btn">
                          <Link className="rs-btn" to={`/shop-details/${product.id}`}>View Details</Link>
                                </div>
                            </div>
                      <div className="rs-product-content">
                        <h6 className="rs-product-title">
                          <Link to={`/shop-details/${product.id}`}>{product.name}</Link>
                                        </h6>
                        <div className="rs-product-price">
                          <span className="rs-current-price">{product.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                ))}
                                        </div>
              {/* pagination style */}
              <div className="common-pagination">
                            <nav>
                                <ul>
                    <li><a className="current">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                    <li><a href="#">→</a></li>
                                </ul>
                            </nav>
                        </div>
              {/* pagination style end */}
                    </div>
                </div>
            </div>
        </section>
      {/* shop area end */}
      <CtaSection />
    </>
  )
}

export default Shop
