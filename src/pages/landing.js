import "./landing.css";
import Feature from "./Feature";
import Form from "./Form";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Project from "./Project";
import SEO from "./SEO";
import Services from "./Services";
import SponsorPage from "./Sponsor";

function landing() {
  const navopen = () => {
    const a = document.querySelector(".open");
    if (a) {
      a.classList.toggle("open");
    }
  };
  return (
    <>
      <Navbar />
      <div onClick={navopen} id="homepage">
        <Homepage />
      </div>
      <div onClick={navopen} id="seo">
        <SEO />
      </div>
      <div onClick={navopen} id="services">
        <Services />
      </div>
      <div onClick={navopen} id="feature">
        <Feature />
      </div>
      <div onClick={navopen} id="project">
        <Project />
      </div>
      <div onClick={navopen} id="sponsor-page">
        <SponsorPage />
      </div>
      <div onClick={navopen} id="About-us">
        <Form />
      </div>
    </>
  );
}

export default landing;
