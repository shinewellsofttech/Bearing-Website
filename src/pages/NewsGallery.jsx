import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function NewsGallery() {
  const [hoveredNews, setHoveredNews] = useState(null)

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
  }, [])

  const subtitleSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
      <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#0C7BC7"></path>
    </svg>
  )

  const arrowIcon = (
    <span className="icon-box">
      <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path></svg>
      <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path></svg>
    </span>
  )

  const galleryImages = [
    { src: '/assets/images/Main-images/Company/7.jpg', label: 'Factory Overview' },
    { src: '/assets/images/Main-images/exh-1.jpg', label: 'ACMA Automechanika Exhibition' },
    { src: '/assets/images/Main-images/Company/1.jpg', label: 'CNC Grinding Section' },
    { src: '/assets/images/Main-images/Company/2.jpg', label: 'Universal Grinding' },
    { src: '/assets/images/Main-images/Company/5.jpg', label: 'Quality Testing Lab' },
    { src: '/assets/images/Main-images/exh-2.jpg', label: 'Trade Show Display' },
    { src: '/assets/images/Main-images/Company/3.jpg', label: 'Assembly Section' },
    { src: '/assets/images/Main-images/Company/6.jpg', label: 'Packaging & Dispatch' }
  ]

  const exhibitions = [
    {
      title: 'ACMA Automechanika (Germany)',
      years: '2015, 2017, 2019, 2026',
      desc: 'Western Bearing has been actively participating in ACMA Automechanika organized by Germany, establishing a strong market presence and brand identity in the international automotive industry.',
      image: '/assets/images/Main-images/exh-1.jpg',
      tag: 'International'
    },
    {
      title: 'International Auto Expo Delhi',
      years: '2014, 2016, 2018, 2020',
      desc: 'Regular participation in India\'s premier automotive exposition — showcasing our latest taper roller, deep groove, and cylindrical roller bearing product ranges.',
      image: '/assets/images/Main-images/exh-2.jpg',
      tag: 'National'
    },
    {
      title: 'Bauma Conexpo India — Construction Expo',
      years: '2025',
      desc: 'In 2025, the company participated in Bauma Conexpo India — one of the largest construction equipment exhibitions, expanding our reach in the construction and earthmoving sectors.',
      image: '/assets/images/Main-images/exh-3.jpg',
      tag: 'Construction'
    },
    {
      title: 'Kisan Agri Show, Pune',
      years: '10–14 Dec, 2025',
      desc: 'Participation in Kisan Agri Show 2025 in Pune — connecting directly with agriculture OEMs and dealers for our taper roller and pillow block bearing ranges.',
      image: '/assets/images/Main-images/exh-4.jpg',
      tag: 'Agriculture'
    },
    {
      title: 'State Level Exhibitions',
      years: '2004, 2008, 2022',
      desc: 'Western Bearing has been participating in exhibitions since 1993, including multiple state level exhibitions — building strong brand recognition across Rajasthan and India.',
      image: '/assets/images/Main-images/Company/7.jpg',
      tag: 'Regional'
    }
  ]

  const exportCountries = [
    'USA', 'UAE', 'Italy', 'Turkey', 'Poland', 'Serbia',
    'South Africa', 'Kenya', 'Ethiopia', 'Sudan', 'Ghana', 'Morocco', 'Mauritius', 'Libya', 'Tunisia', 'Algeria',
    'Jordan', 'Iran', 'Iraq', 'Oman', 'Qatar', 'Lebanon', 'Yemen', 'Palestine',
    'Nepal', 'Bangladesh', 'Myanmar', 'Sri Lanka', 'Bhutan', 'Afghanistan',
    'Brazil', 'Mexico'
  ]

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
                  <h1 className="rs-breadcrumb-title">News &amp; Gallery</h1>
                </div>
                <div className="rs-breadcrumb-menu">
                  <nav><ul>
                    <li><span><Link to="/">Western Bearing</Link></span></li>
                    <li><span>News &amp; Gallery</span></li>
                  </ul></nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* gallery section */}
      <section className="section-space" style={{ backgroundColor: '#f5f8fc' }}>
        <div className="container">
          <div className="row g-5 justify-content-center section-title-space">
            <div className="col-xxl-8">
              <div className="rs-section-title-wrapper text-center">
                <span className="rs-section-subtitle has-theme-light-blue">{subtitleSvg} Pictures That Speak Quality</span>
                <h2 className="rs-section-title">Showcasing Excellence in Every Frame</h2>
              </div>
            </div>
          </div>

          {/* Row 1: 2 featured wide images */}
          <div className="row g-4 mb-4">
            {galleryImages.slice(0, 2).map((img, i) => (
              <div className="col-lg-6 col-md-6" key={i}>
                <div
                  className="wow fadeInUp" data-wow-delay={`${0.1 + i * 0.1}s`}
                  style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '320px', boxShadow: '0 6px 24px rgba(0,0,0,0.1)', cursor: 'pointer' }}
                >
                  <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />

                </div>
              </div>
            ))}
          </div>

          {/* Row 2-3: 6 images in 3 columns */}
          <div className="row g-4">
            {galleryImages.slice(2).map((img, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div
                  className="wow fadeInUp" data-wow-delay={`${0.1 + i * 0.08}s`}
                  style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', height: '220px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', cursor: 'pointer' }}
                >
                  <img src={img.src} alt={img.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* exhibitions section */
      <section className="section-space" style={{ backgroundColor: '#f5f8fc' }}>
          <div className="container">
            <div className="row g-5 justify-content-center section-title-space">
              <div className="col-xxl-8">
                <div className="rs-section-title-wrapper text-center">
                  <span className="rs-section-subtitle has-theme-light-blue">{subtitleSvg} Showcasing Innovation, Sharing Excellence</span>
                  <h2 className="rs-section-title">Exhibition &amp; Participation</h2>
                  <p style={{ color: '#666', maxWidth: '580px', margin: '10px auto 0', lineHeight: 1.7 }}>Western Bearing INDIA has been actively participating in exhibitions since 1993 — building strong brand presence nationally and internationally.</p>
                </div>
              </div>
            </div>
            <div className="row g-4">
              {exhibitions.map((exh, i) => (
                <div className="col-xl-6 col-lg-6" key={i}>
                  <div
                    className="wow fadeInUp" 
                    data-wow-delay={`${0.1 + i * 0.1}s`}
                    onMouseEnter={() => setHoveredNews(i)}
                    onMouseLeave={() => setHoveredNews(null)}
                    style={{
                      display: 'flex', 
                      background: '#fff', 
                      borderRadius: '16px', 
                      overflow: 'hidden',
                      boxShadow: hoveredNews === i ? '0 12px 35px rgba(12,123,199,0.15)' : '0 3px 15px rgba(0,0,0,0.06)',
                      transform: hoveredNews === i ? 'translateY(-4px)' : 'translateY(0)',
                      transition: 'all 0.35s ease', 
                      height: '100%'
                    }}
                  >
                    <div style={{ width: '200px', minWidth: '200px', overflow: 'hidden' }}>
                      <img 
                        src={exh.image} 
                        alt={exh.title} 
                        style={{
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          transform: hoveredNews === i ? 'scale(1.06)' : 'scale(1)', 
                          transition: 'transform 0.4s ease'
                        }} 
                      />
                    </div>
                    <div style={{ padding: '22px 24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                        <span style={{
                          display: 'inline-block', 
                          background: 'rgba(12,123,199,0.08)', 
                          color: '#0C7BC7',
                          fontSize: '11px', 
                          fontWeight: 600, 
                          padding: '3px 10px', 
                          borderRadius: '20px'
                        }}>
                          {exh.tag}
                        </span>
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
                      <h5 style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', lineHeight: 1.35 }}>
                        {exh.title}
                      </h5>
                      <p style={{ color: '#666', fontSize: '13px', lineHeight: '1.6', marginBottom: 0 }}>
                        {exh.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
}

    
      <section style={{ background: 'linear-gradient(135deg, #293194 0%, #0C7BC7 50%, #1a9ad9 100%)', padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 style={{ color: '#fff', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, marginBottom: '10px' }}>Stay Connected With Us</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', marginBottom: 0, maxWidth: '500px' }}>Get in touch for inquiries, partnerships, or to learn more about our bearing solutions for your industry.</p>
            </div>
            <div className="col-lg-4 text-lg-end" style={{ marginTop: '15px' }}>
              <Link className="rs-btn has-theme-light-blue has-icon has-bg" to="/contact" style={{ background: '#fff', color: '#293194', fontWeight: 700, borderRadius: '10px' }}>
                Contact Us{arrowIcon}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default NewsGallery
