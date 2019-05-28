import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col, Card, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { postNewUser } from "../utils/apicalls.jsx";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      fullname:'',
      email:'',
      role:'subscriber'
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFullnameChange = this.handleFullnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.onSignup = this.onSignup.bind(this);
  }
  handleUsernameChange(e){
    this.setState({username:e.target.value})
  }
  handlePasswordChange(e){
    this.setState({password:e.target.value})
  }
  handleFullnameChange(e){
    this.setState({fullname:e.target.value})
  }
  handleEmailChange(e){
    this.setState({email:e.target.value})
  }
  handleRoleChange(e){
    this.setState({role:e.target.value})
  }
  onSignup(e) {
    const {
      username,
      password,
      fullname,
      email,
      role
    } = this.state;
    //Post a new user in the database
    postNewUser(username, password, fullname, email, role)
      .then((res) => this.checkPOSTNewUser(res));
  }
  //Check the response from the server
  checkPOSTNewUser(res) {
    //if response is OK: create a new user and redirect to login page
    if (res === "OK")
      this.props.history.push("/");
    else{
      //TODO Show Modal error adding a new user
    }
  }
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card body>
            <CardTitle tag="h4">Registro de nuevo usuario</CardTitle>
              <Form>
                <FormGroup>
                  <Label for="aUsername">Username</Label>
                  <Input type="text" name="username" id="aUsername" placeholder="Introduce tu username" onChange={this.handleUsernameChange} required/>
                </FormGroup>
                <FormGroup>
                  <Label for="aPassword">Password</Label>
                  <Input type="password" name="password" id="aPassword" placeholder="Introduce tu password" onChange={this.handlePasswordChange} required/>
                </FormGroup>
                <FormGroup>
                  <Label for="aFullname">Nombre completo</Label>
                  <Input type="text" name="fullname" id="aFullname" placeholder="Introduce tu nombre completo" onChange={this.handleFullnameChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="aEmail">Email</Label>
                  <Input type="email" name="email" id="aEmail" placeholder="Introduce tu email" onChange={this.handleEmailChange} required/>
                </FormGroup>
                <FormGroup>
                  <Label for="aRole">Rol</Label>
                  <Input type="select" name="role" id="aRole" onChange={this.handleRoleChange}>
                    <option value="subscriber">Suscriptor</option>
                    <option value="admin">Administrador</option>
                  </Input>
                </FormGroup>
                <Button onClick={this.onSignup}>Registro</Button>
              </Form>
            </Card>
            <Row>
              <Col tag="center">
                <Link to="/"><strong className="text-muted">Login</strong></Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Signup;
