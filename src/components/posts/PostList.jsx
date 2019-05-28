import React, { Component } from 'react';
import { Row, Col, Card, CardTitle, Badge, CardBody, Table, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";
import { getAllPosts } from "../../utils/apicalls.jsx";
import { getDateInStrFormat } from "../../utils/utils.jsx";
class PostList extends Component {
    state = {
      posts: []
    };
  getPosts() {
      getAllPosts().then((posts) => {
        this.setState({
          posts
        });
      });
    }
  componentDidMount() {
    this.getPosts();
  }
  render() {
      return (
        <div>
          <CardTitle tag="center"><Alert color="info"><strong>Posts publicados </strong><Badge pill>{this.state.posts.length}</Badge></Alert></CardTitle>
          <Table>
            <tbody>
              { this.state.posts.map((post, index) => {
                return(
                  <div>
                    <Alert color="dark">
                      <Row>
                        <Col>
                          <CardTitle tag="h5"><FontAwesomeIcon icon={faFeatherAlt} /> {post.title}</CardTitle>
                          <Card>
                            <CardBody>
                              <Row>
                                <Col>
                                  {post.description}
                                </Col>
                              </Row>
                              <Row>
                                <Col align="right">
                                  <small>{getDateInStrFormat(new Date(post.publicationdate))} - {post.user.username}</small>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </Alert>
                  </div>)
                })}
              </tbody>
            </Table>
          </div>
    );
  }
}
export default PostList;
