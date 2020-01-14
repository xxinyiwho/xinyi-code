import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import stylesheet from '../styles/components/main.scss'

export default () => (
  <>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Header />
    <Main />
    <Footer />
  </>
)
