import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostList = ({ posts, isLoading }) => {
  return (
    <Container>
      {isLoading && (
        <div>
          <p>loading...</p>
        </div>
      )}
      {posts && posts.length > 0 &&
        posts.map((item) => (
          <Row className="posts">
            <Col lg={8} md={10} sm={12}>
              <Link to={`/${item.id}`}>
                <Card>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.body}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        ))}
    </Container>
  );
};

export default PostList;
