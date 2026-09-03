import { useEffect, useState } from 'react'
import CtaSection from '../components/CtaSection'

const API_URL = 'https://apiwesternbearing.shinewellsofttech.co.in/api/V1/Masters/0/token/NewsGalleryMaster/Id/0'
const CATALOGUE_API_URL = 'https://apiwesternbearing.shinewellsofttech.co.in/api/V1/Masters/0/token/CatalogueMaster/Id/0'
const IMAGE_BASE_URL = 'https://apiwesternbearing.shinewellsofttech.co.in/MemberImages/'

function NewsGallery() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [newsItems, setNewsItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [catalogues, setCatalogues] = useState([])
  const [isCatalogueLoading, setIsCatalogueLoading] = useState(true)
  const [selectedModalItem, setSelectedModalItem] = useState(null)

  useEffect(() => {
    const initScripts = () => {
      if (typeof window === 'undefined' || !window.jQuery) return
      const $ = window.jQuery
      $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')')
      })
      if (window.WOW) {
        new window.WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: false, live: true }).init()
      }
    }
    const check = () => { window.jQuery ? setTimeout(initScripts, 200) : setTimeout(check, 100) }
    check()
    window.scrollTo(0, 0)

    loadNewsData()
    loadCatalogueData()
  }, [])

  const loadNewsData = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      if (data.success && Array.isArray(data.data?.dataList)) {
        const activeNews = data.data.dataList
          .filter(item => item.IsActive !== false)
          .map(item => ({
            id: item.Id,
            title: (item.Title || '').replace(/\\$/g, '').trim(),
            desc: item.Description,
            date: item.EventDate || item.CreatedAt,
            photoName: item.PhotoName,
            imageUrl: item.PhotoName ? `${IMAGE_BASE_URL}${item.PhotoName}` : null
          }))
        setNewsItems(activeNews)
      }
    } catch (e) {
      console.error('Error loading news gallery data:', e)
    } finally {
      setIsLoading(false)
    }
  }

  const loadCatalogueData = async () => {
    setIsCatalogueLoading(true)
    try {
      const res = await fetch(CATALOGUE_API_URL)
      const data = await res.json()
      if (data.success && Array.isArray(data.data?.dataList)) {
        const activeCatalogues = data.data.dataList
          .filter(item => item.IsActive !== false)
          .map(item => ({
            id: item.Id,
            title: item.Title || 'Western Bearing Product Catalogue',
            pdfName: item.PdfName,
            pdfUrl: getPdfUrl(item.PdfName),
            date: item.CreatedAt
          }))
        setCatalogues(activeCatalogues)
      }
    } catch (e) {
      console.error('Error loading catalogues data:', e)
    } finally {
      setIsCatalogueLoading(false)
    }
  }

  const getPdfUrl = (pdfName) => {
    if (!pdfName) return null
    if (pdfName.startsWith('http://') || pdfName.startsWith('https://') || pdfName.startsWith('/')) {
      return pdfName
    }
    return `${IMAGE_BASE_URL}${pdfName}`
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    try {
      const date = new Date(dateStr)
      if (isNaN(date.getTime())) return dateStr
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    } catch (e) {
      return dateStr
    }
  }

  const subtitleSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
      <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#0C7BC7"></path>
    </svg>
  )

  const defaultExhibitions = [
    {
      title: 'International Auto Expo Delhi',
      years: '2014, 2016, 2018, 2020',
      desc: 'Regular participation in India\'s premier automotive exposition — showcasing our latest taper roller, deep groove, and cylindrical roller bearing product ranges.',
      image: '/assets/images/Main-images/exh-1.jpg',
    },
    {
      title: 'ACMA Automechanika (Germany)',
      years: '2015, 2017, 2019, 2026',
      desc: 'Western Bearing has been actively participating in ACMA Automechanika organized by Germany, establishing a strong market presence and brand identity in the international automotive industry.',
      image: '/assets/images/Main-images/exh-2.jpg',
    },
    {
      title: 'Bauma Conexpo India — Construction Expo',
      years: '2025',
      desc: 'In 2025, the company participated in Bauma Conexpo India — one of the largest construction equipment exhibitions, expanding our reach in the construction and earthmoving sectors.',
      image: '/assets/images/Main-images/exh-3.jpg',
    },
    {
      title: 'Kisan Agri Show, Pune',
      years: '10–14 Dec, 2025',
      desc: 'Participation in Kisan Agri Show 2025 in Pune — connecting directly with agriculture OEMs and dealers for our taper roller and pillow block bearing ranges.',
      image: '/assets/images/Main-images/exh-4.jpg',
    },
    {
      title: 'State Level Exhibitions',
      years: '2004, 2008, 2022',
      desc: 'Western Bearing has been participating in exhibitions since 1993, including multiple state level exhibitions — building strong brand recognition across Rajasthan and India.',
      image: '/assets/images/Main-images/exh-5.jpeg',
    }
  ]

  return (
    <>
      {/* Detail Modal */}
      {selectedModalItem && (
        <div 
          onClick={() => setSelectedModalItem(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.75)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(5px)'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              maxWidth: '650px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
              animation: 'fadeInUp 0.3s ease'
            }}
          >
            <button
              onClick={() => setSelectedModalItem(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: '#f0f4f8',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#333',
                zIndex: 10
              }}
            >
              ✕
            </button>

            {selectedModalItem.imageUrl || selectedModalItem.image ? (
              <div style={{ height: '280px', width: '100%', overflow: 'hidden', background: '#f8fafc' }}>
                <img
                  src={selectedModalItem.imageUrl || selectedModalItem.image}
                  alt={selectedModalItem.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
            ) : (
              <div style={{ 
                height: '140px', 
                background: 'linear-gradient(135deg, #0C7BC7 0%, #293194 100%)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#fff',
                padding: '20px'
              }}>
                <i className="fa-regular fa-newspaper" style={{ fontSize: '48px', opacity: 0.8 }}></i>
              </div>
            )}

            <div style={{ padding: '25px 30px' }}>
              {(selectedModalItem.date || selectedModalItem.years) && (
                <div style={{ marginBottom: '12px' }}>
                  <span style={{
                    background: 'rgba(12, 123, 199, 0.1)',
                    color: '#0C7BC7',
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '4px 14px',
                    borderRadius: '20px'
                  }}>
                    {selectedModalItem.date ? formatDate(selectedModalItem.date) : selectedModalItem.years}
                  </span>
                </div>
              )}
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '15px', lineHeight: 1.35 }}>
                {selectedModalItem.title}
              </h3>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                {selectedModalItem.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 1: LATEST NEWS & ANNOUNCEMENTS (DYNAMIC FROM NEWS GALLERY MASTER - HIDDEN IF EMPTY) */}
      {(isLoading || newsItems.length > 0) && (
        <section className="section-space" style={{ backgroundColor: '#ffffff' }}>
          <div className="container">
            <div className="row g-5 justify-content-center section-title-space">
              <div className="col-xxl-8">
                <div className="rs-section-title-wrapper text-center">
                  <span className="rs-section-subtitle has-theme-light-blue">{subtitleSvg} Live Updates &amp; Press Releases</span>
                  <h2 className="rs-section-title">Latest News &amp; Announcements</h2>
                  <p style={{ color: '#666', maxWidth: '580px', margin: '10px auto 0', lineHeight: 1.7 }}>
                    Stay up to date with the latest company news, manufacturing innovations, product developments, and official announcements from Western Bearing.
                  </p>
                </div>
              </div>
            </div>

            {isLoading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading news...</span>
                </div>
                <p style={{ color: '#666', marginTop: '15px' }}>Fetching latest news...</p>
              </div>
            ) : (
              <div className="row g-4 justify-content-center">
                {newsItems.map((news, i) => (
                  <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={news.id || i}>
                    <div
                      className="wow fadeInUp"
                      data-wow-delay={`${0.1 + (i % 3) * 0.1}s`}
                      onMouseEnter={() => setHoveredCard(`news-${i}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onClick={() => setSelectedModalItem(news)}
                      style={{
                        background: '#fff',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #eaeff5',
                        boxShadow: hoveredCard === `news-${i}` ? '0 16px 40px rgba(12,123,199,0.12)' : '0 4px 20px rgba(0,0,0,0.04)',
                        transform: hoveredCard === `news-${i}` ? 'translateY(-6px)' : 'translateY(0)',
                        transition: 'all 0.35s ease',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer'
                      }}
                    >
                      {news.imageUrl ? (
                        <div style={{ height: '220px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                          <img
                            src={news.imageUrl}
                            alt={news.title}
                            onError={(e) => {
                              e.target.parentNode.style.display = 'none';
                            }}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transform: hoveredCard === `news-${i}` ? 'scale(1.08)' : 'scale(1)',
                              transition: 'transform 0.4s ease'
                            }}
                          />
                          <span style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            background: 'rgba(12, 123, 199, 0.9)',
                            color: '#fff',
                            fontSize: '11px',
                            padding: '3px 10px',
                            borderRadius: '12px',
                            fontWeight: 600
                          }}>
                            {formatDate(news.date)}
                          </span>
                        </div>
                      ) : (
                        <div style={{
                          height: '140px',
                          background: 'linear-gradient(135deg, #0C7BC7 0%, #293194 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '20px 24px',
                          color: '#fff',
                          position: 'relative'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{
                              width: '42px',
                              height: '42px',
                              borderRadius: '50%',
                              background: 'rgba(255,255,255,0.2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '18px'
                            }}>
                              <i className="fa-regular fa-newspaper"></i>
                            </div>
                            <span style={{ fontSize: '13px', fontWeight: 600, opacity: 0.9 }}>
                              Latest News
                            </span>
                          </div>
                          {news.date && (
                            <span style={{
                              background: 'rgba(255, 255, 255, 0.25)',
                              color: '#fff',
                              fontSize: '11px',
                              padding: '4px 10px',
                              borderRadius: '12px',
                              fontWeight: 600
                            }}>
                              {formatDate(news.date)}
                            </span>
                          )}
                        </div>
                      )}

                      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          {news.imageUrl && news.date && (
                            <div style={{ marginBottom: '10px' }}>
                              <span style={{
                                color: '#0C7BC7',
                                fontSize: '12px',
                                fontWeight: 600
                              }}>
                                📅 {formatDate(news.date)}
                              </span>
                            </div>
                          )}
                          <h4 style={{
                            fontSize: '18px',
                            fontWeight: 700,
                            color: '#1a1a1a',
                            marginBottom: '10px',
                            lineHeight: 1.4
                          }}>
                            {news.title}
                          </h4>
                          <p style={{
                            color: '#666',
                            fontSize: '14px',
                            lineHeight: '1.6',
                            marginBottom: '15px',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>
                            {news.desc}
                          </p>
                        </div>

                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#0C7BC7',
                          fontWeight: 600,
                          fontSize: '13px',
                          marginTop: '10px'
                        }}>
                          Read Full Story <i className="fa-regular fa-arrow-right" style={{ fontSize: '12px' }}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* SECTION 2: EXHIBITIONS & TRADE SHOWS */}
      <section className="section-space" style={{ backgroundColor: '#f5f8fc' }}>
        <div className="container">
          <div className="row g-5 justify-content-center section-title-space">
            <div className="col-xxl-8">
              <div className="rs-section-title-wrapper text-center">
                <span className="rs-section-subtitle has-theme-light-blue">{subtitleSvg} Global Presence &amp; Industry Events</span>
                <h2 className="rs-section-title">Exhibitions &amp; Trade Shows</h2>
                <p style={{ color: '#666', maxWidth: '580px', margin: '10px auto 0', lineHeight: 1.7 }}>
                  Western Bearing INDIA actively participates in national &amp; global exhibitions, showcasing our manufacturing capabilities and high-precision products.
                </p>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            {defaultExhibitions.map((exh, i) => (
              <div className="col-xl-6 col-lg-6 col-12" key={i}>
                <div
                  className="wow fadeInUp resp-flex-card"
                  data-wow-delay={`${0.1 + (i % 4) * 0.1}s`}
                  onMouseEnter={() => setHoveredCard(`exh-${i}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setSelectedModalItem(exh)}
                  style={{
                    display: 'flex',
                    background: '#fff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: hoveredCard === `exh-${i}` ? '0 12px 35px rgba(12,123,199,0.15)' : '0 3px 15px rgba(0,0,0,0.06)',
                    transform: hoveredCard === `exh-${i}` ? 'translateY(-4px)' : 'translateY(0)',
                    transition: 'all 0.35s ease',
                    height: '100%',
                    cursor: 'pointer'
                  }}
                >
                  <div className="resp-img-column" style={{ width: '200px', minWidth: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={exh.image}
                      alt={exh.title}
                      onError={(e) => e.target.src = '/assets/images/history/history-thumb-01.png'}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: hoveredCard === `exh-${i}` ? 'scale(1.06)' : 'scale(1)',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                  </div>
                  <div className="resp-content-column" style={{ padding: '22px 24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {exh.years && (
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                        <span style={{
                          display: 'inline-block',
                          background: 'rgba(41,49,148,0.08)',
                          color: '#293194',
                          fontSize: '11px',
                          fontWeight: 600,
                          padding: '3px 10px',
                          borderRadius: '20px'
                        }}>
                          {exh.years}
                        </span>
                      </div>
                    )}
                    <h5 style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', lineHeight: 1.35 }}>
                      {exh.title}
                    </h5>
                    <p style={{
                      color: '#666',
                      fontSize: '13px',
                      lineHeight: '1.6',
                      marginBottom: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {exh.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PRODUCT CATALOGUES & TECHNICAL DOWNLOADS (DYNAMIC FROM CATALOGUE MASTER - HIDDEN IF EMPTY) */}
      {(isCatalogueLoading || catalogues.length > 0) && (
        <section className="section-space" style={{ backgroundColor: '#ffffff' }}>
          <div className="container">
            <div className="row g-5 justify-content-center section-title-space">
              <div className="col-xxl-8">
                <div className="rs-section-title-wrapper text-center">
                  <span className="rs-section-subtitle has-theme-light-blue">{subtitleSvg} Technical Specs &amp; Downloads</span>
                  <h2 className="rs-section-title">Product Catalogues &amp; Downloads</h2>
                  <p style={{ color: '#666', maxWidth: '580px', margin: '10px auto 0', lineHeight: 1.7 }}>
                    Download official Western Bearing product brochures, dimension catalogues, and technical specification sheets.
                  </p>
                </div>
              </div>
            </div>

            {isCatalogueLoading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading catalogues...</span>
                </div>
                <p style={{ color: '#666', marginTop: '15px' }}>Fetching catalogues...</p>
              </div>
            ) : (
              <div className="row g-4 justify-content-center">
                {catalogues.map((cat, i) => (
                  <div className="col-xl-4 col-lg-6 col-md-6 col-12" key={cat.id || i}>
                    <div
                      className="wow fadeInUp"
                      data-wow-delay={`${0.1 + (i % 3) * 0.1}s`}
                      onMouseEnter={() => setHoveredCard(`cat-${i}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        background: '#fff',
                        borderRadius: '16px',
                        padding: '28px 24px',
                        border: '1px solid #eaeff5',
                        boxShadow: hoveredCard === `cat-${i}` ? '0 16px 40px rgba(12,123,199,0.12)' : '0 4px 20px rgba(0,0,0,0.04)',
                        transform: hoveredCard === `cat-${i}` ? 'translateY(-6px)' : 'translateY(0)',
                        transition: 'all 0.35s ease',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                          <div style={{
                            width: '52px',
                            height: '52px',
                            borderRadius: '14px',
                            background: 'rgba(220, 53, 69, 0.1)',
                            color: '#dc3545',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '24px'
                          }}>
                            <i className="fa-solid fa-file-pdf"></i>
                          </div>
                          <span style={{
                            background: 'rgba(12, 123, 199, 0.08)',
                            color: '#0C7BC7',
                            fontSize: '11px',
                            fontWeight: 700,
                            padding: '4px 10px',
                            borderRadius: '20px'
                          }}>
                            PDF DOCUMENT
                          </span>
                        </div>

                        <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px', lineHeight: 1.4 }}>
                          {cat.title}
                        </h4>
                        {cat.desc && (
                          <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.6', marginBottom: '20px' }}>
                            {cat.desc}
                          </p>
                        )}
                      </div>

                      {cat.pdfUrl && cat.pdfUrl !== '#' ? (
                        <a
                          href={cat.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            background: hoveredCard === `cat-${i}` ? '#0C7BC7' : '#f0f6fb',
                            color: hoveredCard === `cat-${i}` ? '#fff' : '#0C7BC7',
                            padding: '12px 20px',
                            borderRadius: '10px',
                            fontWeight: 600,
                            fontSize: '14px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <i className="fa-regular fa-download"></i> Download Catalogue
                        </a>
                      ) : (
                        <span style={{
                          display: 'block',
                          textAlign: 'center',
                          color: '#999',
                          fontSize: '13px',
                          padding: '10px',
                          background: '#f8fafc',
                          borderRadius: '8px'
                        }}>
                          📄 PDF Specifications Brochure
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <CtaSection />
    </>
  )
}

export default NewsGallery
