import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSwiper } from '../hooks/useSwiper'
import CtaSection from '../components/CtaSection'
import { useScripts } from '../hooks/useScripts'

const API_URL = 'https://apiwesternbearing.shinewellsofttech.co.in/api/V1/Masters/0/token/ProductMaster/Id/0'
const IMAGE_BASE_URL = 'https://apiwesternbearing.shinewellsofttech.co.in/MemberImages/'

function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useSwiper()
  useScripts()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch(API_URL)
        const result = await response.json()
        
        if (result.success && result.data?.dataList) {
          const transformedProducts = result.data.dataList.map(product => ({
            id: product.Id,
            name: product.Name,
            image: `${IMAGE_BASE_URL}${product.PhotoName}`,
            price: '$19.99',
            description: product.Description
          }))
          setProducts(transformedProducts)
        } else {
          setError('Failed to load products')
        }
      } catch (err) {
        setError('Error fetching products: ' + err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

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
              {loading && (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <p>Loading products...</p>
                </div>
              )}
              {error && (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: '#dc3545' }}>
                  <p>{error}</p>
                </div>
              )}
              {!loading && !error && (
                <>
                  <div className="row g-5">
                  {products.map((product) => (
                    <div key={product.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="rs-product-item">
                        <div className="rs-product-thumb">
                          <Link to={`/shop-details/${product.id}`}>
                            <img src={product.image} alt={product.name} onError={(e) => e.target.src = '/assets/images/shop/shop-thumb-01.png'} />
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
                </>
              )}
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
