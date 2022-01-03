import About from "../components/About"
import ContactMe from "../components/ContactMe"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import SocialMediaIcons from "../components/SocialMediaIcons"

const index = () => {
  return (
    <div>
      <Header />
      <SocialMediaIcons />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default index
