import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Media, Row, Col, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright} from "@fortawesome/free-solid-svg-icons";
import MyPlaceHolderPicture from '../images/lynx.png';
var imgStyle = {
  maxWidth: "85px",
};
class HeaderApp extends Component {
  render() {
      return (
        <Container>   /*El container proviene de reactstrap*/
          <Row>
            <Col>
              <Navbar color="dark" light expand="md">   /*Nav sirve como acceso a una ventana de navegación*/
                <NavbarBrand><h4 className="text-warning">Mi Aplicación de Microblogging</h4></NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="http://jesusfontecha.name/mern" target="_blank">
                      <span className="text-white">Curso Desarrollo web full-stack con
                       MERN <FontAwesomeIcon icon={faCopyright} /></span><Media style={imgStyle}   /*Media es un componente que sirve para embeber imágenes*/
                       object src={MyPlaceHolderPicture} alt="Generic placeholder image" /></NavLink>
                  </NavItem>
                </Nav>
              </Navbar>
            </Col>
          </Row>
        </Container>
    );
  }
}
export default HeaderApp;

/*Siempre se usa la opción Export para usar nuestro componente cabecera en otro componente*/
