import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSwiper } from '../hooks/useSwiper'
import CtaSection from '../components/CtaSection'
import { useScripts } from '../hooks/useScripts'

const API_URL = 'https://apiwesternbearing.shinewellsofttech.co.in/api/V1/Masters/0/token/ProductMaster/Id/0'
const IMAGE_BASE_URL = 'https://apiwesternbearing.shinewellsofttech.co.in/MemberImages/'

function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useSwiper()
  useScripts()

  const handleWhatsAppClick = (e, productName) => {
    e.stopPropagation()
    const text = `Hello, I am interested in: *${productName}*. Can you please provide a quotation?`
    const url = `https://wa.me/7878218459?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

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
        <div className="rs-breadcrumb-bg" data-background="/assets/images/Main-images/Hero/ProductHero.jpeg" style={{ filter: 'brightness(0.6)' }}></div>
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
                    <div key={product.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 d-flex">
                      <div
                        className="rs-product-item"
                        onClick={() => navigate(`/shop-details/${product.id}`)}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          height: '100%',
                          width: '100%',
                          background: '#ffffff',
                          border: '1px solid #eaeaea',
                          borderRadius: '20px',
                          overflow: 'hidden',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-6px)';
                          e.currentTarget.style.boxShadow = '0 15px 30px rgba(13, 128, 206, 0.08)';
                          e.currentTarget.style.borderColor = '#0D80CE';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.03)';
                          e.currentTarget.style.borderColor = '#eaeaea';
                        }}
                      >
                        <div className="rs-product-thumb" style={{
                          position: 'relative',
                          height: '240px',
                          width: '100%',
                          backgroundColor: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '20px',
                          overflow: 'hidden'
                        }}>
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            onError={(e) => e.target.src = '/assets/images/shop/shop-thumb-01.png'} 
                            style={{
                              maxWidth: '100%',
                              maxHeight: '100%',
                              objectFit: 'contain',
                              transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                          />
                        </div>
                        <div className="rs-product-content" style={{
                          padding: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          flexGrow: 1,
                          justifyContent: 'space-between',
                          backgroundColor: '#ffffff'
                        }}>
                          <div style={{ marginBottom: '15px' }}>
                            <h6 className="rs-product-title" style={{
                              fontSize: '17px',
                              fontWeight: '700',
                              color: '#0f1c3f',
                              marginBottom: '8px',
                              minHeight: '44px',
                              display: '-webkit-box',
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              lineHeight: '1.3'
                            }}>
                              {product.name}
                            </h6>
                            {product.description && (
                              <p style={{
                                fontSize: '13px',
                                color: '#666',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                lineHeight: '1.5',
                                margin: 0
                              }}>
                                {product.description}
                              </p>
                            )}
                          </div>
                          <div style={{ marginTop: 'auto' }}>
                            <button
                              onClick={(e) => handleWhatsAppClick(e, product.name)}
                              style={{
                                width: '100%',
                                padding: '10px 16px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                                color: '#fff',
                                border: 'none',
                                fontWeight: '700',
                                fontSize: '13.5px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.15)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 15px rgba(37, 211, 102, 0.25)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.15)';
                              }}
                            >
                              <i className="ri-whatsapp-line" style={{ fontSize: '18px' }}></i>
                              Get Quotation
                            </button>
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
