//De la manera en la que está implementado, sólo se puede acceder a la página de sign up
// a través de una interfaz.

import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import HeaderDashboard from './HeaderDashboard';
import MyPostList from './posts/MyPostList';
import PostList from './posts/PostList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: (<PostList />)
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleOnShow = this.handleOnShow.bind(this);
  }
  handleLogout(){
    sessionStorage.clear();
    this.props.history.push("/");
  }
  handleOnShow(option){
    if (option === 1){
      this.setState({
        show: (<PostList />)
      });
    }else if (option === 2){
      this.setState({
        show: ("Conexión con éxito")   //Se pone un string cualquiera(Aún no está implementado)
      });
    }else if (option === 3){
        //TODO Show UserEdit component!
        alert('Usuario: '+sessionStorage.getItem('username')+"\nRol: "+sessionStorage.getItem('role'));
    }
  }
  render() {
    //Sólo se muestra si existe previamente un usuario, es decir, que se ha logeado correctamente.
    if (sessionStorage.getItem("username") === null){
      this.props.history.push("/");
    }
    else{
      return (
        <Container>
          <Row>
            <Col><HeaderDashboard onLogout = {this.handleLogout} onShow= {this.handleOnShow} /></Col>
          </Row>
          <Row>
            <Col xs="12">
                {this.state.show}
              </Col>
          </Row>
        </Container>
      );
    }
  }
}
export default Home;
