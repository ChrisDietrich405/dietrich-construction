import Navbar from "../Navbar";
import Footer from "../Footer"
import SmoothScroll from "../SmoothScroll";


export default function Layout({ children }) {
  return (
  <>
    <Navbar />
    <div>{children}</div>
    <Footer/>
    <SmoothScroll/>
  </>
  )
}
