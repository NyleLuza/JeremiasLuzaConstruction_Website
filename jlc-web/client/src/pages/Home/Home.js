import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Main from "../../components/Main";

function Home() {
  return (
    <div className="d-flex flex-grow-1 flex-column h-100">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
