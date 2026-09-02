import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CtaSection from '../components/CtaSection'

const API_URL = 'https://apiwesternbearing.shinewellsofttech.co.in/api/V1/Masters/0/token/NewsGalleryMaster/Id/0'
const LOCAL_STORAGE_KEY = 'western_news_gallery_items'
const IMAGE_BASE_URL = 'https://apiwesternbearing.shinewellsofttech.co.in/MemberImages/'

function NewsGallery() {
  const [hoveredNews, setHoveredNews] = useState(null)
  const [dynamicItems, setDynamicItems] = useState([])
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

    loadNewsAndGalleryData()
  }, [])

  const loadNewsAndGalleryData = async () => {
    let localItems = []
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (stored) {
        localItems = JSON.parse(stored)
      }
    } catch (e) {
      console.error('Error reading local news storage', e)
    }

    try {
      const res = await fetch(API_URL)
      const data = await res.json()
      if (data.success && Array.isArray(data.data?.dataList)) {
        const apiItems = data.data.dataList.map(item => ({
          id: item.Id,
          title: item.Title || item.Name,
          desc: item.Description,
          years: item.EventDate || '2026',
          image: item.ImagePath || (item.PhotoName ? `${IMAGE_BASE_URL}${item.PhotoName}` : '/assets/images/history/history-thumb-01.png'),
        }))
        
        // Merge API & local items uniquely
        const merged = [...localItems, ...apiItems]
        const uniqueItems = Array.from(new Map(merged.map(item => [item.Id || item.id, item])).values())
        setDynamicItems(uniqueItems)
        return
      }
    } catch (e) {
      console.log('API fetch fallback to local store', e)
    }

    setDynamicItems(localItems)
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

  // Convert dynamic admin panel items into standardized display models
  const formattedDynamicExhibitions = dynamicItems.map(item => ({
    title: item.Title || item.title,
    years: item.EventDate || item.years || '2026',
    desc: item.Description || item.desc,
    image: item.ImagePath || item.PhotoName || item.image || '/assets/images/history/history-thumb-01.png',
    isDynamic: true
  }))

  const allExhibitionsAndNews = [...formattedDynamicExhibitions, ...defaultExhibitions]

  return (
    <>
      {/* Modal View for detailed Story / High Res Image */}
      {selectedModalItem && (
        <div style={{
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
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            maxWidth: '650px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
            animation: 'fadeInUp 0.3s ease'
          }}>
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
            <div style={{ height: '280px', width: '100%', overflow: 'hidden', background: '#f8fafc' }}>
              <img
                src={selectedModalItem.image}
                alt={selectedModalItem.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => e.target.src = '/assets/images/history/history-thumb-01.png'}
              />
            </div>
            <div style={{ padding: '25px 30px' }}>
              {selectedModalItem.years && (
                <div style={{ marginBottom: '12px' }}>
                  <span style={{
                    background: 'rgba(41,49,148,0.1)',
                    color: '#293194',
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '4px 12px',
                    borderRadius: '20px'
                  }}>
                    {selectedModalItem.years}
                  </span>
                </div>
              )}
              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '15px', lineHeight: 1.3 }}>
                {selectedModalItem.title}
              </h3>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                {selectedModalItem.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* exhibitions & news section */}
      <section className="section-space" style={{ backgroundColor: '#f5f8fc' }}>
        <div className="container">
          <div className="row g-5 justify-content-center section-title-space">
            <div className="col-xxl-8">
              <div className="rs-section-title-wrapper text-center">
                <span className="rs-section-subtitle has-theme-light-blue">{subtitleSvg} Showcasing Innovation, Sharing Excellence</span>
                <h2 className="rs-section-title">News, Exhibitions &amp; Events</h2>
                <p style={{ color: '#666', maxWidth: '580px', margin: '10px auto 0', lineHeight: 1.7 }}>
                  Western Bearing INDIA actively participates in national &amp; global exhibitions, sharing our latest achievements and manufacturing excellence.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {allExhibitionsAndNews.map((exh, i) => (
              <div className="col-xl-6 col-lg-6 col-12" key={i}>
                <div
                  className="wow fadeInUp resp-flex-card"
                  data-wow-delay={`${0.1 + (i % 4) * 0.1}s`}
                  onMouseEnter={() => setHoveredNews(i)}
                  onMouseLeave={() => setHoveredNews(null)}
                  onClick={() => setSelectedModalItem(exh)}
                  style={{
                    display: 'flex',
                    background: '#fff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: hoveredNews === i ? '0 12px 35px rgba(12,123,199,0.15)' : '0 3px 15px rgba(0,0,0,0.06)',
                    transform: hoveredNews === i ? 'translateY(-4px)' : 'translateY(0)',
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
                        transform: hoveredNews === i ? 'scale(1.06)' : 'scale(1)',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                    {exh.isDynamic && (
                      <span style={{
                        position: 'absolute',
                        bottom: '8px',
                        left: '8px',
                        background: '#28a745',
                        color: '#fff',
                        fontSize: '10px',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontWeight: 'bold'
                      }}>NEW</span>
                    )}
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

      <CtaSection />
    </>
  )
}

export default NewsGallery
