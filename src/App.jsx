import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'


function App() {


  return (
    <>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    >
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </motion.div>
    </>
  )
}

export default App
