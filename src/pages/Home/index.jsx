import ImageHome from '../../assets/IMGHome.png'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'
import Banniere from '../../components/Banniere'

function Home() {
  return (
    <>
      <Header />
        <main>
          <Banniere cover = {ImageHome} phrase = "Chez vous, partout et ailleurs" />
          <Gallery />
        </main>
      <Footer />
    </>
  )
}
  
export default Home