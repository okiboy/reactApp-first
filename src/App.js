import "./App.css";
import NavigationBar from "./component/NavbarNav";
import Intro from "./component/Intro";
import SuperHero from "./component/Superhero";
import Trending from "./component/Trending";
import Footer from "./component/Footer";

import "./style/landingPage.css";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <SuperHero />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
