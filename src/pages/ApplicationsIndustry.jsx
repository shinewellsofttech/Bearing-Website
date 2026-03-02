import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function ApplicationsIndustry() {
  const [hoveredIndustry, setHoveredIndustry] = useState(null)
  const [hoveredBearing, setHoveredBearing] = useState(null)
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [hoveredMember, setHoveredMember] = useState(null)

  useEffect(() => {
    const initScripts = () => {
      if (typeof window === 'undefined' || !window.jQuery) return
      const $ = window.jQuery

      $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')')
      })

      if (window.WOW) {
        const wow = new window.WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: false,
          live: true
        })
        wow.init()
      }
    }

    const checkAndInit = () => {
      if (window.jQuery) {
        setTimeout(initScripts, 200)
      } else {
        setTimeout(checkAndInit, 100)
      }
    }

    checkAndInit()
    window.scrollTo(0, 0)
  }, [])

  const subtitleSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
      <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
      <path fillRule="evenodd" clipRule="evenodd"
        d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
        fill="#0C7BC7"></path>
    </svg>
  )

  const arrowIcon = (
    <span className="icon-box">
      <svg className="icon-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
      </svg>
      <svg className="icon-second" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"></path>
      </svg>
    </span>
  )

  const industries = [
    {
      title: 'Harvester',
      description: 'Heavy-duty bearings for combine harvesters with dust-resistant sealing and extended service life for critical harvest seasons.',
      image: '/assets/images/Main-images/Vehicle/Harvestor.jpg',
      icon: 'ri-leaf-line'
    },
    {
      title: 'Rotavator',
      description: 'Purpose-built bearings for rotavators designed for impact loading and harsh soil preparation conditions.',
      image: '/assets/images/Main-images/rotavator-and-seeder.jpg',
      icon: 'ri-settings-3-line'
    },
    {
      title: 'Tractor',
      description: 'Core bearing solutions for tractor axles, PTO systems, and wheel hubs — preferred across Indian and international markets.',
      image: '/assets/images/Main-images/Vehicle/Tractor.jpg',
      icon: 'ri-steering-2-line'
    },
    {
      title: 'Earth Moving Machine',
      description: 'Heavy-duty bearings for excavators, loaders, and earth-moving equipment — built for extreme loads, shock, and vibration.',
      image: '/assets/images/Main-images/Vehicle/Earth-Moving-Machine.jpg',
      icon: 'ri-building-2-line'
    },
    {
      title: 'Tractor Trolley',
      description: 'Reliable bearings for tractor trolley wheels and axles, ensuring smooth operation under heavy agricultural loads.',
      image: '/assets/images/Main-images/tractor-trolly.jpg',
      icon: 'ri-truck-line'
    },
    {
      title: 'Concrete Mixer',
      description: 'Robust bearings for mixers and batching plants, performing flawlessly in high-vibration, cement-dust environments.',
      image: '/assets/images/Main-images/Vehicle/Concreate-Mixer.jpg',
      icon: 'ri-tools-line'
    },
    {
      title: 'Agriculture Machinery',
      description: 'High-quality bearings for threshers, super seeders, combine machines — renowned for durability, smooth performance, and reliability.',
      image: '/assets/images/Main-images/agriculture-machines.jpeg',
      icon: 'ri-plant-line'
    },
    {
      title: 'Industrial Machinery',
      description: 'Application-specific bearings for gearboxes, pumps, compressors, electric motors, and heavy industrial equipment.',
      image: '/assets/images/Main-images/manufacturing.jpg.jpeg',
      icon: 'ri-cpu-line'
    }
  ]

  /* All agriculture & earthmoving applications from the company profile */
  const allApplications = [
    'Harvester', 'Thresher', 'Rotavator', 'Super Seeder', 'Grain Dryer',
    'Molboard Plough', 'Disc Plough', 'Boom Sprayer', 'Rice Transplanter',
    'Disc Harrow', 'Seed Drill', 'Straw Baler', 'Maize Planter',
    'Sugarcane Planter', 'Seed Broadcaster', 'Reaper', 'Power Weeder',
    'Feed Mixer', 'Chaff Cutter', 'Tractor Trolley', 'Grain Cleaner & Sorter',
    'Tractor', 'Earth Moving Machine', 'Concrete Mixer'
  ]

  const bearingTypes = [
    {
      name: 'Tapper Roller Bearing',
      image: '/assets/images/Main-images/Products/Tapper-Roller-Bearing.png',
      description: 'Ideal for automotive wheel hubs, agriculture gearboxes, and heavy machinery axles.',
      applications: ['Tractors', 'Trucks', 'Gearboxes']
    },
    {
      name: 'Deep Groove Ball Bearing',
      image: '/assets/images/Main-images/Products/Deep-Grove-Ball-Bearing.png',
      description: 'Versatile bearings for electric motors, household appliances, and light machinery.',
      applications: ['Motors', 'Appliances', 'Light Machinery']
    },
    {
      name: 'Double Row Angular Contact Ball Bearing',
      image: '/assets/images/Main-images/Products/Double-Row-Angular-Contact-Ball-Bearing.png',
      description: 'For pumps, compressors, and combined axial-radial load applications.',
      applications: ['Pumps', 'Compressors', 'Spindles']
    },
    {
      name: 'Pillow Block Bearing (Unbreakable Body)',
      image: '/assets/images/Main-images/Products/Pillow-Block-Bearing.png',
      description: 'Mounted bearings with unbreakable body for conveyor systems, fans, and agricultural processing.',
      applications: ['Conveyors', 'Fans', 'Agriculture']
    },
    {
      name: 'Cylindrical Roller Bearing',
      image: '/assets/images/Main-images/Products/Cylendrical-Roller-Bearing.png',
      description: 'Used in electric motors, pumps, compressors, and high-speed industrial equipment.',
      applications: ['Motors', 'Pumps', 'Compressors']
    },
    {
      name: 'Spherical Roller Bearing',
      image: '/assets/images/Main-images/Products/Spherecal-Roller-Bearing.png',
      description: 'For heavy-duty applications with misalignment — mining, construction, and paper mills.',
      applications: ['Mining', 'Construction', 'Paper Mills']
    }
  ]

  const features = [
    { icon: 'ri-award-line', title: 'ISO 9001:2015 & ZED Certified', desc: 'Quality management system certified and ZED (Zero Defect Zero Effect) certified under Government of India.' },
    { icon: 'ri-global-line', title: '30+ Countries Export', desc: 'Exporting premium bearings to over 30 countries across Europe, Asia, Africa, and the Middle East.' },
    { icon: 'ri-tools-line', title: 'Complete In-House Manufacturing', desc: 'From forging, CNC turning, grinding to branding — everything made in-house for full quality control.' },
    { icon: 'ri-customer-service-2-line', title: 'OEM Trusted Partner', desc: 'Producing premium bearings for leading OEM clients with customized solutions for heavy loads and gearboxes.' }
  ]

  const highlights = [
    { number: '40+', label: 'Years of Excellence' },
    { number: '12L+', label: 'Annual Production' },
    { number: '30+', label: 'Export Countries' },
    { number: '200+', label: 'Machines & Tools' }
  ]

  const memberships = [
    { name: 'Confederation of Indian Industry (CII)', icon: 'ri-government-line' },
    { name: 'ACMA — Automotive Component Manufacturers Association', icon: 'ri-car-line' },
    { name: 'Government e-Marketplace (GeM)', icon: 'ri-store-2-line' },
    { name: 'Federation of Indian Export Organisations (FIEO)', icon: 'ri-ship-line' },
    { name: 'Rajasthan Ball Bearing Merchant Association', icon: 'ri-building-line' },
    { name: 'MSME — Micro, Small & Medium Enterprises', icon: 'ri-briefcase-line' }
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
                  <h1 className="rs-breadcrumb-title">Applications &amp; Industry</h1>
                </div>
                <div className="rs-breadcrumb-menu">
                  <nav>
                    <ul>
                      <li><span><Link to="/">Western Bearing</Link></span></li>
                      <li><span>Applications &amp; Industry</span></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* stats counter strip */}
      <section style={{ background: 'linear-gradient(135deg, #293194 0%, #0C7BC7 100%)', padding: '40px 0' }}>
        <div className="container">
          <div className="row g-4">
            {highlights.map((item, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="wow fadeInUp" data-wow-delay={`${0.1 + i * 0.15}s`} style={{ textAlign: 'center' }}>
                  <h2 style={{ color: '#fff', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginBottom: '6px', letterSpacing: '-0.5px' }}>{item.number}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: 500, marginBottom: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* intro section */}
      <section className="rs-about-area section-space rs-about-twelve has-theme-light-blue">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="wow fadeInLeft" data-wow-delay=".2s">
                <div style={{ position: 'relative' }}>
                  <img src="/assets/images/Main-images/Product-Portfolio.png" alt="Western Bearing Product Portfolio" style={{ borderRadius: '16px', width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }} />
                  <div style={{
                    position: 'absolute', bottom: '-20px', right: '-10px',
                    background: 'linear-gradient(135deg, #293194 0%, #0C7BC7 100%)',
                    color: '#fff', padding: '18px 24px', borderRadius: '14px',
                    boxShadow: '0 10px 30px rgba(41,49,148,0.35)', textAlign: 'center', zIndex: 2
                  }}>
                    <div style={{ fontSize: '28px', fontWeight: 800, lineHeight: 1 }}>Since</div>
                    <div style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1.2 }}>1985</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wow fadeInRight" data-wow-delay=".3s">
                <span className="rs-section-subtitle has-theme-light-blue" style={{ justifyContent: 'flex-start' }}>
                  {subtitleSvg} Serving Every Industry with Precision
                </span>
                <h2 className="rs-section-title" style={{ marginBottom: '20px', marginTop: '10px' }}>
                  High-Quality Bearings for Agricultural &amp; Earth-Moving Machinery
                </h2>
                <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '15px' }}>
                  We are capable of providing high-quality bearings for agricultural and earth-moving machinery — tractors, harvesters, rotavators, threshers, super seeders, combine machines, and more — renowned for their durability, smooth performance, and reliability.
                </p>
                <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '25px' }}>
                  We consistently use high-grade <strong>SAE 52100 steel</strong> sourced from reputed companies like <strong>TATA, JINDAL, and SUNFLAG STEEL</strong>, along with international standard finished raw material parts to ensure superior product quality and performance.
                </p>
                <div className="row g-3">
                  {['SAE 52100 Grade Steel', 'TATA / JINDAL / SUNFLAG', 'OEM Quality Standards', 'Custom Specifications'].map((point, i) => (
                    <div className="col-6" key={i}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(12,123,199,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <i className="ri-check-line" style={{ color: '#0C7BC7', fontSize: '16px', fontWeight: 700 }}></i>
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#333' }}>{point}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '30px' }}>
                  <Link className="rs-btn has-theme-light-blue has-icon has-bg" to="/shop">View Products{arrowIcon}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* industries grid */}
      <section className="section-space" style={{ backgroundColor: '#f5f8fc' }}>
        <div className="container">
          <div className="row g-5 justify-content-center section-title-space">
            <div className="col-xxl-8 col-xl-9 col-lg-9">
              <div className="rs-section-title-wrapper text-center">
                <span className="rs-section-subtitle has-theme-light-blue">{subtitleSvg} Industries &amp; Application</span>
                <h2 className="rs-section-title">From Automotive to Agriculture — We Power All</h2>
                <p style={{ color: '#666', maxWidth: '600px', margin: '15px auto 0', lineHeight: '1.7' }}>One solution, many industries. Western Bearing delivers performance that fits every need.</p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {industries.map((industry, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={index}>
                <div
                  className="wow fadeInUp" data-wow-delay={`${0.1 + index * 0.08}s`}
                  onMouseEnter={() => setHoveredIndustry(index)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                  style={{
                    position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '380px', cursor: 'pointer',
                    boxShadow: hoveredIndustry === index ? '0 20px 50px rgba(12,123,199,0.25)' : '0 8px 30px rgba(0,0,0,0.1)',
                    transform: hoveredIndustry === index ? 'translateY(-8px)' : 'translateY(0)',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  <img src={industry.image} alt={industry.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: hoveredIndustry === index ? 'scale(1.1)' : 'scale(1)' }} />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: hoveredIndustry === index ? 'linear-gradient(180deg, rgba(41,49,148,0.15) 0%, rgba(41,49,148,0.92) 65%)' : 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.75) 100%)',
                    transition: 'background 0.4s ease'
                  }}></div>
                  <div style={{
                    position: 'absolute', top: '20px', right: '20px', width: '48px', height: '48px', borderRadius: '12px',
                    background: hoveredIndustry === index ? '#fff' : 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease',
                    boxShadow: hoveredIndustry === index ? '0 4px 15px rgba(0,0,0,0.15)' : 'none'
                  }}>
                    <i className={industry.icon} style={{ fontSize: '22px', color: hoveredIndustry === index ? '#293194' : '#fff', transition: 'color 0.3s ease' }}></i>
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '25px', transform: hoveredIndustry === index ? 'translateY(0)' : 'translateY(10px)', transition: 'transform 0.4s ease' }}>
                    <h5 style={{ color: '#fff', fontSize: '20px', fontWeight: 700, marginBottom: hoveredIndustry === index ? '12px' : '0', transition: 'margin 0.3s ease' }}>{industry.title}</h5>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', lineHeight: '1.6', marginBottom: 0, maxHeight: hoveredIndustry === index ? '100px' : '0', opacity: hoveredIndustry === index ? 1 : 0, overflow: 'hidden', transition: 'all 0.4s ease' }}>{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Applications Tags */}
          <div className="wow fadeInUp" data-wow-delay=".2s" style={{ marginTop: '50px', textAlign: 'center' }}>
            <h5 style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: '20px' }}>All Applications We Serve</h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
              {allApplications.map((app, i) => (
                <span key={i} style={{
                  display: 'inline-block', padding: '8px 18px', borderRadius: '25px', fontSize: '13px', fontWeight: 600,
                  background: 'rgba(12,123,199,0.08)', color: '#0C7BC7', border: '1px solid rgba(12,123,199,0.15)', cursor: 'default'
                }}>{app}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* bearing types section */}
      {/* <section className="section-space has-theme-light-blue">
        <div className="container">
          <div className="row g-5 justify-content-center section-title-space">
            <div className="col-xxl-8 col-xl-9 col-lg-9">
              <div className="rs-section-title-wrapper text-center">
                <span className="rs-section-subtitle has-theme-light-blue">{subtitleSvg} Product Portfolio</span>
                <h2 className="rs-section-title">Diverse Products, One Trusted Name</h2>
                <p style={{ color: '#666', maxWidth: '550px', margin: '15px auto 0', lineHeight: '1.7' }}>Western Bearing manufactures a wide range of bearings using high-grade SAE 52100 steel sourced from TATA, JINDAL, and SUNFLAG STEEL.</p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {bearingTypes.map((bearing, index) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                <div
                  className="wow fadeInUp" data-wow-delay={`${0.1 + index * 0.12}s`}
                  onMouseEnter={() => setHoveredBearing(index)}
                  onMouseLeave={() => setHoveredBearing(null)}
                  style={{
                    background: '#fff', borderRadius: '16px', overflow: 'hidden', height: '100%',
                    boxShadow: hoveredBearing === index ? '0 15px 40px rgba(12,123,199,0.18)' : '0 4px 20px rgba(0,0,0,0.06)',
                    transform: hoveredBearing === index ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.35s ease', border: hoveredBearing === index ? '1px solid rgba(12,123,199,0.15)' : '1px solid rgba(0,0,0,0.04)'
                  }}
                >
                  <div style={{
                    padding: '30px 30px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center',
                    backgroundColor: hoveredBearing === index ? '#f0f7ff' : '#f8fbff', minHeight: '210px', transition: 'background-color 0.35s ease'
                  }}>
                    <img src={bearing.image} alt={bearing.name} style={{ maxHeight: '170px', maxWidth: '100%', objectFit: 'contain', transform: hoveredBearing === index ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.4s ease' }} />
                  </div>
                  <div style={{ padding: '22px 25px 25px' }}>
                    <h5 style={{ marginBottom: '8px', fontSize: '17px', fontWeight: 700, color: '#1a1a1a' }}>{bearing.name}</h5>
                    <p style={{ color: '#666', fontSize: '13.5px', lineHeight: '1.65', marginBottom: '15px' }}>{bearing.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {bearing.applications.map((app, j) => (
                        <span key={j} style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '20px', fontSize: '11.5px', fontWeight: 600, background: 'rgba(12,123,199,0.08)', color: '#0C7BC7' }}>{app}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '50px' }}>
            <Link className="rs-btn has-theme-light-blue has-icon has-bg" to="/shop">Explore All Products{arrowIcon}</Link>
          </div>
        </div>
      </section> */}

      {/* why choose section */}
      <section className="section-space p-relative" style={{ backgroundColor: '#f5f8fc', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row g-5 justify-content-center section-title-space">
            <div className="col-xxl-8 col-xl-9 col-lg-9">
              <div className="rs-section-title-wrapper text-center">
                <span className="rs-section-subtitle" style={{ color: '#0C7BC7', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#0C7BC7"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#0C7BC7"></path>
                  </svg>
                  Why Choose Us
                </span>
                <h2 className="rs-section-title" style={{ color: '#1a1a1a' }}>Trusted by Industry, Chosen by Professionals</h2>
                <p style={{ color: '#666', maxWidth: '600px', margin: '10px auto 0', lineHeight: 1.7 }}>
                  Customized high-quality bearings for heavy loads and gearboxes, made in-house from forging, CNC turning, grinding to branding. Small quantity, low cost, longer machine life — that's why customers trust us.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
                <div
                  className="wow fadeInUp" data-wow-delay={`${0.1 + index * 0.15}s`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  style={{
                    textAlign: 'center', padding: '40px 28px',
                    background: hoveredFeature === index ? 'linear-gradient(135deg, #0C7BC7 0%, #293194 100%)' : '#fff',
                    borderRadius: '16px', border: hoveredFeature === index ? '1px solid transparent' : '1px solid rgba(0,0,0,0.1)',
                    height: '100%', cursor: 'pointer', transform: hoveredFeature === index ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.4s ease', boxShadow: hoveredFeature === index ? '0 20px 40px rgba(12,123,199,0.3)' : '0 4px 15px rgba(0,0,0,0.08)'
                  }}
                >
                  <div style={{
                    width: '76px', height: '76px', borderRadius: '20px',
                    background: hoveredFeature === index ? 'rgba(255,255,255,0.2)' : 'rgba(12,123,199,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px', transition: 'all 0.4s ease'
                  }}>
                    <i className={feature.icon} style={{ fontSize: '32px', color: hoveredFeature === index ? '#fff' : '#0C7BC7', transition: 'color 0.3s ease' }}></i>
                  </div>
                  <h5 style={{ marginBottom: '12px', fontSize: '18px', fontWeight: 700, color: hoveredFeature === index ? '#fff' : '#1a1a1a', transition: 'color 0.3s ease' }}>{feature.title}</h5>
                  <p style={{ color: hoveredFeature === index ? 'rgba(255,255,255,0.85)' : '#666', fontSize: '14px', lineHeight: '1.7', marginBottom: 0, transition: 'color 0.3s ease' }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* memberships section */}
        {/* <section className="section-space" style={{ backgroundColor: '#f5f8fc' }}>
            <div className="container">
            <div className="row g-5 justify-content-center section-title-space">
                <div className="col-xxl-8">
                <div className="rs-section-title-wrapper text-center">
                    <span className="rs-section-subtitle has-theme-light-blue">{subtitleSvg} Esteemed Memberships</span>
                    <h2 className="rs-section-title">An Esteemed Member of the Industry's Finest</h2>
                </div>
                </div>
            </div>
            <div className="row g-4">
                {memberships.map((m, i) => (
                <div className="col-xl-4 col-lg-4 col-md-6" key={i}>
                    <div
                    className="wow fadeInUp" data-wow-delay={`${0.1 + i * 0.1}s`}
                    onMouseEnter={() => setHoveredMember(i)}
                    onMouseLeave={() => setHoveredMember(null)}
                    style={{
                        background: '#fff', borderRadius: '14px', padding: '28px 24px',
                        display: 'flex', alignItems: 'center', gap: '18px', height: '100%',
                        boxShadow: hoveredMember === i ? '0 10px 30px rgba(12,123,199,0.12)' : '0 3px 15px rgba(0,0,0,0.05)',
                        transform: hoveredMember === i ? 'translateY(-4px)' : 'translateY(0)',
                        transition: 'all 0.35s ease', border: '1px solid rgba(0,0,0,0.04)', cursor: 'default'
                    }}
                    >
                    <div style={{
                        width: '56px', height: '56px', borderRadius: '14px', flexShrink: 0,
                        background: hoveredMember === i ? 'linear-gradient(135deg, #293194, #0C7BC7)' : 'rgba(12,123,199,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease'
                    }}>
                        <i className={m.icon} style={{ fontSize: '24px', color: hoveredMember === i ? '#fff' : '#0C7BC7', transition: 'color 0.3s ease' }}></i>
                    </div>
                    <p style={{ marginBottom: 0, fontWeight: 600, color: '#333', fontSize: '14px', lineHeight: 1.5 }}>{m.name}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section> */}

      {/* CTA section */}
      <section className="section-space p-relative" style={{ background: 'linear-gradient(135deg, #293194 0%, #0C7BC7 50%, #1a9ad9 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 0 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <div className="wow fadeInLeft" data-wow-delay=".2s">
                <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '20px', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '13px', fontWeight: 600, marginBottom: '18px' }}>Get in Touch</span>
                <h2 style={{ color: '#fff', fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.3 }}>Need Bearings for Your Industry?</h2>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: 0, maxWidth: '540px', lineHeight: '1.8' }}>Our engineering team will help you find the right bearing solution — whether it's for agriculture, automotive, or heavy machinery applications.</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="wow fadeInRight" data-wow-delay=".3s" style={{ textAlign: 'center' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px', padding: '35px 30px', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <div style={{ marginBottom: '8px' }}><i className="ri-phone-line" style={{ fontSize: '36px', color: '#fff' }}></i></div>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '5px' }}>Call Us Now</p>
                  <h4 style={{ color: '#fff', marginBottom: '20px', fontWeight: 700 }}>
                    <a href="tel:+919829023064" style={{ color: '#fff', textDecoration: 'none' }}>+91 982 902 3064</a>
                  </h4>
                  <Link className="rs-btn has-theme-light-blue has-icon has-bg" to="/contact" style={{ background: '#fff', color: '#293194', fontWeight: 700, display: 'inline-flex', borderRadius: '10px' }}>
                    Contact Us{arrowIcon}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ApplicationsIndustry
