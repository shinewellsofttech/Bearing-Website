import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Preloader from './Preloader'
import BackToTop from './BackToTop'
import { useScripts } from '../hooks/useScripts'

function Layout() {
  useScripts()

  return (
    <div className="rs-smoother-yes">
      <Preloader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Layout

