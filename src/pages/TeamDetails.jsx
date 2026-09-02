import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useScripts } from '../hooks/useScripts'

function TeamDetails() {
  const { id } = useParams()
  useScripts()

  const teamData = {
    aziz: {
      name: "Mr.Aziz Belim",
      designation: "FOUNDER",
      department: "Founder & Chairman",
      experience: "50+ Years",
      email: "sales@westernbearing.in",
      phone: "+91 9928532210",
      image: "/assets/images/Main-images/Team/1.jpg",
      biography: "Mr.Aziz started the bearing business in 1970 and began manufacturing in 1985. Today 2024, “WESTERN BEARING” brand is known for quality and trust."
    },
    waheed: {
      name: "Mr.Waheed Belim",
      designation: "MANAGING DIRECTOR",
      department: "Management & Strategy",
      experience: "19 Years",
      email: "sales@westernbearing.in",
      phone: "+91 9829023064",
      image: "/assets/images/Main-images/Team/2.jpg",
      biography: "In 2005, Mr.Belim took charge of the company and, with 19 years of experience, established the WESTERN brand globally. Under his leadership, the company has grown steadily with a strong focus on quality and innovation. Today, it produces premium bearings for leading OEM clients."
    },
    maheed: {
      name: "Mr.Maheed Madawat (BELIM)",
      designation: "EXECUTIVE DIRECTOR",
      department: "Operations & Business Development",
      experience: "MBA Graduated",
      email: "exportwesternbearing@gmail.com",
      phone: "+91 9929396200",
      image: "/assets/images/Main-images/Team/3.jpg",
      biography: "In 2024, after completing his MBA, Mr.Maheed joined Western Bearing group to take charge of the company’s operations. MISSION: Western Engineers has initiated the process to launch its IPO, paving the way for a new direction and future growth."
    }
  }

  // Fallback to 'aziz' if the ID is missing or invalid
  const activeMember = teamData[id] || teamData.aziz

  // Process HTML content for React
  const processHTML = (html) => {
    if (!html) return ''
    
    return html
      .replace(/src="assets\//g, 'src="/assets/')
      .replace(/href="assets\//g, 'href="/assets/')
      .replace(/data-background="assets\//g, 'data-background="/assets/')
      .replace(/href="([^"]+\.html)"/g, (match, path) => {
        let route = path.replace('.html', '')
        if (route === 'index') route = ''
        return `href="${route || '/'}"`
      })
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
  }

  const htmlContent = `

        <!-- team details area start -->
        <section class="rs-team-details-area section-space rs-team-details">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-xl-5 col-lg-5">
                        <div class="rs-team-details-thumb" style="border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                            <img src="${activeMember.image}" alt="${activeMember.name}" style="width: 100%; border-radius: 20px; display: block;">
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-7">
                        <div class="rs-team-details-content">
                            <span class="rs-team-details-subtitle" style="color: #0D80CE; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Hello i'm</span>
                            <h2 class="rs-team-details-title" style="color: #0f1c3f; font-weight: 700; margin-top: 5px; margin-bottom: 5px;">${activeMember.name}</h2>
                            <span class="rs-team-details-desig" style="color: #5b6c8f; font-weight: 500; font-size: 16px; display: block; margin-bottom: 25px;">${activeMember.designation} of Western Bearing</span>
                            
                            <div class="rs-team-details-bio" style="border-top: 1px solid #eaeaea; padding-top: 25px;">
                                <h3 style="color: #0f1c3f; font-weight: 600; font-size: 22px; margin-bottom: 15px;">Profile Details</h3>
                                <p style="color: #4a5568; font-size: 18px; line-height: 1.8; margin-bottom: 0;">${activeMember.biography}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- team details area end -->
  `

  return (
    <div dangerouslySetInnerHTML={{ __html: processHTML(htmlContent) }} />
  )
}

export default TeamDetails
