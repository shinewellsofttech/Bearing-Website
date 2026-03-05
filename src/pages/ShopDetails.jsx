import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSwiper } from '../hooks/useSwiper'
import CtaSection from '../components/CtaSection'
import { useScripts } from '../hooks/useScripts'

const API_URL = 'https://apiwesternbearing.shinewellsofttech.co.in/api/V1/Masters/0/token/ProductMaster/Id/0'
const IMAGE_BASE_URL = 'https://apiwesternbearing.shinewellsofttech.co.in/MemberImages/'

function ShopDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [bearings, setBearings] = useState([])
  const [loading, setLoading] = useState(true)
  const [bearingsLoading, setBearingsLoading] = useState(false)

  useSwiper()
  useScripts()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch(API_URL)
        const result = await response.json()
        
        if (result.success && result.data?.dataList) {
          const transformedProducts = result.data.dataList.map(p => ({
            id: p.Id,
            name: p.Name,
            image: `${IMAGE_BASE_URL}${p.PhotoName}`,
            price: '$19.99',
            description: p.Description
          }))
          
          const currentProduct = transformedProducts.find(p => p.id === parseInt(id)) || transformedProducts[0]
          const related = transformedProducts.filter(p => p.id !== parseInt(id)).slice(0, 3)
          
          setProduct(currentProduct)
          setRelatedProducts(related)
        }
      } catch (err) {
        console.error('Error fetching products:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [id])

  useEffect(() => {
    const fetchBearings = async () => {
      if (!id) return
      
      try {
        setBearingsLoading(true)
        const response = await fetch(`https://apiwesternbearing.shinewellsofttech.co.in/api/V1/Masters/0/token/BearingMaster/TBL.F_ProductMaster/${id}`)
        const result = await response.json()
        
        if (result.success && result.data?.dataList) {
          setBearings(result.data.dataList)
        }
      } catch (err) {
        console.error('Error fetching bearings:', err)
      } finally {
        setBearingsLoading(false)
      }
    }

    fetchBearings()
  }, [id])

  const arrowIcon = (
    <span className="icon-box">
      <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path></svg>
      <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path></svg>
    </span>
  )

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <p>Loading product details...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <p>Product not found</p>
      </div>
    )
  }

  return (
    <>
      {/* breadcrumb */}
      <section className="rs-breadcrumb-area rs-breadcrumb-one p-relative" style={{ display: 'none' }}>
        <div className="rs-breadcrumb-bg" data-background="/assets/images/bg/breadcrumb-bg-01.png"></div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-8 col-lg-8">
              <div className="rs-breadcrumb-content-wrapper">
                <div className="rs-breadcrumb-title-wrapper">
                  <h1 className="rs-breadcrumb-title">Product Details</h1>
                </div>
                <div className="rs-breadcrumb-menu">
                  <nav>
                    <ul>
                      <li><span><Link to="/">Western Bearing</Link></span></li>
                      <li><span><Link to="/shop">Products</Link></span></li>
                      <li><span>{product.name}</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product detail */}
      <section className="rs-shop-area section-space" style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="row align-items-lg-center g-5">

            {/* product image */}
            <div className="col-md-6">
              <div className="product-details-thumb-wrap">
                <div className="product-details-thumb-top mb-10">
                  <div className="swiper product-details-active p-relative">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="product-details-thumb">
                          <img src={product.image} alt={product.name} onError={(e) => e.target.src = '/assets/images/shop/shop-thumb-01.png'} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* product info */}
            <div className="col-md-6">
              <div className="product-details-wrapper shop-details">
                <h3 className="product-details-title mb-10">{product.name}</h3>

                <p className="mb-20" style={{ color: '#555', lineHeight: 1.8 }}>
                  {product.description || `Western Bearing manufactures ${product.name} using high-grade materials. Built to OEM standards with complete in-house manufacturing.`}
                </p>

                <div className="product-details-categories product-details-more mb-10">
                  <p>Category:</p>
                  <span><a href="#">Bearings</a></span>
                </div>

                <div className="product-details-tags mb-25">
                  <span>Tags:</span>
                  <a href="#">Bearing,</a>
                  <a href="#">Industrial,</a>
                  <a href="#">Agriculture,</a>
                  <a href="#">Automotive</a>
                </div>

              </div>
            </div>
          </div>

          {/* specifications table */}
          <div className="mt-60">
            <div style={{ marginBottom: '28px' }}>
              <span style={{ display: 'inline-block', background: 'rgba(12,123,199,0.08)', color: '#0C7BC7', fontSize: '12px', fontWeight: 700, padding: '5px 14px', borderRadius: '20px', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '10px' }}>Technical Data</span>
              <h4 style={{ fontWeight: 800, color: '#1a1a1a', marginBottom: 0 }}>Dimensions &amp; Load Ratings</h4>
            </div>
            {bearingsLoading && (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <p>Loading specifications...</p>
              </div>
            )}
            {!bearingsLoading && bearings.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px 20px', color: '#999' }}>
                <p>No specifications available for this product.</p>
              </div>
            )}
            {!bearingsLoading && bearings.length > 0 && (
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.07)' }}>
                <div style={{ overflowX: 'auto' }}>
                  <table className="resp-specs-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                    <thead>
                      <tr style={{ background: 'linear-gradient(135deg, #293194 0%, #0C7BC7 100%)' }}>
                        {['Bearing Number', 'Outside Dia (mm)', 'Bore Dia (mm)', 'Width (mm)', 'Weight (kg)', 'OEM Part Number'].map((col, i) => (
                          <th key={i} style={{ padding: '14px 18px', color: '#fff', fontWeight: 700, fontSize: '13px', textAlign: i === 0 ? 'left' : 'center', whiteSpace: 'nowrap', letterSpacing: '0.3px' }}>{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {bearings.map((bearing, i) => (
                        <tr key={bearing.Id} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f7fafd' }}
                          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#eef5fb'}
                          onMouseLeave={e => e.currentTarget.style.backgroundColor = i % 2 === 0 ? '#fff' : '#f7fafd'}
                        >
                          <td style={{ padding: '13px 18px', fontWeight: 700, color: '#0C7BC7', whiteSpace: 'nowrap', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{bearing.BearingNumber}</td>
                          <td style={{ padding: '13px 18px', textAlign: 'center', color: '#444', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{bearing.OutsideDia}</td>
                          <td style={{ padding: '13px 18px', textAlign: 'center', color: '#444', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{bearing.BoreDia}</td>
                          <td style={{ padding: '13px 18px', textAlign: 'center', color: '#444', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{bearing.Width}</td>
                          <td style={{ padding: '13px 18px', textAlign: 'center', color: '#444', borderBottom: '1px solid rgba(0,0,0,0.05)', fontWeight: 600 }}>{bearing.Weight}</td>
                          <td style={{ padding: '13px 18px', textAlign: 'center', color: '#444', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{bearing.OEMPartNumber}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {!bearingsLoading && bearings.length > 0 && (
              <p style={{ color: '#999', fontSize: '12px', marginTop: '10px', marginLeft: '4px' }}>* All dimensions in mm unless stated.</p>
            )}
          </div>

        </div>
      </section>
      <CtaSection />
    </>
  )
}

export default ShopDetails
