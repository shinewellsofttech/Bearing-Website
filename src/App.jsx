import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import AboutTwo from './pages/AboutTwo'
import Services from './pages/Services'
import ServicesDetails from './pages/ServicesDetails'
import Team from './pages/Team'
import TeamDetails from './pages/TeamDetails'
import Portfolio from './pages/Portfolio'
import PortfolioDetails from './pages/PortfolioDetails'
import Pricing from './pages/Pricing'
import Shop from './pages/Shop'
import ShopDetails from './pages/ShopDetails'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import FAQ from './pages/FAQ'
import Appointment from './pages/Appointment'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Contact from './pages/Contact'
import ContactTwo from './pages/ContactTwo'
// Home variations
import WesternBearningOnePage from './pages/IndustrieOnePage'
import RedEngineering from './pages/RedEngineering'
import RedEngineeringOnePage from './pages/RedEngineeringOnePage'
import BlueConstruction from './pages/BlueConstruction'
import BlueConstructionOnePage from './pages/BlueConstructionOnePage'
import Metallurgy from './pages/Metallurgy'
import MetallurgyOnePage from './pages/MetallurgyOnePage'
import OrangeConstruction from './pages/OrangeConstruction'
import OrangeConstructionOnePage from './pages/OrangeConstructionOnePage'
import Laboratory from './pages/Laboratory'
import LaboratoryOnePage from './pages/LaboratoryOnePage'
import RenewableEnergy from './pages/RenewableEnergy'
import RenewableEnergyOnePage from './pages/RenewableEnergyOnePage'
import OilGas from './pages/OilGas'
import OilGasOnePage from './pages/OilGasOnePage'
import Factory from './pages/Factory'
import FactoryOnePage from './pages/FactoryOnePage'
import Robotic from './pages/Robotic'
import RoboticOnePage from './pages/RoboticOnePage'
import Architecture from './pages/Architecture'
import ArchitectureOnePage from './pages/ArchitectureOnePage'
import Manufacturing from './pages/Manufacturing'
import ManufacturingOnePage from './pages/ManufacturingOnePage'
import Automation from './pages/Automation'
import AutomationOnePage from './pages/AutomationOnePage'
import YellowConstruction from './pages/YellowConstruction'
import YellowConstructionOnePage from './pages/YellowConstructionOnePage'
// Application & Industry page
import ApplicationsIndustry from './pages/ApplicationsIndustry'
import Infrastructure from './pages/Infrastructure'
import NewsGallery from './pages/NewsGallery'
// Elements pages
import ElementsFeatures from './pages/ElementsFeatures'
import ElementsAdvanceTab from './pages/ElementsAdvanceTab'
import ElementsWorkProcess from './pages/ElementsWorkProcess'
import ElementsCounter from './pages/ElementsCounter'
import ElementsGsap from './pages/ElementsGsap'
import ElementsServices from './pages/ElementsServices'
import ElementsTeam from './pages/ElementsTeam'
import ElementsPricing from './pages/ElementsPricing'
import ElementsPortfolio from './pages/ElementsPortfolio'
import ElementsServicesTab from './pages/ElementsServicesTab'
import ElementsTestimonial from './pages/ElementsTestimonial'
import ElementsBrand from './pages/ElementsBrand'
import ElementsBlog from './pages/ElementsBlog'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Laboratory />} />
          <Route path="about" element={<About />} />
          <Route path="about-two" element={<AboutTwo />} />
          <Route path="services" element={<Services />} />
          <Route path="services-details" element={<ServicesDetails />} />
          <Route path="team" element={<Team />} />
          <Route path="team-details" element={<TeamDetails />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio-details" element={<PortfolioDetails />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop-details/:id" element={<ShopDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="cart" element={<Cart />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog-details" element={<BlogDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact-two" element={<ContactTwo />} />
          <Route path="applications-industry" element={<ApplicationsIndustry />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="news-gallery" element={<NewsGallery />} />
          {/* Home variations */}
          <Route path="western-bearning-one-page" element={<WesternBearningOnePage />} />
          <Route path="red-engineering" element={<RedEngineering />} />
          <Route path="red-engineering-one-page" element={<RedEngineeringOnePage />} />
          <Route path="blue-construction" element={<BlueConstruction />} />
          <Route path="blue-construction-one-page" element={<BlueConstructionOnePage />} />
          <Route path="metallurgy" element={<Metallurgy />} />
          <Route path="metallurgy-one-page" element={<MetallurgyOnePage />} />
          <Route path="orange-construction" element={<OrangeConstruction />} />
          <Route path="orange-construction-one-page" element={<OrangeConstructionOnePage />} />
          <Route path="laboratory" element={<Laboratory />} />
          <Route path="laboratory-one-page" element={<LaboratoryOnePage />} />
          <Route path="renewable-energy" element={<RenewableEnergy />} />
          <Route path="renewable-energy-one-page" element={<RenewableEnergyOnePage />} />
          <Route path="oil-gas" element={<OilGas />} />
          <Route path="oil-gas-one-page" element={<OilGasOnePage />} />
          <Route path="factory" element={<Factory />} />
          <Route path="factory-one-page" element={<FactoryOnePage />} />
          <Route path="robotic" element={<Robotic />} />
          <Route path="robotic-one-page" element={<RoboticOnePage />} />
          <Route path="architecture" element={<Architecture />} />
          <Route path="architecture-one-page" element={<ArchitectureOnePage />} />
          <Route path="manufacturing" element={<Manufacturing />} />
          <Route path="manufacturing-one-page" element={<ManufacturingOnePage />} />
          <Route path="automation" element={<Automation />} />
          <Route path="automation-one-page" element={<AutomationOnePage />} />
          <Route path="yellow-construction" element={<YellowConstruction />} />
          <Route path="yellow-construction-one-page" element={<YellowConstructionOnePage />} />
          {/* Elements pages */}
          <Route path="elements-features" element={<ElementsFeatures />} />
          <Route path="elements-advance-tab" element={<ElementsAdvanceTab />} />
          <Route path="elements-work-process" element={<ElementsWorkProcess />} />
          <Route path="elements-counter" element={<ElementsCounter />} />
          <Route path="elements-gsap" element={<ElementsGsap />} />
          <Route path="elements-services" element={<ElementsServices />} />
          <Route path="elements-team" element={<ElementsTeam />} />
          <Route path="elements-pricing" element={<ElementsPricing />} />
          <Route path="elements-portfolio" element={<ElementsPortfolio />} />
          <Route path="elements-services-tab" element={<ElementsServicesTab />} />
          <Route path="elements-testimonial" element={<ElementsTestimonial />} />
          <Route path="elements-brand" element={<ElementsBrand />} />
          <Route path="elements-blog" element={<ElementsBlog />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
