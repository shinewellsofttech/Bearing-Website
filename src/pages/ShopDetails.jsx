import { useParams, Link } from 'react-router-dom'
import { useSwiper } from '../hooks/useSwiper'
import CtaSection from '../components/CtaSection'
import { useScripts } from '../hooks/useScripts'
import { products } from './Shop'

function ShopDetails() {
  const { id } = useParams()
  useSwiper()
  useScripts()

  const product = products.find(p => p.id === id) || products[0]
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 3)

  const arrowIcon = (
    <span className="icon-box">
      <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path></svg>
      <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path></svg>
    </span>
  )

  return (
    <>
      {/* breadcrumb */}
      <section className="rs-breadcrumb-area rs-breadcrumb-one p-relative">
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
      <section className="rs-shop-area section-space">
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
                          <img src={product.image} alt={product.name} />
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
                  {product.description || `Western Bearing manufactures ${product.name} using high-grade SAE 52100 steel sourced from TATA, JINDAL, and SUNFLAG STEEL. Built to OEM standards with complete in-house manufacturing — from forging and CNC grinding to final packaging.`}
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
            <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.07)' }}>
              <div style={{ overflowX: 'auto' }}>
                <table className="resp-specs-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                  <thead>
                    <tr style={{ background: 'linear-gradient(135deg, #293194 0%, #0C7BC7 100%)' }}>
                      {['Designation', 'Outside Dia (mm)', 'Bore Dia (mm)', 'Shaft Dia (mm)', 'Dynamic Load Rating (kN)', 'Width (mm)', 'Limiting Speed (r/min)'].map((col, i) => (
                        <th key={i} style={{ padding: '14px 18px', color: '#fff', fontWeight: 700, fontSize: '13px', textAlign: i === 0 ? 'left' : 'center', whiteSpace: 'nowrap', letterSpacing: '0.3px' }}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1726203-2RS1', 40,  17, 17, 9.56,  12, '12 000'],
                      ['1726204-2RS1', 47,  20, 20, 12.7,  14, '10 000'],
                      ['1726205-2RS1', 52,  25, 25, 14.0,  15, '8 500'],
                      ['1726206-2RS1', 62,  30, 30, 19.5,  16, '7 500'],
                      ['1726207-2RS1', 72,  35, 35, 25.5,  17, '6 300'],
                      ['1726208-2RS1', 80,  40, 40, 30.7,  18, '5 600'],
                      ['1726209-2RS1', 85,  45, 45, 33.2,  19, '5 000'],
                      ['1726210-2RS1', 90,  50, 50, 35.1,  20, '4 800'],
                      ['1726211-2RS1', 100, 55, 55, 43.6,  21, '4 300'],
                      ['1726212-2RS1', 110, 60, 60, 52.7,  22, '4 000'],
                      ['1726305-2RS1', 62,  25, 25, 22.5,  17, '7 500'],
                    ].map((row, i) => (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#f7fafd' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#eef5fb'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = i % 2 === 0 ? '#fff' : '#f7fafd'}
                      >
                        <td style={{ padding: '13px 18px', fontWeight: 700, color: '#0C7BC7', whiteSpace: 'nowrap', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{row[0]}</td>
                        {row.slice(1).map((val, j) => (
                          <td key={j} style={{ padding: '13px 18px', textAlign: 'center', color: '#444', borderBottom: '1px solid rgba(0,0,0,0.05)', fontWeight: j === 3 ? 600 : 400 }}>{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p style={{ color: '#999', fontSize: '12px', marginTop: '10px', marginLeft: '4px' }}>* All dimensions in mm unless stated. Dynamic load ratings in kN. Speed values are indicative.</p>
          </div>

        </div>
      </section>
      <CtaSection />
    </>
  )
}

export default ShopDetails
