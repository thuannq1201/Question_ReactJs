import { Container } from "react-bootstrap";
import VideoHomepage from "../../assets/video/hero.mp4";
import { NavLink } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <Container className="homepage-container">
      <section className="homepage-hero row justify-content-center align-items-center">
        <div className="col-xxl-6 col-sm-12">
          <video autoPlay loop muted className="w-100 h-100 object-cover">
            <source src={VideoHomepage} type="video/mp4" />
          </video>
        </div>
        <div className="lh-lg col-xxl-6 col-sm-12">
          <h1 className="heading fw-normal lh-1">Forms that break the norm</h1>
          <span className="d-inline-block mt-3 ">
            Get more data—like signups, feedback, and anything else—with forms
            designed to be refreshingly different.
          </span>

          <NavLink
            className={"btn btn-dark d-inline-block mt-4 btn-homepage"}
            to={"/"}
          >
            Get started—it's free
          </NavLink>
        </div>
      </section>

      <section className="row justify-content-center footer align-items-center">
        <span className="text-center">
          Copyright © 2023 <NavLink to={"/"}>Blog của Mắm</NavLink> | BlogCuaMam
          by <NavLink to={"/"}>Mắm</NavLink>
        </span>
      </section>
    </Container>
  );
};

export default HomePage;
