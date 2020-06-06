import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

const Portfolio = ({ post }) => (
  <BaseLayout>
    <h1>{post.title}</h1>
    <p>BODY: {post.body}</p>
    <p>ID: {post.id}</p>
  </BaseLayout>
);

Portfolio.getInitialProps = async ({ query }) => {
  let post = {};
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    post = res.data;
  } catch (error) {
    console.log(error);
  }

  return { post };
};

export default Portfolio;
