import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import PostList from '../components/post/postLis';

// actions
import { fetchPost } from '../reducers/post';

const Home = (props) => {
  const dispatch = useDispatch();
  const getAllPosts = useSelector((state) => state.posts.getAllPosts);

  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  return (
    <Container className="home">
      <PostList isLoading={getAllPosts.isLoading} posts={getAllPosts.data} />
    </Container>
  );
};

export default Home;
