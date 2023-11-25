import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/Components/Nav'
import Principal from '@/Components/Principal'
import Servicios from '@/Components/Servicios'
import Clientes from '@/Components/Clientes'
import Footer from '@/Components/Footer'
import Nosotros from '@/Components/Nosotros'
import ServiciosCard from '@/Components/ServiciosCard'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   
    <Principal/>
    <Nosotros/>
    <ServiciosCard/>
    <Clientes/>
    <Footer/>
   
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script noModulee src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </>
    
  )
}
