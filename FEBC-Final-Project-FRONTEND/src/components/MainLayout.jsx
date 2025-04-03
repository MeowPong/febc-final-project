import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout(props) {
  return (
    <>
      <div className="min-vh-100 flex-grow-1 d-flex justify-content-center">
        <Navbar />
        <div style={{ paddingTop: "6rem" }}>{props.children}</div>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
