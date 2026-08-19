import { Routes, Route } from 'react-router'
import { DonateProvider } from '@/context/DonateContext'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Programs from '@/pages/Programs'
import GetInvolved from '@/pages/GetInvolved'
import News from '@/pages/News'
import Contact from '@/pages/Contact'

export default function App() {
  return (
    <DonateProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </DonateProvider>
  )
}
