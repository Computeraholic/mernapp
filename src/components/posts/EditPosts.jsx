import React, { Component } from 'react';
import { Card, CardTitle, Label, Button, Form, FormGroup, Input } from 'reactstrap';
import { putExistingPost } from "../../utils/apicalls.jsx";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.post.title,
      description: this.props.post.description
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  handleTitleChange(e){
    this.setState({title:e.target.value})
  }

  handleDescriptionChange(e){
    this.setState({description:e.target.value})
  }

  editPost(e){
    e.preventDefault();
    const {
      title,
      description
    } = this.state;
    //Update post in database with put api call
    putExistingPost(this.props.post._id, title, description)
      .then((res) => this.checkPUTPost(res));
  }

  //Check the response from the server
  checkPUTPost(res) {
    if (res === "OK"){
      //TODO Show Modal when a the post is updated
      this.props.updateMyPosts();
    }else{
      //TODO Show Modal when an error updating the post occurs
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      title: nextProps.post.title,
      description: nextProps.post.description});
  }

  render() {
      return (
        <div>
          <Card body>
            <CardTitle tag="h5">Editar post</CardTitle>
            <Form>
              <FormGroup>
                <Label for="aTitulo">Titulo</Label>
                <Input type="text" name="title" id="aTitulo" placeholder="Introduce un título" value={this.state.title} onChange={this.handleTitleChange} required/>
              </FormGroup>
              <FormGroup>
                <Label for="aDescripcion">Descripción</Label>
                <Input style={{height: '200px'}} type="textarea" name="description" id="aDescripcion" placeholder="Introduce una descripción" value={this.state.description} onChange={this.handleDescriptionChange}/>
              </FormGroup>
                <Button onClick={this.editPost}>Actualizar</Button>
            </Form>
          </Card>
        </div>
    );
  }
}

export default EditPost;
