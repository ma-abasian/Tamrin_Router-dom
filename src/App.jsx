import {Router} from "./Routes.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";


function App() {

  return (
      <div className="main">
        <Header />

        <Router />

        <Footer />
      </div>

  )
}

export default App
