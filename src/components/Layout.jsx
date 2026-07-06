import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import FloatingActions from './FloatingActions'
import ScrollToTop from './ScrollToTop'
import Preloader from './Preloader'

export default function Layout() {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
