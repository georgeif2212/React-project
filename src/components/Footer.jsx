import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FacebookWidget } from "./Widgets/FacebookWidget";
import { InstagramWidget } from "./Widgets/InstagramWidget";
import { LinkedinWidget } from "./Widgets/LinkedinWidget";
import { TwitterWidget } from "./Widgets/TwitterWidget";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-4">
          <Col lg="5" md="12" className="pb-3">
            <Link to={"/"}>
              <h5 className="size-medium_l color-white_1">FusionStyleHub</h5>
            </Link>
            <p className="size-small_l text-justify color-white_2">
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <div className="social-links mt-4">
              <a href="#">
                <TwitterWidget/>
              </a>
              <a href="#">
                <FacebookWidget/>;
              </a>
              <a href="#" target="_blank">
                <InstagramWidget/>
              </a>
              <a
                href="https://www.linkedin.com/in/jorgeinfante2212/"
                target="_blank"
              >
                <LinkedinWidget/>
              </a>
            </div>
          </Col>

          <div className="col-lg-3 col-6 footer-links">
            <h5 className="size-medium_s color-white_1">Menu principal</h5>
            <ul>
              <li className="mb-2 size-small_l color-white_2">
                <Link to={"/"}>Inicio</Link>
              </li>
              <li className="mb-2 size-small_l color-white_2">
                <Link to={"/categoryid/ropaHombres"}>Caballeros</Link>
              </li>
              <li className="mb-2 size-small_l color-white_2">
                <Link to={"/categoryid/ropaMujeres"}>Damas</Link>
              </li>
              <li className="mb-2 size-small_l color-white_2">
                <Link to={"/categoryid/joyeria"}>Joyería</Link>
              </li>
              <li className="mb-2 size-small_l color-white_2">
                <Link to={"/categoryid/tecnologia"}>Electrónicos</Link>
              </li>
            </ul>
          </div>

          <div className="pt-3 col-lg-4 col-md-12 footer-contact text-center text-md-start">
            <h5 className="size-medium_m color-white_1">Contactanos</h5>
            <p className="size-small_l text-justify color-white_2">
              Toluca <br />
              Mexico 535022
              <br />
              dasda
              <br />
              <br />
              <strong>telefono:</strong> +52 5532541224
              <br />
              <strong>correo:</strong> Infante@ejemplo.com
              <br />
            </p>
          </div>
        </Row>
      </Container>

      <div className="container-fluid copyright px-3">
        <div className="size-medium_s color-white_2 text-center">
          &copy; Copyright{" "}
          <strong>
            <span>FusionStyleHub</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits size-small_l color-white_2 text-center">
          Diseñado por <a href="">Jorge Infante Fragoso</a>
        </div>
      </div>
    </footer>
  );
};
