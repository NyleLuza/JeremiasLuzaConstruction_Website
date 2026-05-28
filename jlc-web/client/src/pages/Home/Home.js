import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Main from "../../components/main/Main";

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
