import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Infrastructure() {
  const [hoveredFacility, setHoveredFacility] = useState(null)
  const [hoveredEquip, setHoveredEquip] = useState(null)

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

  const capabilities = [
    { icon: 'ri-settings-3-line', number: '200+', label: 'Machines & Tools' },
    { icon: 'ri-group-line', number: '100+', label: 'Skilled Employees' },
    { icon: 'ri-award-line', number: '12L+', label: 'Annual Production' },
    { icon: 'ri-building-line', number: '16,000', label: 'Sq. Ft. Facility' }
  ]

  const facilities = [
    { title: 'CNC Grinding Machine', desc: 'Advanced CNC Grinding machines — both Indian and imported — for precision grinding of inner and outer bearing races.', image: 'http://localhost:3000/assets/images/history/history-thumb-01.png' },
    { title: 'Universal Grinding Machines', desc: 'Universal grinding equipment for diverse bearing component finishing with micron-level accuracy.', image: 'http://localhost:3000/assets/images/history/history-thumb-01.png' },
    { title: 'Semi-Automatic Assembly', desc: 'Semi-automatic bearing assembly machine for correct fitment, greasing, and quality assembly process.', image: 'http://localhost:3000/assets/images/history/history-thumb-01.png' },
    { title: 'Demagnetize Machine', desc: 'Demagnetization equipment to remove residual magnetism from bearing components after machining.', image: 'http://localhost:3000/assets/images/history/history-thumb-01.png' },
    { title: 'Quality Testing Lab', desc: 'State-of-the-art testing laboratory with Mahr (Germany) roughness, profile, contour, and hardness testing machines.', image: 'http://localhost:3000/assets/images/history/history-thumb-01.png' },
    { title: 'Packaging & Dispatch', desc: 'Export lamination, branding, pouching packing, and box packing machines for domestic and international shipments.', image: 'http://localhost:3000/assets/images/history/history-thumb-01.png' }
  ]

  const qualityEquipment = [
    { name: 'Mahr (Germany) Roughness & Profile Testing Machine', icon: 'ri-test-tube-line', desc: 'World-class German-made instrument for surface roughness and profile measurement.', image: 'http://localhost:3000/assets/images/history/history-thumb-01.png' },
    { name: 'Contour Testing Machine (Mahr Germany)', icon: 'ri-shape-line', desc: 'Precision contour measurement for bearing race geometry verification.', image: 'http://localhost:3000/assets/images/history/history-thumb-01.png' },
    { name: 'Hardness Testing Machine', icon: 'ri-hammer-line', desc: 'Facility for HRC hardness testing to ensure components meet international standards.', image: 'http://localhost:3000/assets/images/history/history-thumb-01.png' },
    { name: 'Mitutoyo (Japan) Dial Gauge', icon: 'ri-dashboard-3-line', desc: 'Japanese precision dial gauges for accurate dimensional measurement.', image: 'http://localhost:3000/assets/images/history/history-thumb-01.png' },
    { name: 'Air Gauge for Bore Testing', icon: 'ri-focus-3-line', desc: 'Air gauging system for non-contact, high-precision bore diameter measurement.', image: 'http://localhost:3000/assets/images/history/history-thumb-01.png' },
    { name: '2D/3D Drawings as per Customer', icon: 'ri-draft-line', desc: 'We provide 2D/3D drawings as per customer requirements and continuously work on improving quality.', image: 'http://localhost:3000/assets/images/history/history-thumb-01.png' }
  ]

  const certifications = [
    { title: 'ISO 9001:2015', subtitle: 'Certified since October 2009 through Moody International. Ensuring quality, consistency, and customer satisfaction.', image: '/assets/images/Main-images/Certificates/1.png' },
    { title: 'ZED Certification', subtitle: 'Zero Defect Zero Effect (ZED) Certification received from MSME, Government of India.', image: '/assets/images/Main-images/Certificates/2.png' },
    { title: 'Tools Calibration Certificate', subtitle: 'Regular tools calibration certificates ensuring measurement accuracy across all instruments.', image: '/assets/images/Main-images/Certificates/3.png' }
  ]

  const packagingMachines = [
    'Export Lamination Machine',
    'Western Branding Machine',
    'Pouching Packing Machine',
    'Box Packing Machine'
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
                  <h1 className="rs-breadcrumb-title">Infrastructure</h1>
                </div>
                <div className="rs-breadcrumb-menu">
                  <nav><ul>
                    <li><span><Link to="/">Western Bearing</Link></span></li>
                    <li><span>Infrastructure</span></li>
                  </ul></nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* capabilities strip */}
      <section style={{ background: 'linear-gradient(135deg, #293194 0%, #0C7BC7 100%)', padding: '40px 0' }}>
        <div className="container">
          <div className="row g-4">
            {capabilities.map((item, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="wow fadeInUp" data-wow-delay={`${0.1 + i * 0.15}s`} style={{ textAlign: 'center' }}>
                  <i className={item.icon} style={{ fontSize: '28px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px', display: 'block' }}></i>
                  <h2 style={{ color: '#fff', fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, marginBottom: '4px' }}>{item.number}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: 500, marginBottom: 0, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* intro section */}
      <section className="rs-about-area section-space has-theme-light-blue">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="wow fadeInLeft" data-wow-delay=".2s">
                <div style={{ position: 'relative' }}>
                  <img src="http://localhost:3000/assets/images/history/history-thumb-01.png" alt="Western Bearing Factory" style={{ borderRadius: '16px', width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }} />
                  <div style={{ position: 'absolute', bottom: '-15px', right: '-10px', background: 'linear-gradient(135deg, #293194, #0C7BC7)', color: '#fff', padding: '16px 22px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(41,49,148,0.35)', textAlign: 'center' }}>
                    <div style={{ fontSize: '26px', fontWeight: 800, lineHeight: 1 }}>16,000+</div>
                    <div style={{ fontSize: '12px', fontWeight: 500, opacity: 0.85, marginTop: '2px' }}>Sq. Ft. Facility</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wow fadeInRight" data-wow-delay=".3s">
                <span className="rs-section-subtitle has-theme-light-blue" style={{ justifyContent: 'flex-start' }}>{subtitleSvg} Strong Foundation for Stronger Performance</span>
                <h2 className="rs-section-title" style={{ marginBottom: '18px', marginTop: '10px' }}>Where Innovation Meets Manufacturing</h2>
                <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '14px' }}>
                  Western Bearing Company operates a <strong>16,000 sq. ft. state-of-the-art facility</strong> at B-7, Industrial Estate, New Power House Road, Jodhpur (City), India.
                </p>
                <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '14px' }}>
                  WESTERN Bearings has an annual production capacity of <strong>12,00,000 bearings</strong>. The company is supported by a workforce of over <strong>100 skilled and unskilled employees</strong>. With more than <strong>200 machines and tools</strong>, bearings are manufactured using Universal Grinding and CNC Grinding machines, comprising both Indian and imported equipment.
                </p>
                <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '0' }}>
                  The company is fully equipped with complete in-house facilities for bearing manufacturing — from raw material handling to final packaging and dispatch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* manufacturing facility gallery */}
      <section className="section-space" style={{ backgroundColor: '#f5f8fc' }}>
        <div className="container">
          <div className="row g-5 justify-content-center section-title-space">
            <div className="col-xxl-8 col-xl-9 col-lg-9">
              <div className="rs-section-title-wrapper text-center">
                <span className="rs-section-subtitle has-theme-light-blue">{subtitleSvg} Our Facilities</span>
                <h2 className="rs-section-title">Manufacturing &amp; Production Departments</h2>
                <p style={{ color: '#666', maxWidth: '560px', margin: '10px auto 0', lineHeight: 1.7 }}>Our facility seamlessly integrates raw material handling, manufacturing, corporate office, and storage, ensuring efficient operations.</p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {facilities.map((f, i) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
                <div
                  className="wow fadeInUp" data-wow-delay={`${0.1 + i * 0.1}s`}
                  onMouseEnter={() => setHoveredFacility(i)}
                  onMouseLeave={() => setHoveredFacility(null)}
                  style={{
                    position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '300px', cursor: 'pointer',
                    boxShadow: hoveredFacility === i ? '0 15px 40px rgba(12,123,199,0.2)' : '0 6px 25px rgba(0,0,0,0.08)',
                    transform: hoveredFacility === i ? 'translateY(-6px)' : 'translateY(0)', transition: 'all 0.4s ease'
                  }}
                >
                  <img src={f.image} alt={f.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hoveredFacility === i ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.5s ease' }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: hoveredFacility === i ? 'linear-gradient(180deg, rgba(41,49,148,0.1) 0%, rgba(41,49,148,0.88) 60%)' : 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7) 100%)',
                    transition: 'background 0.4s ease'
                  }}></div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '22px', transform: hoveredFacility === i ? 'translateY(0)' : 'translateY(8px)', transition: 'transform 0.3s ease' }}>
                    <h5 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, marginBottom: hoveredFacility === i ? '8px' : '0', transition: 'margin 0.3s ease' }}>{f.title}</h5>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', lineHeight: '1.5', marginBottom: 0, maxHeight: hoveredFacility === i ? '60px' : '0', opacity: hoveredFacility === i ? 1 : 0, overflow: 'hidden', transition: 'all 0.35s ease' }}>{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* quality standards section */}
      <section className="section-space p-relative" style={{ backgroundColor: '#f5f8fc', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row g-5 justify-content-center section-title-space">
            <div className="col-xxl-8">
              <div className="rs-section-title-wrapper text-center">
                <span className="rs-section-subtitle" style={{ color: '#0C7BC7', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#0C7BC7"></path>
                  </svg>
                  Quality Standards
                </span>
                <h2 className="rs-section-title" style={{ color: '#1a1a1a' }}>Built to OEM Standards, Trusted Worldwide</h2>
                <p style={{ color: '#666', maxWidth: '580px', margin: '10px auto 0', lineHeight: 1.7 }}>We have a state-of-the-art in-house testing laboratory equipped with world-class instruments. We test our products according to international standards.</p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {qualityEquipment.map((eq, i) => (
              <div className="col-xl-6 col-lg-6 col-md-6" key={i}>
                <div
                  className="wow fadeInUp" data-wow-delay={`${0.1 + i * 0.1}s`}
                  onMouseEnter={() => setHoveredEquip(i)}
                  onMouseLeave={() => setHoveredEquip(null)}
                  style={{
                    background: hoveredEquip === i ? 'linear-gradient(135deg, #0C7BC7 0%, #293194 100%)' : '#fff',
                    borderRadius: '16px', overflow: 'hidden',
                    border: hoveredEquip === i ? '1px solid transparent' : '1px solid rgba(0,0,0,0.1)',
                    height: '100%', cursor: 'pointer',
                    transform: hoveredEquip === i ? 'translateY(-5px)' : 'translateY(0)',
                    transition: 'all 0.4s ease',
                    boxShadow: hoveredEquip === i ? '0 15px 35px rgba(12,123,199,0.3)' : '0 4px 15px rgba(0,0,0,0.08)',
                    display: 'flex', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse'
                  }}
                >
                  {/* Image Section */}
                  <div style={{ width: '45%', minHeight: '200px', position: 'relative' }}>
                    <img 
                      src={eq.image} 
                      alt={eq.name} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transform: hoveredEquip === i ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.4s ease'
                      }} 
                    />
                    <div style={{
                      position: 'absolute', 
                      top: '15px', 
                      left: i % 2 === 0 ? '15px' : 'auto',
                      right: i % 2 === 0 ? 'auto' : '15px',
                      width: '46px', height: '46px', borderRadius: '12px',
                      background: hoveredEquip === i ? 'rgba(255,255,255,0.25)' : 'rgba(12,123,199,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      transition: 'all 0.3s ease'
                    }}>
                      <i className={eq.icon} style={{ 
                        fontSize: '20px', 
                        color: hoveredEquip === i ? '#fff' : '#0C7BC7', 
                        transition: 'color 0.3s ease' 
                      }}></i>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div style={{ 
                    width: '55%', 
                    padding: '24px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center' 
                  }}>
                    <h6 style={{ 
                      color: hoveredEquip === i ? '#fff' : '#1a1a1a', 
                      fontWeight: 700, 
                      fontSize: '16px', 
                      marginBottom: '12px',
                      lineHeight: '1.4',
                      transition: 'color 0.3s ease'
                    }}>{eq.name}</h6>
                    <p style={{ 
                      color: hoveredEquip === i ? 'rgba(255,255,255,0.9)' : '#666', 
                      fontSize: '13px', 
                      lineHeight: 1.6, 
                      marginBottom: 0, 
                      transition: 'color 0.3s ease' 
                    }}>{eq.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* packaging section */}
      <section className="section-space" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="wow fadeInLeft" data-wow-delay=".2s">
                <span className="rs-section-subtitle has-theme-light-blue" style={{ justifyContent: 'flex-start' }}>{subtitleSvg} Empowering Production Through Innovation</span>
                <h2 className="rs-section-title" style={{ marginBottom: '18px', marginTop: '10px' }}>Packaging &amp; Branding Infrastructure</h2>
                <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
                  Our facility includes dedicated packaging machinery for branded packaging with proper labeling — ready for both domestic and international shipments.
                </p>
                <div className="row g-3">
                  {packagingMachines.map((m, i) => (
                    <div className="col-6" key={i}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(12,123,199,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <i className="ri-check-double-line" style={{ color: '#0C7BC7', fontSize: '16px' }}></i>
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#333' }}>{m}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wow fadeInRight" data-wow-delay=".3s">
                <img src="http://localhost:3000/assets/images/history/history-thumb-01.png" alt="Packaging" style={{ borderRadius: '16px', width: '100%', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* certifications */}
      {/* <section className="section-space has-theme-light-blue">
        <div className="container">
          <div className="row g-5 justify-content-center section-title-space">
            <div className="col-xxl-8">
              <div className="rs-section-title-wrapper text-center">
                <span className="rs-section-subtitle has-theme-light-blue">{subtitleSvg} Certified for Excellence</span>
                <h2 className="rs-section-title">Quality Certifications &amp; Standards</h2>
                <p style={{ color: '#666', maxWidth: '560px', margin: '10px auto 0', lineHeight: 1.7 }}>Western Bearing Company — a trusted and certified bearing manufacturer supplying bearings to both government and non-government sectors.</p>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {certifications.map((c, i) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
                <div className="wow fadeInUp" data-wow-delay={`${0.1 + i * 0.15}s`} style={{
                  background: '#fff', borderRadius: '16px', padding: '30px 24px', textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.04)', height: '100%'
                }}>
                  <img src={c.image} alt={c.title} style={{ maxHeight: '160px', maxWidth: '100%', objectFit: 'contain', marginBottom: '18px' }} />
                  <h6 style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>{c.title}</h6>
                  <p style={{ color: '#666', fontSize: '13px', lineHeight: 1.6, marginBottom: 0 }}>{c.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #293194 0%, #0C7BC7 50%, #1a9ad9 100%)', padding: '60px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '250px', height: '250px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 style={{ color: '#fff', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, marginBottom: '10px' }}>Want a Factory Visit?</h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', marginBottom: 0, maxWidth: '500px' }}>Schedule a visit to our 16,000 sq. ft. manufacturing facility in Jodhpur and see our production capabilities first-hand.</p>
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

export default Infrastructure
