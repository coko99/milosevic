import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import OfferPage from './pages/OfferPage'
import ServicesPage from './pages/ServicesPage'
import InspirationPage from './pages/InspirationPage'
import ContactPage from './pages/ContactPage'
import PartnersPage from './pages/PartnersPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="o-nama" element={<AboutPage />} />
        <Route path="ponuda" element={<OfferPage />} />
        <Route path="usluge" element={<ServicesPage />} />
        <Route path="inspiracija" element={<InspirationPage />} />
        <Route path="partneri" element={<PartnersPage />} />
        <Route path="kontakt" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
