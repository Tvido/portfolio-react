import About from "./sections/About/About";
import Contacts from "./sections/Contacts/Contacts";
// import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import NavBar from "./sections/NavBar/NavBar";
import Portfolio from "./sections/Portfolio/Portfolio";
// import ResponsiveNav from "./sections/ResponsiveNav/ResponsiveNav";
import Technologies from "./sections/Technologies/Testimonials";

function App() {
  return (
    <main>
      <NavBar />
      <Header />
      <About />
      <Portfolio />
      <Technologies />
      <Contacts />
      {/* <Footer /> */}
      {/* <ResponsiveNav /> */}
    </main>
  );
}

export default App;
