import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Formular from '../components/Formular';
import Navbar from '../components/Navbar';
import Under from '../components/Under';
import Wide from '../components/Wide';
import Team from '../components/Team';
import Products from '../components/Products';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rotolito</title>
      </Head>

      <div className="font-Sans">

      <main>
        <Navbar />
        <Banner />
        <Under />
        <Wide />
        <Team />
        <Products />
        <Formular />
        <Footer />
      </main>

      </div>
    </div>
  )
}
