import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <Hero />

      <Technologies />

       <Footer />
    </div>
  );
}

export default App;
